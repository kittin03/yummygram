import React, { Component } from 'react'
import { Link } from 'react-router'

class Navigation extends Component {
  render() {
    return(
      <nav>
        <Link to="/">Photos</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    )
  }
}

export default Navigation
