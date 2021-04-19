import { actionTypes } from '../actions/action'

const initState = {
    todos: [],
    loading: false,
    error: null
}

const todoReducer = (state = initState, action) => {
    // console.log('T', action)
    if (action.type === actionTypes.SET_TODO) {
        return {
            ...state,
            todos: action.payload.data,
            loading: true,
            error: null
        }
    } else if (action.type === actionTypes.SET_POST_TODO) {
        return {
            ...state,
            loading: false,
            error: null
        }
    } else if (action.type === actionTypes.SET_LOGOUT) {
        return { ...initState }
    } else if (action.type === actionTypes.SET_DELETE_TODO) {
        return {
            ...state,
        loading: false,
            error: null
        }
    } else if (action.type === actionTypes.SET_PUT_TODO) {
        return {
            ...state,
            loading: false,
            error: null
        }
    } else if (action.type === actionTypes.SET_ERROR) {
        return {
            ...state,
            error: action.payload
        }
    } else {
        // console.log('return state')
        return state
    }
}
export default todoReducer
