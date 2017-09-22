import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import {persistStore, autoRehydrate} from 'redux-persist'
import usersReducer from './reducers/usersReducers'
import cachesReducer from './reducers/cachesReducers'
import { setUsers } from './actions/userActions'
import { setCaches } from './actions/cacheActions'
import { checkSession } from './actions/sessionActions'

let reducer = combineReducers({users: usersReducer, caches: cachesReducer})

const store = createStore(reducer, {}, compose(applyMiddleware(thunk), autoRehydrate()))

store.dispatch(setUsers())
store.dispatch(setCaches())
persistStore(store)


export default store
