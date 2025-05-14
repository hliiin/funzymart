import React, { useState, useEffect } from "react";
import '../../styles/Adminlist'
import axios from "axios";

export default function Admin() {
  const [productList, setProductList] = useState(() => {
    const saved = localStorage.getItem("productList");
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);

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
      const response = await axios.post("http://127.0.0.1/addToy", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("成功添加商品:", response.data);

      for (let pair of formData.entries()) {
        console.log(pair[0] + ":", pair[1]);
      }

      alert("添加成功！");
      const newProduct = {
        ...product,
        id: Date.now(),
        img: product.img ? URL.createObjectURL(product.img) : null,
      };
      const updatedList = [...productList, newProduct];
      setProductList(updatedList);
      setShowModal(false);

      setProduct({
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
    } catch (error) {
      console.error("提交失败:", error);
      alert("添加失败");
    }
  };

  return (
    <div className="admin-container">
      <h2>商品管理</h2>
      <button className="add-button" onClick={() => setShowModal(true)}>
        新增商品
      </button>

      <table className="product-table">
        <thead>
          <tr>
            <th>名称</th>
            <th>价格</th>
            <th>类型</th>
            <th>SKU</th>
            <th>宽</th>
            <th>高</th>
            <th>长</th>
            <th>重量</th>
            <th>图片</th>
          </tr>
        </thead>
        <tbody>
          {productList.length === 0 ? (
            <tr>
              <td colSpan="9" className="empty">
                暂无商品
              </td>
            </tr>
          ) : (
            productList.map((p, index) => (
              <tr key={p.id || index}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.type}</td>
                <td>{p.sku}</td>
                <td>{p.details.width}</td>
                <td>{p.details.height}</td>
                <td>{p.details.length}</td>
                <td>{p.details.weight}</td>
                <td>
                  {p.img && (
                    <img
                      src={p.img}
                      alt="预览"
                      width="50"
                    />
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {showModal && (
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
                <button type="button" onClick={() => setShowModal(false)}>
                  取消
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
