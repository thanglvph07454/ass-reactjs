import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Header = props => {
    return (
      <div>
            <header className="header_area">
  <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
    {/* Classy Menu */}
    <nav className="classy-navbar" id="essenceNav">
      {/* Logo */}
      <Link to="/"><img src="client/img/core-img/logo.png" alt /></Link>
      {/* Navbar Toggler */}
      <div className="classy-navbar-toggler">
        <span className="navbarToggler"><span /><span /><span /></span>
      </div>
      {/* Menu */}
      <div className="classy-menu">
        {/* close btn */}
        <div className="classycloseIcon">
          <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
        </div>
        {/* Nav Start */}
        <div className="classynav">
          <ul>
            <li><Link to="/shop">Shop</Link>
              <div className="megamenu">
                <ul className="single-mega cn-col-4">
                  <li className="title">Women's Collection</li>
                  <li><a href="shop.html">Dresses</a></li>
                  <li><a href="shop.html">Blouses &amp; Shirts</a></li>
                  <li><a href="shop.html">T-shirts</a></li>
                  <li><a href="shop.html">Rompers</a></li>
                  <li><a href="shop.html">Bras &amp; Panties</a></li>
                </ul>
                <ul className="single-mega cn-col-4">
                  <li className="title">Men's Collection</li>
                  <li><a href="shop.html">T-Shirts</a></li>
                  <li><a href="shop.html">Polo</a></li>
                  <li><a href="shop.html">Shirts</a></li>
                  <li><a href="shop.html">Jackets</a></li>
                  <li><a href="shop.html">Trench</a></li>
                </ul>
                <ul className="single-mega cn-col-4">
                  <li className="title">Kid's Collection</li>
                  <li><a href="shop.html">Dresses</a></li>
                  <li><a href="shop.html">Shirts</a></li>
                  <li><a href="shop.html">T-shirts</a></li>
                  <li><a href="shop.html">Jackets</a></li>
                  <li><a href="shop.html">Trench</a></li>
                </ul>
                <div className="single-mega cn-col-4">
                  <img src="client/img/bg-img/bg-6.jpg" alt />
                </div>
              </div>
            </li>
            <li><a href="#">Pages</a>
              
            </li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        {/* Nav End */}
      </div>
    </nav>
    {/* Header Meta Data */}
    <div className="header-meta d-flex clearfix justify-content-end">
      {/* Search Area */}
      <div className="search-area">
        <form action="#" method="post">
          <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
          <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
        </form>
      </div>
      {/* Favourite Area */}
      <div className="favourite-area">
        <a href="#"><img src="client/img/core-img/heart.svg" alt /></a>
      </div>
      {/* User Login Info */}
      <div className="user-login-info">
        <a href="#"><img src="client/img/core-img/user.svg" alt /></a>
      </div>
      {/* Cart Area */}
      <div className="cart-area">
        <a href="#" id="essenceCartBtn"><img src="client/img/core-img/bag.svg" alt /> <span>3</span></a>
      </div>
    </div>
  </div>
</header>

      </div>

    )
}

Header.propTypes = {

}

export default Header
