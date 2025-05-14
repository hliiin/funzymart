import React, { useState, useEffect } from "react";
import AddUserModal from "../../components/Toast/AddUserModal";

export default function UserPage() {
  const [userList, setUserList] = useState(() => {
    const saved = localStorage.getItem("userList");
    return saved ? JSON.parse(saved) : [];
  });

  const [newUser, setNewUser] = useState({ name: "", password: "", email: "" });
  const [showUserModal, setShowUserModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const updatedUsers = [...userList, { ...newUser, id: Date.now() }];
    setUserList(updatedUsers);
    setNewUser({ name: "", password: "", email: "" });
    setShowUserModal(false);
  };

  return (
    <div className="admin-content">
      <h2>用户管理</h2>
      <button className="add-button" onClick={() => setShowUserModal(true)}>新增用户</button>

      <table className="product-table">
        <thead>
          <tr>
            <th>用户名</th>
            <th>密码</th>
            <th>邮箱</th>
          </tr>
        </thead>
        <tbody>
          {userList.length === 0 ? (
            <tr><td colSpan="3" className="empty">暂无用户</td></tr>
          ) : (
            userList.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {showUserModal && (
        <AddUserModal
          newUser={newUser}
          onChange={handleUserChange}
          onSubmit={handleAddUser}
          onClose={() => setShowUserModal(false)}
        />
      )}
    </div>
  );
}
