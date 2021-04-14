import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const SET_POST_TODO = 'setposttodo'

function Add () {
  const dispatch = useDispatch()
  const content = useSelector(state => state)
  function AddData () {
    // console.log('add', Title, Desc)
    const data = new FormData()

    data.append('Title', Title)
    data.append('Description', Desc)
    dispatch(postTodo(data))
  }

  function postTodo (data) {
    return dispatch => {
      axios.post('http://localhost:8000/backend/todo',
        data, { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
      ).then(({ response }) => {
        dispatch({
          type: SET_POST_TODO
        })
        SetSubmit(true)
      }).catch(error => {
        dispatch({
        type: 'seterror',
        payload: error.response.data.error.message
          })
        })
    }
  }

  const [Title, setTitle] = useState('')
  const [Desc, setDesc] = useState('')
  const [Submit, SetSubmit] = useState(false)
  if (Submit === true) {
    return (<Redirect to={{ pathname: '/dashboard' }} />)
  }
  if (content.loggedIn === false) {
    return <Redirect to={{ pathname: '/' }} />
  } else {
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
        {content.error !== null && <h4>{content.error}</h4>}
      </form>
    )
  }
}

export default Add
