import {GAME_MENU_EDIT , GAME_MENU_DEL , GAME_MENU_CHECK} from '../actions/action'

const gameMenu = (state = {} , action) =>{
    switch(action.type){
        case GAME_MENU_EDIT:
            return Object.assign({},state,action.data)
        case GAME_MENU_CHECK:
            return Object.assign({} , state , action.data)
        case GAME_MENU_DEL:
            return state.filter( d => d.id !== action.id)
        default:
            return state
    }
}

export default gameMenu;