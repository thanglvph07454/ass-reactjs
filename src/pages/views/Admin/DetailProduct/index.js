import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
const DetailProduct = ({ products }) => {
    let { id } = useParams();
    const product = products.find(product => product.id == id);
    return (
        <div>
            <div className="content-wrapper">
                <div>
                    <span>Tên sản phẩm</span>
                    <p>{product.name}</p>
                </div>
                <div>
                    <span>Gía sản phẩm</span>
                    <p>{product.price}</p>
                </div>
                <div>
                    <span>Mô tả sản phẩm</span>
                    <p>{product.Desc}</p>
                </div>
                <div>
                    <img src={product.image} />
                </div>
                <Link to="/admin/products" className="btn btn-primary mt-4">Back</Link>
            </div>
        </div >
    )
}

DetailProduct.propTypes = {

}

export default DetailProduct