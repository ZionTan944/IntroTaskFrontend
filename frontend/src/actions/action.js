import axios from 'axios'

export const getData = () => {
    return dispatch => {
        axios({
          method: 'GET',
          url: 'http://localhost:8000/backend/todo',
          withCredentials: true
        }).then(({ data }) => {
          dispatch({
            type: actionTypes.SET_TODO,
            payload: data
          })
        })
      }
    }

export const postLogin = (data) => {
    return dispatch => {
        axios.post('http://localhost:8000/backend/login',
          data, { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        ).then(({ response }) => {
          dispatch({
              type: actionTypes.SET_LOGIN
          })
    }).catch(error => {
      dispatch({
      type: 'seterror',
      payload: error.response.data.error.message
        })
      })
      }
}

export const Logout = () => {
    return dispatch => {
        axios.get('http://localhost:8000/backend/logout',
          { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        ).then(({ data }) => {
          dispatch({
              type: actionTypes.SET_LOGOUT,
              payload: data
          })
      })
      }
}

export const postTodo = (data) => {
    return dispatch => {
        axios.post('http://localhost:8000/backend/todo',
          data, { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        ).then(({ response }) => {
          dispatch({
            type: actionTypes.SET_POST_TODO
          })
        }).catch(error => {
          dispatch({
          type: 'seterror',
          payload: error.response.data.error.message
            })
          })
      }
}

export const deleteTodo = (id) => {
    return dispatch => {
        axios.delete('http://localhost:8000/backend/todo/' + id,
          { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        ).then(({ response }) => {
          dispatch({
            type: actionTypes.SET_DELETE_TODO
          })
        }).catch(error => {
          dispatch({
          type: 'seterror',
          payload: error.response.data.error.message
            })
          })
      }
}

export const putTodo = (data, id) => {
    return dispatch => {
        axios.put('http://localhost:8000/backend/todo/' + id,
          data, { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        ).then(({ response }) => {
          dispatch({
            type: actionTypes.SET_PUT_TODO
          })
        }).catch(error => {
          dispatch({
          type: actionTypes.SET_ERROR,
          payload: error.response.data.error.message
            })
          })
      }
}

export const getSession = () => {
    return dispatch => {
        axios.get('http://localhost:8000/backend/session'
        , { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        ).then(({ data }) => {
          dispatch({
            type: actionTypes.SET_SESSION,
            payload: data.data.login
          })
        }).catch(error => {
          dispatch({
          type: actionTypes.SET_ERROR,
          payload: error.response.data.error.message
            })
          })
      }
}

export const actionTypes = {
  SET_SESSION: 'setsession',
  SET_PUT_TODO: 'setputtodo',
  SET_DELETE_TODO: 'setdeletetodo',
  SET_POST_TODO: 'setposttodo',
  SET_LOGOUT: 'setlogout',
  SET_LOGIN: 'setlogin',
  SET_TODO: 'settodo',
  SET_ERROR: 'seterror'
}
