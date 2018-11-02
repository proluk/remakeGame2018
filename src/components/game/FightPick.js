import React, {Component} from 'react'
import {pictures} from './../../actions/helpers/monsterCreateHelper'
import prevIcon from './icons/prev-icon.gif'
import nextIcon from './icons/next-icon.gif'

class FightPick extends Component{
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.game.level
        }
    }
    fight = () => {
        this.props.monsterCreate(this.state.level);
        this.props.history.push(`/game/fight/${this.state.level}`);
    }
    prevMonster = () => {
        this.setState({
            level:this.state.level - 1
        })
    }
    nextMonster = () => {
        this.setState({
            level:this.state.level + 1
        })
    }
    render = () => {
        const pic = this.state.level >= pictures.length - 1 ? pictures.length - 1 : this.state.level;
        return (
            <main className="FightPick">
                <section className="FightPick__section">
                    {this.state.level > 0 ?
                    <div className="FightPick__section--prev" onClick={() => this.prevMonster()}>
                        <img src={prevIcon} />
                    </div> 
                    : ''}
                    <div className="FightPick__section__div" onClick={() => this.fight()}>
                        <img src={pictures[pic].picture} className="FightPick__section__div__img"/>
                    </div> 
                    {this.state.level < this.props.game.level ?
                    <div className="FightPick__section--next" onClick={() => this.nextMonster()}>
                        <img src={nextIcon} />
                    </div> 
                    : ''}
                </section>
            </main>
        )
    }
}

export default FightPick