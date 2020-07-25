import React, { Component } from "react";
import "./ipod.css";
import "../wheel/wheel.css";
import Screen from "../screen/Screen";
import Wheel from "../wheel/Wheel";

import { BrowserRouter as Router } from "react-router-dom";

class Ipod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "",
      action: 0,
      click: false,
      mainmenu: [
        {
          title: "CoverFlow",
          img: "cover.gif",
        },
        { title: "Radio", img: "radio.jpg" },
        { title: "Game", img: "dice.svg" },
        { title: "Settings", img: "settings.jpg" },
        { title: "Camera", img: "cam.png" },
      ],
      settingsmenu: [{ title: "About", img: "about.jpg" }],
      musicmenu: [
        { title: "Artists", img: "artists.jpg" },
        { title: "Albums", img: "cover.jpg" },
        { title: "Radio", img: "radio.jpg" },
      ],
      songmenu: [
        { title: "Believer", img: "Imagine-Dragons-Believer-art.jpg" },
        {
          title: "Blinding Lights",
          img: "2c3a5a203d30897358861ae85cb98144.jpg",
        },
        { title: "I Like Me Better", img: "31LQ6Zt38JL._SX342_QL70_ML2_.jpg" },
        {
          title: "Numb",
          img:
            "85-856806_old-mobile-cell-phone-smartphone-linkin-park-wallpapers.jpg",
        },
        { title: "Queen - BR", img: "7c2198f7da35e15000c7c498de50c8d3.png" },
        { title: "Sunflower", img: "sunflower.jpg" },
        { title: "Udd Gaye", img: "DPz0Oi1W4AALn-8.jpg" },
        {
          title: "Viva La Vida",
          img:
            "MV5BM2RkODI2ZjctNzIxZS00YTQ5LThhYzYtZGE1MDEyNzM1OGVjXkEyXkFqcGdeQXVyNTk1NTMyNzM@._V1_UY1200_CR437,0,630,1200_AL_.jpg",
        },
      ],
      artistmenu: [
        { title: "Imagine Dragons", img: "imagine-dragons-origins-2lp2.jpg" },
        { title: "The Weeknd", img: "fe1b6c5258881a683e5d192f5243bf2c.jpg" },
        { title: "Lauv", img: "Screenshot 2020-06-22 at 4.16.50 PM.png" },
        { title: "Linkin Park", img: "tumblr_plgaf0cqhO1upcvga_640.jpg" },
        { title: "Queen", img: "f5bfdb0e7f757dc98f2b4a617876322d.jpg" },
        { title: "Post Malone", img: "Dkln9OEWwAMkO8w.jpg" },
        {
          title: "Ritviz",
          img: "ritviz__by_deadsoulartist_dcs1rg3-fullview.jpg",
        },
        { title: "Coldplay", img: "dc1efab6e3568f8c3e77090223ca20dd.jpg" },
      ],
      cssProperties: {},
    };
    this.getActionFromWheel = this.getActionFromWheel.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  getActionFromWheel(act) {
    this.setState({
      action: act,
    });
  }

  buttonClicked() {
    this.setState({
      click: true,
    });
  }

  changeTheme(thm) {
    this.setState({
      cssProperties: thm,
    });
  }

  render() {
    return (
      <Router>
        <div className="bodyy" style={this.state.cssProperties}>
          <div className="ip">
            <Screen
              act={this.state.action}
              artistmenu={this.state.artistmenu}
              songmenu={this.state.songmenu}
              click={this.state.click}
              mainmenu={this.state.mainmenu}
              musicmenu={this.state.musicmenu}
              settingsmenu={this.state.settingsmenu}
              thm={(thm) => this.changeTheme(thm)}
            />
            <Wheel
              childFunc={this.getActionFromWheel}
              buttonClicked={this.buttonClicked}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default Ipod;
