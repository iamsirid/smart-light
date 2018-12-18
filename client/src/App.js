import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Widget from "./components/Widget";
import axios from "axios";
class App extends Component {
  state = {
    isNull: true,
    ledData: [
      {
        mode: null,
        isOn: null
      },
      {
        mode: null,
        isOn: null
      },
      {
        mode: null,
        isOn: null
      },
      {
        mode: null,
        isOn: null
      },
      {
        mode: null,
        isOn: null
      },
      {
        mode: null,
        isOn: null
      },
      {
        mode: null,
        isOn: null
      }
    ]
  };

  updateData = () => {
    const setStateAndLoop = data => {
      this.setState(
        {
          ledData: data
        },
        () => {
          setTimeout(() => this.updateData(), 1000);
        }
      );
    };
    axios
      .get(`/api/get/data`)
      .then(res => {
        console.log("updateData");
        console.log(res.data);
        let haveNull = false;
        res.data.foreach(e => {
          if (e.mode == null) haveNull = true;
        });
        if (haveNull) {
          let data = {};
          data[`MOD60001`] = "";
          axios
            .put(
              "https://api.netpie.io/topic/JamebadboySmartHome/gearname/pieled?retain&auth=Fk0ypUis5lhwpnF:DDPv4N8qG1QbcEpOP7Xyg369l",
              data
            )
            .then(res2 => {
              console.log("res.data:");
              console.log(res2.data);
              setStateAndLoop(res.data);

              // this.checkMode(null);
            })
            .catch(err => {
              console.log(err.response.data);
            });
        } else {
          setStateAndLoop(res.data);
        }
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
