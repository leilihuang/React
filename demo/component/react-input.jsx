import './../less/react-input.less';
import React ,{Component} from 'react';
import {render} from 'react-dom';

export default class Input extends Component{
    static defaultProps = {
        type:'text',
        placeholder:'请输入内容',
        data:null
    };

    constructor(props){
        super(props);
        this.state={
            value:''
        };
    }
    changeHandler(e){
        this.setState({
            value:e.target.value
        });
    }
    render(){
        return (
            <div className="demo-input-box">
                <div className="input-text">
                    <div className="demo-input">
                        <label className='demo-label'>{this.props.label}</label>
                        <input {...this.otherProps}
                               placeholder={this.props.placeholder}
                               value={this.state.value}
                               type={this.props.type}
                               onChange={this.changeHandler.bind(this)}
                             />
                    </div>
                    <div className="demo-input-text">{this.state.value}</div>
                </div>
            </div>
        )
    }
}

