import React, { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { loadDeleteTodos } from '../actions/actionsaga'

function Delete () {
  const { currentid } = useParams()
  const dispatch = useDispatch()
  const error = useSelector(state => state.error)
  const todos = useSelector(state => state.todos[1])

  const [submit, setSubmit] = useState(false)
  const [todo, setTodo] = useState({ id: 0, title: 'Error', description: 'Invalid ID' })

  useEffect(() => {
    const result = todos.find(({ id }) => id === parseInt(currentid))
    if (result) {
    setTodo(result)
    }
})
  function removeTodo () {
    dispatch(loadDeleteTodos(todo.id))
    setSubmit(true)
  }
  if (submit === true && error === null) {
    return (<Redirect to={{ pathname: '/dashboard' }} />)
  }
  return (
      <div>
          <h1 className="todotitle"><b>{todo.title}</b></h1>
      <p>{todo.description}</p>
      {todo.id !== 0 && <div>
      <p>Stage:{todo.status}</p>
    <form className="AddForm">
      <div className='submitButton'>
        <button type="button" onClick={removeTodo}>Confirm Delete</button>
      </div>
      {error !== null && <h4>{error}</h4>}
    </form> </div>}
    </div>
    )
  }

export default Delete
