import React , { Component } from 'react';
import {Table,Button} from 'antd';

const columns = [{
    title:'游戏ID',
    dataIndex:'gameName',
    key:'gameName'
},{
    title:'游戏类型',
    dataIndex:'gameType',
    key:'gameType'
},{
    title:'支持平台',
    dataIndex:'platform',
    key:'platform'
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

    }
},{
    title:'操作',
    key:'cz',
    render:(text,record)=>(
        <span>
            <Button type='primary' size='large'>编辑</Button>
            <Button type='primary' size='large'>删除</Button>            
        </span>
    )
}];

export default class List extends Component{
    constructor(props){
        super(props);
        this.state={
            tableData:[]
        };
    }
    componentWillMount(){

    }
    render(){
        return (
            <div className="game-list-box">
                <Table columns={columns} dataSource={this.state.tableData} />
            </div>
        )
    }
}