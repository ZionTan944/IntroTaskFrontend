
// const initState = {
//     todos: [],
//     loggedIn: false,
//     username: '',
//     loading: false,
//     error: null
// }

// const rootReducer = (state = initState, action) => {
//     console.log('a', action)
//     if (action.type === 'settodo') {
//         return {
//             ...state,
//             todos: action.payload.data,
//             loading: true,
//             error: null
//         }
//     } else if (action.type === 'setlogin') {
//         return {
//             ...state,
//             loggedIn: true,
//             loading: false,
//             error: null
//         }
//     } else if (action.type === 'setlogout') {
//         return { ...initState }
//     } else if (action.type === 'setposttodo') {
//         return {
//             ...state,
//             loading: false,
//             error: null
//         }
//     } else if (action.type === 'seterror') {
//         return {
//             ...state,
//             error: action.payload
//         }
//     } else {
//         // console.log('return state')
//         return state
//     }
// }
// export default rootReducer

import { combineReducers } from 'redux'
import userReducer from './UserReducer'
import todoReducer from './ToDoReducer'

const rootReducer = combineReducers({
    userReducer: userReducer,
    todoReducer: todoReducer
})
// const rootReducer = (state = initState, action) => {
//         console.log('a', action)
//     if (action.type === 'settodo') {
//         return {
//             ...state,
//             todos: action.payload.data,
//             loading: true,
//             error: null
//         }
//     } else if (action.type === 'setlogin') {
//         return {
//             ...state,
//             loggedIn: true,
//             loading: false,
//             error: null
//         }
//     } else if (action.type === 'setlogout') {
//         return { ...initState }
//     } else if (action.type === 'setposttodo') {
//         return {
//             ...state,
//             loading: false,
//             error: null
//         }
//     } else if (action.type === 'seterror') {
//         return {
//             ...state,
//             error: action.payload
//         }
//     } else {
//         // console.log('return state')
//         return state
//     }
// }

export default rootReducer
