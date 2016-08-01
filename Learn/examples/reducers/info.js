import { USER_INFO } from '../action/actions'

const infoFilter = (state = USER_INFO , action)=>{
	switch(action.type){
		case 'USER_INFO':
			return action.obj
		default:
			return state
	}
}

export default infoFilter