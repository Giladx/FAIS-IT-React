import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Events from './views/events'
import Resources from './views/resources'
import GetInvolved from './views/get-involved'
import NeedHelp from './views/need-help'
import About from './views/about'
import News from './views/news'
import Contact from './views/contact'
import Donate from './views/donate'
import Home from './views/home'
import Page from './views/page'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Events} exact path="/events" />
        <Route component={Resources} exact path="/resources" />
        <Route component={GetInvolved} exact path="/get-involved" />
        <Route component={NeedHelp} exact path="/need-help" />
        <Route component={About} exact path="/about" />
        <Route component={News} exact path="/news" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Donate} exact path="/donate" />
        <Route component={Home} exact path="/" />
        <Route component={Page} exact path="/page" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
