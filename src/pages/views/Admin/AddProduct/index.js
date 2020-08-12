import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
// function AddProduct({ onAdd }) {
//   const {register, handleSubmit, errors} = useForm();

//   let history = useHistory();
//   const [valueInput, setValueInput] = useState({});
//   function onHandleChange(e) {
//     const { name,image,price, value } = e.target;
//     setValueInput({
//       ...valueInput,
//       [name]: e.target.value,
//       [image]: e.target.value,
//       [price]: e.target.value
//     });
//   }
//   function onSubmit(e) {
//     e.preventDefault();
//     onAdd(valueInput);
//     history.push("/admin/products");
//   }


const AddProduct = ({ onAdd, categories }) => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onHandleSubmit = (data) => {
    onAdd(data);
    history.push("/admin/products");
  };

  return (
    <div class="content-wrapper">
      <section class="content">
        <h3 className="card-title">Thêm sản phẩm</h3>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="inputProductName"
              
              ref={register({ required: true })}
              aria-describedby="nameHelp"
            />
            <small id="nameHelp" className="form-text text-danger">{errors.name && <span>Tên sản phẩm không được để trống</span>}</small>

            <label htmlFor="inputProductImage">Ảnh sản phẩm</label>
            <input
              type="text"
              name="image"
              className="form-control"
              id="inputProductImage"
              
              ref={register({ required: true})}
              aria-describedby="imageHelp"
            />
              <small id="imageHelp" className="form-text text-danger">{errors.image && <span>Ảnh sản phẩm không được để trống</span>}</small>

          </div>
          <select className = "form-control" name="category_id" ref={register({ required: true })}>
                  {categories.map(({id, name},index) =>(
                    <option value = {id}>{name}</option>
                  ))}
                  
              </select>
          <div className="form-group">
            <label htmlFor="inputProductPrice">Giá sản phẩm</label>
            <input
              type="text"
              name="price"
              className="form-control"
              id="inputProductPrice"
              
              ref={register({ required: true })}
              aria-describedby="priceHelp"
            />
             <small id="priceHelp" className="form-text text-danger">{errors.price && <span>Giá sản phẩm không được để trống</span>}</small>

          </div>
          <button  type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default AddProduct;