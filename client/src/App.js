import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Widget from "./components/Widget";
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="display-4 text-center">SMART LIGHT</h1>

          <hr />
        </header>
        <div className="container">
          <div className="row">
            <Widget ledId="1" />
            <Widget ledId="2" />
            <Widget ledId="3" />
            <Widget ledId="4" />
            <Widget ledId="5" />
            <Widget ledId="6" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
