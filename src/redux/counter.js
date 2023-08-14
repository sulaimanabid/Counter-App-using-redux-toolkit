import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter', // Name of the Slice
  initialState: { // Initial State declared as value
   value: 0
  },
  reducers: {     // reducers that touches the actual state
    increment(state) {     // increment decrement is the actions
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions   // export the actions
export default counterSlice.reducer  // export the reducer