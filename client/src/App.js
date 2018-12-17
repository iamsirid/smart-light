import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Widget from "./components/Widget";
import axios from "axios";
class App extends Component {
  state = {
    ledData: [
      {
        mode: 99,
        isOn: 99
      },
      {
        mode: 1,
        isOn: 0
      },
      {
        mode: 1,
        isOn: 0
      },
      {
        mode: 1,
        isOn: 0
      },
      {
        mode: 1,
        isOn: 0
      },
      {
        mode: 1,
        isOn: 0
      },
      {
        mode: 1,
        isOn: 0
      }
    ]
  };

  updateData = () => {
    axios
      .get(`/api/get/data`)
      .then(res => {
        console.log("updateData");
        this.setState(
          {
            ledData: res.data
          },
          () => {
            setTimeout(() => this.updateData(), 1000);
          }
        );
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  componentDidMount() {
    this.updateData();
  }
  render() {
    return (
      <div>
        <header>
          <h1 className="display-4 text-center">SMART LIGHT</h1>

          <hr />
        </header>
        <div className="container">
          <div className="row">
            <Widget
              ledId="1"
              isOn={this.state.ledData[1].isOn}
              mode={this.state.ledData[1].mode}
            />
            <Widget
              ledId="2"
              isOn={this.state.ledData[2].isOn}
              mode={this.state.ledData[2].mode}
            />
            <Widget
              ledId="3"
              isOn={this.state.ledData[3].isOn}
              mode={this.state.ledData[3].mode}
            />
            <Widget
              ledId="4"
              isOn={this.state.ledData[4].isOn}
              mode={this.state.ledData[4].mode}
            />
            <Widget
              ledId="5"
              isOn={this.state.ledData[5].isOn}
              mode={this.state.ledData[5].mode}
            />
            <Widget
              ledId="6"
              isOn={this.state.ledData[6].isOn}
              mode={this.state.ledData[6].mode}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
