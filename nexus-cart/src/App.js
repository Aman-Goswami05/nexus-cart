import React from "react";
import { Route, Routes } from 'react-router-dom';
import Sign from "./components/sign";
import Main from "./components/main";
import Products from "./components/products";
import ProductDetails from "./components/productDetails";
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main />}/>
        <Route path='/login' element={<Sign />}/>
        <Route exact path='/Products' element={<Products check={"all"}/>}/>
        <Route exact path="/Products/Brand/:data" element={<Products check={"brand"}/>}/>
        <Route exact path="/Products/Search/:data" element={<Products check={"search"}/>}/>
        <Route exact path="/Product-Details/" element={<ProductDetails />}/>
      </Routes>
    </div>
  );
}

export default App;