import React , {Component} from 'react';
import {render} from 'react-dom';

export default class Radius extends Component{
	static defaultProps={
		label:'',
		disabled:false
	};

	constructor(props){
		super(props);
		this.state={
			checked:props.checked
		};
	}
	onChange(checked){
		this.setState({
			checked:!checked
		});
	}
	render(){
		return (
			<div className="demo-radius-box">
				<label className='radius-label'>{this.props.label}</label>
				<input {...this.otherProps}
					   type="radio" name={this.props.name}
					   defaultChecked ={this.state.checked}
					   disabled={this.props.disabled}
					   onChange={this.onChange.bind(this,this.state.checked)}  />
			</div>
		)
	}
}