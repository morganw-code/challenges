import React from "react";
import Input from "./components/Input";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  addTodo(event) {
    const todos = this.state.todos;
    todos.push(event.target.value);
    this.setState({ todos: todos });
    event.target.value = '';
  }

  render() {
    return (
      <>
        <Input addTodo={this.addTodo.bind(this)} />
        {this.state.todos.map((todo) => {
          return <p>{todo}</p>;
        })}
      </>
    );
  }
}
