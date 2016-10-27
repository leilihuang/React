import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import detailRs from './reducer';

function mapStateToProps(state) {
    return {
        value: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(increment())
    };
}

class Detail extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(1);
        return (
            <h1>详情页</h1>
        )
    }
}

export default connect(detailRs)(Detail);