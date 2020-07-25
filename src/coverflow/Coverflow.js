// import React from 'react'
// import Coverflow from 'react-coverflow';
// import './coverflow.css'
// // import { StyleRoot } from 'radium';

// const fn = function () {
//   /* do your action */
//   Coverflow.active = 3
//   console.log('hi')
// }

// function Coverfloww() {
//   const myStyle = {
//           display: 'block',
//           // width: '100px',
//           // height: '80px',
//           // overflow: 'visible'
//   }
//     return (
//         <div>
//           <Coverflow
//               width={340}
//               height={270}
//               displayQuantityOfSide={1}
//               navigation={false}
//               enableScroll={false}
//               enableHeading={false}
//               // clickable={true}
//               active={5}
//           >
//     <div
//       onClick={() => fn()}
//       onKeyDown={() => fn()}
//       role="menuitem"
//       tabIndex="0"
//     >
//       <img
//         src='coverArt/R-10559651-1503610834-7229.png.jpg'
//         alt=''
//         style={myStyle}
//       />
//     </div>
//     <img style={myStyle} src='coverArt/R-1873013-1471100381-3022.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-367084-1263095553.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-226082-1239894271.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-376152-1124751661.jpg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-383777-1173543359.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-459606-1450389425-8852.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-463597-1560369536-8302.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-1934367-1383908438-4175.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-2607424-1298729076.jpeg.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     <img style={myStyle} src='coverArt/R-10559651-1503610834-7229.png.jpg' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
//     {/* <img style={myStyle} src='coverArt/' alt='' data-action="http://andyyou.github.io/react-coverflow/"/> */}

//   </Coverflow>
//         </div>
//     )
// }

// export default Coverfloww

import React, { Component } from "react";
import Coverflow from "react-coverflow";
import "./coverflow.css";

// const fn = function () {
//   /* do your action */
//   Coverflow.active = 3
//   console.log('hi')
// }

class Coverfloww extends Component {
  constructor(props) {
    super(props);

    this.state = {
      act: 0,
      play: false,
      pause: true,
      url: [
        "1.mp3",
        "2.mp3",
        "3.mp3",
        "4.mp3",
        "5.mp3",
        "6.mp3",
        "7.mp3",
        "8.mp3",
      ],
      time: 0,
      ind: 0,
      pind: 0,
      dur: 0,
      total: 10,
      chng: false,
      first: true,
    };
    this.fn = this.fn.bind(this);
    this.url = this.state.url[4];
    this.audio = new Audio(this.url);
    this.changetime = this.changetime.bind(this);
  }

  fn() {
    if (
      this.state.act + this.props.act >= 0 &&
      this.state.act + this.props.act < 9
    ) {
      this.setState({
        act: this.state.act + this.props.act,
      });
    }
    return this.props.act;
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.changetime(), 1000);
  }

  changetime() {
    if (this.audio.currentTime === 0 && !this.state.play) {
      this.setState({
        total: 10,
      });
    }
    if (this.audio.currentTime === this.audio.duration) {
      this.setState({
        total: 10,
        time: 0,
      });
    }
    // if((this.audio.currentSrc.substring(this.audio.currentSrc.lastIndexOf('/')+1)).replace(/%20/g,' ') !== this.state.url[this.props.act] && this.state.play){
    //   this.togglePlay()
    // }
    if (this.state.play && this.audio.currentTime !== 0)
      this.setState({
        time: parseInt(this.audio.currentTime),
        total: this.state.total + 275 / this.audio.duration,
      });

    // this.audio.removeEventListener('ended', () => this.setState({ play: false }));
    // this.url = this.state.url[this.state.ind];
    // this.audio = Audio(this.url);
  }

  componentWillUnmount() {
    this.audio.removeEventListener("ended", () =>
      this.setState({ play: false })
    );
    clearInterval(this.intervalID);
    // console.log('bye')
  }

  togglePlay = () => {
    if (
      this.audio.currentSrc
        .substring(this.audio.currentSrc.lastIndexOf("/") + 1)
        .replace(/%20/g, " ") !== this.state.url[this.props.act] &&
      (this.props.act !== 4 && this.props.act !== 0
        ? true
        : this.state.first
        ? false
        : true)
    ) {
      this.audio.src = this.state.url[this.props.act];
      // console.log(this.props.act,'changed',(this.audio.currentSrc.substring(this.audio.currentSrc.lastIndexOf('/'))).replace(/%20/g,' '),this.state.url[this.props.act])
    }
    this.setState({ play: !this.state.play }, () => {
      this.state.first = false;
      this.state.play ? this.audio.play() : this.audio.pause();
    });
    // console.log(this.audio.duration)
  };

  onMusicSelect(name) {
    this.setState({
      pind: this.state.ind,
      ind: name,
    });

    // this.audio.removeEventListener('ended', () => this.setState({ play: false }));
    // console.log(this.state.ind)
  }

  // componentDidUpdate(prevProps) {
  //   if(this.state.act + this.props.act >= 0 && this.state.act + this.props.act <9){
  //     this.setState({
  //       act: this.state.act + this.props.act
  //     })
  //   }
  //  }
  //   componentWillReceiveProps(props) {
  //     if(this.state.act!==NaN)
  //     if(this.state.act + props.act >= 0 && this.state.act + props.act <9 && this.state.act !== this.state.act +props.act){
  //     this.setState({act: this.state.act + props.act});
  //     console.log(this.state.act)}
  // }
  render() {
    const myStyle = {
      display: "block",
      // width: '100px',
      // height: '80px',
      // overflow: 'visible'
    };

    // const scrub = {
    //   marginLeft:`300`
    // }

    // let min = 0, sec =0;
    // sec = parseInt(this.state.time%60)
    // min = parseInt(this.state.time/60)
    // if(chn<9&&chn<chn+1)
    return (
      <div>
        <div
          className="top-div"
          style={{
            borderRadius: "15px 15px 0px 0px",
            position: "absolute",
            width: "340px",
            zIndex: "200",
            height: "26px",
          }}
        >
          Cover Flow
          <img alt="" className="battery" src="battery.svg"></img>
          {this.state.play ? (
            <img alt="" className="play2" src="pause.svg"></img>
          ) : (
            <img alt="" className="play2" src="play.svg"></img>
          )}
        </div>
        {/* <p style={{position:"absolute",zIndex:"100",margin:"0",marginLeft:"303px",marginTop:"240px",color:"gray"}}>{min}:{sec<10?`0`:``}{sec}</p> */}
        {/* <img alt=''  className='scrub' style={{transitionProperty:"margin-left",  marginLeft:`${this.state.total}px`}} src='scrubber.svg'></img> */}
        {/* <div className="over"></div> */}

        <Coverflow
          width={340}
          height={268}
          active={this.props.act}
          displayQuantityOfSide={1}
          navigation={false}
          enableScroll={false}
          enableHeading={false}
          clickable={false}
        >
          {/* <div
            onClick={this.fn}
            // onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            <img
              src='coverArt/R-10559651-1503610834-7229.png.jpg'
              alt=''
              style={myStyle}
            />
          </div> */}
          <img style={myStyle} src="cover/love_me_again.png" alt="" />
          <img
            style={myStyle}
            src="cover/The_Weeknd_-_Blinding_Lights.png"
            alt=""
          />
          <img style={myStyle} src="cover/panda.png" alt="" />
          <img style={myStyle} src="cover/shoot.png" alt="" />
          <img style={myStyle} src="cover/callme.png" alt="" />
          <img style={myStyle} src="cover/perfect.png" alt="" />
          <img style={myStyle} src="cover/succer.png" alt="" />
          <img style={myStyle} src="cover/bf.png" alt="" />
          {/* <img style={myStyle} src='coverArt/R-2607424-1298729076.jpeg.jpg' alt=''/>
          <img style={myStyle} src='coverArt/R-10559651-1503610834-7229.png.jpg' alt=''/> */}
          {/* <img style={myStyle} src='coverArt/' alt='' data-action="http://andyyou.github.io/react-coverflow/"/> */}
        </Coverflow>
        {/* <div style={{position:"absolute",margin:"0",height:"10px",width:"10px",marginLeft:"200px",marginBottom:"200px"}}></div> */}
        <button
          style={{
            position: "absolute",
            margin: "0",
            marginTop: "233px",
            marginLeft: "144px",
            border: "none",
            backgroundColor: "white",
            outline: "none",
          }}
          className="music-btn"
          onClick={this.togglePlay}
        >
          <img alt="" style={{ height: "13px" }} src="play_pause.svg"></img>
        </button>
      </div>
    );
  }
}

export default Coverfloww;
