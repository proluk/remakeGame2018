import React, {Component} from 'react'
import bartender from './graphics/bartender.gif'
import wizard from './graphics/wizard.gif'
import lady from './graphics/lady.gif'
import Popup from './Popup'
import Player from './Player'
import Bartender from './Bartender'
import Wizard from './Wizard'
import Lady from './Lady'

class Tavern extends Component{
    constructor(props) {
        super(props)
        this.state = {
            bartender: false,
            wizard: false,
            lady: false,
        }
    }
    hidePopup = (character) => {
        this.setState({
            [character]: false,
        })
    }
    openPopup = (character) => {
        this.setState({
            [character]: true,
        })
    }
    render = () => {
        return (
            <main className="Tavern">
                <header className="Tavern__header">
                    You are in Tavern
                </header>
                <section className="Tavern__section">
                    <div className="Tavern__section__div" onClick={() => this.openPopup('bartender')}>
                        <img src={bartender} className="Tavern__section__div__img"/>
                        
                    </div>
                    <div className="Tavern__section__div"  onClick={() => this.openPopup('wizard')}>
                        <img src={wizard} className="Tavern__section__div__img"/>
                        
                    </div>
                    <div className="Tavern__section__div"  onClick={() => this.openPopup('lady')}>
                        <img src={lady} className="Tavern__section__div__img"/>
                        
                    </div>
                </section>
                <Popup open={this.state.bartender} externalHide={() => this.hidePopup('bartender')}>
                    <Bartender game={this.props.game} />
                </Popup>
                <Popup open={this.state.wizard} externalHide={() => this.hidePopup('wizard')}>
                    <Wizard game={this.props.game} player={this.props.player} />
                </Popup>
                <Popup open={this.state.lady} externalHide={() => this.hidePopup('lady')}>
                    <Lady {...this.props} />
                </Popup>
                <footer>
                    <Player {...this.props} />
                </footer> 
            </main>
        )
    }
}

export default Tavern