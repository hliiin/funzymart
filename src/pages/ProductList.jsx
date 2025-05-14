import React, { useEffect, useState } from 'react'
import '../styles/ProductList.css'
import { Link } from 'react-router-dom'
// import goodsList from '../api/goodsList'
import axios from 'axios'
export default function ProductList() {
  const [allList,setAllList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get('http://127.0.0.1/getToys');
        const newGoods = res.data
        // console.log(res.data);
        setAllList(newGoods)
    };
    fetchData(); // 调用异步函数
  },[])
  return (
    <div className='product-list'>
        <h2>All Toys</h2>
        <ul className='allToys'>
        {allList.map((item) => (
              <li className='toy-list' key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img className='toys-img' src={item.img.startsWith('http') ? item.img : `http://127.0.0.1/${item.img}`} alt="商品图片" />
                  <p>{item.name}</p>
                  <p className="toy-price">${item.price}.00 USD</p>
                </Link>
              </li>
            ))}
        </ul>
    </div>
  )
}
