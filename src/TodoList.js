import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		// maintaining the state that we create
		this.state= {
			items:[]
		};

		this.addItem = this.addItem.bind(this); //bind properly
		this.deleteItem = this.deleteItem.bind(this); //bind properly
	}
	
	// add method from onSubmit. e for event args. Call when the form is submitted
	addItem(e) {
		//creating a item
		if (this._inputElement.value !== "") {
			// object
			var newItem = {
				text: this._inputElement.value,
				key: Date.now() // precise number and unique value to ensure that multiple task has a unique value
			};

			this.setState((prevState) => { //prevState argument give value from specific object before the moment will be happen
				return{
					items: prevState.items.concat(newItem) // concat will return whole array to modify the existing one with a new enter item from _inputElement
				};
			});
			toast("Successfully created: " + this._inputElement.value);
		}
		else{
			this._inputElement.value = "";
			e.preventDefault(); //prevent not everything will be load
	}
}
	deleteItem(key) {
		var filteredItems = this.state.items.filter(function (item) {
			return (item.key !==key)
		}); 
		this.setState({
			items: filteredItems
		});
	}

	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<h1>Todo List</h1>
					<form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a} placeholder="Enter Tasks">
						</input>
						<button type="submit">Add</button>
					</form>
				</div>
				<TodoItems entries={this.state.items}
									 delete={this.deleteItem} /> 
			</div>
		);
	}
}

export default TodoList;