import { combineReducers } from 'redux'
import userReducer from './UserReducer'
import todoReducer from './ToDoReducer'

const rootReducer = combineReducers({
    userReducer: userReducer,
    todoReducer: todoReducer
})

export default rootReducer
