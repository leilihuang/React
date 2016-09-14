import {combineReducers} from 'redux'
import gameMenu from './gameMenu'
import gameMenuSub from './gameMenuSub'
import games from './games'

const reducers = combineReducers({
    gameMenu,
    gameMenuSub,
    games
});

export default reducers