import _ from 'lodash'

export const playerEquipmentUpdate = (res) => {
    return (dispatch, getState) => {
        let { player } = getState();
        if (res.source.droppableId === 'items') {
            if (res.destination.droppableId === 'items') {
                let tmp = player.items[res.destination.index];
                player.items[res.destination.index] = player.items[res.source.index]
                player.items[res.source.index] = tmp
            } else {
                if (player[res.destination.droppableId]) {
                    let tmp = player[res.destination.droppableId]
                    player[res.destination.droppableId] = player.items[res.source.index]
                    player.items[res.source.index] = tmp
                } else {
                    player[res.destination.droppableId] = player.items[res.source.index]
                    player.items = player.items.filter((e, index) => index !== res.source.index)
                }
            }
        } else {
            if (res.destination.droppableId === 'items'){
                if (player.items[res.destination.index]) {
                    if (player.items[res.destination.index].class === player[res.source.droppableId].class) {
                        let tmp = player.items[res.destination.index]
                        player.items[res.destination.index] = player[res.source.droppableId]
                        player[res.source.droppableId] = tmp                        
                    } else {
                        let tmp = player.items[res.destination.index]
                        player.items[res.destination.index] = player[res.source.droppableId]
                        player.items.push( tmp )
                        player[res.source.droppableId] = null
                    }

                } else {
                    player.items[res.destination.index] = player[res.source.droppableId]
                    player[res.source.droppableId] = null
                }
            }
        }
        dispatch(playerItemsSet(player.items, player.attackItem, player.defenceItem, player.magicItem));
        dispatch(playerBonusStatsSet(player.attackItem, player.defenceItem, player.magicItem));
    }
}

export const playerItemSell = (index) => {
    return (dispatch, getState) => {
        const {player} = getState();
        player.items = player.items.filter( (e, i) => {
            if ( index !== i ) {
                return true
            } else {
                player.money = player.money + parseInt(e.item.bonus.price)
                return false;
            }
        })
        dispatch(playerMoneySet(player.money))
        dispatch(playerItemsSet(player.items, player.attackItem, player.defenceItem, player.magicItem))
    }
}

export const playerActionSet = (action) => ({
    type: 'PLAYER_ACTION_SET',
    action,
})

const playerDebuffsClear = () => ({
    type: 'PLAYER_DEBUFFS_CLEAR',
})

export const playerDebuffsRemove = () => {
    return (dispatch, getState) => {
        const {player} = getState();
        dispatch(playerDebuffsClear());
        dispatch(playerBonusStatsSet(player.attackItem, player.defenceItem, player.magicItem));
    }
}

export const playerDebuffSet = (debuff) => ({
    type: 'PLAYER_DEBUFF_SET',
    debuff,
})

export const playerHealthSet = (health) => ({
    type: 'PLAYER_HEALTH_SET',
    health
})

export const playerMoneySet = (money) => ({
    type: 'PLAYER_MONEY_SET',
    money,
})

export const playerLadyHeal = () => {
    return (dispatch,getState) => {
        const {player} = getState();
        dispatch(playerDebuffsRemove());
        dispatch(playerHealthSet(parseInt(player.maxHealth) + parseInt(player.bonusStats.maxHealth) ))
    }
}
const playerItemsSet = (items, attackItem, defenceItem, magicItem) => ({
    type: 'PLAYER_ITEMS_SET',
    items,
    attackItem,
    defenceItem,
    magicItem,
})
export const playerItemsAdd = (items) => ({
    type: 'PLAYER_ITEMS_ADD',
    items,
})

const playerBonusStatsSet = (attackItem, defenceItem, magicItem) => {
    return (dispatch, getState) => {
        let { player } = getState();
        let clone = _.cloneDeep(player)
        for (const bonus in clone.bonusStats) {
            clone.bonusStats[bonus] = 0;
        }
        if (attackItem) {
            for (const bonus in attackItem.item.bonus) {
                clone.bonusStats[bonus] += attackItem.item.bonus[bonus]
            }
        }
        if (defenceItem) {
            for (const bonus in defenceItem.item.bonus) {
                clone.bonusStats[bonus] += defenceItem.item.bonus[bonus]
            }
        }
        if (magicItem) {
            for (const bonus in magicItem.item.bonus) {
                clone.bonusStats[bonus] += magicItem.item.bonus[bonus]
            }
        }
        dispatch({
            type: 'PLAYER_BONUSSTATS_SET',
            bonusStats: clone.bonusStats
        })
        if(clone.health > (parseInt(clone.maxHealth) + parseInt(clone.bonusStats.maxHealth))) {
            dispatch(playerHealthSet( parseInt(clone.maxHealth) + parseInt(clone.bonusStats.maxHealth) ))
        } 
    }
}



export const playerStatsAffectedByDebuffsSet = (clone) => ({
    type: 'PLAYER_STATSAFFECTEDBYDEBUFFS_SET',
    clone,
})


export const playerBuyStat = (stat) => {
    return (dispatch, getState) => {
        const {player} = getState();
        let clone = _.cloneDeep(player)
        dispatch(playerMoneySet(player.money - (player.upgrades[stat] * 10) ))
        clone.upgrades[stat] = clone.upgrades[stat] + 1;
        clone[stat] = clone[stat] + 1;
        dispatch(playerUpgradesSet(clone.upgrades))
        dispatch(playerBaseStatsSet(clone.maxHealth, clone.attack, clone.defence))
    }
}
const playerUpgradesSet = (upgrades) => ({
    type: 'PLAYER_UPGRADES_SET',
    upgrades
})

const playerBaseStatsSet = (maxHealth, attack, defence) => ({
    type: 'PLAYER_BASESTATS_SET',
    maxHealth,
    attack,
    defence,
})