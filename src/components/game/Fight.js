import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Monster from './Monster'
import Player from './Player'
import PlayerPicture from './graphics/player.gif'
import Popup from './Popup'
import attackAction from './graphics/attack-action.gif'
import defenceAction from './graphics/defence-action.gif'
import magicAction from './graphics/magic-action.gif'
import MonsterIntro from './MonsterIntro'

const actionToMagic = {
    attack: attackAction,
    defence: defenceAction,
    magic: magicAction,
}

class Fight extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    actionSet = (action) => {
        this.props.playerActionSet(action)
        this.props.monsterActionSet()
        this.props.gameResolveRound()
        this.hidePickActionPopup()
    }
    showMonsterPopup = () => {
        this.props.gameMonsterIntroShow();
    }
    showPickActionPopup = () => {
        this.props.gamePickActionPopupShow();
    }
    showRoundResolvePopup = () => {
        this.props.gameRoundResolvePopupShow();
    }
    hideMonsterPopup = () => {
        this.props.gameMonsterPopupHide();
        this.showPickActionPopup();
    }
    hidePickActionPopup = () => {
        this.props.gamePickActionPopupHide();
        this.showRoundResolvePopup();
    }
    hideRoundResolvePopup = () => {
        this.props.gameRoundResolvePopupHide();
    }
    render = () => {
        return (
            <section className="Fight">
                <Monster {...this.props} />
                <Player {...this.props} />
                <Popup open={this.props.game.showMonster}>
                {/* monster intro */}
                <MonsterIntro {...this.props} hide={this.hideMonsterPopup} />
                </Popup>
                <Popup open={this.props.game.showPickAction}>
                {/* pick action and hide popup */}
                    <section className="Fight__section">
                        <header className="Fight__section__header">
                            Pick your Action
                        </header>
                        <ul className="Fight__section__ul">
                            <li onClick={() => this.actionSet('attack')} className="Fight__section__ul__li">
                                <figure className="Fight__section__ul__li__figure">
                                    <img src={attackAction} className="Fight__section__ul__li__figure__img"/>
                                </figure>
                                <span className="Fight__section__ul__li__span">Attack</span>
                            </li>
                            <li onClick={() => this.actionSet('defence')} className="Fight__section__ul__li">
                                <figure className="Fight__section__ul__li__figure">
                                    <img src={defenceAction} className="Fight__section__ul__li__figure__img" />
                                </figure>
                                <span className="Fight__section__ul__li__span">Defence</span>
                            </li>
                            <li onClick={() => this.actionSet('magic')} className="Fight__section__ul__li">
                                <figure className="Fight__section__ul__li__figure">
                                    <img src={magicAction} className="Fight__section__ul__li__figure__img" />
                                </figure>
                                <span className="Fight__section__ul__li__span">Magic</span>
                            </li>
                        </ul>
                        <footer className="Fight__section__footer">
                            Attack beats Magic. Magic beats Defence. Defence beats Attack. 
                        </footer>
                </section>
                </Popup>
                <Popup open={this.props.game.showRoundResolve}>
                {/* show popup, draw result, show winner, hide popup */}
                <section className="Fight__section">
                    <ul className="Fight__section__ul">
                        <li className="Fight__section__ul__li">
                            <figure className="Character__figure">
                                <img className="Character__figure__img" src={this.props.monster.picture} />
                            </figure>
                        </li>
                        <li className="Fight__section__ul__li">
                            <figure className="Fight__section__ul__li__figure">
                                <img src={actionToMagic[this.props.monster.action]} />
                            </figure>
                            
                            <span className="Fight__section__ul__li__span">{this.props.monster.action}</span>
                        </li>
                        <li className="Fight__section__ul__li">
                        vs
                        </li>
                        <li className="Fight__section__ul__li">
                            <figure className="Fight__section__ul__li__figure">
                                <img src={actionToMagic[this.props.player.action]} />
                            </figure>
                            
                            <span className="Fight__section__ul__li__span">{this.props.player.action}</span>
                        </li>
                        <li className="Fight__section__ul__li">
                            <figure className="Character__figure">
                                <img className="Character__figure__img" src={PlayerPicture} />
                            </figure>
                        </li>
                    </ul>
                </section>
                </Popup>
                <Popup open={this.props.game.roundEnd}>
                    {this.props.game.winner && 
                        <section className="Fight__section">
                        <ul className="Fight__section__ul">
                            <li className="Fight__section__ul__li">
                            <span className="Fight__section__ul__li__span">Winner!</span>
                            <figure className="Character__figure">
                                <img className="Character__figure__img" src={this.props.game.winner === 'player' ? PlayerPicture : this.props.monster.picture} />
                            </figure>
                            <div onClick={() => {
                                this.props.gameMonsterIntroShow();
                                this.props.gameRoundEndPopupHide();
                                this.props.history.push('/game');
                            }} className="Fight__section--click">Go back to Tavern</div> 
                            </li>
                        </ul>                           
                        </section>
                    }
                </Popup>
            </section>
        )
    }
}

export default Fight