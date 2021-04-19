import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { putTodo } from '../actions/action'
import { useLocation } from 'react-router-dom'

function Edit () {
  const { state } = useLocation()
  const dispatch = useDispatch()
  const error = useSelector(state => state.todoReducer.error)
  const [status, setStatus] = useState('Planning')
  const [submit, setSubmit] = useState(false)

  function putStatus () {
    const data = new FormData()

    data.append('Status', status)
    dispatch(putTodo(data, state.id))
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
      <h1 className="todotitle"><b>{state.title}</b></h1>
      <p>{state.description}</p>
      <p>Stage:{state.status}</p>
    <form className="EditForm">
    <select name="status" onChange = {(event) => changeStatus(event)}>
    <option value="Planning">Planning</option>
     <option value="Doing">Doing</option>
    <option value="Completed">Completed</option>
    </select>
      <div className='submitButton'>
        <button type="button" onClick={putStatus}>Confirm</button>
      </div>
      {error !== null && <h4>{error}</h4>}
    </form>
    </div>
    )
  }

export default Edit
