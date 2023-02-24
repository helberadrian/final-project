import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar';

// Pages
import Home from "./pages/home/index";
import Category from "./pages/category/index";
import CategoryDetail from "./pages/categoryDetail/index"
import Product from "./pages/product/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/category/' element={<Category />} />
              <Route path='/category/:categoryId' element={<CategoryDetail />} />
              <Route path='/product/:productId' element={<Product />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
