import React , {Component} from 'react'
import { Table , Icon } from 'antd'
import { browserHistory  } from 'react-router'
import { userInfo } from '../action/actions'


export default class List  extends Component{
	constructor(props){
		super(props);
		
		this.state={
		}
	}
	handlerDel(record){
		this.props.onTodoClick(record.key)
	}
	handlerInfo(record){
		this.props.onTodoInfo(record)
		browserHistory.push('/info')
	}
	handlerEdit(record){
		this.props.onTodoEdit(record)
		browserHistory.push('/edit')
	}
	render(){
		const columns = [{
			title:'姓名',
			dataIndex:'name',
			key:'name'
		},{
			title:'性别',
			dataIndex:'gender',
			key:'gender',
			render:(text,record)=>(
				<span>{text === 'male' ? '男' : '女'}</span>
			)
		},{
			title:'备注',
			dataIndex:'ramrk',
			key:'ramrk'
		},{
			title:'是否同意',
			dataIndex:'agreement',
			key:'agreement',
			render:(text)=>(
				<span>{text ? '是' : '否'}</span>
			)
		},{
			title:'操作',
			key:'operation',
			render:(text,record) =>{
				return (
					<span>
						<a href="#" onClick={this.handlerDel.bind(this,record)}>删除</a>
						<span className="ant-divider"></span>
						<a href="#" onClick = {this.handlerInfo.bind(this,record)}>详情</a>
						<span className="ant-divider"></span>
						<a href="#" onClick = {this.handlerEdit.bind(this,record)}>修改</a>
					</span>
				)
			}
		}];

		return (
			<div className="list-box">
				<Table columns={columns} dataSource={this.props.todos} />
			</div>
		)
	}
}
