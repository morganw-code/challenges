import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addTodo: this.props.addTodo
    }
  }
  render() {
    return (
      <input
        type="text"
        onKeyUp={(event) => {
          if (event.keyCode === 13) {
            this.props.addTodo(event);
          }
        }}
      />
    );
  }
}
