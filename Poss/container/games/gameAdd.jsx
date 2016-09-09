import React , {Component} from 'react';
import {Form , Select , Input , DatePicker , Button} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class GameAdd extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    submitBind(){
        e.preventDefault();
        console.log(this.props.getFieldsValue());
    }
    render(){
        const layout = {
            labelCol:{span:6},
            wrapperCol:{span:14}
        };

        const {getFieldProps} = this.props.form;

        return (
            <div>
                <h1>新增游戏</h1>
                <Form horizontal onSubmit={this.submitBind.bind(this)}>
                    <FormItem label='游戏类型'
                        {...layout}>
                        <Select  {...getFieldProps('gameType',{initialValue:'1'})} size='large'  className='width2'>
                            <Option value='1'>射击类</Option>
                            <Option value='2'>动作类</Option>
                            <Option value='3'>冒险类</Option>
                            <Option value='4'>卡牌</Option>
                            <Option value='5'>休闲</Option>
                            <Option value='6'>角色扮演</Option>
                        </Select>
                    </FormItem>
                    <FormItem label='支持平台'
                        {...layout}>
                        <Select {...getFieldProps('platform',{initialValue:'1'})} size='large'  className='width2'>
                            <Option value='1'>PC</Option>
                            <Option value='2'>安卓</Option>
                            <Option value='3'>IOS</Option>
                        </Select>
                    </FormItem>
                    <FormItem label='创建时间'
                        {...layout}>
                        <DatePicker style={{width:200}} {...getFieldProps('createTime',{initialValue:''})} />
                    </FormItem>
                    <FormItem  label='更新时间'
                        {...layout}>
                        <DatePicker style={{width:200}}  {...getFieldProps('updateTime',{initialValue:''})} />
                    </FormItem>
                    <FormItem label='状态'
                        {...layout}>
                        <Select size='large' className='width2' {...getFieldProps('gameState',{initialValue:'1'})}>
                            <Option value='1'>上架</Option>
                            <Option value='2'>下架</Option>
                        </Select>
                    </FormItem>
                    <FormItem wrapperCol={{ span: 16, offset: 6 }} className='m-top2'>
                        <Button htmlType='submit' type='primary'>确定</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }

}

GameAdd = Form.create()(GameAdd);

export default GameAdd;