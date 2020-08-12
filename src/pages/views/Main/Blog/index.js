import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
const Blog = ({post}) => {
    return (
      <div className="blog-wrapper section-padding-80">
  <div className="container">
    <div className="row">
     
      {post.map(({ id, title, content, image }, index) => (
      <div className="col-12 col-lg-6">
        <div className="single-blog-area mb-50">
          <img width="20px" src={image} alt />
          {/* Post Title */}
          <div className="post-title">
      <Link to={`/blog/detailblog/${id}`}>{title}</Link>
          </div>
          {/* Hover Content */}
          <div className="hover-content">
            {/* Post Title */}
            <div className="hover-post-title">
      <Link to={`/blog/detailblog/${id}`}>{title}</Link>
            </div>
      <Link to={`/blog/detailblog/${id}`}>{content} <i className="fa fa-angle-right" /></Link>
          </div>
        </div>
      </div>
      ))}
     
      
      {/* Single Blog Area */}
      
      {/* Single Blog Area */}
      
      {/* Single Blog Area */}
      
      {/* Single Blog Area */}
      
    </div>
  </div>
</div>

    )
}

Blog.propTypes = {

}

export default Blog
