const GAME_LIST = 'GAME_LIST';
const GAME_ADD = 'GAME_ADD';
const GAME_EDIT = 'GAME_EDIT';
const GAME_DEL = 'GAME_DEL';
const GAME_SJ = 'GAME_SJ';
const GAME_XJ = 'GAME_XJ';

export function gameList(data){
    return {
        type:GAME_LIST,
        data
    }
}

export function gameAdd(obj){
    return {
        type:GAME_ADD,
        obj
    }
}

export function gameDel(id){
    return {
        type:GAME_DEL,
        id
    }
}

export function gameEdit(obj){
    return {
        type:GAME_EDIT,
        obj
    }
}