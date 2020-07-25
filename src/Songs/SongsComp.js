import React, { Component } from "react";
import "./songsComp.css";

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    };

    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    this.audio = new Audio(this.url);
  }

  componentWillUnmount() {
    this.audio.removeEventListener("ended", () =>
      this.setState({ play: false })
    );
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };

  render() {
    return (
      <div>
        <div className="top-div" style={{ borderRadius: "15px 15px 0px 0px" }}>
          Radio
          <img alt="" className="battery" src="battery.svg"></img>
          {this.state.play ? (
            <img alt="" className="play" src="pause.svg"></img>
          ) : (
            <img alt="" className="play" src="play.svg"></img>
          )}
        </div>
        <div
          className="radio-div"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "242px",
            width: "100%",
          }}
        >
          <img
            alt=""
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "0px 0px 15px 15px",
              overflow: "hidden",
            }}
            src="24902871.jpg"
          ></img>
          {/* <h1>Radio</h1> */}
          {/* {(this.state.play?<img alt='' className='play3' src='pause.svg'></img>:<img alt='' className='play3' src='play.svg'></img>)} */}
          <button className="music-btn" onClick={this.togglePlay}>
            <img alt="" style={{ height: "13px" }} src="play_pause.svg"></img>
          </button>
        </div>
      </div>
    );
  }
}

export default Radio;
