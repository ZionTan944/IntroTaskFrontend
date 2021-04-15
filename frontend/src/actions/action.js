import axios from 'axios'

const SET_TODO = 'settodo'
export const getData = () => {
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

const SET_LOGIN = 'setlogin'
export const postLogin = (data) => {
    return dispatch => {
        axios.post('http://localhost:8000/backend/login',
          data, { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        ).then(({ response }) => {
          dispatch({
              type: SET_LOGIN
          })
    }).catch(error => {
        console.log('!!', error)
      dispatch({
      type: 'seterror',
      payload: error.response.data.error.message
        })
      })
      }
}

const SET_LOGOUT = 'setlogout'
export const Logout = () => {
    return dispatch => {
        axios.get('http://localhost:8000/backend/logout',
          { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        ).then(({ data }) => {
          dispatch({
              type: SET_LOGOUT,
              payload: data
          })
      })
      }
}

const SET_POST_TODO = 'setposttodo'
export const postTodo = (data) => {
    return dispatch => {
        axios.post('http://localhost:8000/backend/todo',
          data, { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        ).then(({ response }) => {
          dispatch({
            type: SET_POST_TODO
          })
        }).catch(error => {
          dispatch({
          type: 'seterror',
          payload: error.response.data.error.message
            })
          })
      }
}
