
import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div>
        <header>
  <div class="container">
    <div class="header_flex">
      <div>
        <a href="/"><img src="https://sudip-bhowmick.github.io/images/img/logo.svg" alt="logo" class="logo"/></a>
      </div>
      <div class="d_flex gap_26">
        <div class="d_flex gap_26">
          <div class="contact_links">
            <div class="contact_icon">
              <img src="https://sudip-bhowmick.github.io/images/img/mail.svg" alt="mail"/>
              <a href="mailto:sudipbhowmick80@gmail.com">sudipbhowmick80@gmail.com</a>
            </div>
            <div class="contact_icon">
              <img src="https://sudip-bhowmick.github.io/images/img/call.svg" alt="call"/>
              <a href="tel:918898244769">+91 88982447698</a>
            </div>
          </div>
          <div class="social_links">
            <a href="#" target="_blank"><img src="https://sudip-bhowmick.github.io/images/img/linkedin.svg" alt="linkedin"/></a>
            <a href="#" target="_blank"><img src="https://sudip-bhowmick.github.io/images/img/facebook.svg" alt="facebook"/></a>
            <a href="#" target="_blank"><img src="https://sudip-bhowmick.github.io/images/img/twitter.svg" alt="twitter"/></a>
          </div>
        </div>
        <div class="header_cta">
          <a href="javascript:void(0)" class="btn_one">Book a call</a>
        </div>

        <button type="button" class="burger" id="burger">
          <span class="burger_line"></span>
          <span class="burger_line"></span>
          <span class="burger_line"></span>
        </button>
      </div>
    </div>
  </div>
  <div class="overlay"></div>
  <nav class="dark_bg" id="menu">
    <div class="container">
      <ul>
        <li><a href="javascript:void(0)" class="active">Home</a></li>
        <li><a href="javascript:void(0)">About us</a></li>
        <li><a href="javascript:void(0)">Services</a></li>
        <li><a href="javascript:void(0)">Forms</a></li>
        <li>
          <a class="has_sub_menu" href="javascript:void(0)">Calculators</a>
          <ul class="sub_menu">
            <li><a class="menu-link" href="javascript:void(0)">Tax calulator</a>
            </li>
            <li><a class="menu-link" href="javascript:void(0)">TDS calulator</a>
            </li>
          </ul>
        </li>
        <li><a href="javascript:void(0)">Insights</a></li>
        <li><a href="javascript:void(0)">Ebooks</a></li>
        <li><a href="javascript:void(0)">Contact us</a></li>
      </ul>
    </div>
  </nav>
</header>

{/* <main style="height: 50vh">
</main> */}
   </div>
  )
}

export default Header;