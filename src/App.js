import React, { useState, useEffect } from 'react';
import Routers from './routers';
import apiRequest from './api/productApi';
import apiRequestCate from './api/categoryApi'
import postApi from "./api/postApi";
function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState ([apiRequestCate]);
  const [post, setPost] = useState([postApi]);
  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);
 


   // Xóa sản phẩm
   const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


  // Cập nhật product 
  const onHandleUpdate = async (updateProducts) => {
    const newProducts = products.map(
      (Products) =>
        Products.id === updateProducts.id ? updateProducts : Products // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await apiRequest.update(updateProducts.id, updateProducts);
    setProducts(newProducts);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await apiRequestCate.getAll();
        setCategories(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCategories();
  }, []);

  // Xóa danh mục
  const onHandleRemoveCate = async (id) => {
    try {
      const { data } = await apiRequestCate.remove(id);
      const newCategories = categories.filter((category) => category.id !== id);
      setCategories(newCategories);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Thêm danh mục
  const onHandleAddCate = async (category) => {
    try {
      const { data } = await apiRequestCate.create(category);
      setCategories([
        ...categories,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  // Cập nhật danh mục
  const onHandleUpdateCate = async (updateCategories) => {
    const newCategories = categories.map(
      (Categories) =>
        Categories.id === updateCategories.id ? updateCategories : Categories // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await apiRequestCate.update(updateCategories.id, updateCategories);
    setCategories(newCategories);
  };
  //Post
      //List post
      useEffect(() => {
        const getPost = async () => {
          try {
            const { data } = await postApi.getAll();
            setPost(data);
          } catch (error) {
            console.log("failed to request API: ", error);
          }
        };
        getPost();
      }, []);
          //Xóa bài viết
           // Xóa sản phẩm
      const onHandleRemovePost = async (id) => {
        try {
          const { data } = await postApi.remove(id);
          const newPost = post.filter((posts) => posts.id !== id);
          setPost(newPost);
        } catch (error) {
          console.log("failed to request API: ", error);
        }
      };
    
        // Thêm bài viết
        const onHandleAddPost = async (posts) => {
          console.log(posts)
          try {
            const { data } = await postApi.create(posts);
            setPost([...post, data]);
          } catch (error) {
            console.log("failed to request API: ", error);
          }
        };
          //Sửa bài viết
      const  onHandleUpdatePost = async (updatePost) => {
        const newPost = post.map(
          (Post) =>
          Post.id === updatePost.id ? updatePost : Post // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
        );
        const { data } = await postApi.update(updatePost.id, updatePost);
        setPost(newPost);
      };

  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate}
      categories={categories} onRemoveCate={onHandleRemoveCate} onAddCate={onHandleAddCate} onUpdateCate={onHandleUpdateCate}
      post = {post}
      onRemovePost = {onHandleRemovePost}
      onAddPost = {onHandleAddPost}
      onUpdatePost = {onHandleUpdatePost}/>
    </div>
  )

}
export default App;