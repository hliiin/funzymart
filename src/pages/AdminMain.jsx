import React, { useState } from "react";

import GoodsPage from "./admin/Admin";
// import UserPage from "./admin/UserPage";
import "../styles/AdminMain.css";

export default function AdminMain() {
  const [activeTab, setActiveTab] = useState("goods");

  return (
    <div className="admin-layout">
      <div className="sidebar">
        <h2>Back-end management</h2>
        <ul>
          <li onClick={() => setActiveTab("goods")}>
            Commodity
          </li>
          {/* <li onClick={() => setActiveTab("users")}>
            User
          </li> */}
        </ul>
      </div>

      <div className="admin-content">
        {activeTab === "goods" && <GoodsPage />}
        {/* {activeTab === "users" && <UserPage />} */}
      </div>
    </div>
  );
}
