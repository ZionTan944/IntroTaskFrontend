import { combineReducers } from 'redux'

import loadingReducer from './LoadingReducer'
import todoReducer from './TodoReducer'
import errorReducer from './errorReducer'
import loginReducer from './LoginReducer'
import updateReducer from './UpdateReducer'

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    todos: todoReducer,
    error: errorReducer,
    loggedIn: loginReducer,
    isUpdated: updateReducer
})

export default rootReducer
