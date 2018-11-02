import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import warrior from './graphics/warrior.gif'
import FightPick from './FightPick';

class Warrior extends Component{
    render = () => {
        return (
            <section className="Character">
                <section className="Warrior">
                    <div>
                        <figure className="Character__figure Warrior__figure">
                            <img className="Character__figure__img" src={warrior} />
                        </figure>
                        <span className="Warrior__span">Pick monster you want to fight with</span>
                    </div>
                    <FightPick {...this.props} />          
                </section>
            </section>
        )
    }
}

export default Warrior