const { createSlice } = require("@reduxjs/toolkit");

const cardSlice = createSlice({
    initialState: [],
    name: 'cardSlice',
    reducers: {
        addToCard: (state , action) => {
            const findProduct = state.find((product) => product.id === action.payload.id )
            if(findProduct){
                findProduct.count += 1;
            }else{
                const productClone = {...action.payload , count: 1}
                state.push(productClone)
            }
        },
        deleteFromCard: (state , action) => {
            return state.filter( (product)=> product.id !== action.payload.id )
        },
        clear: (state , action) => {
            return []
        },
    }
})

export const {addToCard, deleteFromCard, clear} = cardSlice.actions
export default cardSlice.reducer