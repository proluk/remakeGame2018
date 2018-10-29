const initialState = {
    maxHealth: 10,
    health: 10,
    attack: 1,
    defence: 0,
    money: 0,
    items: [
        { 
            id: '1',
            class: 'attack',
            strength: { name: 'Weak', multiplier: 1 },
            item: { name: 'Wooden Sword', bonus: { attack: 3, price: 5 }, icon: 'woodenSword' },
        }
    ],
    attackItem: null,
    defenceItem: null,
    magicItem: null,
    bonusStats: {
        attack: 0,
        defence: 0,
    },
    action: null,
    debuffs: []
}

export const player = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAYER_NAME_SET':
            return {
                ...state
            }
        case 'PLAYER_ITEMS_SET':
            return {
                ...state,
                items: action.items,
                attackItem: action.attackItem,
                defenceItem: action.defenceItem,
                magicItem: action.magicItem,
            }
        case 'PLAYER_BONUSSTATS_SET':
            return {
                ...state,
                bonusStats: action.bonusStats
            }
        case 'PLAYER_MONEY_SET':
            return {
                ...state,
                money: action.money
            }
        case 'PLAYER_ACTION_SET':
            return {
                ...state,
                action: action.action
            }
        case 'PLAYER_DEBUFFS_CLEAR':
            return {
                ...state,
                debuffs: []
            }            
        case 'PLAYER_DEBUFF_SET':
            return {
                ...state,
                debuffs: state.debuffs.concat(action.debuff)
            }
        case 'PLAYER_HEALTH_SET':
            return {
                ...state,
                health: action.health
            }
        case 'PLAYER_ITEMS_ADD':
            return {
                ...state,
                items: state.items.concat(action.items),
            }
        case 'PLAYER_STATSAFFECTEDBYDEBUFFS_SET':
            return {
                ...state,
                health: action.clone.health,
                bonusStats: {...action.clone.bonusStats}
            }
        default:
            return {
                ...state
            }
    }
}