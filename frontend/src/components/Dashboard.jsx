import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../actions/action'

function Dashboard () {
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
    </div>
  ))
    return (
      <div>{htmlStr}</div>
    )
}

export default Dashboard
