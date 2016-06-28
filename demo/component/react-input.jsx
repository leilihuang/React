import './../less/react-input.less';
import React ,{Component} from 'react';
import {render} from 'react-dom';

export default class Input extends Component{
    static defaultProps = {
        type:'text',
        placeholder:'请输入内容'
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
                        <input placeholder={this.props.placeholder}
                               value={this.state.value}
                               type={this.props.type}
                               onChange={this.changeHandler.bind(this)}
                            {...this.otherProps} />
                    </div>
                    <div className="demo-input-text">{this.state.value}</div>
                </div>

                <div className="input-checkbox clearfix">
                    {this.props.checkboxs.map(
                        (e,i)=>{
                            if(Object.is(e.type,'text')){
                                (
                                    <div className="demo-check-box">
                                        <input   className="demo-check" type="checkbox" key={i} checked={e.checked} disable={e.disable}  />
                                        <label >{e.name}</label>
                                    </div>
                                )
                            }

                        }


                    )}
                </div>
            </div>

        )
    }
}

