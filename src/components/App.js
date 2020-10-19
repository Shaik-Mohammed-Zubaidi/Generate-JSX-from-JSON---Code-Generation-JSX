import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const givenData = {
      type: "div",
      name: "Clock",
      root: true,
      style: {
        display: "flex",
        "flex-direction": "row",
        "justify-content": "center"
      },
      children: [
        {
          type: "div",
          name: "Hour",
          style: {},
          children: []
        },
        {
          type: "span",
          name: "Minute",
          style: {
            color: "green",
            "font-size": 30
          },
          children: []
        }
      ]
    };
    return <></>;
  }
}

export default App;
