import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuId } from "uuid";


const initialState = {
    items: []
}

const itemCartSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        AddItem: (state, action)=>{
            const item = {
                label: action.payload.label,
                price: action.payload.price,
                id: uuId(),
            }
            state.items.push(item)
            
        },
        removeItem: (state, action)=>{
            
                state.items = state.items.filter((item)=> item.id !== action.payload)
            
        },
    }
})

export const { AddItem, removeItem } = itemCartSlice.actions
export default itemCartSlice.reducer