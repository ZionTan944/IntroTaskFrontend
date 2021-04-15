import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Navigation, Footer, Login, Add, Dashboard } from './components'
import { useSelector } from 'react-redux'
// import { Redirect } from 'react-router'

function App () {
  const loggedIn = useSelector(state => state.userReducer.loggedIn)

    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
             <Route path="/" exact component={() => <Login />} />
            <Route exact path = '/dashboard'>{loggedIn ? <Dashboard/> : <Redirect to="/" /> }</Route>
            <Route exact path = '/add'>{loggedIn ? <Add/> : <Redirect to="/" /> }</Route>
          </Switch>
          <Footer />
        </Router>
      </div>)
  }
// }

export default App
