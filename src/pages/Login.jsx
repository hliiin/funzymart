import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login,logout } from '../store/modules/authSlice'

export default function Login() {
  const navigate = useNavigate()
  const dispatch  =useDispatch()
  //  登陆成功后需要跳转到 首页
  const handleLogin = () => {
    dispatch(login())
    navigate('/')
  }
  return (
    <div>
      <h1>这是登陆页面</h1>
      <button onClick={handleLogin} >点击登陆</button>
      <button onClick={() => dispatch(logout())} >点击退出</button>
    </div>
  )
}
