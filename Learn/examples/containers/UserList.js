import { connect } from 'react-redux'
import { delUser , userInfo , editUser} from '../action/actions'
import List from '../content/list.jsx'

const getVisibleTodos = (todos , filter) =>{
	switch(filter){
		case 'USER_LIST':
			return todos
		default:
			return todos
	}
}

const mapStateToProps = (state) =>{
	return {
		todos:getVisibleTodos(state.todos, state.listFilter)
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		onTodoClick:(id) =>{
			dispatch(delUser(id))
		},
		onTodoInfo:(obj)=>{
			dispatch(userInfo(obj))
		},
		onTodoEdit:(obj)=>{
			dispatch(editUser(obj))
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(List)

export default VisibleTodoList