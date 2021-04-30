import { takeEvery, call, put, select } from 'redux-saga/effects'
import { USERS } from '../reducers/saga/index'
import { postLogin, postLogout } from './api/index'
import { setLoginError, setLogin, setLogout, setLogoutError } from '../actions/actionsaga'

const getData = state => state.loggedIn[1]
// watcher saga
export default function * loginSaga () {
    yield takeEvery(USERS.LOGIN, handleLogin)
    yield takeEvery(USERS.LOGOUT, handleLogout)
}

function * handleLogin () {
    try {
    const data = yield select(getData)
    const login = yield call(postLogin, data)
    yield put(setLogin(login))
    // console.log('loading')
    } catch (error) {
        yield put(setLoginError(error))
    }
}

function * handleLogout () {
    try {
    yield call(postLogout)
    yield put(setLogout())
    yield
    // console.log('loading')
    } catch (error) {
        yield put(setLogoutError(error))
    }
}
