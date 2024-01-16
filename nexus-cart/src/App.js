import React from "react";
import { Route, Routes } from 'react-router-dom';
// import Sign from "./sign";
import Main from "./main";
import Products from "./products";
import ProductDetails from "./productDetails";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main />}/>
        {/* <Route path='/login' element={<Sign />}/> */}
        <Route exact path='/Products' element={<Products />}/>
        <Route exact path="/Products/:data" element={<Products />}/>
        <Route exact path="/Product-Details/" element={<ProductDetails />}/>
      </Routes>
    </div>
  );
}

export default App;