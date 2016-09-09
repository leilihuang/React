import React, { Component } from 'react'
import { Table , Icon,Form,Select,Button,Input} from 'antd'
import { browserHistory } from 'react-router'
import {connect} from 'react-redux'
import fetch from 'isomorphic-fetch'
import Mock from 'mockjs'
import reducers from '../../reducers/reducers'
import {gameMenuEdit , gameMenuDel , gameMenuCheck} from '../../actions/action'

const Random = Mock.Random;
const FormItem = Form.Item;
const Option = Select.Option;
const table = Mock.mock({
    'data|10':[{
        'key|+1':1,
        'id|+1': 1,
        'icon' : Random.image('30x30','@color'),
        'name' : Random.cname(),
        'gameType|1' : ['1','2','3'],
        'platform|1' : ['1','2','3'],
        'updateTime' : '@date',
        'gameState|1' : ['1','2']
    }]
})

class Menus extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillMount(){
        const {gameMenuSub} = this.props;
        if(gameMenuSub.key){
            table.data = table.data.map((d,i)=>{
                if(d.key == gameMenuSub.key){
                    console.log(Object.assign({},table.data[i],gameMenuSub));
                    return Object.assign({},table.data[i],gameMenuSub);
                }
                return d;
            });
        }
        this.setState({
            table : table.data
        });
    }
    handleEdit(record){
        this.props.dispatch(gameMenuEdit(record))
        browserHistory.push('/poss1/menuEdit')
    }
    handleDelete(record){
        var filter =this.state.table.filter((d)=>{
            return d.id !== record.id
        });
        this.setState({
            table:filter
        });
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
                if(text == '1'){
                    return <span>RPG</span>
                }else if(text == '2'){
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
               if(text == '1'){
                    return <span>PC</span>
                }else if(text == '2'){
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
               if(text == '1'){
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
                </span>
            )
        }];
        
        return (
            <div className="game-menu-box">
                <Form inline>
                    <FormItem label="游戏类型" style={{paddingBottom:20}}>
                        <Select style={{width:200}} size="large" onChange = {(val)=>{
                            let data = this.state.table.filter((d)=>{
                                return d.gameType === val
                            });
                            if(val === ""){
                                data = table.data;
                            }                            
                            this.setState({
                                table:data
                            });
                        }} defaultValue ="">
                            <Option value = "">全部</Option>
                            <Option value = "1">RPG</Option>
                            <Option value = "2">动作</Option>
                            <Option value = "3">射击</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="支持平台">
                        <Select style={{width:200}} size="large" onChange = {(val)=>{
                            let data = this.state.table.filter((d)=>{
                                return d.platform === val
                            });
                            if(val === ""){
                                data = table.data;
                            }                                
                            this.setState({
                                table:data
                            });
                        }} defaultValue = "">
                            <Option value = "">全部</Option>
                            <Option value = "1">PC</Option>
                            <Option value = "2">安卓</Option>
                            <Option value = "3">IOS</Option>
                        </Select>
                    </FormItem>
                </Form>
                <Table columns={columns} dataSource={this.state.table}></Table>
            </div>
        )
    }
}

Menus = connect(reducers)(Menus);

export default Menus;

