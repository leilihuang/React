const listFilter = (state = 'USER_LIST' , action)=>{
	switch(action.type){
		case 'USER_LIST_FILTER':
			return action.obj
		default:
			return state
	}
}

export default listFilter