import React from "react";
import TodoItem from "./components/TodoItem";

export default class App extends React.Component {
  render() {
    return (
      <TodoItem title="Hello" />
    );
  }
}
