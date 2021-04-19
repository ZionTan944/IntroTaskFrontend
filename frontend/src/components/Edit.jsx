import React, { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { putTodo } from '../actions/action'

function Edit () {
  const { currentid } = useParams()
  const dispatch = useDispatch()
  const error = useSelector(state => state.todoReducer.error)
  const todos = useSelector(state => state.todoReducer.todos)

  const [status, setStatus] = useState('Planning')
  const [submit, setSubmit] = useState(false)
  const [todo, setTodo] = useState({ id: 0, title: 'Error', description: 'Invalid ID' })

  useEffect(() => {
    const result = todos.find(({ id }) => id === parseInt(currentid))
    if (result) {
    setTodo(result)
    }
})

  function putStatus () {
    const data = new FormData()

    data.append('Status', status)
    dispatch(putTodo(data, todo.id))
    setSubmit(true)
  }

  function changeStatus (event) {
    setStatus(event.currentTarget.value)
  }

  if (submit === true && error === null) {
    return (<Redirect to={{ pathname: '/dashboard' }} />)
  }
  return (
    <div>
      <h1 className="todotitle"><b>{todo.title}</b></h1>
      <p>{todo.description}</p>
      {todo.id !== 0 && <div><p>Stage:{todo.status}</p><form className="EditForm">
    <select name="status" onChange = {(event) => changeStatus(event)}>
    <option value="Planning">Planning</option>
     <option value="Doing">Doing</option>
    <option value="Completed">Completed</option>
    </select>
      <div className='submitButton'>
        <button type="button" onClick={putStatus}>Confirm</button>
      </div>
      {error !== null && <h4>{error}</h4>}
    </form></div>}
    </div>
    )
  }

export default Edit
