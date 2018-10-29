import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import lady from './graphics/lady.gif'

class Lady extends Component{
    render = () => {
        return (
            <section className="Character">
                <figure className="Character__figure">
                    <img className="Character__figure__img" src={lady} />
                </figure>
                <div className="Character__div">
                    Hello Honey, what do you need?
                </div>
                <nav className="Character__nav">
                    <div className="Character__nav__div" onClick={() => this.props.playerLadyHeal()}>Heal</div>
                </nav>
            </section>
        )
    }
}

export default Lady