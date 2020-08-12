import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';

const AddCategory = ({onAddCate}) => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onHandleSubmit = (data) => {
    onAddCate(data);
    history.push("/admin/categories");
  };
    return (
        <div>
            <div class="content-wrapper">
      <section class="content">
        <h3 className="card-title">Thêm Danh mục</h3>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên danh mục</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="inputProductName"
              
              ref={register({ required: true })}
              aria-describedby="nameHelp"
            />
            <small id="nameHelp" className="form-text text-danger">{errors.name && <span>Tên danh mục không được để trống</span>}</small>

          </div>
          <button  type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </div>
        </div>
    )
}

AddCategory.propTypes = {

}

export default AddCategory
