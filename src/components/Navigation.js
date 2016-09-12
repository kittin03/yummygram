import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Badge, Space } from 'rebass'

class Navigation extends Component {
  render() {
    return(
      <nav>
        <Link to="/"><Button href>Photos</Button></Link><Space x="1" />
        <Link to="/counter"><Button href>Counter</Button></Link><Space x="1" />
        <Link to="/about"><Button href>About</Button></Link><Space x="1" />
        <Link to="/contact"><Button href>Contact</Button></Link><Space x="1" />
      </nav>
    )
  }
}

export default Navigation
