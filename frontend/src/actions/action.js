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

const SET_DELETE_TODO = 'setdeletetodo'
export const deleteTodo = (id) => {
    return dispatch => {
        axios.delete('http://localhost:8000/backend/todo/' + id,
          { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        ).then(({ response }) => {
          dispatch({
            type: SET_DELETE_TODO
          })
        }).catch(error => {
          dispatch({
          type: 'seterror',
          payload: error.response.data.error.message
            })
          })
      }
}

const SET_PUT_TODO = 'setputtodo'
export const putTodo = (data, id) => {
    return dispatch => {
        axios.put('http://localhost:8000/backend/todo/' + id,
          data, { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        ).then(({ response }) => {
          dispatch({
            type: SET_PUT_TODO
          })
        }).catch(error => {
          dispatch({
          type: 'seterror',
          payload: error.response.data.error.message
            })
          })
      }
}
