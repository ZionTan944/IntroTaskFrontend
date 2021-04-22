import { actionTypes } from '../actions/action'

const initState = {
    loggedIn: false,
    loading: true,
    error: null
}
const userReducer = (state = initState, action) => {
    if (action.type === actionTypes.SET_SESSION) {
        return {
            ...initState,
            loggedIn: action.payload.login,
            loading: false
        }
    } else if (action.type === actionTypes.SET_LOGIN) {
        return {
            ...state,
            loggedIn: true,
            loading: false,
            error: null
        }
    } else if (action.type === actionTypes.SET_LOGOUT) {
        return { ...initState }
    } else if (action.type === actionTypes.SET_ERROR) {
        return {
            ...state,
            error: action.payload
        }
    } else {
        return state
    }
}
export default userReducer
