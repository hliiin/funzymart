// src/components/AddGoodsModal.jsx
import React, { useState } from "react";
import axios from "axios";
import "../../styles/Admin.css"; // 保证样式生效

export default function AddGoodsModal({ onClose, onAddProduct }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    type: "",
    sku: "",
    details: {
      width: "",
      height: "",
      weight: "",
      length: "",
    },
    img: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["width", "height", "weight", "length"].includes(name)) {
      setProduct((prev) => ({
        ...prev,
        details: {
          ...prev.details,
          [name]: value,
        },
      }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    setProduct((prev) => ({ ...prev, img: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("type", product.type);
    formData.append("sku", product.sku);
    formData.append("width", product.details.width);
    formData.append("height", product.details.height);
    formData.append("weight", product.details.weight);
    formData.append("length", product.details.length);
    if (product.img) {
      formData.append("image", product.img);
    }
    try {
    // 发起请求，将商品数据提交到后端
    const response = await axios.post("http://127.0.0.1/addToy", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("成功添加商品:", response.data);
    alert("添加成功！");

    // 获取返回的完整商品数据
    // const newProduct = {
    //   ...product,
    //   id: Date.now(),
    //   img: response.data.data.img, // 获取后端返回的图片 URL
    // };
    // console.log(newProduct,'newProduct');
    // 更新商品列表
    // onAddProduct(newProduct);
    onClose(); // 关闭弹窗
  } catch (error) {
    console.error("提交失败:", error);
    alert("添加失败");
  }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>新增商品</h3>
        <form onSubmit={handleSubmit} className="form">
          <label>
            商品名称
            <input
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            价格
            <input
              name="price"
              type="number"
              value={product.price}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            类型
            <select
              name="type"
              value={product.type}
              onChange={handleChange}
              required
            >
              <option value="">请选择类型</option>
              <option value="stuffed-animals">stuffed-animals</option>
              <option value="wooden-toys">wooden-toys</option>
            </select>
          </label>
          <label>
            SKU
            <input
              name="sku"
              value={product.sku}
              onChange={handleChange}
              required
            />
          </label>

          <div className="row">
            <input
              name="width"
              placeholder="宽"
              value={product.details.width}
              onChange={handleChange}
            />
            <input
              name="height"
              placeholder="高"
              value={product.details.height}
              onChange={handleChange}
            />
            <input
              name="length"
              placeholder="长"
              value={product.details.length}
              onChange={handleChange}
            />
            <input
              name="weight"
              placeholder="重量"
              value={product.details.weight}
              onChange={handleChange}
            />
          </div>

          <label>
            商品图片
            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>

          <div className="actions">
            <button type="submit">提交</button>
            <button type="button" onClick={onClose}>
              取消
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
