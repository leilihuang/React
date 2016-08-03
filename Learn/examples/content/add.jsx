import React , {Component} from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {Form , Input , Select , Button , Checkbox , Radio , Tooltip , Icon} from 'antd'
import {addUser , editUserSub} from '../action/actions'
import MenuDemo from '../menu/menu.jsx'


const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Add extends Component{
	static defaultProps = {
		data:{
			name:'',
			pass:'',
			gender:'female',
			key:0,
			ramrk:'',
			agreement:false
		}
	}
	constructor(props){
		super(props);
		this.state={

		}
	}
	componentDidMount(){
		if(this.props.dataForm){
			const d = Object.assign({},this.props.dataForm)
			this.props.form.setFieldsValue(d)
		}
	}
	handleSubmit(e){
		e.preventDefault();
		let formData = this.props.form.getFieldsValue();
		if(this.props.dataForm){
			this.props.dispatch(editUserSub(formData));
			browserHistory.push('/list')
		}else{
			this.props.dispatch(addUser(formData));
			this.props.form.setFieldsValue(this.props.data);
		}
	}
	render(){
		const { getFieldProps , setFieldsValue } = this.props.form;
		const formItemLayout = {
			labelCol : { span : 6},
			wrapperCol : { span : 14 }
		};
		return (
			<div className="add-box">
				<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
					<FormItem {...formItemLayout} label = '用户名'>
						<Input type='hidden' {...getFieldProps('key',{initialValue:''})} />
						<Input type='text' {...getFieldProps('name',{initialValue:''})}  placeholder='请输入用户名' />
					</FormItem>
					<FormItem {...formItemLayout} label = '密码'>
						<Input type='password' {...getFieldProps('pass',{initialValue:''})} placeholder='请输入密码' />
					</FormItem>
					<FormItem {...formItemLayout} label='性别'>
						<RadioGroup {...getFieldProps('gender',{ initialValue : 'female'})}>
							<Radio value='male'>男的</Radio>
							<Radio value='female'>女的</Radio>
						</RadioGroup>
					</FormItem>
					<FormItem {...formItemLayout} label='备注' help='随便写点什么'>
						<Input type="textarea" placeholder='随便写写' {...getFieldProps('ramrk',{initialValue:''})} />
					</FormItem>
					<FormItem
			          {...formItemLayout}
			          label={<span>卖身华府 <Tooltip title="我为秋香"><Icon type="question-circle-o" /></Tooltip></span>}
			        >
			          <Checkbox {...getFieldProps('agreement', { initialValue: false, valuePropName: 'checked' })}>同意</Checkbox>
			        </FormItem>
					<FormItem wrapperCol={{ span: 16, offset: 6}} style={{marginTop:24}}>
						<Button type='primary' htmlType='submit'>确定</Button>
					</FormItem>
				</Form>
			</div>
		)
	}
}
Add = Form.create()(Add);
Add = connect()(Add)
export default Add

