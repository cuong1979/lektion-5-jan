import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import Name from './name';
import TodoItem from './todoItem';
import AddTodo from './addTodo';

//Måste alltid starta med en stor bokstav för att React ska veta att det är en komponent
//Parenteser efter return används för att kunna skriva på fler rader
class App extends Component {
    constructor(props) {
        super(props);
        console.log('this.props är: ', this.props);
        this.state = {
            todos:[
                {todo:'Köpa kaffe'},
                {todo:'Köpa kaka'},
                {todo:'Brygga kaffe'},
                {todo:'Fika'}
            ],
            latestTodo:''
        }
        this.uppdateLatestTodo = this.uppdateLatestTodo.bind(this);
    }

    uppdateLatestTodo(todo){
        this.setState({latestTodo: todo});
    }

    render() {
        return (
            <section className="wrapper">
                <h1>{ this.props.title }</h1>
                <ul className="todo-list">
                    <TodoItem text={this.state.todo[0]} done={false} />
                    <TodoItem text={this.state.todo[1]} done={true} />
                    <TodoItem text={this.state.todo[2]} done={false} />
                    <TodoItem text={this.state.todo[3]} done={false} />
                </ul>
                <AddTodo buttonText="Lägg till" uppdateState={this.uppdateLatestTodo} />
            </section>
        )
    }
}


ReactDOM.render(<App title="Todo" />, document.getElementById('root'));