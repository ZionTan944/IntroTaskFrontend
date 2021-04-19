import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Navigation, Footer, Login, Add, Dashboard, Delete, Edit } from './components'
import { useSelector, useDispatch } from 'react-redux'
import { getSession, getData } from './actions/action'

function App () {
  const loggedIn = useSelector(state => state.userReducer.loggedIn)
  const loading = useSelector(state => state.userReducer.loading)

  const dispatch = useDispatch()
  useEffect(() => {
      console.log('startsession')
      dispatch(getSession())
      if (loggedIn === true) {
      dispatch(getData())
    }
  })
  console.log('l2', loggedIn, loading)

  if (loading === false) {
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
} else {
  return (<div>hi</div>)
}
}
// }

export default App
