const initState = {
    loggedIn: false,
    loading: false,
    error: null
}

const userReducer = (state = initState, action) => {
    // console.log('U', action)
    if (action.type === 'setsession') {
        return {
            ...initState,
            loggedIn: action.payload
        }
    } else if (action.type === 'setsessiontrue') {
        return {
            ...state,
            loading: true
        }
    } else if (action.type === 'setlogin') {
        return {
            ...state,
            loggedIn: true,
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
export default userReducer
