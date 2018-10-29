import Hobo from '../components/game/graphics/hobo.gif'

const initialState = {
    name: 'Aggresive Hobo',
    line: 'I am agressive, wanna fight?',
    maxHealth: 1,
    health: 1,
    attack: 1,
    defence: 0,
    money: 0,
    attackItem: null,
    defenceItem: { 
        id: '2',
        class: 'defence',
        strength: { name: 'Weak', multiplier: 1 },
        item: { name: 'Wooden Shield',bonus: { defence: 1, price: 5 },icon: 'woodenShield' },
        debuffs: [{name:'removeHealthI', icon:'removeHealthI', description:'Removes health every round', connectedFunctionName:'removeHealthI'}]
    },
    magicItem: {
        id: '3',
        class: 'magic',
        strength: { name: 'Destroyed', multiplier: 0 },
        item: { name: 'Piece of Magic Paper', bonus: { price: 1 }, icon: 'magicPaper'},
        debuffs: [{name:'removeHealthI', icon:'removeHealthI', description:'Removes health every round', connectedFunctionName:'removeHealthI'}]
    },
    bonusStats: {
        attack: 0,
        defence: 0,
    },
    action: null,
    debuffs: [],
    picture: Hobo,
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