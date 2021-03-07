import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counter'
export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
