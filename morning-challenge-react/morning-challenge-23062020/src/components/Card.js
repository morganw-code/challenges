import React from "react";
import CardInfo from "./CardInfo";
import CardDescription from "./CardDescription";

export default class Card extends React.Component {
  render() {
    return (
    <>
      <CardInfo />
      <CardDescription />
    </>
    );
  }
}
