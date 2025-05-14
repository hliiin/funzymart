import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
// 创建保护路由的组件

export default function ProtectedRoute({element,requresAuth}) {
  const {islogin} = useSelector((state) => state.auth )
  console.log(islogin);
  
  // 功能 ： 如果页面需要登陆且用户没有登陆的时候， 就重定向到登录页
  if(requresAuth && !islogin) {
    return <Navigate to={'/login'} />
  } else {
    return element
  }
}
