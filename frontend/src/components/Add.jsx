import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { postTodo } from '../actions/action'

function Add () {
  const dispatch = useDispatch()
  const error = useSelector(state => state.todoReducer.error)
  const loading = useSelector(state => state.todoReducer.loading)

  function AddData () {
    // console.log('add', Title, Desc)
    const data = new FormData()

    data.append('Title', title)
    data.append('Description', desc)
    dispatch(postTodo(data))
    setSubmit(true)
  }

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [submit, setSubmit] = useState(false)
  if (loading === false && error === null && submit === true) {
    console.log('hi')
    return (<Redirect to={{ pathname: '/dashboard' }} />)
  }
  return (
    <form className="AddForm">
      <label>
        <p>Title</p>
        <input type="text" onChange={(event) => setTitle(event.target.value)} />
      </label><br />
      <label>
        <p>Description</p>
        <textarea name="Description" defaultValue="Enter Description here" onChange={(event) => setDesc(event.target.value)}></textarea>
      </label>
      <div className='submitButton'>
        <button type="button" onClick={AddData}>Submit</button>
      </div>
      {error !== null && <h4>{error}</h4>}
    </form>
    )
  }

export default Add
