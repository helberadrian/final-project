import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

// Components
import Header from './components/header';

// Pages
import Home from "./pages/home/index";
import Category from "./pages/category/index";
import Product from "./pages/product/index";
import Contact from "./pages/contact";
import ShoppingCart from "./pages/cart";
import Register from './pages/register';
import CategoryDetail from './pages/categoryDetail';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/register' element={<Register />} />
              <Route path='/cart' element={<ShoppingCart />} />
              <Route path='/details/:id' element={<Product />} />
              <Route path='/category/' element={<Category />} />
              <Route path='/category/:id' element={<CategoryDetail />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
