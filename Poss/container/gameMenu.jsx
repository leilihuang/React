import React, { Component } from 'react'
import { Table , Icon} from 'antd'
import Mock from 'mockjs'

const Random = Mock.Random;
const table = Mock.mock({
    'data|10':[{
        'key|+1':1,
        'id|+1': 1,
        'icon' : Random.image('30x30','@color'),
        'name' : Random.cname(),
        'gameType|1-3' : 1,
        'platform|1-3' : 1,
        'updateTime' : '@date',
        'gameState|1-2' : 1
    }]
})

export default class Menus extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillMount(){
        this.setState({
            table : table.data
        });
    }
    handleEdit(record){
        console.log(record)
    }
    handleCheck(record){

    }
    handleDelete(record){

    }
    render(){
        const columns = [{
            title:"游戏ID",
            dataIndex: "id",
            key: "id"
        },{
            title:"游戏图标",
            dataIndex: "icon",
            key:"icon",
            render:(text) => <img src={text} alt=""/>
        },{
            title:"游戏名",
            dataIndex: "name",
            key:"name",
            render: (text) => <a href="#">{text}</a>
        },{
            title:"游戏类型",
            dataIndex:"gameType",
            key:"gameType",
            render: (text) => {
                if(text == 1){
                    return <span>RPG</span>
                }else if(text == 2){
                    return <span>动作</span>
                }else{
                    return <span>射击</span>
                }
            }
        },{
            title:"支持平台",
            dataIndex:"platform",
            key:"platform",
            render: (text) =>{
               if(text == 1){
                    return <span>PC</span>
                }else if(text == 2){
                    return <span>安卓</span>
                }else{
                    return <span>IOS</span>
                }                
            }
        },{
            title:"更新时间",
            dataIndex:"updateTime",
            key:"updateTime"
        },{
            title:"状态",
            dataIndex:"gameState",
            key:"gameState",
            render:(text)=>{
               if(text == 1){
                    return <span>上架</span>
                }else{
                    return <span>下架</span>
                }                   
            }
        },{
            title:"操作",
            key:"operation",
            render:(text,record) =>(
                <span>
                    <a href="#" onClick={this.handleEdit.bind(this,record)}>编辑</a>
                    <span className="ant-divider"></span>
                    <a href="#" onClick={this.handleDelete.bind(this,record)}>删除</a>
                    <span className="ant-divider" ></span>
                    <a href="#" onClick={this.handleCheck.bind(this.record)}>查看</a>
                </span>
            )
        }];
        
        return (
            <div className="game-menu-box">
                <Table columns={columns} dataSource={this.state.table}></Table>
            </div>
        )
    }
}