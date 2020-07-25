import React, { Component } from 'react'
import './rightScreen.css'

class RightScreen extends Component {
    render() {
        let max = this.props.mainmenu.length-1, ch = 0;
        ch += this.props.act
        if(ch>max){
            ch = max
        }
        else if(ch<0){
            ch = 0
        }
        return (
            <div className="r-sc">
                <img alt='' className="right-img" src={this.props.mainmenu[ch].img}></img>
            </div>
        )
    }
}

export default RightScreen
