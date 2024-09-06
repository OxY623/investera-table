import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { thunk } from 'redux-thunk'

import TablesReducer from './reducers'

const store = createStore(
  TablesReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store
