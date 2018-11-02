import { createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import {saveState, loadState} from './localStorage'

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, persistedState, composeEnhancers(
    applyMiddleware(ReduxThunk)
));

store.subscribe(() => {
    saveState({
        game: store.getState().game,
        player: store.getState().player,
        monster: store.getState().monster,
    });
});
