import { configureStore } from "@reduxjs/toolkit";

// 引入购物车仓库
import cartReducer from "./modules/cartSlice";
// 引入登陆状态的仓库
import authReducer from "./modules/authSlice";


// 持久化--手动
// 从 localStorage 读取持久化状态
const cartFromLocal = JSON.parse(localStorage.getItem('cart') || '{}');
const authFromLocal = JSON.parse(localStorage.getItem('auth') || '{}');
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
  preloadedState: {
    cart: {
      items: cartFromLocal.items || [],
      total: cartFromLocal.total || 0,
    },
    auth: {
      islogin:authFromLocal.islogin === true
    },
  }
});

// 持久化 cart 和 auth 状态
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cart', JSON.stringify(state.cart));
  localStorage.setItem('auth', JSON.stringify(state.auth));
});


// 导出大仓库
export default store;
