import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
	render() {
		return this.props.todos
		.filter(todo => todo.id !== null)
		.sort((a, b) => a.title.toLowerCase() !== b.title.toLowerCase() ? a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1 : 0)
		.map((todo) => (
			<Todoitem key={todo.id} todo={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete} />
		));
	}
}

// PropTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Todos;
