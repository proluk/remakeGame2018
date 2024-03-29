import _ from 'lodash'
import {
    playerDebuffsRemove,
    playerDebuffSet,
    playerHealthSet,
    playerMoneySet,
    playerItemsAdd,
    playerStatsAffectedByDebuffsSet,
} from './player'
import {
    monsterDebuffsRemove,
    monsterDebuffSet,
    monsterHealthSet,
    monsterStatsAffectedByDebuffsSet,
} from './monster'

import {
    debuffConnectedFunctions,
} from './helpers/debuffHelper'

export const gameMonsterIntroShow = () => ({
    type: 'GAME_MONSTERINTRO_SHOW',
})
export const gamePickActionPopupShow = () => ({
    type: 'GAME_PICKACTION_SHOW',
})
export const gameRoundResolvePopupShow = () => ({
    type: 'GAME_ROUNDRESOLVE_SHOW',
})
export const gameMonsterPopupHide = () => ({
    type: 'GAME_MONSTERINTRO_HIDE',
})
export const gamePickActionPopupHide = () => ({
    type: 'GAME_PICKACTION_HIDE',
})
export const gameRoundResolvePopupHide = () => ({
    type: 'GAME_ROUNDRESOLVE_HIDE',
})
export const gameResolveRound = () => {
    return (dispatch, getState) => {
        const {monster, player} = getState();

        if ( monster.action === player.action ) {
            if ( player.action === 'defence' ) {
                dispatch(playerDebuffsRemove())
                dispatch(monsterDebuffsRemove())
            } else if ( player.action === 'attack' ) {
                const playerHealth = player.health - countDamage(monster, player)
                const monsterHealth = monster.health - countDamage(player,monster)
                dispatch(playerHealthSet(playerHealth))                
                dispatch(monsterHealthSet(monsterHealth))
            } else if ( player.action === 'magic' ) {
                if ( player.magicItem ) {
                    dispatch(monsterDebuffSet(drawMagicDebuff(player)))   
                }
                if ( monster.magicItem ) {
                    dispatch(playerDebuffSet(drawMagicDebuff(monster)))    
                }
            }
        } else if ( monster.action === 'attack' ) {
            if ( player.action === 'defence' ) {
                dispatch(playerDebuffsRemove())
                if (player.debuffs.length > 0) {
                    // dispatch(playerDebuffsRemove())
                } else {
                    if ( player.defenceItem && player.defenceItem.debuffs.length > 0 ){
                        dispatch(monsterDebuffSet(drawDefenceDebuff(player)))
                    }
                }
            } else if ( player.action === 'magic' ) {
                let health = player.health - countDamage(monster, player)
                dispatch(playerHealthSet(health))
            }
        } else if ( monster.action === 'defence' ) {
            dispatch(monsterDebuffsRemove())
            if ( player.action === 'attack' ) {
                if (monster.debuffs.length > 0) {
                    // dispatch(monsterDebuffsRemove())
                } else {
                    if ( monster.defenceItem && monster.defenceItem.debuffs.length > 0 ){
                        dispatch(playerDebuffSet(drawDefenceDebuff(monster)))
                    }
                }
            } else if ( player.action === 'magic' ) {
                if ( player.magicItem ) {
                    dispatch(monsterDebuffSet(drawMagicDebuff(player)))   
                }   
            }
        } else if ( monster.action === 'magic' ) {
            if ( player.action === 'attack' ) {
                let health = monster.health - countDamage(player,monster)
                dispatch(monsterHealthSet(health))
            } else if ( player.action === 'defence' ) {
                dispatch(playerDebuffsRemove())
                if ( monster.magicItem ) {
                    dispatch(playerDebuffSet(drawMagicDebuff(monster)))    
                }
            }
        }

        dispatch(runDebuffs());

        dispatch(gameRoundResolvePopupShow());

        dispatch(runEndRoundTimeout());
    }
}

const runEndRoundTimeout = () => {
    return (dispatch, getState) => {
        const {monster, player} = getState();
        setTimeout(() => {
            if ( player.health <= 0 ) {
                dispatch(gameRoundResolvePopupHide())
                dispatch(gameRoundEndPopupShow('monster'))
                dispatch(monsterHealthSet(monster.maxHealth))
                dispatch(monsterDebuffsRemove())
            } else if ( monster.health <= 0 ) {
                dispatch(gameRoundResolvePopupHide())
                dispatch(gameRoundEndPopupShow('player'))
                dispatch(gameRewardPlayer())
                dispatch(gamePrepareNextLevel())
            } else {
                dispatch(gameRoundResolvePopupHide())
                dispatch(gamePickActionPopupShow())
            }
        },3000) 
    }
}
const gameLevelAdd = () => ({
    type: 'GAME_LEVEL_ADD',
})

const gamePrepareNextLevel = () => {
    return (dispatch, getState) => {
        const {game, monster} = getState();
        if ( game.level === monster.level) {
           dispatch(gameLevelAdd()) 
        }
    }
}

const gameRewardPlayer = () => {
    return (dispatch, getState) => {
        const {player} = getState()
        let clone = _.cloneDeep(getState().monster)
        let items = []
        if (clone.attackItem){
            items.push(clone.attackItem)
        }
        if (clone.defenceItem){
            items.push(clone.defenceItem)
        }
        if (clone.magicItem){
            items.push(clone.magicItem)
        }
        dispatch(playerItemsAdd(items))
        dispatch(playerMoneySet( (player.money + clone.money) ))
    }
}
const drawMagicDebuff = (source) => {
    return source.magicItem.debuffs[Math.floor(Math.random() * source.magicItem.debuffs.length)]
}
const drawDefenceDebuff = (source) => {
    return source.defenceItem.debuffs[Math.floor(Math.random() * source.defenceItem.debuffs.length)]
}

const countDamage = (source, destination) => {
    let dmg = source.attack + source.bonusStats.attack;
    let def = destination.defence + destination.bonusStats.defence;
    let finalDamage = (dmg - def) < 0 ? 0 : (dmg - def);
    return finalDamage;
}

const runDebuffs = () => {
    return (dispatch, getState) => {
        const {monster, player} = getState();

        let monsterClone = _.cloneDeep(monster)
        let playerClone = _.cloneDeep(player)

        for( const debuff in monster.debuffs){
            debuffConnectedFunctions[monster.debuffs[debuff].connectedFunctionName].call(monsterClone)
        }

        for( const debuff in player.debuffs){
            debuffConnectedFunctions[player.debuffs[debuff].connectedFunctionName].call(playerClone)
        }

        dispatch(playerStatsAffectedByDebuffsSet(playerClone))
        dispatch(monsterStatsAffectedByDebuffsSet(monsterClone))

    }

}

const gameRoundEndPopupShow = (winner) => ({
    type: 'GAME_ROUNDEND_SHOW',
    winner,
})

export const gameRoundEndPopupHide = () => ({
    type: 'GAME_ROUNDEND_HIDE',
})