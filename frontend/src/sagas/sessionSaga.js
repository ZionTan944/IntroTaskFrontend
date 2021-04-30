import { takeEvery, call, put } from 'redux-saga/effects'
import { SESSION } from '../reducers/saga/index'
import { fetchSession } from './api/index'
import { setSession, setSessionError, setLogin, setRefresh } from '../actions/actionsaga'

// watcher saga
export default function * todoSaga () {
    yield takeEvery(SESSION.LOAD_SESSION, handleTodoLoad)
    yield takeEvery(SESSION.LOAD_REFRESH, handleRefresh)
}

function * handleTodoLoad () {
    try {
    const authenticated = yield call(fetchSession)
    yield put(setSession(authenticated))
    // console.log('loading', authenticated)
    if (authenticated) {
        yield put(setLogin())
    }
    } catch (error) {
        yield put(setSessionError(error))
    }
}

function * handleRefresh () {
    yield put(setRefresh())
}
