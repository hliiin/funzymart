import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// 1.1在入口文件将大仓库引进来
import store from "./store/index";
import { Provider } from "react-redux";

// index.js是整个  项目的入口文件
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 1.2 将文件包裹，并且和store大仓库连接 Provider组件包裹
  <Provider store={store}>
    {/* // 第二种写法： 在入口文件在外层写上BrowserRouter */}
    <BrowserRouter>
      {/* App是我们的所有要展示的组件 */}
      <App />
    </BrowserRouter>
  </Provider>
);
