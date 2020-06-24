import React from "react";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      completed: false
    }
  }

  getStyle() {
    return {
      textDecoration: this.state.completed ? "line-through" : "none" 
    };
  }
  
  render() {
    return(
      <p style={this.getStyle()}>{this.state.title}</p>
    );
  }
}
