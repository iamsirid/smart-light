import React, { Component } from "react";
import axios from "axios";
import "./Widget.css";
import lightOn from "../img/light-on.png";
import lightOff from "../img/light-off.png";

class Widget extends Component {
  // state = {
  //   mode: 1,
  //   isOn: 0,
  //   autoCheck: false
  // };
  // autocheckLEDOnOff = () => {
  //   // if (this.state.mode !== 2) {
  //   //   return;
  //   // }
  //   console.log("autocheckLEDOnOff");
  //   axios
  //     .get(`/api/get/led${this.props.ledId}`)
  //     .then(res => {
  //       this.setState(
  //         {
  //           autoCheck: true,
  //           isOn: parseInt(res.data[0].payload[res.data[0].payload.length - 1])
  //         },
  //         () => {
  //           setTimeout(
  //             () =>
  //               this.state.mode === 2
  //                 ? this.autocheckLEDOnOff()
  //                 : this.setState({ autoCheck: false }),
  //             2000
  //           );
  //         }
  //       );
  //     })
  //     .catch(err => {
  //       console.log(err.response.data);
  //     });
  // };
  // checkLEDOnOff = callback => {
  //   axios
  //     .get(`/api/get/led${this.props.ledId}`)
  //     // .get("/api/get/led1")
  //     .then(res => {
  //       // console.log("res.data:");
  //       // console.log(res.data);
  //       // console.log(res.data[0].payload);
  //       // console.log(res.data[0].payload[res.data[0].payload.length - 1]);
  //       this.setState(
  //         {
  //           isOn: parseInt(res.data[0].payload[res.data[0].payload.length - 1])
  //         },
  //         () => (callback ? callback() : null)
  //       );
  //     })
  //     .catch(err => {
  //       console.log(err.response.data);
  //     });
  // };

  // checkMode = callback => {
  //   axios
  //     .get(`/api/get/mode${this.props.ledId}`)
  //     .then(res => {
  //       this.setState(
  //         {
  //           mode: parseInt(res.data[0].payload[res.data[0].payload.length - 1])
  //         },
  //         () => (callback ? callback() : null)
  //       );
  //     })
  //     .catch(err => {
  //       console.log(err.response.data);
  //     });
  // };

  // componentDidMount() {
  //   this.checkLEDOnOff(() => this.checkMode(null));
  // }
  onTurnOnOff = toOn => {
    // console.log("eiei");

    let data = {};
    data[`LED${this.props.ledId}000${toOn}`] = "";
    axios
      .put("/api/invoke", data)
      .then(res => {
        console.log("res.data:");
        console.log(res.data);

        // this.checkLEDOnOff(null);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
  onSwitchMode = mode => {
    // console.log("eiei");

    let data = {};
    data[`MOD${this.props.ledId}000${mode}`] = "";
    axios
      .put("/api/invoke", data)
      .then(res => {
        console.log("res.data:");
        console.log(res.data);

        // this.checkMode(null);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
  render() {
    let onOffButton;
    let modeButton;
    if (this.props.mode === 1) {
      if (!this.props.isOn) {
        onOffButton = (
          <button
            className="btn btn-primary"
            onClick={() => this.onTurnOnOff(1)}
          >
            Turn on
          </button>
        );
      } else {
        onOffButton = (
          <button
            className="btn btn-danger"
            onClick={() => this.onTurnOnOff(0)}
          >
            Turn off
          </button>
        );
      }
      modeButton = (
        <button
          className="btn btn-warning"
          onClick={() => this.onSwitchMode(2)}
        >
          Switch to auto
        </button>
      );
    } else {
      modeButton = (
        <button
          className="btn btn-success"
          onClick={() => this.onSwitchMode(1)}
        >
          Switch to manual
        </button>
      );
      // if (!this.state.autoCheck) this.autocheckLEDOnOff();
    }
    return (
      // <div className="col-lg-4">
      //   <p>ID: {this.props.ledId}</p>
      //   <p>isOn: {this.state.isOn ? "On" : "Off"}</p>
      //   <p>mode: {this.state.mode}</p>
      //   {onOffButton}
      //   <br />
      //   {modeButton}
      // </div>
      <div className="col-lg-4 mb-5">
        <div className="col-item">
          <div className="photo" />
          <div className="info">
            <div className="row">
              <div className="price col-md-6">
                <h5>Light Number: {this.props.ledId}</h5>
              </div>
              <div className="rating  col-md-6">
                <h5
                  className={this.props.isOn ? "text-success" : "text-danger"}
                >
                  {this.props.isOn ? "ON" : "OFF"}{" "}
                  {this.props.mode === 2 ? " (AUTO)" : ""}
                </h5>
              </div>
            </div>
            <div className="separator clear-left row p-1">
              <div className="col-sm-6">
                <img
                  src={this.props.isOn ? lightOn : lightOff}
                  height="150"
                  width="150"
                />
              </div>
              <div className="col-sm-6">
                <div className="mt-4">{onOffButton}</div>
                <div className="mt-4">{modeButton}</div>
              </div>
            </div>

            <div className="clearfix" />
          </div>
        </div>
      </div>
    );
  }
}

export default Widget;
