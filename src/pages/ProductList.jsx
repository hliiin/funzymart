import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import { Link } from "react-router-dom";
import axios from "axios";
import goodsList from "../api/goodsList";

function getImageUrl(img) {
  if (!img) return "";
  if (img.startsWith("http")) return img;
  return `http://127.0.0.1${img.startsWith("/") ? "" : "/"}${img}`;
}

export default function ProductList() {
  const [allList, setAllList] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1/getToys");
        setAllList(res.data);
        console.log("state:", res.data);
      } catch (err) {
        console.error("err:", err);
        setAllList(goodsList); // 使用默认数据作为备选
      }
    };
    fetchData();
  }, []);

  // 根据选择的标签筛选商品
  const getFilteredList = () => {
    if (category === "all") return allList;
    if (category === "wooden-toys")
      return allList.filter((item) => item.type === "wooden-toys");
    if (category === "stuffed-animals")
      return allList.filter((item) => item.type === "stuffed-animals");
    return [];
  };

  const filteredList = getFilteredList();

  return (
    <div className="product-list">
      <div className="tabAll">
        <h2 style={{fontSize:'30px'}}>
          {category === "all"
            ? "All Toys"
            : category === "wooden-toys"
            ? "Wooden Toys"
            : "Stuffed Animals"}
        </h2>
        {/* 分类标签 */}
        <div className="tab-header">
          <span
            className={category === "all" ? "active" : ""}
            onClick={() => setCategory("all")}
          >
            All Toys
          </span>
          <span
            className={category === "wooden-toys" ? "active" : ""}
            onClick={() => setCategory("wooden-toys")}
          >
            Wooden Toys
          </span>
          <span
            className={category === "stuffed-animals" ? "active" : ""}
            onClick={() => setCategory("stuffed-animals")}
          >
            Stuffed Animals
          </span>
        </div>
      </div>

      <ul className="allToys">
        {filteredList.map((item) => (
          <li className="toy-list" key={item._id || item.id}>
            <Link to={`/product/${item._id || item.id}`}>
            {/* <Link to={`/product/${item.name}`}> */}
              <img
                className="toys-img"
                src={getImageUrl(item.img)}
                alt="商品图片"
              />
              <p>{item.name}</p>
              <p className="toy-price">${item.price}.00 USD</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
