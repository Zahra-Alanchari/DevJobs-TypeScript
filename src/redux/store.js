import { configureStore } from "@reduxjs/toolkit";
import jobReducer from '../redux/Slice'

const store = configureStore({
    reducer:{
        job:jobReducer
    }
})

export default store;