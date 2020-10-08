import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
//importing componnets
import HomePage from './pages/homepage/homepage'
import Header from './components/header/header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    )
  }
}
export default App
