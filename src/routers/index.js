import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../pages/layouts/Main'
import MainAdmin from '../pages/layouts/MainAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import AddProduct from '../pages/views/Admin/AddProduct';
import DetailProduct from '../pages/views/Admin/DetailProduct';
import Shop from '../pages/views/Main/Shop';
import Detail from '../pages/views/Main/Detail';
import EditProduct from '../pages/views/Admin/EditProduct';
import Categories from '../pages/views/Admin/Categories';
import AddCategory from '../pages/views/Admin/AddCategory';
import EditCategory from '../pages/views/Admin/EditCategory';
import Post from "../pages/views/Admin/Post";
import AddPost from "../pages/views/Admin/Post/AddPost";
import EditPost from "../pages/views/Admin/Post/EditPost";
import Blog from '../pages/views/Main/Blog';
import DetailBlog from '../pages/views/Main/Blog/Detail';

const Routers = ({products, onRemove, onAdd, onUpdate, categories, onRemoveCate, onAddCate, onUpdateCate, post, onRemovePost, onAddPost, onUpdatePost }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    function onHandleAdd(product) {
        onAdd(product)
    }
    function onHandleUpdate(id, product) {
        onUpdate(id, product)
    }
    //category
    const onHandleRemoveCate = (id) => {
        onRemoveCate(id)
    }
    function onHandleAddCate(category) {
        onAddCate(category)
    }
    function onHandleUpdateCate(id, category) {
        onUpdateCate(id, category)
    }
    const onHandleRemovePost = (id) =>{
        onRemovePost(id);
      }
    
      const onHandleAddPost = (post) =>{
        onAddPost(post);
      }
    
      const onHandleUpdatePost = (id, post) => {
        onUpdatePost(id, post);
      };
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard post={post} categories={categories} products={products}/>
                            </Route>
                            <Route path='/admin/products' exact>
                                <ProductsManager categories={categories} products={products} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/products/add'>
                                <AddProduct onAdd={onHandleAdd} categories={categories}/>
                            </Route>
                            <Route path='/admin/products/detail/:id'>
                                <DetailProduct products={products} />
                            </Route>
                            <Route path='/admin/products/edit/:id'>
                                <EditProduct products={products} onUpdate={onHandleUpdate}/>
                            </Route>
                            <Route path='/admin/categories' exact>
                                <Categories categories={categories} onRemoveCate={onHandleRemoveCate}/>
                            </Route>
                            <Route path='/admin/categories/add'>
                                <AddCategory onAddCate={onHandleAddCate}/>
                            </Route>
                            <Route path='/admin/categories/edit/:id'>
                                <EditCategory categories={categories} onUpdateCate={onHandleUpdateCate}/>
                            </Route>
                            <Route path = "/admin/posts" exact>
                                <Post post = {post} onRemovePost = {onHandleRemovePost}/>
                            </Route>
                            <Route path = "/admin/posts/add">
                                <AddPost post = {post} onAddPost = {onHandleAddPost}/>
                            </Route>

                            <Route path = "/admin/editpost/:id">
                                <EditPost post = {post} onUpdatePost = {onHandleUpdatePost} />
                            </Route>
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route>
                    <Main>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/blog" exact>
                                <Blog post={post}/>
                            </Route>
                            <Route path="/shop" exact>
                                <Shop products={products}/>
                            </Route>
                            <Route path="/shop/detail/:id">
                                <Detail products={products}/>
                            </Route>
                            <Route path="/blog/detailblog/:id">
                                <DetailBlog post={post}/>
                            </Route>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
