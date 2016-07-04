import './../less/form.less';
import React , {Component} from 'react';
import Input from './../component/react-input.jsx';
import Select from './../component/react-select.jsx';
import Checkbox from './../component/react-checkbox.jsx';
import Radius from './../component/react-radius.jsx';
import Tree from './../component/react-tree.jsx';

export default class Form extends Component{

    static defaultProps={
        dataSelect:[{
            name:'不男不女',
            value:''
        },{
            name:'男',
            value:'1'
        },{
            name:'女',
            value:'2'
        },{
            name:'女',
            value:'3'
        }],
        dataInput:[{
            type:'checkbox',
            label:'女',
            value:1
        },{
            type:'checkbox',
            checked:true,
            label:'男',
            value:2
        },{
            type:'checkbox',
            disable:true,
            label:'禁止选择',
            value:3
        },{
            type:'radio',
            checked:true,
            label:'radio1',
            name:'sex',
            value:3
        },{
            type:'radio',
            label:'radio2',
             checked:false,
            name:'sex',
            value:3
        },{
            type:'radio',
            disable:true,
            checked:true,
            label:'禁止选择',
            value:3
        },{
            type:'text',
            placeholder:'请输入密码'
        },{
            type:'password',
            label:'男'
        }],
        treeData:[{
            menuName:'导航菜单一',
            tree:false,
            childrens:[{
                menuName:'子菜单1',
                tree:true
            },{
                menuName:'子菜单2',
                tree:true
            }]
        },{
            menuName:'导航菜单二',
            tree:false,
            childrens:[{
                menuName:'子菜单1',
                tree:true
            },{
                menuName:'子菜单2',
                tree:true
            }]
        }]
    };

    constructor(props){
        super(props);
        this.state={

        };
    }
    render(){
        return (
            <div className="demo-form-box">
                <h1 className="demo-form-title">表单控件</h1>
                {this.props.dataInput.map((d,i) => {
                    let input;
                    if(Object.is(d.type,'checkbox')){
                       input=<Checkbox key={i} disable={d.disable}
                                      label={d.label} checked={d.checked} 
                                       value={d.value}   />
                    }else if(Object.is(d.type,'radio')){
                        input=<Radius key={i} name={d.name} checked={d.checked} label={d.label}
                                disabled={d.disable} />
                    }else{
                        input=<Input placeholder={d.placeholder} key={i} type={d.type}  />
                    }

                    return (input);

                })}
                <Select options={this.props.dataSelect} defaultValue={1} />
                <Tree data={this.props.treeData} />
            </div>
        )
    }
}