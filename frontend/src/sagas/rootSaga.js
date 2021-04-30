import { fork, all } from 'redux-saga/effects'

import loginSaga from './loginSaga'
import todoSaga from './todoSaga'
import sessionSaga from './sessionSaga'

function * rootSaga () {
    yield all([
        fork(loginSaga),
        fork(todoSaga),
        fork(sessionSaga)
    ])
}

export default rootSaga
