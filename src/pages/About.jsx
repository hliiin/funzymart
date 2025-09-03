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
            Welcome to our world of wooden plush, a home of authentic, warm toys. We believe the best toys are made with the gifts of nature and the tenderness of love. Each wooden toy retains its natural texture and feel, stimulating a child's sense of touch and creativity. Each plush toy offers a soft embrace, providing children with the warmest companionship and a sense of security.
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
        {/* <p style={{ color: "#a5c926", margin: "10px 0" }}>Made for Webflow</p> */}
        <p style={{ fontSize: "40px" }}>
          Use toys to create a childhood full of <br /> miracles for children
        </p>
        <div className="content-main">
          <div className="main-left">
            <p style={{ fontSize: "25px" }}>Describe</p>
            <p style={{ border: "2px solid #a5c926", width: "80px" }}></p>
            <p style={{ color: "#999999" }}>
              Our store is dedicated to providing you and your children with
              more than just entertainment tools; we also provide intellectual
              enlightenment and emotional connections. Every toy undergoes
              rigorous quality screening to ensure safety and durability,
              allowing children to spend their most innocent and precious time
              together.
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
          <h2>Explanation</h2>
          <p>
            We hold a magical world within every toy. It's a child's most
            precious treasure, and the dream we cherish.
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
          We carefully select each toy, just to let your children explore
          through play, grow through creation, and light up their childhood
          <br /> with every happy moment.
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
