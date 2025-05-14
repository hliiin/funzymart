import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:'cart',
  initialState:{
    items:[], 
    total:0, 
  },
  reducers:{
    // -----添加商品
    addItem:(state,action) => {
      const addproduct = state.items.find((item) => item.id === action.payload.id )
      if(!addproduct) {
        state.items.push(action.payload)
      } else {
        addproduct.quantity += action.payload.quantity
      }
      state.total += action.payload.price * action.payload.quantity
    },
    // ------移除商品
    removeItem:(state,action) => {
      const productIndex = state.items.findIndex((item) => item.id === action.payload)
      if(productIndex > -1) {
        const remove  = state.items[productIndex]
        state.total = state.total - remove.price * remove.quantity
        state.items.splice(productIndex,1)
      }
    },

    // ------和页面中输入框的数量保持一致-输入框也可以改变数量
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.items.find((item) => item.id === id);
    
      if (product) {
        const quantityDiff = Number(quantity) - product.quantity;
        state.total += quantityDiff * product.price;
        product.quantity = quantity;
      }
    }
  }


})

export const {addItem,removeItem,updateQuantity} = cartSlice.actions
export default cartSlice.reducer