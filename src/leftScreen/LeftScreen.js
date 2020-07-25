import React, { Component } from "react";
import "./leftScreen.css";
import NavComp from "../navComp/NavComp";
import RightScreen from "../rightScreen/RightScreen";

class leftScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nm: "",
      play: false,
      mus: true,
    };
  }

  render() {
    // let l = this.props.mainmenu.filter((el,ind)=>el===ind?el:null)
    return (
      <div className="tot-sc">
        <div className="l-s-container">
          <div className="top-div">
            iPod
            <img alt="" className="battery" src="battery.svg"></img>
            {this.props.mus ? (
              this.props.play ? (
                <img alt="" className="play" src="pause.svg"></img>
              ) : (
                <img alt="" className="play" src="play.svg"></img>
              )
            ) : (
              ""
            )}
          </div>
          <div className="nav-div">
            <div>
              <NavComp
                getSongIndex={this.props.getSongIndex}
                onSelect={this.props.onSelect}
                act={this.props.act}
                click={this.props.click}
                mainmenu={this.props.mainmenu}
                thm={this.props.thm}
              />
            </div>
          </div>
        </div>
        <RightScreen mainmenu={this.props.mainmenu} act={this.props.act} />
      </div>
    );
  }
}

export default leftScreen;
