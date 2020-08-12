import React from 'react'
import PropTypes from 'prop-types'

const Home = props => {
    return (
        <div>
  <div className="cart-bg-overlay" />
  <div className="right-side-cart-area">
    {/* Cart Button */}
    <div className="cart-button">
      <a href="#" id="rightSideCart"><img src="client/img/core-img/bag.svg" alt /> <span>3</span></a>
    </div>
    <div className="cart-content d-flex">
      {/* Cart List Area */}
      <div className="cart-list">
        {/* Single Cart Item */}
        <div className="single-cart-item">
          <a href="#" className="product-image">
            <img src="client/img/product-img/product-1.jpg" className="cart-thumb" alt />
            {/* Cart Item Desc */}
            <div className="cart-item-desc">
              <span className="product-remove"><i className="fa fa-close" aria-hidden="true" /></span>
              <span className="badge">Mango</span>
              <h6>Button Through Strap Mini Dress</h6>
              <p className="size">Size: S</p>
              <p className="color">Color: Red</p>
              <p className="price">$45.00</p>
            </div>
          </a>
        </div>
        {/* Single Cart Item */}
        <div className="single-cart-item">
          <a href="#" className="product-image">
            <img src="client/img/product-img/product-2.jpg" className="cart-thumb" alt />
            {/* Cart Item Desc */}
            <div className="cart-item-desc">
              <span className="product-remove"><i className="fa fa-close" aria-hidden="true" /></span>
              <span className="badge">Mango</span>
              <h6>Button Through Strap Mini Dress</h6>
              <p className="size">Size: S</p>
              <p className="color">Color: Red</p>
              <p className="price">$45.00</p>
            </div>
          </a>
        </div>
        {/* Single Cart Item */}
        <div className="single-cart-item">
          <a href="#" className="product-image">
            <img src="client/img/product-img/product-3.jpg" className="cart-thumb" alt />
            {/* Cart Item Desc */}
            <div className="cart-item-desc">
              <span className="product-remove"><i className="fa fa-close" aria-hidden="true" /></span>
              <span className="badge">Mango</span>
              <h6>Button Through Strap Mini Dress</h6>
              <p className="size">Size: S</p>
              <p className="color">Color: Red</p>
              <p className="price">$45.00</p>
            </div>
          </a>
        </div>
      </div>
      {/* Cart Summary */}
      <div className="cart-amount-summary">
        <h2>Summary</h2>
        <ul className="summary-table">
          <li><span>subtotal:</span> <span>$274.00</span></li>
          <li><span>delivery:</span> <span>Free</span></li>
          <li><span>discount:</span> <span>-15%</span></li>
          <li><span>total:</span> <span>$232.00</span></li>
        </ul>
        <div className="checkout-btn mt-100">
          <a href="checkout.html" className="btn essence-btn">check out</a>
        </div>
      </div>
    </div>
  </div>
  {/* ##### Right Side Cart End ##### */}
  {/* ##### Welcome Area Start ##### */}
  <section className="welcome_area bg-img background-overlay" style={{backgroundImage: 'url(client/img/bg-img/bg-1.jpg)'}}>
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12">
          <div className="hero-content">
            <h6>asoss</h6>
            <h2>New Collection</h2>
            <a href="#" className="btn essence-btn">view collection</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### Welcome Area End ##### */}
  {/* ##### Top Catagory Area Start ##### */}
  <div className="top_catagory_area section-padding-80 clearfix">
    <div className="container">
      <div className="row justify-content-center">
        {/* Single Catagory */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: 'url(client/img/bg-img/bg-2.jpg)'}}>
            <div className="catagory-content">
              <a href="#">Clothing</a>
            </div>
          </div>
        </div>
        {/* Single Catagory */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: 'url(client/img/bg-img/bg-3.jpg)'}}>
            <div className="catagory-content">
              <a href="#">Shoes</a>
            </div>
          </div>
        </div>
        {/* Single Catagory */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: 'url(img/bg-img/bg-4.jpg)'}}>
            <div className="catagory-content">
              <a href="#">Accessories</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ##### Top Catagory Area End ##### */}
  {/* ##### CTA Area Start ##### */}
  <div className="cta-area">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="cta-content bg-img background-overlay" style={{backgroundImage: 'url(client/img/bg-img/bg-5.jpg)'}}>
            <div className="h-100 d-flex align-items-center justify-content-end">
              <div className="cta--text">
                <h6>-60%</h6>
                <h2>Global Sale</h2>
                <a href="#" className="btn essence-btn">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ##### CTA Area End ##### */}
  {/* ##### New Arrivals Area Start ##### */}
  <section className="new_arrivals_area section-padding-80 clearfix">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-heading text-center">
            <h2>Popular Products</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="popular-products-slides owl-carousel">
            {/* Single Product */}
            <div className="single-product-wrapper">
              {/* Product Image */}
              <div className="product-img">
                <img src="client/img/product-img/product-1.jpg" alt />
                {/* Hover Thumb */}
                <img className="hover-img" src="client/img/product-img/product-2.jpg" alt />
                {/* Favourite */}
                <div className="product-favourite">
                  <a href="#" className="favme fa fa-heart" />
                </div>
              </div>
              {/* Product Description */}
              <div className="product-description">
                <span>topshop</span>
                <a href="single-product-details.html">
                  <h6>Knot Front Mini Dress</h6>
                </a>
                <p className="product-price">$80.00</p>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Add to Cart */}
                  <div className="add-to-cart-btn">
                    <a href="#" className="btn essence-btn">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Product */}
            <div className="single-product-wrapper">
              {/* Product Image */}
              <div className="product-img">
                <img src="client/img/product-img/product-2.jpg" alt />
                {/* Hover Thumb */}
                <img className="hover-img" src="client/img/product-img/product-3.jpg" alt />
                {/* Favourite */}
                <div className="product-favourite">
                  <a href="#" className="favme fa fa-heart" />
                </div>
              </div>
              {/* Product Description */}
              <div className="product-description">
                <span>topshop</span>
                <a href="single-product-details.html">
                  <h6>Poplin Displaced Wrap Dress</h6>
                </a>
                <p className="product-price">$80.00</p>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Add to Cart */}
                  <div className="add-to-cart-btn">
                    <a href="#" className="btn essence-btn">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Product */}
            <div className="single-product-wrapper">
              {/* Product Image */}
              <div className="product-img">
                <img src="client/img/product-img/product-3.jpg" alt />
                {/* Hover Thumb */}
                <img className="hover-img" src="client/img/product-img/product-4.jpg" alt />
                {/* Product Badge */}
                <div className="product-badge offer-badge">
                  <span>-30%</span>
                </div>
                {/* Favourite */}
                <div className="product-favourite">
                  <a href="#" className="favme fa fa-heart" />
                </div>
              </div>
              {/* Product Description */}
              <div className="product-description">
                <span>mango</span>
                <a href="single-product-details.html">
                  <h6>PETITE Crepe Wrap Mini Dress</h6>
                </a>
                <p className="product-price"><span className="old-price">$75.00</span> $55.00</p>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Add to Cart */}
                  <div className="add-to-cart-btn">
                    <a href="#" className="btn essence-btn">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Product */}
            <div className="single-product-wrapper">
              {/* Product Image */}
              <div className="product-img">
                <img src="client/img/product-img/product-4.jpg" alt />
                {/* Hover Thumb */}
                <img className="hover-img" src="client/img/product-img/product-5.jpg" alt />
                {/* Product Badge */}
                <div className="product-badge new-badge">
                  <span>New</span>
                </div>
                {/* Favourite */}
                <div className="product-favourite">
                  <a href="#" className="favme fa fa-heart" />
                </div>
              </div>
              {/* Product Description */}
              <div className="product-description">
                <span>mango</span>
                <a href="single-product-details.html">
                  <h6>PETITE Belted Jumper Dress</h6>
                </a>
                <p className="product-price">$80.00</p>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Add to Cart */}
                  <div className="add-to-cart-btn">
                    <a href="#" className="btn essence-btn">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### New Arrivals Area End ##### */}
  {/* ##### Brands Area Start ##### */}
  <div className="brands-area d-flex align-items-center justify-content-between">
    {/* Brand Logo */}
    <div className="single-brands-logo">
      <img src="client/img/core-img/brand1.png" alt />
    </div>
    {/* Brand Logo */}
    <div className="single-brands-logo">
      <img src="client/img/core-img/brand2.png" alt />
    </div>
    {/* Brand Logo */}
    <div className="single-brands-logo">
      <img src="client/img/core-img/brand3.png" alt />
    </div>
    {/* Brand Logo */}
    <div className="single-brands-logo">
      <img src="client/img/core-img/brand4.png" alt />
    </div>
    {/* Brand Logo */}
    <div className="single-brands-logo">
      <img src="client/img/core-img/brand5.png" alt />
    </div>
    {/* Brand Logo */}
    <div className="single-brands-logo">
      <img src="client/img/core-img/brand6.png" alt />
    </div>
  </div>
</div>

   
    )
}

Home.propTypes = {

}

export default Home
