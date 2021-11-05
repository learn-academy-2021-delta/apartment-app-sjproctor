import React, { Component } from 'react'
import Header from './components/Header'
import Home from './pages/Home'

import {
  BrowserRouter as  Router,
  Routes,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Header {...this.props} />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    )
  }
}
export default App
