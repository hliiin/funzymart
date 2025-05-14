import React from "react";
import "../styles/Ins.css";
export default function Instagram() {
  return (
    <div className="sub-ins">
      <div className="subscribe">
        <div className="sub-left">
          <div
            style={{
              backgroundColor: "#a5c926",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              textAlign: "center",
            }}
          >
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf56dcace69cfd39b34f7a_paperplane-icon-white.svg"
              alt=""
            />
          </div>
          <h2 style={{ marginLeft: "20px" }}>
            Subscribe to our newsletter
            <br />& get <span style={{ color: "#a5c926" }}>10% discount!</span>
          </h2>
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email address"
            style={{
              height: "40px",
              borderRadius: "40px",
              width: "250px",
              padding: "0 10px",
              border: "1px solid rgb(146, 139, 139)",
            }}
          />
          <button
            style={{
              height: "40px",
              width: "100px",
              border: "none",
              borderRadius: "40px",
              color: "white",
              backgroundColor: "#a5c926",
              marginLeft: "20px",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="instagram">
        <p style={{ color: "#a5c926" }}>@ElasticThemes</p>
        <p>We're on Instagram!</p>
        <ul className="insList">
          <li>
            <a href="https://instagram.com">
              <img
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg"
                alt=""
              />
            </a>
          </li>
          <a href="https://instagram.com">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg"
              alt=""
            />
          </a>
          <li>
            <a href="https://instagram.com">
              <img
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <img
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <img
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <img
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg"
                alt=""
              />
            </a>
          </li>
        </ul>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <button className="ins-btn">See More Photos</button>
        </a>
      </div>
    </div>
  );
}
