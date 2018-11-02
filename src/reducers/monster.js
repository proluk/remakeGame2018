
const initialState = {
    name: '',
    line: '',
    maxHealth: 1,
    health: 1,
    attack: 1,
    defence: 0,
    money: 0,
    attackItem: null,
    defenceItem: null,
    magicItem: null,
    bonusStats: {
        attack: 0,
        defence: 0,
    },
    action: null,
    debuffs: [],
    picture: null,
    level: 0,
}

export const monster = (state = initialState, action) => {
    switch (action.type) {
        case 'MONSTER_ACTION_SET':
            return {
                ...state,
                action: action.payload
            }
        case 'MONSTER_DEBUFFS_CLEAR':
            return {
                ...state,
                debuffs: []
            }            
        case 'MONSTER_DEBUFF_SET':
            return {
                ...state,
                debuffs: state.debuffs.concat(action.debuff)
            }
        case 'MONSTER_HEALTH_SET':
            return {
                ...state,
                health: action.health
            }
        case 'MONSTER_BONUSSTATS_SET':
            return {
                ...state,
                bonusStats: action.bonusStats
            }
        case 'MONSTER_CREATE':
            return action.payload
        case 'MONSTER_STATSAFFECTEDBYDEBUFFS_SET':
            return {
                ...state,
                health: action.clone.health,
                bonusStats: {...action.clone.bonusStats}
            }
        default:
            return state
    }
}