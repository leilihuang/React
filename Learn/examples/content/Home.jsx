import React , {Component} from 'react'
import {Col , Row} from 'antd'

export default class Home extends Component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	render(){
		return (
			<div className='home-box'>
				<h2>Demo介绍</h2>
				<div className="tit-ms">
					<p>使用ES6+React+React-router+React-redux+Redux+Antd等技术编写增删改查Demo</p>
					<p>本人也是一枚初学者，希望大家看完后提出宝贵建议</p>
				</div>
				<h2>安装使用</h2>
				<div className="tit-ms">
					<p>npm install下载必要的插件</p>
					<p>插件安装好了之后先执行 npm run dll ，在执行 npm run dev 就可以运行</p>
				</div>
				<h2>目录介绍</h2>
				<div className="tit-ms">
					<p>源码目录在 Learn/examples下面</p>
				</div>
				<h2>如果对你有所帮助欢迎点赞</h2>
			</div>
		)
	}
}