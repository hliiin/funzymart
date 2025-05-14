import React from "react";
import "../styles/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity,removeItem } from "../store/modules/cartSlice";

export default function Cart({ onClose }) {
  const {items,total} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <div className="cart">
      {/* 遮罩层 */}
      <div className="cart-overlay" onClick={onClose}></div>

      {/* 弹出的购物车卡片 */}
      <div className="cart-modal">
        <div className="close">
          <span>🛒 Your Cart</span>
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
        <div className="allist">
          <ul>
            {items.map((item) => (
              <li className="list" key={item.id} >
                <div className="left">
                <img className="list-img" src={item.img} alt="" />
                <div className="list-info">
                  <p className="info-title">{item.name}</p>
                  <p className="price">${item.price}.00 USD</p>
                  <button className="del"  onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </div>
                </div>
                <input type="number" className="inp" min={1} value={item.quantity} onChange={(e) => dispatch(updateQuantity({id:item.id, quantity:e.target.value})) } />
            </li>
            ))} 
          </ul>
          <div className="total">
          <span>Subtotal</span>
          <span className="total-price">$ {total}.00 USD</span>
        </div>
        </div>
        
        <button className="Check-btn"> Continue to Checkout</button>
      </div>
    </div>
  );
}
