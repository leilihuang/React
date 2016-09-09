import { combineReducers } from 'redux';
import {GAME_ADD,GAME_LIST} from '../actions/games';

function gameAdd(state = {} , action){
    switch(action.type){
        case GAME_ADD:
            return Object.assign({},state,action.obj)
        default:
            return state
    }
}

function gameList(state = [],action){
    switch(action.type){
        case GAME_LIST:
            return action.data
        default:
            return state
    }
}

const games = combineReducers({
    gameAdd,
    gameList
});

export default games;