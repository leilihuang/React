import { connect } from 'react-redux'
import { USER_INFO } from '../action/actions'
import Info from '../content/info.jsx'

const getUserInfo = (info , action)=>{
	switch(action){
		case USER_INFO:
			return info
		default :
			return info
	}
}

const mapStateToProps = (state) =>{
	return {
		info:state.infoFilter
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		callBack:() =>{
			
		}
	}
}

var UserInfoData = connect(
	mapStateToProps,
	mapDispatchToProps
)(Info)

export default UserInfoData