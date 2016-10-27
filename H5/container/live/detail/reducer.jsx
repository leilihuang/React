import {DETAIL} from './action';

const detailRs  = (state = {},action) =>{
    switch(action.type){
        case DETAIL:
            return Object.assign({},action.data);
        default:
            return state;
    }
};

export default  detailRs;