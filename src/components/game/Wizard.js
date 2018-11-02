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
                    Hay there!
                </div>
                <nav className="Character__nav">
                    <div className="Character__nav__div" onClick={() => this.props.playerLadyHeal()}>Heal</div>
                    <NavLink className="Character__nav__NavLink" to="/game/playerupgrade">Upgrade</NavLink>
                </nav>
            </section>
        )
    }
}

export default Wizard