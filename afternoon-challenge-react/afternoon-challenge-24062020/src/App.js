import React from "react";
import TodoItem from "./components/TodoItem";

export default class App extends React.Component {
  todoItems = ["walk doge", "smack bin chickens", "win kahoot"];
  render() {
    return (
      <>
        {this.todoItems.map((todo) => {
          return <TodoItem title={todo} />;
        })}
      </>
    );
  }
}
