import React from 'react';
import './index.css';

export default class TodoApp extends React.Component {
    constructor(){
        super()
        this.state = {
            items:[
                {id: 0, name:'item 0', isDone:true},
                {id: 1, name:'item 1', isDone:true},
                {id: 2, name:'item 2', isDone:false}
            ],
            currentFilter:'All'
        }
    }

    addItem = () => {
        const newItem = {
            id: Date.now(),
            name: this.input.value,
            isDone: false
        }
        const newItems = this.state.items.concat(newItem)
        this.setState({
            items: newItems
        })
        this.input.value = '';
     }

    handleToggle = (id) => {
        console.log(id);
        const newItems = [];
        this.state.items.forEach(item => {
            if(item.id === id){
                item.isDone = !item.isDone;
                console.log(item.isDone)
            }
            newItems.push(item);
        });
        this.setState({items:newItems})
    }

    handleAll = () => {
        this.setState({currentFilter: "All"})
    }

    handleComplete = () => {
        this.setState({currentFilter: "Complete"})
    }

    handleIncomplete = () => {
        this.setState({currentFilter: "Incomplete"});
    }

    render(){
        const listItems = this.state.items.map((item) => {
                switch(this.state.currentFilter){
                    case "All":
                        break;
                    case "Complete":
                        if (!item.isDone) {
                            return null
                        }
                        break;
                    case "Incomplete":
                        if (item.isDone) {
                            return null
                        }
                        break;
                }
                return (
                    <li className={item.isDone ? "completed": "incompleted"}>
                        <input
                            type="checkbox"
                            checked={item.isDone}
                            onClick={() => {this.handleToggle(item.id)}}
                        />
                        <span>{item.name}</span>
                    </li>
                );
            }
        );

        return (
            <div id="container">
                <h1>Todo App</h1>
                <div className="add-item">
                    <input type="text" ref={(input) => {this.input = input;}} placeholder="Add an item" />
                    <button type="submit" onClick={this.addItem}>Add</button>
                </div>
                <ul>
                    {listItems}
                </ul>
                <div className="items-status">
                    <span onClick={this.handleAll}>All | </span>
                    <span onClick={this.handleIncomplete}>Incomplete | </span>
                    <span onClick={this.handleComplete}>Complete</span>
                </div>
            </div>
        );
    }
}