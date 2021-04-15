const initState = {
    todos: [],
    loading: false,
    error: null
}

const todoReducer = (state = initState, action) => {
    console.log('T', action)
    if (action.type === 'settodo') {
        return {
            ...state,
            todos: action.payload.data,
            loading: true,
            error: null
        }
    } else if (action.type === 'setposttodo') {
        return {
            ...state,
            loading: false,
            error: null
        }
    } else if (action.type === 'setlogout') {
        return { ...initState }
    } else if (action.type === 'seterror') {
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
