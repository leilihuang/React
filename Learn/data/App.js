import React , {Component , PropTypes} from 'react';

export default class App extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const { value , onAdd , onDelete } = this.props;
		return (
			<p>
				Clicked : {value} times
				{' '}
				<button onClick = {onAdd}>
					+
				</button>
				{' '}
				<button onClick = {onDelete}>
					-
				</button>
			</p>
		)
	}
}

App.propTypes = {
	value : PropTypes.number.isRequired,
	onAdd : PropTypes.func.isRequired,
	onDelete : PropTypes.func.isRequired
}

