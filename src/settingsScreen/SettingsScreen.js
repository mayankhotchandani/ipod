import React, { Component } from "react";
import LeftScreen from "../leftScreen/LeftScreen";
import "./SettingsScreen.css";
import "../Ipod/ipod.css";

class SettingsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      ipodClicked: false,
    };
  }

  getipod(st) {
    this.setState({
      ipodClicked: st,
    });
  }

  getbackground(st) {
    this.setState({
      isClicked: st,
    });
  }

  render() {
    let cssProperties = {};
    if (this.state.isClicked) {
      cssProperties["--bgcolor"] = "white";
    }
    if (this.state.ipodClicked) {
      cssProperties["--ipodcolor"] =
        "linear-gradient(to bottom, #787678 0%, #353536 100%)";
      cssProperties["--wheelbutton"] = "#4d4c4e";
      cssProperties["--wheelcolor"] = "#2f2f2f";
    }

    return (
      <div className="setting-ls">
        <LeftScreen
          act={this.props.act}
          click={this.props.click}
          mainmenu={this.props.settingsmenu}
        />
      </div>
    );
  }
}

export default SettingsScreen;
