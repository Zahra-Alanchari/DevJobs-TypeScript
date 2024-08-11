import { configureStore } from "@reduxjs/toolkit";
import jobReducer from './Slice'

const store = configureStore({
    reducer:{
        job:jobReducer
    }
})
export type AppDispatch = typeof store.dispatch;

export default store;