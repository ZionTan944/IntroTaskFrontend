import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../actions/action'
import { useLocation } from 'react-router-dom'

function Delete () {
   const { state } = useLocation()
  const dispatch = useDispatch()
  const error = useSelector(state => state.todoReducer.error)
  console.log(state)
  function removeTodo () {
    dispatch(deleteTodo(state.id))
    setSubmit(true)
  }

  const [submit, setSubmit] = useState(false)
  if (submit === true && error === null) {
    return (<Redirect to={{ pathname: '/dashboard' }} />)
  }
  return (
      <div>
          <h1 className="todotitle"><b>{state.title}</b></h1>
      <p>{state.description}</p>
    <form className="AddForm">
      <div className='submitButton'>
        <button type="button" onClick={removeTodo}>Confirm Delete</button>
      </div>
      {error !== null && <h4>{error}</h4>}
    </form>
    </div>
    )
  }

export default Delete
