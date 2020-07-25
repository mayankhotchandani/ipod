import React, { Component } from "react";
import Webcam from "react-webcam";

class Cameras extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user",
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={240}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={341}
          videoConstraints={videoConstraints}
        />
        {/* <button onClick={this.capture}>Capture photo</button> */}
      </div>
    );
  }
}

export default Cameras;
