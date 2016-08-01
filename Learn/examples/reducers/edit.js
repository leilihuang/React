import { USER_EDIT } from '../action/actions'

const editData = (state = USER_EDIT , action)=>{
	switch(action.type){
		case USER_EDIT:
			return Object.assign({},action.obj)
		default:
			return state
	}
}

export default editData