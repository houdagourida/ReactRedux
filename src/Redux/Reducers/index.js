import {todoReducer} from './counterReducer'
import {combineReducers} from 'redux'

export const rootReducer=combineReducers({todoReducer})