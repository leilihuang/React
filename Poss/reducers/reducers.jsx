import {combineReducers} from 'redux'
import gameMenu from './gameMenu'
import gameMenuSub from './gameMenuSub'

const reducers = combineReducers({
    gameMenu,
    gameMenuSub
})

export default reducers