import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name:'auth',
  initialState:{
    islogin:false
  },
  reducers:{
    // 登陆改变状态
    login:(state) => {
      state.islogin = true
    },
    // 退出改变状态
    logout: (state) => {
      state.islogin = false
    }
  }


})

export const {login,logout} = authSlice.actions
export default authSlice.reducer