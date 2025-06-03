import React, { useEffect, useState } from "react";
import "../styles/Layout.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ToySection from "../components/ToySection ";
import goodslist from "../api/goodsList";
export default function Layout() {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1/getToys") // 替换为你的真实接口地址
      .then((res) => setToys(res.data))
      .catch((err) => {
        console.error("请求失败，使用默认数据:", err);
        setToys(goodslist); // 使用默认数据作为备选
      });
  }, []);

  return (
    <div className="home">
      {/* one */}
      <div className="hero-section">
        <div className="text-white">
          <h6>Say Hello to FunzyMart!</h6>
          <p>
            Free Ecommerce
            <br />
            Template for Webflow
          </p>
          <Link to="/productlist">
            <button className="open">Open catelog</button>
          </Link>
        </div>
      </div>
      {/* tow */}
      <div className="home-toys">
        <ul>
          <li style={{ backgroundColor: "#ffc12c" }}>
            <img
              src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png"
              alt=""
            />
            <div className="title">
              <p>Stuffed Animals</p>
              <Link to="/productlist">
                <button>Shop Now</button>
              </Link>
            </div>
          </li>
          <li style={{ backgroundColor: "#fb416b" }} className="lis">
            <img
              className="child-right"
              src="http://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png"
              alt=""
            />
            <div className="title">
              <p>Stuffed Animals</p>
              <Link to="/productlist">
                <button>Shop Now</button>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      {/* toys-classify */}
      <div className="toys-classify">
        <ToySection
          title="Stuffed Animals"
          typeFilter="stuffed-animals"
          items={toys}
        />
        <ToySection title="Wooden Toys" typeFilter="wooden-toys" items={toys} />
      </div>
      {/* three */}
      <div className="all-toys"></div>
      {/* four */}
      <div className="watch">
        <p>About The Shop</p>
        <p style={{ fontSize: "40px" }}>Watch Our Story</p>
        <p className="introduce">
          There is no magic formula to write perfect ad copy. It is based on a
          number of factors, including ad placement,
          <br /> demographic, even the consumer’s mood.
        </p>
        <div className="movie">
          <img
            src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec4b504f1c4031af32_play-icon-white.svg"
            alt=""
          />
        </div>
      </div>
      {/* five */}
      <div className="content-five">
        <p style={{ color: "#a5c926", margin: "10px 0" }}>Made for Webflow</p>
        <p style={{ fontSize: "40px" }}>
          Simple & Colorful Ecommerce <br /> Template for Your Business
        </p>
        <div className="content-main">
          <div className="main-left">
            <p style={{ fontSize: "25px" }}>Available for FREE!</p>
            <p style={{ border: "2px solid #a5c926", width: "80px" }}></p>
            <p style={{ color: "#999999" }}>
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy
            </p>
            <button>GET IT NOW!</button>
          </div>
          <img
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg"
            alt=""
            width="40%"
          />
        </div>
      </div>
    </div>
  );
}
