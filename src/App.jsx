import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard.jsx";
import { Login } from "./Pages/Login.jsx";
import { User } from "./Pages/User.jsx";
import { Register } from "./Pages/Register.jsx";
import { AddProduct } from "./Pages/AddProduct.jsx";
import { EditProduct } from "./Pages/EditProduct.jsx";
import Home from "./Pages/Home.jsx";
import WelcomePage from "./Pages/WelcomePage.jsx";
import SearchProduct from "./Pages/SearchProduct.jsx";
import Base from "./Base/Base.jsx";
import { CustomerDetails } from "./Pages/CustomerDetails.jsx";

const App = () => {
  const [userProduct, setUserProduct] = useState([]);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route path="/base" element={<Base />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchProduct />} />
        <Route path="/cusDetails" element={<CustomerDetails />} />
        <Route
          path="/account"
          element={
            <User userProduct={userProduct} setUserProduct={setUserProduct} />
          }
        />
        <Route
          path="/add/product"
          element={
            <AddProduct
              userProduct={userProduct}
              setUserProduct={setUserProduct}
            />
          }
        />
        <Route
          path="/edit/product/:id"
          element={
            <EditProduct
              userProduct={userProduct}
              setUserProduct={setUserProduct}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
