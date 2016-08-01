import React ,{Component} from 'react'
import { connect } from 'react-redux'
import lists from '../reducers/reducers'
import Add from './add.jsx'

class Edit extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	render(){
		const {editData} = this.props;
		return (
			<div>
				<h2>修改用户详情</h2>
				<Add dataForm={editData} />
			</div>
		)
	}
}

Edit = connect(lists)(Edit)

export default Edit