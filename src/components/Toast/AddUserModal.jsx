import React from "react";

export default function AddUserModal({ newUser, onChange, onSubmit, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>新增用户</h3>
        <form onSubmit={onSubmit} className="form">
          <label>
            用户名
            <input name="name" value={newUser.name} onChange={onChange} required />
          </label>
          <label>
            密码
            <input name="password" type="password" value={newUser.password} onChange={onChange} required />
          </label>
          <label>
            邮箱
            <input name="email" type="email" value={newUser.email} onChange={onChange} required />
          </label>
          <div className="actions">
            <button type="submit">提交</button>
            <button type="button" onClick={onClose}>取消</button>
          </div>
        </form>
      </div>
    </div>
  );
}
