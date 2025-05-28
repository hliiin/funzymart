import React from "react";
import { Link } from "react-router-dom";
import "../styles/ToySection.scss";

export default function ToySection({ title, typeFilter, items }) {
  const filtered = items.filter((item) => item.type === typeFilter).slice(0, 4);
  function getImageUrl(img) {
    if (!img) return "";
    if (img.startsWith("http")) return img;
    return `http://127.0.0.1${img.startsWith("/") ? "" : "/"}${img}`;
  }
  return (
    <div className="product-section">
      <div className="title-Icon">
        <h1>{title}</h1>
        <Link to="/productlist">
          <button>
            <h4>See All Toys</h4>
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg"
              alt=">"
              style={{
                width: 10,
                height: 10,
                margin: "0 8px",
                verticalAlign: "middle",
              }}
            />
          </button>
        </Link>
      </div>

      <ul className="allToys">
        {filtered.map((item) => (
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
