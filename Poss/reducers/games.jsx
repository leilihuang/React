import { combineReducers } from 'redux';
import {GAME_ADD,GAME_LIST} from '../actions/games';

const games = (state = [] , action)=>{
    switch(action.type){
        case GAME_ADD:
            return [...state,action.obj]
        case GAME_LIST:
            return action.data
        default:
            return state
    }    
}

export default games;