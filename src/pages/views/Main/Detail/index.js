import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
const Detail = ({ products }) => {
    let { id } = useParams();
    const product = products.find(product => product.id == id);
    return (
        
        <div>
  <div className="cart-bg-overlay" />
  <div className="right-side-cart-area">
    {/* Cart Button */}
    <div className="cart-button">
      <a href="#" id="rightSideCart"><img src="img/core-img/bag.svg" alt /> <span>3</span></a>
    </div>
    <div className="cart-content d-flex">
      {/* Cart List Area */}
      <div className="cart-list">
        {/* Single Cart Item */}
        <div className="single-cart-item">
          <a href="#" className="product-image">
            <img src="img/product-img/product-1.jpg" className="cart-thumb" alt />
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
            <img src="img/product-img/product-2.jpg" className="cart-thumb" alt />
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
            <img src="img/product-img/product-3.jpg" className="cart-thumb" alt />
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
  {/* ##### Single Product Details Area Start ##### */}
  <section className="single_product_details_area d-flex align-items-center">
    {/* Single Product Thumb */}
    <div className="single_product_thumb clearfix">

        <img src={product.image} alt />
    
    </div>
    {/* Single Product Description */}
    <div className="single_product_desc clearfix">
      <span>mango</span>
      <a href="cart.html">
        <h2>{product.name}</h2>
      </a>
      <p className="product-price">{product.price}</p>
      <p className="product-desc">Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.</p>
      {/* Form */}
      <form className="cart-form clearfix" method="post">
        {/* Select Box */}
        <div className="select-box d-flex mt-50 mb-30">
          <select name="select" id="productSize" className="mr-5">
            <option value="value">Size: XL</option>
            <option value="value">Size: X</option>
            <option value="value">Size: M</option>
            <option value="value">Size: S</option>
          </select>
          <select name="select" id="productColor">
            <option value="value">Color: Black</option>
            <option value="value">Color: White</option>
            <option value="value">Color: Red</option>
            <option value="value">Color: Purple</option>
          </select>
        </div>
        {/* Cart & Favourite Box */}
        <div className="cart-fav-box d-flex align-items-center">
          {/* Cart */}
          <button type="submit" name="addtocart" value={5} className="btn essence-btn">Add to cart</button>
          {/* Favourite */}
          <div className="product-favourite ml-4">
            <a href="#" className="favme fa fa-heart" />
          </div>
        </div>
      </form>
    </div>
  </section>
</div>

    )
}

Detail.propTypes = {

}

export default Detail
