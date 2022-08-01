import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";

import Layout from "./components/Layout"; 

import Products from "./pages/Products";
import { useSelector } from "react-redux";


function App() {
  const selector = useSelector(state => state);
  const womanProducts = selector.womanProducts;
  const manProducts = selector.manProducts;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>

          <Route path="/womans" element={<Products products={womanProducts}/>}></Route>
          <Route path="/mans" element={<Products products={manProducts}/>}></Route>
        </Route>
      </Routes>
    
    </>
  );
}

export default App;
