import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import goodsList from "../api/goodsList";
import "../styles/Product.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../store/modules/cartSlice";

export default function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  // const product = goodsList.find((item) => item.id === id);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1/getToyById/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("请求失败", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const addCart = () => {
    dispatch(addItem({ ...product, quantity }));
    alert("商品假如购物车成功");
  };

  if (!product) {
    return <h1>商品不存在.....</h1>;
  }
  return (
    <div className="product">
      <div className="info">
        <div className="info-describe">
          <h1>{product.name}</h1>
          <p className="content">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy. It is based on a
            number of factors.
          </p>
          <p className="price">$ {product.price}.00 USD</p>
          <div className="inp-btn">
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button onClick={addCart}>Add to Cart</button>
          </div>
        </div>
        <img src={product.img} width="40%" alt="" />
      </div>
      <div className="details">
        <h2>Product Details</h2>
        <p>SKU:{product.sku}</p>
      </div>
      <div className="ContentSku">
        <div className="description">
          <h2>Add Your Product Description</h2>
          <p>
            The rich text element allows you to create and format headings,
            paragraphs, blockquotes, images, and video all in one place instead
            of having to add and format them individually. Just double-click and
            easily create content. A rich text element can be used with static
            or dynamic content. For static content, just drop it into any page
            and begin editing. For dynamic content, add a rich text field to any
            collection and then connect a rich text element to that field in the
            settings panel. Voila!
          </p>
          <h2>Simple & Elegant Template</h2>
          <p>
            Headings, paragraphs, blockquotes, figures, images, and figure
            captions can all be styled after a class is added to the rich text
            element using the "When inside of" nested selector system.
          </p>
          <ul className="list">
            <li>Beautifully Designed</li>
            <li>Fully Responsive</li>
            <li>CMS Content</li>
            <li>Smooth Animations</li>
          </ul>
          <p>
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
          </p>
          <h4>Perfect Choice for Your Business</h4>
          <p>
            Grabbing the consumer’s attention isn’t enough; you have to keep
            that attention for at least a few seconds. This is where your
            benefits come into play or a product description that sets your
            offer apart from the others.
          </p>
        </div>
        <div className="AllDetails">
          <ul>
            <li>
              Width<span>{product.details.width}in</span>
            </li>
            <li>
              Height<span>{product.details.height}in</span>
            </li>
            <li>
              Length<span>{product.details.length}in</span>
            </li>
            <li style={{ border: "none" }}>
              Weight<span>{product.details.weight}oz</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
