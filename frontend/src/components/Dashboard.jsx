import React, { useEffect } from 'react'
import './Dashboard.css'
import { useSelector, useDispatch } from 'react-redux'
// import getTodo from './index'
import axios from 'axios'
import { Redirect } from 'react-router'

const SET_TODO = 'settodo'

function Dashboard () {
  const content = useSelector(state => state)

  const dispatch = useDispatch()

  function getData () {
    return dispatch => {
      axios({
        method: 'GET',
        url: 'http://localhost:8000/backend/todo',
        withCredentials: true
    }).then(({ data }) => {
        dispatch({
            type: SET_TODO,
            payload: data
        })
    })
    }
  }

  useEffect(() => {
    console.log('before start')
    if (content.loading !== true && content.loggedIn === true) {
      console.log('start')
       dispatch(getData())
    }
  }, [content.loading])

  const HtmlStr = content.todos.map(todos => (
    <div key={Math.random().toString(36).substr(2, 9)} className="card">
      <h1 className="todotitle"><b>{todos.title}</b></h1>
      <p>{todos.description}</p>
    </div>
  ))
  console.log('p', content.todos, content.loading, content.loggedIn)
  if (content.loggedIn === false) {
    return <Redirect to={{ pathname: '/' }} />
  } else {
    return (
        <div>{HtmlStr}</div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//     loading: state.loading,
//     logged_in: state.logged_in
//   }
// }
// const mapDispatchToProps = {
//   getTodo
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default Dashboard
