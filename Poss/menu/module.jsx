
import React , {Component} from 'react'
import {Link} from 'react-router'
import {Row ,Col} from 'antd'

export default class Module extends Component{
	static defaultProps = {
		modules:[{
			path:'/poss1',
			title:'应用市场后台'
		},{
			path:'/poss2',
			title:'开放平台'
		},{
			path:'/poss3',
			title:'发行CMS'
		},{
			path:'/poss4',
			title:'冰穹BI平台'
		},{
			path:'/poss5',
			title:'冰穹后台'
		}]
	}
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return (
			<div className="gutter-example">
				<Row gutter={16} >
					{this.props.modules.map(
						(module,i) =>
						<Col key={i} className="gutter-row" span={6}>
							<Link to={module.path}><div className="gutter-box">{module.title}</div></Link>
						</Col>
					)}
				</Row>
				<div className="menu-box">{this.props.children}</div>
			</div>
		)
	}
}