import {GAME_SUBMIT} from '../actions/action'

const gameMenuSub = (state = {} , action)=>{
    console.log(state)
    switch(action.type){
        case GAME_SUBMIT:
            return action.data
        default:
            return state;
    }
}

export default gameMenuSub;