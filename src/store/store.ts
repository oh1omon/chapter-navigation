import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { textReducer } from './reducers/text-reducers'
import thunk from 'redux-thunk'
import { IRootStore } from '../react-app-env'
import { ruleReducer } from './reducers/rule-reducer'

export const rootReducer = combineReducers({ text: textReducer, rule: ruleReducer })

// Creating redux store from our rootReducer and applying middleware, currently it is only redux-thunk
export const store: Store<IRootStore> = createStore(rootReducer, applyMiddleware(thunk))
