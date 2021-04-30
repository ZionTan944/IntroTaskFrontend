import axios from 'axios'
import { getCookie } from '../../csrf/csrf'

const fetchTodos = async page => {
    const response = await axios({ method: 'GET', url: 'http://localhost:8000/backend/todo', withCredentials: true })
    const data = await response.data.data
    // console.log('r', data)
    if (response.status > 400) {
        throw new Error(data.error)
    }
    return data
}

const postTodos = async data => {
    const csrfToken = getCookie('csrftoken')
    const response = await axios.post('http://localhost:8000/backend/todo', data, { headers: { 'Content-Type': 'multipart/form-data', 'X-CSRFToken': csrfToken }, withCredentials: true })
    const result = await response
    if (response.status >= 400) {
        throw new Error(response.error.data.message)
    }
    return result
}

const putTodos = async (data, id) => {
    const csrfToken = getCookie('csrftoken')
    const response = await axios.put('http://localhost:8000/backend/todo/' + id, data, { headers: { 'Content-Type': 'multipart/form-data', 'X-CSRFToken': csrfToken }, withCredentials: true })
    if (response.status >= 400) {
        throw new Error(response.error.data.message)
    }
    return response
}

const deleteTodos = async id => {
    const csrfToken = getCookie('csrftoken')
    const response = await axios.delete('http://localhost:8000/backend/todo/' + id, { headers: { 'Content-Type': 'multipart/form-data', 'X-CSRFToken': csrfToken }, withCredentials: true })
    const result = await response
    if (response.status >= 400) {
        throw new Error(response)
    }
    return result
}

const postLogin = async data => {
    const response = await axios.post('http://localhost:8000/backend/login', data, { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true })
    if (response.status >= 400) {
        throw new Error(response)
    }
    return response
}

const postLogout = async page => {
    const csrfToken = getCookie('csrftoken')
    const response = await axios.get('http://localhost:8000/backend/logout', { headers: { 'Content-Type': 'multipart/form-data', 'X-CSRFToken': csrfToken }, withCredentials: true })
    const data = await response
    // console.log('r', data)
    if (response.status > 400) {
        throw new Error(data.error)
    }
    return data
}

const fetchSession = async page => {
    const response = await axios.get('http://localhost:8000/backend/session', { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true })
    const data = await response.data.data.login
    // console.log('r', data)
    if (response.status > 400) {
        throw new Error(data.error)
    }
    return data
}

export { fetchTodos, postLogin, fetchSession, postLogout, postTodos, deleteTodos, putTodos }
