export default function counter(state = 0, action){
	switch(action.type){
		case 'ADD' :
			return state + 1
		case 'DELETE' :
			return state - 1
		default :
			return state
	}
}