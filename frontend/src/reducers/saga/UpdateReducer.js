import { TODOS, USERS } from './index'

const updateReducer = (state = false, action) => {
    if (action.type === TODOS.LOAD_SUCCESS) {
        return true
    } else if (action.type === USERS.LOGIN_SUCCESS || action.type === TODOS.POST_SUCCESS ||
         action.type === TODOS.DELETE_SUCCESS || action.type === TODOS.PUT_SUCCESS) {
        return false
    } else {
        return state
    }
}

export default updateReducer
