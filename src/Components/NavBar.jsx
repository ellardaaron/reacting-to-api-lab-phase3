import React, { Component } from 'react'
import Ghibli from './ghibli.png'

function NavBar (props) {
  
        return (
            <div>
                <img src={Ghibli} alt={"hmm not sure where that went"}></img>
                <button onClick={() => props.loadPeople()}>Load People</button>
                <button onClick={() => props.loadFilms()}>Load Films</button>
            </div>
        )
    
}

export default NavBar
