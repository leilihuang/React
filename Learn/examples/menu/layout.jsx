import React ,{ Component } from 'react';
import {Row , Col} from 'antd';
import MenuDemo from './menu.jsx';

export default class Layout extends Component{
	constructor(props){
		super(props);
		this.state={

		};
	}
	render(){
		return (
			<div className="layourt-box">
				<Row>
					<Col span={24} >
						<MenuDemo />
					</Col>
				</Row>
			</div>
		)
	}
}