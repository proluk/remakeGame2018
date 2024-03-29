import {monsterCreateHelper} from './helpers/monsterCreateHelper'
import _ from 'lodash'

export const monsterActionSet = () => {
    return (dispatch, getState) => {
        const {monster, player} = getState();
        
        const notRandomDefence = [0,1,1,2];
        const notRandomMagic = [0,1,2,2];

        let actions = ['attack','defence','magic']

        if ( monster.debuffs.length > 0 ) {
            dispatch({
                type: 'MONSTER_ACTION_SET',
                payload: actions[notRandomDefence[Math.floor(Math.random()*4)]],
            })
        } else if ( player.debuffs.length > 0 ) {
            dispatch({
                type: 'MONSTER_ACTION_SET',
                payload: actions[notRandomMagic[Math.floor(Math.random()*4)]],
            })
        } else if ( player.debuffs.includes('stun') ) {
            dispatch({
                type: 'MONSTER_ACTION_SET',
                payload: 'attack',
            })
        } else {
            dispatch({
                type: 'MONSTER_ACTION_SET',
                payload: actions[Math.floor(Math.random()*3)],
            })
        }
    }
}

const monsterDebuffsClear = () => ({
    type: 'MONSTER_DEBUFFS_CLEAR',
})

export const monsterDebuffsRemove = () => {
    return (dispatch, getState) => {
        const {monster} = getState();
        dispatch(monsterDebuffsClear());
        dispatch(monsterBonusStatsSet(monster.attackItem, monster.defenceItem, monster.magicItem));
    }
}

export const monsterDebuffSet = (debuff) => ({
    type: 'MONSTER_DEBUFF_SET',
    debuff,
})

export const monsterHealthSet = (health) => ({
    type: 'MONSTER_HEALTH_SET',
    health
})

export const monsterCreate = (level) => {
    return dispatch => {
        dispatch({
            type: 'MONSTER_CREATE',
            payload: monsterCreateHelper(level)
        })
        dispatch(monsterBonusStatsSet())
    }
}

const monsterBonusStatsSet = () => {
    return (dispatch, getState) => {
        const { monster } = getState();
        let clone = _.cloneDeep(monster)
        for (const bonus in clone.bonusStats) {
            clone.bonusStats[bonus] = 0;
        }
        if (clone.attackItem) {
            for (const bonus in clone.attackItem.item.bonus) {
                clone.bonusStats[bonus] += clone.attackItem.item.bonus[bonus]
            }
        }
        if (clone.defenceItem) {
            for (const bonus in clone.defenceItem.item.bonus) {
                clone.bonusStats[bonus] += clone.defenceItem.item.bonus[bonus]
            }
        }
        if (clone.magicItem) {
            for (const bonus in clone.magicItem.item.bonus) {
                clone.bonusStats[bonus] += clone.magicItem.item.bonus[bonus]
            }
        }
        dispatch({
            type: 'MONSTER_BONUSSTATS_SET',
            bonusStats: clone.bonusStats
        })
    }
}

export const monsterStatsAffectedByDebuffsSet = (clone) => ({
    type: 'MONSTER_STATSAFFECTEDBYDEBUFFS_SET',
    clone,
})