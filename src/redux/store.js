import {configureStore} from "@reduxjs/toolkit"
import countReducer from "./slices/counterSlice"

const store = configureStore({
    reducer:{
      count1: countReducer
    }
})

export default store

