export const GAME_LIST = 'GAME_LIST';
export const GAME_ADD = 'GAME_ADD';
export const GAME_EDIT = 'GAME_EDIT';
export const GAME_DEL = 'GAME_DEL';
export const GAME_SJ = 'GAME_SJ';
export const GAME_XJ = 'GAME_XJ';

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