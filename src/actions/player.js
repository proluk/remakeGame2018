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
                    let tmp = player.items[res.destination.index]
                    player.items[res.destination.index] = player[res.source.droppableId]
                    player[res.source.droppableId] = tmp
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

export const playerDebuffsClear = () => ({
    type: 'PLAYER_DEBUFFS_CLEAR',
})

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
        dispatch(playerDebuffsClear());
        dispatch(playerHealthSet(player.maxHealth))
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
        let clone = Object.assign({},player)
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
    }
}



export const playerStatsAffectedByDebuffsSet = (clone) => ({
    type: 'PLAYER_STATSAFFECTEDBYDEBUFFS_SET',
    clone,
})
