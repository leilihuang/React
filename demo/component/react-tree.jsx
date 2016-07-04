import '../less/react-tree.less'
import React , {Component} from 'react';


export default class Tree extends Component{
	static defaultProps={

	};
	constructor(props){
		super(props);
		this.state={
			defaultClass: -1,
			data:props.data 
		};
	}
	loadTree(data){
		let trees;		
		trees=data.map((d,i) => {
			let tree=(
				<li key={i} className='tree-li'>
					<div className="title">{d.menuName}</div>
				</li>
			)
			if(d.childrens && d.childrens.length > 0){
				tree=(
					<li key={i}  className={this.state.defaultClass == i ? 'tree-li active' : 'tree-li'}  >
						<div className='title' onClick={this.onClick.bind(this,i)}>{d.menuName}</div>
						{this.loadTree(d.childrens)}
					</li>
				)
			}
			return tree;
		});

		return (
			<ul className="tree-menu">
				{trees}
			</ul>
		
		)

	}
	onClick(index){
		this.setState({
			defaultClass: this.state.defaultClass == index ? -1 : index
		});
	}
	render(){
		return (
			<div className="demo-tree-box">
				{this.loadTree(this.props.data)}
			</div>
		)
	}
}