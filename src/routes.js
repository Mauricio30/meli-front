import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./containers/ProductList/index";
import ProductDetail from "./containers/ProductDetail";

export const Router = () => (
    <Routes>
      <Route exact path="/">
        <Route path="items" element={<ProductList />} />
        <Route path="items/:id" element={<ProductDetail />} />
      </Route>
      <Route path="*" exact element={<h1>La ruta no existe</h1>} />
    </Routes>
);
