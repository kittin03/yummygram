import React, { Component } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class Counter extends Component {
  render() {
    return(
      <div>
        <h3>Counter</h3>
        <Navigation />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default Counter
