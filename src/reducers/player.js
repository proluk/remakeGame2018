const initialState = {
    maxHealth: 10,
    health: 10,
    attack: 2,
    defence: 0,
    money: 0,
    items: [],
    attackItem: null,
    defenceItem: null,
    magicItem: null,
    bonusStats: {
        attack: 0,
        defence: 0,
        maxHealth: 0,
    },
    upgrades: {
        attack: 1,
        defence: 1,
        maxHealth: 1,
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
        case 'PLAYER_UPGRADES_SET':
            return {
                ...state,
                upgrades: action.upgrades
            }
        case 'PLAYER_BASESTATS_SET':
            return {
                ...state,
                maxHealth: action.maxHealth,
                attack: action.attack,
                defence: action.defence,
            }
        default:
            return {
                ...state
            }
    }
}