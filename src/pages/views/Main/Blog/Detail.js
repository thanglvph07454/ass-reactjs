import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'

const DetailBlog = ({post}) => {
    let { id } = useParams();
    const posts = post.find(posts => posts.id == id);
    return (
        
        <div className="single-blog-wrapper">
  {/* Single Blog Post Thumb */}
  <div className="single-blog-post-thumb">
    <img src={posts.image} alt />
  </div>
  {/* Single Blog Content Wrap */}
  <div className="single-blog-content-wrapper d-flex">
    {/* Blog Content */}
    <div className="single-blog--text">
    <h2>{posts.title}</h2>
    <p>{posts.content}</p>
      
      
    </div>
    {/* Related Blog Post */}
    <div className="related-blog-post">
      {/* Single Related Blog Post */}
      <div className="single-related-blog-post">
        <img src="{posts.image}" alt />
        <a href="#">
          <h5>Cras lobortis nisl nec libero pulvinar lacinia. Nunc sed ullamcorper massa</h5>
        </a>
      </div>
      {/* Single Related Blog Post */}
      <div className="single-related-blog-post">
        <img src="client/img/bg-img/rp2.jpg" alt />
        <a href="#">
          <h5>Fusce tincidunt nulla magna, ac euismod quam viverra id. Fusce eget metus feugiat</h5>
        </a>
      </div>
      {/* Single Related Blog Post */}
      <div className="single-related-blog-post">
        <img src="client/img/bg-img/rp3.jpg" alt />
        <a href="#">
          <h5>Etiam leo nibh, consectetur nec orci et, tempus tempus ex</h5>
        </a>
      </div>
      {/* Single Related Blog Post */}
      <div className="single-related-blog-post">
        <img src="client/img/bg-img/rp4.jpg" alt />
        <a href="#">
          <h5>Sed viverra pellentesque dictum. Aenean ligula justo, viverra in lacus porttitor</h5>
        </a>
      </div>
    </div>
  </div>
</div>

    )
}

DetailBlog.propTypes = {

}

export default DetailBlog
