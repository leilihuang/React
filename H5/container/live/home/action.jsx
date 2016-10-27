export const GET_LIST = 'GET_LIST';

export function getList(data){
    return {
        type:GET_LIST,
        data
    }
}