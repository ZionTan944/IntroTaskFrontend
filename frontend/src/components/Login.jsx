import React, { useState } from 'react'
import './Login.css'
import { Redirect } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const SET_LOGIN = 'setlogin'
function Login (props) {
  const content = useSelector(state => state)
  const dispatch = useDispatch()
  const [Username, SetUsername] = useState('')
  const [Password, SetPassword] = useState('')

  function ChangeUsername (event) {
    SetUsername(event.target.value)
  }

  function ChangePassword (event) {
    SetPassword(event.target.value)
  }

  function PostLogin (data) {
    return dispatch => {
      axios.post('http://localhost:8000/backend/login',
        data, { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
      ).then(({ response }) => {
        dispatch({
            type: SET_LOGIN
        })
  }).catch(error => {
    dispatch({
    type: 'seterror',
    payload: error.response.data.error.message
      })
    })
    }
  }

  function SendLogin () {
    const data = new FormData()

    data.append('Username', Username)
    data.append('Password', Password)
    // console.log(Username, Password)

    dispatch(PostLogin(data))
  }

  if (content.loggedIn === true) {
    return (<Redirect to ={{ pathname: '/dashboard' }}/>)
  }
  return (
    <form className="LoginForm">
      <label>
        <p>Username</p>
        <input type="text" onChange={(event) => ChangeUsername(event)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={(event) => ChangePassword(event)} />
      </label>
      <div className='submitButton'>
        <button onClick={SendLogin} type="button">Submit</button>
      </div>
      {content.error !== null && <h4>{content.error}</h4>}
    </form>
  )
}

export default Login
