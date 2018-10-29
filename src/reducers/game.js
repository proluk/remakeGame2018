const initialState = {
    level: 0,
    showMonster: true,
    showPickAction: false,
    showRoundResolve: false,
    roundEnd: false,
    winner: null,
}

export const game = (state = initialState, action) => {
    switch (action.type) {
        case 'GAME_MONSTERINTRO_SHOW':
            return {
                ...state,
                showMonster: true,
            }
        case 'GAME_PICKACTION_SHOW':
            return {
                ...state,
                showPickAction: true,
            }
        case 'GAME_ROUNDRESOLVE_SHOW':
            return {
                ...state,
                showRoundResolve: true,
            }
        case 'GAME_MONSTERINTRO_HIDE':
            return {
                ...state,
                showMonster: false,
            }
        case 'GAME_PICKACTION_HIDE':
            return {
                ...state,
                showPickAction: false,
            }
        case 'GAME_ROUNDRESOLVE_HIDE':
            return {
                ...state,
                showRoundResolve: false,
            }
        case 'GAME_ROUNDEND_SHOW':
            return {
                ...state,
                roundEnd:true,
                winner: action.winner
            }
        case 'GAME_ROUNDEND_HIDE':
            return {
                ...state,
                roundEnd: false,
            }
        case 'GAME_LEVEL_ADD':
            return {
                ...state,
                level: state.level + 1
            }
        default:
            return state
    }
}