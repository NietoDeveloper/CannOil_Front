import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './components/Member/Login.jsx'
import Home from './components/Layouts/Home.jsx'
import Blog from './components/Blogs/Blog.jsx'
import Register from './components/Member/Register.jsx'
import ProductList from './components/Products/ProductList.jsx'
import ProductDetail from './components/Products/ProductDetail.jsx'
import Cart from './components/Cart/Cart.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/product/list' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </App>
    </Router>
  </StrictMode>,
)
