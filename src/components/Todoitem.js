import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Todoitem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted'
		}
	}

	markComplete = (e) => {
		console.log(this.props);
	}

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
				{title}
				<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
			</div>
		);
	}
}

// PropTypes
Todoitem.propTypes = {
	todo: PropTypes.object.isRequired
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right',
	outline: 'none'
}

export default Todoitem;