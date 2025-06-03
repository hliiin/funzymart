import "./App.css";
import { useState } from "react";
import RouteList from "./router/index";
import Cart from "./pages/Cart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import BreadcrumbNav from "./components/BreadcrumbNav";
import Instagram from "./components/Instagram";
import { useLocation } from "react-router-dom";

function App() {
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const { items } = useSelector((state) => state.cart);
  const totalQuantity = items.reduce(
    (sum, item) => Number(sum) + Number(item.quantity),
    0
  );
  // 如果是/admin 路由 不展示其他底部组件
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";
  return (
    <div className="App">
      <div className="top-header">
        <div className="top">
          <div className="top-number">
            Call Us: +1 213 974-9090&nbsp;&nbsp;&nbsp;&nbsp;Email:
            FunzyMart@Gmail.com
          </div>
          <div className="imgs">
            <a href="https://elasticthemes.com">
              <img
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg"
                alt=""
              />
            </a>
            <a href="https://elasticthemes.com">
              <img
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg"
                alt=""
              />
            </a>
            <a href="https://elasticthemes.com">
              <img
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg"
                alt=""
              />
            </a>
            <a href="https://elasticthemes.com">
              <img
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg"
                alt=""
              />
            </a>
            <a href="https://elasticthemes.com">
              <img
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="header">
          <div className="nav">
            <Link to="/">
              <h3>FunzyMart</h3>
            </Link>
            <ul className="nav-ul">
              <Link to="/productlist">
                <li>Catalog</li>
              </Link>
              <Link to="/delivery">
                <li>Delivery</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contacts">
                <li>Contacts</li>
              </Link>
              <Link to="/admin">
                <li>Admin</li>
              </Link>
            </ul>
          </div>
          <div className="cartIcon" onClick={toggleCart}>
            Cart
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf75c3bf02346640399fec_cart-icon.svg"
              alt=""
            />
            <span className="total-quantity">
              {items.length === 0 ? 0 : Number(totalQuantity)}
            </span>
          </div>
        </div>
      </div>
      {/* 路由页面 */}
      <div>
        {/* 回到顶部 */}
        <ScrollToTop />
        {!isAdminPage && <BreadcrumbNav />}
        <RouteList />
        {!isAdminPage && <Instagram />}
        {!isAdminPage && <Footer />}
      </div>

      {/* 条件渲染购物车卡片 */}
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </div>
  );
}

export default App;
