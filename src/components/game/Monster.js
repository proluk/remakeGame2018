import React, { Component } from 'react'
import PropTypes from 'prop-types'
import heartIcon from './icons/monster-heart-icon.png'
import swordIcon from './icons/sword-icon.png'
import shieldIcon from './icons/shield-icon.png'

import {icons} from './helpers/iconPictures'

class Monster extends Component {
    
    render = () => {
        const debuffs = this.props.monster.debuffs.map((el,i )=> {
            return (
                <div className="Monster__div" key={i}>
                    <img src={icons[el.icon]} />
                    <div className="Monster__div__div">
                        <span className="Monster__div__div__span">{el.name}</span> {el.description}
                    </div>
                </div>
            )
        })
        return (
            <div className="Monster">
                <div className="Monster__div">
                    <img src={heartIcon}/>
                    <span className="Monster__div__span">{this.props.monster.health}</span>
                </div>            
                <div className="Monster__div">
                    <img src={swordIcon}/>
                    <span className="Monster__div__span">{this.props.monster.attack + this.props.monster.bonusStats.attack}</span>
                </div>
                <div className="Monster__div">
                    <img src={shieldIcon}/>
                    <span className="Monster__div__span">{this.props.monster.defence + this.props.monster.bonusStats.defence}</span>
                </div>
                <div style={{marginLeft:'5px',marginRight:'5px',opacity:0.5}}>
                    |
                </div>
                {debuffs}          
            </div>
        )
    }
}

Monster.propTypes = {
    monster: PropTypes.object
}

export default Monster