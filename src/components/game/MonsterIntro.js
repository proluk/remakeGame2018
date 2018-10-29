import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class MonsterIntro extends Component {
    render = () => {
        return (
            <section className="Character">
                <figure className="Character__figure">
                    <img className="Character__figure__img" src={this.props.monster.picture} />
                </figure>
                <div className="Character__div">
                    <span className="Character__div__span">{this.props.monster.name}</span>
                </div>
                <div className="Character__div">
                    {this.props.monster.line}
                </div>
                <nav className="Character__nav">
                    <div className="Character__nav__div" onClick={() => this.props.hide()}>Fight</div>
                    <NavLink className="Character__nav__NavLink" to='/game'>Go Back</NavLink>
                </nav>
            </section>
        )
    }
}

export default MonsterIntro