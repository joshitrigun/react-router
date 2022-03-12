import React from "react";
import Product from "./Product";
import { Link, Routes, Route } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <h2>Products list component</h2>
      <nav>
        <Link to="/products/1">Product#1</Link>
        <Link to="/products/2">Product#2</Link>
        <Link to="/products/3">Product#3</Link>
      </nav>
      <Routes>
        <Route path=":id" element={<Product />} />
        <Route path="/" element={"Please select number above"} />
      </Routes>
    </div>
  );
};

export default Products;
