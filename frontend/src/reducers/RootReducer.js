
const initState = {
    todos: [],
    loggedIn: false,
    username: '',
    loading: false,
    error: null
}

const rootReducer = (state = initState, action) => {
    console.log('a', action)
    if (action.type === 'settodo') {
        return {
            ...state,
            todos: action.payload.data,
            loading: true,
            error: null
        }
    } else if (action.type === 'setlogin') {
        return {
            ...state,
            loggedIn: true,
            loading: false,
            error: null
        }
    } else if (action.type === 'setlogout') {
        state = initState
        return state
    } else if (action.type === 'setposttodo') {
        return {
            ...state,
            loading: false,
            error: null
        }
    } else if (action.type === 'seterror') {
        return {
            ...state,
            error: action.payload
        }
    } else {
        console.log('return state')
        return state
    }
}
export default rootReducer
