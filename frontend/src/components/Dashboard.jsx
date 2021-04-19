import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../actions/action'
import { Link } from 'react-router-dom'

function Dashboard (props) {
  const loggedIn = useSelector(state => state.userReducer.loggedIn)
  const loading = useSelector(state => state.todoReducer.loading)
  const todos = useSelector(state => state.todoReducer.todos)

  const dispatch = useDispatch()

  useEffect(() => {
    if (loading !== true && loggedIn === true) {
      console.log('start')
      dispatch(getData())
    }
  })

  const htmlStr = todos.map(todos => (
    <div key={Math.random().toString(36).substr(2, 9)} className="card">
      <h1 className="todotitle"><b>{todos.title}</b></h1>
      <p>{todos.description}</p>
      <div className = 'd-flex flex-row justify-content-between'>
      <p className="text-center">Stage:{todos.status}</p>
        <Link className='nav-link' to={{
          pathname: `/delete/${todos.id}`,
        state: {
          title: todos.title, description: todos.description, id: todos.id, status: todos.status
        }
           }}>
          <p className = 'text-danger'>Delete</p>
        </Link>
        <Link className='nav-link' to={{
          pathname: `/edit/${todos.id}`,
          state: {
             title: todos.title, description: todos.description, id: todos.id, status: todos.status
            }
             }}>
        <p className = 'text-primary'>Edit</p>
        </Link>
        </div>
    </div>
  ))
  return (
    <div>{htmlStr}</div>
  )
}

export default Dashboard
