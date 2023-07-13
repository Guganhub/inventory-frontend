import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/features/auth/authSlice'
import productReducer from '../redux/features/auth/product/productSlice'
import filterReducer from '../redux/features/auth/product/filterSlice'




export const store = configureStore({
    reducer:{
        auth : authReducer,
        product : productReducer,
        filter : filterReducer

    }
})