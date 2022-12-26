import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('productSlice/fetchproduc', async ()=> {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data
})

const productSlice =  createSlice({
    initialState: [],
    name: 'productSlice',
    reducers: {},
    extraReducers: (bulder) => {
        bulder.addCase(fetchProducts.fulfilled, (state , actions) => {
            return actions.payload
        })
    }
})

export const {} = productSlice.actions;
export default productSlice.reducer