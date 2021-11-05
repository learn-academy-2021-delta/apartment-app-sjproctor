import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  Routes,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    console.log("logged in:", this.props.logged_in)
    console.log("user:", this.props.current_user)
    console.log("sign up:", this.props.new_user_route)
    console.log("sign in:", this.props.sign_in_route)
    console.log("sign out:", this.props.sign_out_route)
    return (
      <>
        <h1>Hello World</h1>
      </>
    )
  }
}
export default App
