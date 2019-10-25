import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { takeEveryCall } from "./saga"

const initialState = {
  value: [],
  list: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return Object.assign({}, state, { value: action.data.data })
    // return {...state}

    case "POST_DATA":
      return Object.assign({}, state, { list: action.list })

    case "UPDATE_DATA":
      return Object.assign({}, state, { value: [...state.value, action.data] })

    case "DELETE_THE_DATA":
      return Object.assign({}, state,
        {
          value: state.value.filter((i) => {
            return i.id !== parseInt(action.id.id)
          })
        })

    default:
      return state
  }
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

sagaMiddleware.run(takeEveryCall)

export default store