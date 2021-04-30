import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Navigation, Footer, Login, Add, Dashboard, Delete, Edit } from './components'
import { useSelector, useDispatch } from 'react-redux'
// import { getSession, getData } from './actions/action'
import { loadSession } from './actions/actionsaga'

function App () {
  const loggedIn = useSelector(state => state.loggedIn[0])
  // const loading = useSelector(state => state.userReducer.loading)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(loadSession())
  })
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Login />} />
            <Route exact path = '/dashboard'>{loggedIn ? <Dashboard/> : <Redirect to="/" /> }</Route>
            <Route exact path = '/add'>{loggedIn ? <Add/> : <Redirect to="/" /> }</Route>
            <Route exact path="/delete/:currentid" >{loggedIn ? <Delete/> : <Redirect to="/" /> }</Route>
            <Route exact path="/edit/:currentid" >{loggedIn ? <Edit/> : <Redirect to="/" /> }</Route>
          </Switch>
          <Footer />
        </Router>
      </div>)
}
// }

export default App
