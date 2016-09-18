import { combineReducers } from 'redux';
import {GAME_ADD,GAME_LIST} from '../actions/games';

let key=0;

const games = (state = [] , action)=>{
    switch(action.type){
        case GAME_ADD:
            key++;
            action.obj.key=key;
            action.obj.gameId=key;
            return [...state,action.obj]
        case GAME_LIST:
            return action.data
        default:
            return state
    }    
}

export default games;