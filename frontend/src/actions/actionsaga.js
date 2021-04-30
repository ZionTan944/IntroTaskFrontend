import { TODOS, USERS, SESSION } from '../reducers/saga/index'

export const loadTodos = () => ({
    type: TODOS.LOAD
})

export const setTodos = (todos) => ({
    type: TODOS.LOAD_SUCCESS,
    todos
})

export const setError = (error) => ({
    type: TODOS.LOAD_FAIL,
    error
})

export const loadPostTodos = (data) => ({
    type: TODOS.POST,
    data
})

export const setPostTodos = () => ({
    type: TODOS.POST_SUCCESS
})

export const setPostTodosError = (error) => ({
    type: TODOS.POST_FAIL,
    error
})

export const loadPutTodos = (data, id) => ({
    type: TODOS.PUT,
    action: { data: data, id: id }

})

export const setPutTodos = () => ({
    type: TODOS.PUT_SUCCESS
})

export const setPutTodosError = (error) => ({
    type: TODOS.PUT_FAIL,
    error
})

export const loadDeleteTodos = (id) => ({
    type: TODOS.DELETE,
    id
})

export const setDeleteTodos = () => ({
    type: TODOS.DELETE_SUCCESS
})

export const setDeleteTodosError = (error) => ({
    type: TODOS.DELETE_FAIL,
    error
})

export const loadLogin = (data) => ({
    type: USERS.LOGIN,
    data
})

export const setLogin = () => ({
    type: USERS.LOGIN_SUCCESS
})

export const setLoginError = (error) => ({
    type: USERS.LOGIN_FAIL,
    error
})

export const loadLogout = () => ({
    type: USERS.LOGOUT
})

export const setLogout = () => ({
    type: USERS.LOGOUT_SUCCESS
})

export const setLogoutError = (error) => ({
    type: USERS.LOGOUT_FAIL,
    error
})

export const loadSession = () => ({
    type: SESSION.LOAD_SESSION
})

export const setSession = (data) => ({
    type: SESSION.LOAD_SESSION_SUCCESS,
    data
})

export const setSessionError = (error) => ({
    type: SESSION.LOAD_SESSION_FAIL,
    error
})

export const loadRefresh = () => ({
    type: SESSION.LOAD_REFRESH
})

export const setRefresh = () => ({
    type: SESSION.REFRESH
})
