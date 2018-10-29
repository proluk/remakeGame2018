import React, { Component } from 'react'
import PropTypes from 'prop-types'
import heartIcon from './icons/heart-icon.png'
import swordIcon from './icons/sword-icon.png'
import shieldIcon from './icons/shield-icon.png'
import moneyIcon from './icons/money-icon.png'
import swordBonusIcon from './icons/sword-bonus-icon.png'
import shieldBonusIcon from './icons/shield-bonus-icon.png'

import {icons} from './helpers/iconPictures'

class Player extends Component {
    render = () => {
        const debuffs = this.props.player.debuffs.map((el,i )=> {
            return (
                <div className="Player__div" key={i}>
                    <img src={icons[el.icon]} />
                    <div className="Player__div__div">
                        <span className="Player__div__div__span">{el.name}</span> {el.description}
                    </div>
                </div>
            )
        })
        return (
            <div className="Player">
                <div className="Player__div">
                    <img src={heartIcon} className="Player__div__img"/>
                    <span className="Player__div__span">{this.props.player.health}</span>
                </div>            
                <div className="Player__div">
                    <img src={swordIcon}/>
                    <span className="Player__div__span">{this.props.player.attack + this.props.player.bonusStats.attack}</span>
                </div>
                <div className="Player__div">
                    <img src={shieldIcon}/>
                    <span className="Player__div__span">{this.props.player.defence + this.props.player.bonusStats.defence}</span>
                </div>
                {this.props.allStats ? [
                    <div className="Player__div" key={0}>
                        <img src={moneyIcon}/>
                        <span className="Player__div__span">{this.props.player.money}</span>
                    </div>,
                    <div className="Player__div" key={1}>
                        <img src={swordBonusIcon}/>
                        <span className="Player__div__span">{this.props.player.bonusStats.attack}</span>
                    </div>,
                    <div className="Player__div" key={2}>
                        <img src={shieldBonusIcon}/>
                        <span className="Player__div__span">{this.props.player.bonusStats.defence}</span>
                    </div>
                ] : null}
                <div style={{marginLeft:'5px',marginRight:'5px',opacity:0.5}}>
                    |
                </div>
                {debuffs}
            </div>

        )
    }
}

Player.propTypes = {
    player: PropTypes.object
}

export default Player