import { TODOS, USERS } from './index'

const errorReducer = (state = null, action) => {
    if (action.type === TODOS.LOAD_FAIL || action.type === USERS.LOGIN_FAIL ||
        action.type === TODOS.POST_FAIL || action.type === TODOS.PUT_FAIL) {
        return action.error.response.data.error.message
    } else {
        return null
    }
}

export default errorReducer
