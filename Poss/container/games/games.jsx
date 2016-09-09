import React , { Component } from 'react';
import {Link} from 'react-router';
import {Table,Button,Form,Select,Input,Icon} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

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
            <Button type='primary' size='large' className='g-btn-red'>删除</Button>            
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

    }
    handleSub(e){
        e.preventDefault();
        console.log(this.props.form.getFieldsValue());
    }
    addBind(){
        console.log('新增');
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

export default Games;