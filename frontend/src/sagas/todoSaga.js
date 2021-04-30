import { takeEvery, select, call, put } from 'redux-saga/effects'
import { TODOS } from '../reducers/saga/index'
import { fetchTodos, postTodos, deleteTodos, putTodos } from './api/index'
import { setTodos, setError, setPostTodos, setPostTodosError, setDeleteTodos, setDeleteTodosError, setPutTodos, setPutTodosError } from '../actions/actionsaga'

const getUserID = state => state.userid
// watcher saga
export default function * todoSaga () {
    yield takeEvery(TODOS.LOAD, handleTodoLoad)
    yield takeEvery(TODOS.POST, handleTodoPost)
    yield takeEvery(TODOS.DELETE, handleTodoDelete)
    yield takeEvery(TODOS.PUT, handleTodoPut)
}

function * handleTodoLoad () {
    try {
    const userID = yield select(getUserID)
    const todos = yield call(fetchTodos, userID)
    yield put(setTodos(todos))
    } catch (error) {
        yield put(setError(error))
    }
}

const getData = state => state.todos[0]

function * handleTodoPost () {
    try {
    const data = yield select(getData)
    yield call(postTodos, data)
    yield put(setPostTodos())
    // console.log('loading', userID)
    } catch (error) {
        yield put(setPostTodosError(error))
    }
}

const getID = state => state.todos[2]
function * handleTodoDelete () {
    try {
    const data = yield select(getID)
    yield call(deleteTodos, data)
    yield put(setDeleteTodos())
    // console.log('loading', userID)
    } catch (error) {
        console.log('err', error)
        yield put(setDeleteTodosError(error))
    }
}

function * handleTodoPut () {
    try {
    const data = yield select(getData)
    const id = yield select(getID)
    yield call(putTodos, data, id)
    yield put(setPutTodos())
    // console.log('loading', userID)
    } catch (error) {
        yield put(setPutTodosError(error))
    }
}
