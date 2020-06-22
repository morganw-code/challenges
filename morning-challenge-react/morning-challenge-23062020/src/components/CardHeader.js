import React from "react";

export default class CardHeader extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">Space Force</h1>
        <div className="metadata">
          <div>99% Match</div>
          <div>2020</div>
          <div class="rating">M</div>
          <div>1 Season</div>
        </div>
      </>
    );
  }
}
