import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const Categories = ({onRemoveCate, categories }) => {
    const removeHandleCate = (id) => {

        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.value) {
                onRemoveCate(id)
              Swal.fire(
                'Xóa thành công',
              )
            }
          })
        // onRemove(id);
        console.log(id)

    }
    return (
        <div>
            <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    {/* <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6> */}
                    <Link to = "/admin/categories/add" className = "btn btn-success">Thêm danh mục</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name Category</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {categories.map(({ id, name }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{name}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandleCate(id)}>Xóa</button>
                                            <Link className='btn btn-primary ml-2' to={`/admin/categories/edit/${id}`}>Sửa</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

Categories.propTypes = {

}

export default Categories
