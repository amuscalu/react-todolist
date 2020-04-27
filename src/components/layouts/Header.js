import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header style={styleHeader}>
				<h1>ToDoList</h1>

				<Link to="/"> Home </Link>
				|
				<Link to="/about"> About </Link>
			</header>
		);
	}
}

const styleHeader = {
	background: '#000',
	color: '#fff',
	padding: '10px',
	textAlign: 'center'
}

export default Header;