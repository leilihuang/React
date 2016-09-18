import React , { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Table,Button,Form,Select,Input,Icon} from 'antd';
import $ from 'jquery';

import {gameAdd} from '../../actions/games';
import games from '../../reducers/games'

const FormItem = Form.Item;
const Option = Select.Option;

const columns = [{
    title:'游戏ID',
    dataIndex:'gameId',
    key:'gameId'
},{
    title:'游戏类型',
    dataIndex:'gameType',
    key:'gameType',
    render:(text)=>{
        if(text == '1'){
            return <span>射击类</span>
        }else if(text == '2'){
            return <span>动作类</span>
        }else if(text == '3'){
            return <span>冒险类</span>
        }else if(text == '4'){
            return <span>卡牌</span>
        }else{
            return <span></span>
        }
    }
},{
    title:'支持平台',
    dataIndex:'platform',
    key:'platform',
    render:(text)=>{
        if(text == '1'){
            return <span>PC</span>
        }else if(text == '2'){
            return <span>安卓</span>
        }else if(text == '3'){
            return <span>IOS</span>
        }else{
            return <span></span>
        }
    }
},{
    title:'创建时间',
    dataIndex:'createTime',
    key:'createTime'
},{
    title:'更新时间',
    dataIndex:'updateTime',
    key:'updateTime'
},{
    title:'状态',
    dataIndex:'gameState',
    key:'gameState',
    render:(text)=>{
        if(text == '1'){
            return <span>上架</span>
        }else if(text == '2'){
            return <span>下架</span>
        }else{
            return <span></span>
        }
    }
},{
    title:'操作',
    key:'cz',
    render:(text,record)=>(
        <span>
            <Button type='primary' size='large'>编辑</Button>
            <Button  size='large' className='g-btn-red'>删除</Button>            
        </span>
    )
}];

class Games extends Component{
    constructor(props){
        super(props);
        this.state={
            tableData:[]
        };

    }
    componentWillMount(){
        console.log(this.props.games);
        this.setState({
            tableData:this.props.games
        })
    }
    handleSub(e){
        e.preventDefault();
        console.log(this.props.form.getFieldsValue());
    }
    render(){
        return (
            <div className="game-list-box">
                <div className='p-bottom2'>
                    <Form inline onSubmit={this.handleSub.bind(this)}>
                        <FormItem label='游戏名'>
                            <Input placeholder='请输入游戏名' />
                        </FormItem>
                        <FormItem label='状态'>
                            <Select size='large' style={{ width: 200 }}>
                                <Option value=''>全部</Option>
                                <Option value='1'>上架</Option>
                                <Option value='2'>下架</Option>
                            </Select>
                        </FormItem>
                        <Button type='primary' htmlType='submit' icon='search'>搜索</Button>
                        <Link to='/poss1/games/add'>
                        <Button type='primary' icon='search'  className='m-left2'>新增</Button>
                        </Link>
                    </Form>
                </div>
                <Table columns={columns} dataSource={this.state.tableData} />
            </div>
        )
    }
}

Games = Form.create()(Games);

Games = connect(games)(Games);

export default Games;