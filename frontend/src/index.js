import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css'
import './css/Dashboard.css'
import './css/Login.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import rootReducer from './reducers'

import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/saga/rootReducer'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
