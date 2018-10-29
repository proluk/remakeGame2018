import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Route, Switch} from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'
import Tavern from '../components/game/Tavern'
import Equipment from '../components/game/Equipment'
import Fight from '../components/game/Fight'
import '../styles/style.scss'
import * as actions from './../actions'


const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 }
  });

class Game extends Component{
    render = () => {
        return (
            <PoseGroup className="Game">
                <RouteContainer key={this.props.location.pathname}>
                    <Switch location={this.props.location}>
                        <Route exact path="/game" component={() => <Tavern {...this.props} />} />
                        <Route path="/game/equipment" component={() => <Equipment {...this.props} />} />
                        <Route path="/game/fight/:level" component={() => <Fight {...this.props} />} />
                    </Switch>         
                </RouteContainer>
            </PoseGroup>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        player: state.player,
        game: state.game,
        monster: state.monster,
    }
};

const mapDispatchToProps = {
    playerEquipmentUpdate: actions.playerEquipmentUpdate,
    playerItemSell: actions.playerItemSell,
    playerActionSet: actions.playerActionSet,
    playerStatsAffectedByDebuffsSet: actions.playerStatsAffectedByDebuffsSet,
    playerLadyHeal: actions.playerLadyHeal,

    monsterActionSet: actions.monsterActionSet,
    monsterStatsAffectedByDebuffsSet: actions.monsterStatsAffectedByDebuffsSet,

    gameMonsterIntroShow: actions.gameMonsterIntroShow,
    gamePickActionPopupShow: actions.gamePickActionPopupShow,
    gameRoundResolvePopupShow: actions.gameRoundResolvePopupShow,
    gameMonsterPopupHide: actions.gameMonsterPopupHide,
    gamePickActionPopupHide: actions.gamePickActionPopupHide,
    gameRoundResolvePopupHide: actions.gameRoundResolvePopupHide,
    gameResolveRound: actions.gameResolveRound,
    gameRoundEndPopupHide: actions.gameRoundEndPopupHide,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);