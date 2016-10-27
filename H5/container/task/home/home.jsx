import React , { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            <div className="home-box">
                <h1>我是task首页</h1>
                <Link to="/live/home">返回live首页</Link>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

