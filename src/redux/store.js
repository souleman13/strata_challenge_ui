import { configureStore } from '@reduxjs/toolkit'

import operationReducer from './reducers'

export default configureStore({
  reducer: {
    ops: operationReducer
  }
})