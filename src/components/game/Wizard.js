import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import wizard from './graphics/wizard.gif'

class Wizard extends Component{
    render = () => {
        return (
            <section className="Character">
                <figure className="Character__figure">
                    <img className="Character__figure__img" src={wizard} />
                </figure>
                <div className="Character__div">
                    Hay there! Are you ready for a little fight?
                </div>
                <nav className="Character__nav">
                    {this.props.player.health > 0 ?
                    <NavLink className="Character__nav__NavLink"  to={`/game/fight/${this.props.game.level}`}>Fight</NavLink>
                    : <span>You must have some health to fight</span>}
                    
                </nav>
            </section>
        )
    }
}

export default Wizard