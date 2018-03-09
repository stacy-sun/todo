import React from 'react';

export default class TodoApp extends React.Component {
    constructor(){
        super()
        this.state = {
            items:[
                {id: 0, name:'item 0', isDone:false},
                {id: 1, name:'item 1', isDone:false},
                {id: 2, name:'item 2', isDone:false}
            ],
            id:'',
            name:'',
            isDone:false
        }
        this.addItem=this.addItem.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
    }

    addItem() {
        const newItem = {
            id: Date.now(),
            name:this.input.value,
            isDone:false
        }
        const newItems = this.state.items.concat(newItem)
        this.setState({
            items:newItems
        })
        this.input.value = '';
     }

    handleToggle(e){
        this.setState({
            isDone:e.target.checked
        })
    }


    render(){
        const items = this.state.items;
        const listItems = items.map((item) =>
            <li>
                <input
                type="checkbox" onClick={this.handleToggle} />
                <span>{item.name}</span>
            </li>
        );
        // const complete = this.state.items.filter(function (item) {
        //     return item.isDone;
        //   });

        return (
        <div>
            <h1>Todo App</h1>
            <input type="text" ref={(input) => {this.input = input;}} placeholder="Add an item" />
            <button type="submit" onClick={this.addItem}>Add</button>
            <ul>
                {listItems}
            </ul>
            <div>
                <span onClick={this.handleAll}>All | </span>
                <span onClick={this.handleIncomplete}>Incomplete | </span>
                <span onClick={this.handleComplete}>Complete</span>
            </div>
            {console.log('isDone:' + this.state.isDone)}

            {/* <div>
                <h1>Complete</h1>
                {complete}
            </div> */}
        </div>
        );
    }
}