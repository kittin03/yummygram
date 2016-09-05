import React, { Component } from 'react'
import Navigation from './Navigation'
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

class Home extends Component {
  render() {
    return(
      <div>
        <h3>Home</h3>
        <Navigation />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default Home
