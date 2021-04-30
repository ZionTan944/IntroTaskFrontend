import { USERS } from './index'

const loginReducer = (state = [false, null], action) => {
    switch (action.type) {
        case USERS.LOGIN:
            return [false, action.data]
        case USERS.LOGIN_SUCCESS:
            return [true, null]
        case USERS.LOGIN_FAIL:
            return [false, null]
        case USERS.LOGOUT_SUCCESS:
            return [false, null]
        case USERS.LOGOUT_FAIL:
            return [false, null]

        default:
            return state
    }
}

export default loginReducer
