import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import bartender from './graphics/bartender.gif'

class Bartender extends Component{
    render = () => {
        return (
            <section className="Character">
                <figure className="Character__figure">
                    <img className="Character__figure__img" src={bartender} />
                </figure>
                <div className="Character__div">
                    I can get you anything. What do you need?
                </div>
                <nav className="Character__nav">
                    <NavLink className="Character__nav__NavLink" to="/game/equipment">Equipment</NavLink>
                </nav>
            </section>
        )
    }
}

export default Bartender