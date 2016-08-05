import React , {Component} from 'react'
import { connect } from 'react-redux'
import { browserHistory , Link } from 'react-router'
import {Form , Input , Select , Button , Checkbox , Radio , Tooltip , Icon} from 'antd'


const FormItem = Form.Item;

class Info extends Component{
	constructor(props){
		super(props);
		this.state={

		};
	}
	render(){
		const data = this.props.info;
		const formItemLayout = {
			labelCol : { span : 6},
			wrapperCol : { span : 14 }
		};
		return (
			<Form horizontal>
				 <FormItem wrapperCol={{ span: 16, offset: 2 }} style={{ marginTop: 24 }}>
		         	 <Link to='/list'><Button type="primary"><Icon type='left' /> 返回列表</Button></Link>
		        </FormItem>
				<FormItem {...formItemLayout} label = '用户名'>
					<p className="ant-form-text">{data.name}</p>
				</FormItem>
				<FormItem {...formItemLayout} label = '密码'>
					<p className="ant-form-text">{data.pass}</p>
				</FormItem>
				<FormItem {...formItemLayout} label='性别'>
					<p className="ant-form-text">{data.gender == 'male' ? '男' : '女'}</p>
				</FormItem>
				<FormItem {...formItemLayout} label='备注'>
					<p className="ant-form-text">{data.ramrk}</p>
				</FormItem>

				<FormItem
		          {...formItemLayout}
		          label={<span>卖身华府 <Tooltip title="我为秋香"><Icon type="question-circle-o" /></Tooltip></span>}
		        >
		        	<p className="ant-form-text">{data.agreement ? '是' : '否'}</p>
		        </FormItem>
			</Form>
		)
	}
}

export default Info
