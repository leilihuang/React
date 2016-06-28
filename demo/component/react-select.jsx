import './../less/react-select.less';
import React , {Component} from 'react';

export default class Select extends Component{
    static defaultProps={
        defaultValue:-1,
        options:[]
    };
    constructor(props){
        super(props);
        this.state={
            value:this.props.defaultValue
        };
    }
    onChange(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return (
            <div className="demo-select-box">
                <select className='demo-select'  value={this.state.value} onChange={this.onChange.bind(this)}>
                    {
                        this.props.options.map(
                            (e,i)=>
                                <option key={i} value={e.value}>{e.name}</option>
                        )
                    }
                </select>
            </div>
        )
    }
}