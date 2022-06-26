import { configureStore } from '@reduxjs/toolkit'
import sliceFunc from './reducers'


const store = configureStore({
    reducer: {
        registration: sliceFunc.reducer
    },
})
export default store