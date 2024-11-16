import {configureStore} from "@reduxjs/toolkit"
import cartReducer from  "./CountSlice"
import itemReducer from "./ItemAddToCartSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        item: itemReducer,
    }

    
})

