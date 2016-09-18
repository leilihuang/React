import React , {Component} from 'react';
import {Link , browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {Form , Select , Input , DatePicker , Button} from 'antd';
import $ from 'jquery';

import {gameAdd} from '../../actions/games';
import games from '../../reducers/games'
import Util from '../util';

const FormItem = Form.Item;
const Option = Select.Option;

let key=0;

class GameAdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            updateTime:'',
            createTime:''
        };
    }
    componentWillMount(){
    }
    submitBind(e){
        e.preventDefault();
        let data = this.props.form.getFieldsValue();
        let util =new Util();
        data.createTime = util.timeOut(data.createTime);
        data.updateTime = util.timeOut(data.updateTime);
        this.props.dispatch(gameAdd(data));
        browserHistory.push('/poss1/games');
    }
    render(){
        const layout = {
            labelCol:{span:6},
            wrapperCol:{span:14}
        };

        const {getFieldProps} = this.props.form;
        key++;

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
                        <DatePicker {...getFieldProps('createTime')}  style={{width:200}}  />
                    </FormItem>
                    <FormItem  label='更新时间'
                        {...layout}>
                        <DatePicker {...getFieldProps('updateTime')}   style={{width:200}} />
                    </FormItem>
                    <FormItem label='状态'
                        {...layout}>
                        <Select size='large' className='width2' {...getFieldProps('gameState',{initialValue:'1'})}>
                            <Option value='1'>上架</Option>
                            <Option value='2'>下架</Option>
                        </Select>
                    </FormItem>
                    <FormItem wrapperCol={{ span: 6, offset: 6 }} className='m-top2'>
                        <Button size='large' htmlType='submit' type='primary'>确定</Button>
                        <Link className='m-left2' to='/poss1/games'>
                            <Button size='large' >取消</Button>
                        </Link>
                    </FormItem>
                </Form>
            </div>
        )
    }

}

GameAdd = Form.create()(GameAdd);

GameAdd = connect(games)(GameAdd);

export default GameAdd;