import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

const SET_LOGOUT = 'setlogout'
function Navigation (props) {
  const dispatch = useDispatch()

  function Logout () {
    return dispatch => {
      axios.get('http://localhost:8000/backend/logout',
        { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
      ).then(({ data }) => {
        dispatch({
            type: SET_LOGOUT,
            payload: data
        })
    })
    }
  }

  function getLogout () {
    dispatch(Logout())
  }
  if (props.location.pathname === '/') {
    return (<div className="navigation"></div>)
  } else {
    return (
      <div className='navigation'>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <div className='container'>
            <Link className='navbar-brand' to='/'>
              Introduction Task
            </Link>
            <div>
              <ul className='navbar-nav ml-auto'>
                <li
                  className={`nav-item  ${props.location.pathname === '/dashboard' ? 'active' : ''
                    }`}
                >
                  <Link className='nav-link' to='/dashboard'>
                    Dashboard
                    <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li
                  className={`nav-item  ${props.location.pathname === '/add' ? 'active' : ''
                    }`}
                >
                  <Link className='nav-link' to='/add'>
                    Add
                  </Link>
                </li>
                <li
                  className={`nav-item  ${props.location.pathname === '/' ? 'active' : ''
                    }`}
                >
                  <Link className='nav-link' to='/' onClick={() => { getLogout() }}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(Navigation)
