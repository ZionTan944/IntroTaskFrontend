import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getData } from '../actions/action'
import { loadTodos } from '../actions/actionsaga'
import { Link } from 'react-router-dom'

function Dashboard (props) {
  const loggedIn = useSelector(state => state.loggedIn[0])
  const updated = useSelector(state => state.isUpdated)
  const todos = useSelector(state => state.todos[1])

  const dispatch = useDispatch()

  useEffect(() => {
    // console.log(updated, loggedIn)
    if (updated !== true && loggedIn === true) {
      dispatch(loadTodos())
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
