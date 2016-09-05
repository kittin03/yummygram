import React, { Component } from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

class Navigation extends Component {
  render() {
    return(
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    )
  }
}

export default Navigation
