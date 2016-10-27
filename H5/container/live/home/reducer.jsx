import {GET_LIST} from './action';

const homeRs = (state = [] , action) =>{
    switch (action.type){
        case GET_LIST:
            return action.data;
        default :
            return state
    }
};

export default homeRs;