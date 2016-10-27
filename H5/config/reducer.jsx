import {combineReducers} from 'redux';
import detailRs from '../container/live/detail/reducer';
import homeRs from '../container/live/home/reducer';

const reducers = combineReducers({
    detailRs,
    homeRs
});

export default reducers;