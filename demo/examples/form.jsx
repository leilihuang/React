import './../less/form.less';
import React , {Component} from 'react';
import Input from './../component/react-input.jsx';
import Select from './../component/react-select.jsx';

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
                <Input placeholder="你好啊" label="你是谁" />

                <Select options={this.props.dataSelect} defaultValue={1} />
            </div>
        )
    }
}