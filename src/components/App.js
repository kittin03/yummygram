import React, { Component } from 'react'

import Home from './Home'
import About from './About'
import Contact from './Contact'
// import Navigation from './Navigation'
import { Router, Route, Link, hashHistory } from 'react-router'


class App extends Component {
  render() {
    return(
      <div>
        <Router history={ hashHistory }>
          <Route path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Router>

      </div>
    )
  }
}

export default App
