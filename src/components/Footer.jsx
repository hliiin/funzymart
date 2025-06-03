import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0); // 滚动到页面顶部
  };
  return (
    <div className='footer'>
      <div className='footer-nav'>
        <h2>FunzyMart</h2>
        <ul>
          <li><a href="#top" onClick={handleClick} style={{textDecoration:'none'}} rel="noopener noreferrer">Home</a></li>
          <li><Link to='/product' style={{textDecoration:'none'}}>Catalog</Link></li>
          <li>Delivery</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
        <div className="imgsAll">
          <a href="https://elasticthemes.com" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg" alt="" />
          </a>
          <a href="https://elasticthemes.com" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg" alt="" />
          </a>
          <a href="https://elasticthemes.com" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg" alt="" />
          </a>
          <a href="https://elasticthemes.com" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg" alt="" />
          </a>
          <a href="https://elasticthemes.com" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg" alt="" />
          </a>
        </div>
      </div>
      <div className='footer-link'>
        <p>Created with love by <a href="https://www.elasticthemes.com/" target='_blank' rel="noopener noreferrer">Elastic Themes</a></p>
        <p>Powered by Webflow &bull; <a href="https://webflow.com/" target='_blank' rel="noopener noreferrer">Style Guide</a> &bull; <a href="javascript:;" rel="noopener noreferrer">Licensing</a></p>
      </div>
    </div>
  )
}
