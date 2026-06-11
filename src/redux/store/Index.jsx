import { configureStore } from "@reduxjs/toolkit"
import { CartSlice } from "../cartSlice/CartSlice"


export  const store = configureStore({
    reducer:{
        cart:CartSlice.reducer,
    }
})

