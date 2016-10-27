import React , { Component } from 'react';
import {Link} from 'react-router';

export default class Index extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>app入口</h1>
                <Link to="/home">我是首页</Link>
                <Link to="/detail">我是详情页</Link>
                <div>{this.props.children}</div>
            </div>
        )
    }
}