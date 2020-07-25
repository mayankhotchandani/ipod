import React, { Component } from 'react'
import './gameComp.css'

class GamesComp extends Component {
    render() {
        return (
            <div className="games-screen">
                <h2>Games</h2>
                <img className="dice" src="dice.svg"></img>
            </div>
        )
    }
}

export default GamesComp
