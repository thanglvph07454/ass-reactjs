import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
                Interface
    </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog" />
                    <span>Products</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                       
                        <Link className="collapse-item" to = '/admin/products'>View Products</Link>
                        <Link className="collapse-item" to = '/admin/products/add'>Add Product</Link>
                    </div>
                    
                </div>
            </li>
            <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fas fa-fw fa-wrench"></i>
          <span>Categories</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">

            <Link className="collapse-item" to = '/admin/categories'>View Categories</Link>
            <Link className="collapse-item" to = '/admin/categories/add'>Add Category</Link>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i class="fas fa-fw fa-folder"></i>
          <span>Posts</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <Link class="collapse-item" to="/admin/posts">View Post</Link>
            <Link class="collapse-item" to="/admin/posts/add">Add Post</Link>
          </div>
        </div>
      </li>

            {/* Nav Item - Utilities Collapse Menu */}

            {/* Divider */}
            
            {/* Heading */}
            
            {/* Nav Item - Pages Collapse Menu */}
            
            {/* Nav Item - Charts */}
            
            {/* Nav Item - Tables */}
            
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
