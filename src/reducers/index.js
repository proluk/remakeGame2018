import { combineReducers } from 'redux'
import {player} from './player'
import {game} from './game'
import {monster} from './monster'

export default combineReducers({
    player,
    game,
    monster,
});