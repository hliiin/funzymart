//  路由页面， 存放所有的页面路由
import Layout from "../pages/Layout"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"

import ProtectedRoute from "../components/ProtectedRoute"
import { Route,Routes } from "react-router-dom"

import ProductList from "../pages/ProductList"
import Product from "../pages/Product"
import Contacts from "../pages/Contacts"
import AdminMain from "../pages/AdminMain"


// 1.配置路由数组
const router = [
  {
    path:'/',
    element: <Layout />
  },
  {
    path:'/login',
    element: <Login />
  },
  {
    path:'*',
    element: <NotFound />
  },
  {
    path:'/product',
    element:<ProductList />
  },
  {
    path:'/product/:id',
    element:<Product />
  },
  {
    path:'/contacts',
    element:<Contacts></Contacts>
  },
  {
    path:'/admin',
    element:<AdminMain></AdminMain>
  }
  
]

const RouteList = () => {
  return (
    <Routes>
      {router.map((route,index) => {
        // 第一种情况，一级路由有子路由的（二级路由）
        if(route.children) {
          return (
            // 有子路由的一级路由
            <Route key={index} path={route.path} element={<ProtectedRoute element={route.element} requresAuth={route.requresAuth} />}>
              {/* 一级路由的子路由 */}
              {route.children.map((childRoute,childIndex) => (
                <Route key={childIndex} path={childRoute.path} element={<ProtectedRoute element={childRoute.element} requresAuth={childRoute.requresAuth} />}></Route>
              ))}
            </Route>
          )
        } 
        //第二种， 没有子路由的一级路由
        return (
          <Route key={index} path={route.path} element= {<ProtectedRoute element={route.element} requresAuth={route.requresAuth} />}></Route>
        )
      })}
    </Routes>
  )
}

export default RouteList