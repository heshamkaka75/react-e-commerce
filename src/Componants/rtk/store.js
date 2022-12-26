import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './slices/cardSlice'
import productSlice from './slices/product-slices'

const store = configureStore({
    reducer: {
        products: productSlice,
        card: cardSlice
    }
})

export default store