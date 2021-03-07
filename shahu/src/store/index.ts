import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './slice/counter'
import profileReducer from './slice/profile'
export default configureStore({
  reducer: {
    // counter: counterReducer,
    profile: profileReducer
  }
})
