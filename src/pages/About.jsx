import React from "react";
import "../styles/Layout.css";
import "../styles/About.scss";

export default function About() {
  return (
    <div className="home">
      {/* one */}
      <div className="Introducing">
        <div className="introduce">
          <h6>Say Hello to FunzyMart!</h6>
          <h1>Introducing FunzyMart</h1>
          <p>
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
          </p>
          <button>
            <h4>More About Us</h4>
          </button>
        </div>
        <img
          src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-2000.jpeg"
          alt=""
        />
      </div>
      {/* two */}
      <div className="content-five" style={{ paddingBottom: 50 }}>
        <p style={{ color: "#a5c926", margin: "10px 0" }}>Made for Webflow</p>
        <p style={{ fontSize: "40px" }}>
          Simple & Colorful Ecommerce <br /> Template for Your Business
        </p>
        <div className="content-main">
          <div className="main-left">
            <p style={{ fontSize: "25px" }}>Available for FREE!</p>
            <p style={{ border: "2px solid #a5c926", width: "80px" }}></p>
            <p style={{ color: "#999999" }}>
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy
            </p>
            <button>GET IT NOW!</button>
          </div>
          <img
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg"
            alt=""
            width="40%"
          />
        </div>
      </div>
      {/* three */}
      <div className="Responsive">
        <img
          src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77f0b5b7843138dc3c3_side-image-02-p-1080.jpeg"
          alt=""
        />
        <div className="resContent">
          <h2>100% Responsive</h2>
          <p>
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy
          </p>
          <button>
            <h4>Explore Our Toys</h4>
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg"
              alt=">"
              style={{
                width: 10,
                height: 10,
                margin: "0 8px",
                verticalAlign: "middle",
              }}
            />
          </button>
        </div>
      </div>
      {/* four */}
      <div className="watch" style={{ marginBottom: 100 }}>
        <p>About The Shop</p>
        <p style={{ fontSize: "40px" }}>Watch Our Story</p>
        <p className="introduce">
          There is no magic formula to write perfect ad copy. It is based on a
          number of factors, including ad placement,
          <br /> demographic, even the consumer’s mood.
        </p>
        <div className="movie">
          <img
            src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec4b504f1c4031af32_play-icon-white.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
