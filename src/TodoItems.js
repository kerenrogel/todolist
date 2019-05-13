import React,  { Component } from "react";
import FlipMove from "react-flip-move";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TodoItems extends Component {
	constructor(props) {
		super(props);
		this.createTasks = this.createTasks.bind(this);
	}

	createTasks(item) {
		return <li onClick={() => this.delete(item.key, item.text)}
								key={item.key}>{item.text}</li>		
	}

	delete(key, text) {
		this.props.delete(key);
		toast("Deleted: " + text, {
			hideProgressBar: false
		});
	}
	r
	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return (
			<ul className="theList">
				<FlipMove duration={150} easing="ease-out">
					{listItems}
				</FlipMove>
				<ToastContainer hideProgressBar={false} />
			</ul>
		);
	}
}

export default TodoItems;