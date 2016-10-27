import React , { Component } from 'react'
import {PropTypes} from 'react-router'

class Head extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillMount(){
        console.log(this.context.history)
    }
    render(){
        return (
            <h1>{this.props.title}</h1>
        )
    }
}

Head.contextTypes = {history:PropTypes.history}

export default Head;
