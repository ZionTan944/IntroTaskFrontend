import React, { useState } from 'react'

import { Redirect } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
// import { postLogin } from '../actions/action'
import { loadLogin } from '../actions/actionsaga'

function Login () {
  const error = useSelector(state => state.error)
  const loggedIn = useSelector(state => state.loggedIn[0])
  const dispatch = useDispatch()
  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')

  function changeUsername (event) {
    SetUsername(event.target.value)
  }

  function changePassword (event) {
    SetPassword(event.target.value)
  }

  function SendLogin () {
    const data = new FormData()

    data.append('Username', username)
    data.append('Password', password)

    dispatch(loadLogin(data))
  }

  if (loggedIn === true) {
    return (<Redirect to ={{ pathname: '/dashboard' }}/>)
  }
  return (
    <form className="LoginForm">
      <label className = 'LoginLabel'>
        <p>Username</p>
        <input type="text" onChange={(event) => changeUsername(event)} />
      </label>
      <label className = 'LoginLabel'>
        <p>Password</p>
        <input type="password" onChange={(event) => changePassword(event)} />
      </label>
      <div className='submitButton'>
        <button onClick={SendLogin} type="button">Submit</button>
      </div>
      {error !== null && <h4>{error}</h4>}
    </form>
  )
}

export default Login
