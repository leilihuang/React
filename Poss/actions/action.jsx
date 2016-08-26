export const GAME_MENU_EDIT = 'GAME_MENU_EDIT'
export const GAME_MENU_CHECK = 'GAME_MENU_CHECK'
export const GAME_MENU_DEL = 'GAME_MENU_DEL'
export const GAME_SUBMIT = 'GAME_SUBMIT'

export function gameMenuEdit(data){
    return {
        type : GAME_MENU_EDIT,
        data
    }
}
export function gameMenuCheck(data){
    return {
        type : GAME_MENU_CHECK,
        data
    }
}
export function gameMenuDel(id){
    return {
        type : GAME_MENU_DEL,
        id
    }
}

export function gameSubmit(data){
    return {
        type:GAME_SUBMIT,
        data
    }
}