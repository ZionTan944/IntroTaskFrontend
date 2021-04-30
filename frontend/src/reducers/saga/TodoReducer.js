import { TODOS, USERS } from './index'

const todoReducer = (state = [null, [], null], action) => {
    if (action.type === TODOS.LOAD_SUCCESS) {
        return [null, [...action.todos], null]
    } else if (action.type === USERS.LOGOUT) {
        return [null, [], null]
    } else if (action.type === TODOS.POST) {
        return [action.data, state[1], null]
    } else if (action.type === TODOS.DELETE) {
        return [null, state[1], action.id]
    } else if (action.type === TODOS.PUT) {
        return [action.action.data, state[1], action.action.id]
    } else {
        return state
    }
}

export default todoReducer
