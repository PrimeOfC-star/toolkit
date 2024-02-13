import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  value: 0,
}

//state.count.value
const counterSlice = createSlice ({
    name :"count",     //The slice's name. Used to namespace the generated action types.
    initialState,   //The initial state that should be used when the reducer is called the first time
    reducers:{
        Inc :(state)=>{   
            state.value += 1
        },
        Dec :(state)=>{
            state.value -= 1
        }
    }
})

export const {Inc, Dec} = counterSlice.actions
export default counterSlice.reducer
