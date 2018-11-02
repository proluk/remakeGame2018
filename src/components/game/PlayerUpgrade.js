import React, {Component} from 'react'
import PlayerPicture from './graphics/player.gif'
import heartIcon from './icons/heart-icon.png'
import swordIcon from './icons/sword-icon.png'
import shieldIcon from './icons/shield-icon.png'
import moneyIcon from './icons/money-icon.png'
import {NavLink} from 'react-router-dom'

class PlayerUpgrade extends Component {
    buy = (stat) => {
        if ( this.props.player.money >= this.props.player.upgrades[stat] * 10) {
            this.props.playerBuyStat(stat);
        } else {
            console.log('not enough money')
        }
    }
    render = () => {
        return (
            <main className="PlayerUpgrade">
                <header className="PlayerUpgrade__header">
                    <img src={moneyIcon}  className="PlayerUpgrade__header__img"/>
                    {this.props.player.money}
                </header>
                <section className="PlayerUpgrade__section">
                    <ul className="PlayerUpgrade__section__ul">
                        <li className="PlayerUpgrade__section__ul__li">
                            <img className="PlayerUpgrade__section__ul__li__img" src={heartIcon} />
                            <span className="PlayerUpgrade__section__ul__li__span">{this.props.player.maxHealth}</span>
                            <p className="PlayerUpgrade__section__ul__li__p">
                                Max Health Lv: {this.props.player.upgrades.maxHealth}
                            </p>
                            <div className="PlayerUpgrade__section__ul__li--click" onClick={() => this.buy('maxHealth')}>
                                <img src={moneyIcon} />
                                {this.props.player.upgrades.maxHealth * 10}
                            </div>
                        </li>
                        <li className="PlayerUpgrade__section__ul__li">
                        <img className="PlayerUpgrade__section__ul__li__img" src={swordIcon} />
                            <span className="PlayerUpgrade__section__ul__li__span">{this.props.player.attack}</span>
                            <p className="PlayerUpgrade__section__ul__li__p">
                                Attack Lv: {this.props.player.upgrades.attack}
                            </p>
                            <div className="PlayerUpgrade__section__ul__li--click" onClick={() => this.buy('attack')}>
                                <img src={moneyIcon} />
                                {this.props.player.upgrades.attack * 10}
                            </div>
                        </li>
                        <li className="PlayerUpgrade__section__ul__li">
                        <img className="PlayerUpgrade__section__ul__li__img" src={shieldIcon} />
                            <span className="PlayerUpgrade__section__ul__li__span">{this.props.player.defence}</span>
                            <p className="PlayerUpgrade__section__ul__li__p">
                                Defence Lv: {this.props.player.upgrades.defence}
                            </p>
                            <div className="PlayerUpgrade__section__ul__li--click" onClick={() => this.buy('defence')}>
                                <img src={moneyIcon} />
                                {this.props.player.upgrades.defence * 10}
                            </div>
                        </li>
                    </ul>
                </section>
                <nav className="PlayerUpgrade__nav">
                    <NavLink  className="PlayerUpgrade__nav--click" to="/game">Close Upgrade</NavLink>
                </nav>
            </main>
        )
    }
}

export default PlayerUpgrade