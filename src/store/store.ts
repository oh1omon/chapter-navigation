import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { textReducer } from './reducers/text-reducers'
import thunk from 'redux-thunk'

export const rootReducer = combineReducers({ text: textReducer })

// Creating redux store from our rootReducer and applying middleware, currently it is only redux-thunk
export const store: Store<IRootStore> = createStore(rootReducer, applyMiddleware(thunk))
