import '../less/react-tree.less'
import React , {Component} from 'react';

export default class ChildrenMenu extends Component{
	static defaultProps={
		data:null,
		menuName:'',
		tree:false
	};
	constructor(props){
		console.log(props);
		super(props);
		this.state={

		};
	}
	clickBind(cls){
		this.setState({
			treeClass : cls == 'close' ? 'open' : 'close'
		});
	}
	render(){
		return (
			<li className={this.state.treeClass} onClick={this.clickBind.bind(this,this.state.treeClass)}>
				<div className="title">{this.props.menuName}</div>

			</li>
		)
	}
}