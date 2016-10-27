import React , { Component } from 'react'
import Head from '../head'
class Banner extends Component{
    static defaultProps ={
        title:'你好啊'
    }
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillMount(){
        
    }
    render(){
        return (
            <div>
                <Head {...this.props} />
                <h1>游戏banner</h1>
            </div>
        )
    }
}


export default Banner;