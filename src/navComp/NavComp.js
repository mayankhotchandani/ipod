import React, { Component } from "react";
import "./navComp.css";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
class NavComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: this.props.mainmenu,
      isClicked: false,
      ipodClicked: false,
      show: false,
    };
    this.changeBg = this.changeBg.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      if (this.props.onSelect) {
        return this.props.onSelect(this.props.act);
      }
    }, 1000);
  }

  //   changetime(){
  //     this.setState({
  //         time: parseInt(this.audio.currentTime)
  //     })
  //   }

  componentWillUnmount() {
    // this.audio.removeEventListener('ended', () => this.setState({ play: false }));
    clearInterval(this.intervalID);
  }
  changeBg() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    // console.log(this.state.listItems)

    // let cssProperties = {}
    // if (this.state.isClicked) {
    //  cssProperties['--bgcolor'] = 'white'
    // }
    // if (this.state.ipodClicked) {
    //     cssProperties['--ipodcolor'] = 'linear-gradient(to bottom, #787678 0%, #353536 100%)'
    //     cssProperties['--wheelbutton'] = '#4d4c4e'
    //     cssProperties['--wheelcolor'] = '#2f2f2f'
    // }

    let max = this.state.listItems.length - 1,
      ch = 0;
    let ch2 = this.props.click;
    ch += this.props.act;
    if (ch > max) {
      ch = max;
    } else if (ch < 0) {
      ch = 0;
    }
    let l = this.state.listItems.filter((el, ind) => (ch === ind ? el : null));
    // console.log(l)
    if (
      ch2 === true &&
      l[0] !== "Background" &&
      l[0] !== "iPod Colour" &&
      window.location.pathname !== "/Artists"
    ) {
      if (ch2 === true && window.location.pathname === "/Albums") {
        this.props.getSongIndex(ch);
        window.location = `/Albums/${ch}`;
      } else window.location = `/${l[0].title}`;
      // this.props.onSelect(l)
      // console.log('hi')
    } else {
      ch2 = false;
      //    console.log('bye')
    }

    let listIt = this.state.listItems.map((el, ind) => (
      <div className={`nav-el ${ch === ind ? "active" : ""}`}>
        <div className="txt">
          {el.title}
          <img alt="" className="r-arrow" src="arrow_right.svg"></img>
        </div>
      </div>
    ));
    // console.log(l)
    return (
      <div sel={() => this.props.onSelect(l)}>
        {listIt}
        {() => this.props.onSelect(l)}
        {/* {this.state.show && <SongScreen/>}   */}
        {/* <Route path={`/Adhi%20Adhi%20Raat`} exact strict render><SongScreen l={l}/></Route> */}
        {/* {this.state.show?<Route path={`/Playing`} exact strict render><Playing l={10}/></Route>:''} */}
      </div>
    );
  }
}

export default NavComp;
