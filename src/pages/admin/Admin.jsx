import React, { useState, useEffect } from "react";
import "../../styles/Admin.css";
import AddGoodsModal from "../../components/Toast/AddGoodsModal";
import axios from "axios";
import { Pagination } from "antd"; // 引入 Ant Design 的 Pagination 组件

export default function Admin() {
  const [showModal, setShowModal] = useState(false);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 当前页
  const pageSize = 5; // 每页显示10条数据
  const [editingProduct, setEditingProduct] = useState(null); // 当前正在编辑的商品

  // 获取商品数据并设置商品列表
  const fetchProductList = async () => {
    try {
      const response = await axios.get("http://127.0.0.1/getToys");
      setProductList(response.data); // 后端返回商品列表
    } catch (error) {
      console.error("获取商品数据失败:", error);
    }
  };
  useEffect(() => {
    fetchProductList();
  }, []);

  // 删除商品
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1/delete/${id}`);
      // console.log(id);
    } catch (error) {
      console.error("获取商品数据失败:", error);
    }
    fetchProductList();
  };

  // 获取当前页的数据
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = productList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // 计算总页数
  // const totalPages = Math.ceil(productList.length / pageSize);

  // 切换页码
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
            <th>修改</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.length === 0 ? (
            <tr>
              <td colSpan="9" className="empty">
                暂无商品
              </td>
            </tr>
          ) : (
            currentProducts.map((p, index) => (
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
                      src={
                      p.img?.startsWith("http")
                        ? p.img
                        : `http://127.0.0.1${p.img}${p._id ? `?t=${p._id}` : ""}`
                    }
                      alt="预览"
                      width="50"
                    />
                  )}
                </td>
                <td className="tdBtns">
                  <button
                    className="changeBtn"
                    onClick={() => {
                      setEditingProduct(p);
                      setShowModal(true);
                    }}
                  >
                    修改
                  </button>
                  <button className="delBtn" onClick={() => handleDelete(p.id)}>
                    删除
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Ant Design 的分页组件 */}
      <div className="pagination-container">
        <Pagination
          current={currentPage}
          total={productList.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false} // 不显示每页条数选择
        />
      </div>

      {showModal && (
        <AddGoodsModal
          onClose={() => {
            setShowModal(false);
            setEditingProduct(null);
          }}
          // onAddProduct={handleAddProduct}
          productToEdit={editingProduct}
          onUpdateProduct={() => {
            fetchProductList(); // 只刷新，不重复提交
            setShowModal(false);
            setEditingProduct(null);
          }}
        />
      )}
    </div>
  );
}
