import React , {combineReducers} from 'redux'
import todos from './todos'
import listFilter from './listFilter'
import infoFilter from './info'
import editData from './edit'

const lists = combineReducers({
	todos,
	listFilter,
	infoFilter,
	editData
})

export default lists