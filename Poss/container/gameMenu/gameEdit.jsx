import React , { Component } from 'react'
import {connect} from 'react-redux'
import {Link,browserHistory} from 'react-router'
import { Form, Input, Select, Checkbox ,DatePicker ,Col ,Button} from 'antd'
import reducers from '../../reducers/reducers'
import {gameSubmit} from '../../actions/action'

const FormItem = Form.Item;
const Option = Select.Option;

class GameEdit extends Component{
    constructor(props){
        super(props); 
        this.state = this.getInitForm();
    }
    getInitForm(){
        return {
            name:'',
            gameType:'',
            platform:'',
            updateTime:'',
            gameState:''
        }
    }
    componentWillMount(){
        const {gameMenu,gameMenuSub} = this.props;
        if(gameMenuSub){
            gameMenu.map((d,i)=>{
                if(d.key == gameMenuSub.key){
                    return Object.assign({},d,gameMenuSub);
                }
                return d;
            });
        }

        console.log(gameMenu)
        // this.setState(gameMenu);  
        this.props.form.setFieldsValue(gameMenu);
    }
    handlerSubmit(e){
        e.preventDefault();
        let data = this.props.form.getFieldsValue();
        this.props.dispatch(gameSubmit(data));
        browserHistory.push('/poss1/menu')
    }
    render(){
        const { getFieldProps } = this.props.form;
        const style = {width:300};
        const formItemLayout = {
            labelCol : {span:6},
            wrapperCol : {span:14}
        };

        return (
            <Form horizontal onSubmit = {this.handlerSubmit.bind(this)}>
                <FormItem
                    label = "游戏名"
                    {...formItemLayout}>
                    <Input {...getFieldProps('key',{initiaValue:''})} type='hidden' />
                    <Input {...getFieldProps('name',{initiaValue:''})}   placeholder = "请输入游戏名" style = {style} />
                </FormItem>
                <FormItem
                    label = "游戏类型"
                    {...formItemLayout}>
                    <Select {...getFieldProps('gameType')}   size = "large" defaultValue = "1" 
                        style = {style} >
                        <Option value = "1">RPG</Option>
                        <Option value = "2">动作</Option>
                        <Option value = "3">射击</Option>
                    </Select>
                </FormItem>
                <FormItem
                    label = "支持平台"
                    {...formItemLayout}>
                    <Select {...getFieldProps('platform')}  size = "large" defaultValue = "1" style = {style} >
                        <Option value = "1">PC</Option>
                        <Option value = "2">安卓</Option>
                        <Option value = "3">IOS</Option>
                    </Select>
                </FormItem>
                <FormItem
                    label = '状态'
                    {...formItemLayout}>
                    <Select {...getFieldProps('gameState')} size = 'large' defaultValue = "1" style = {style} >
                        <Option value = '1'>上架</Option>
                        <Option value = '2'>下架</Option>
                    </Select>
                </FormItem>                
                <FormItem
                    label = '时间'
                    {...formItemLayout}>
                    <Col >
                        <FormItem>
                            <DatePicker style = {style}  {...getFieldProps('updateTime')} />
                        </FormItem>
                    </Col>
                </FormItem>
   
                <FormItem wrapperCol={{span:12,offset:6}} style = {{marginTop:24}}>
                    <Button type = 'primary' htmlType = 'submit'>提交</Button>
                     &nbsp;&nbsp;&nbsp;
                    <Link to='/poss1/menu'><Button type = 'ghost' htmlType = 'submit'>取消</Button></Link>
                </FormItem>
            </Form>
        )

    }
}

GameEdit = Form.create()(GameEdit);

GameEdit = connect(reducers)(GameEdit);

export default GameEdit;