import { USER_ADD , USER_DEL , USER_INFO , USER_EDIT_SUB} from '../action/actions'

let count = 0;
const todo = (state , action)=>{
	switch(action.type){
		case USER_ADD:
			return {
				name:action.obj.name,
				pass:action.obj.pass,
				gender:action.obj.gender,
				key:count++,
				ramrk:action.obj.ramrk,
				agreement:action.obj.agreement 
			}
		default :
			return state
	}
}

const todos = (state = [] ,action)=>{
	switch(action.type){
		case USER_ADD :
			return [
				...state,
				todo(undefined,action)
			]
		case USER_DEL: 
			 return state.filter(todo =>
			 		todo.key !== action.id
			 )
		case USER_EDIT_SUB:
			return state.map((todo)=>{
				if(todo.key === action.obj.key){
					 return Object.assign({},todo,action.obj)
				}
				return Object.assign({},todo)
			})
		default :
			return state
	}
}

export default todos