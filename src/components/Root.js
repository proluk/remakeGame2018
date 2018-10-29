import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import {Route, Switch } from 'react-router-dom'
import { withRouter } from "react-router";
import Main from './../containers/Main'
import Game from './../containers/Game'
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const Root = ({store, location}) => (
  <Provider store={store}> 
      <PoseGroup>
        <RouteContainer key={location.pathname}>
          <Switch location={location}>
              <Route exact path="/" component={Main} />
              <Route path="/game" component={Game} />
          </Switch>            
        </RouteContainer>
      </PoseGroup>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default withRouter(Root)