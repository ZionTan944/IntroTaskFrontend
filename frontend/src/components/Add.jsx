import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { loadPostTodos } from '../actions/actionsaga'

function Add () {
  const dispatch = useDispatch()
  const error = useSelector(state => state.error)
  const loading = useSelector(state => state.isLoading)
  const updated = useSelector(state => state.isUpdated)

  // console.log(error, loading, updated)

  function AddData () {
    const data = new FormData()

    data.append('Title', title)
    data.append('Description', desc)
    dispatch(loadPostTodos(data))
    // setSubmit(true)
  }

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  // const [submit, setSubmit] = useState(false)
  if (loading === false && error === null && updated === false) {
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
