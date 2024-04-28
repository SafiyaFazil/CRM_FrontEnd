import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import Home from "./Home";

export const AddProduct = ({ userProduct, setUserProduct }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login", { replace: true });
    }
  }, []);
  const token = localStorage.getItem("token");
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [comments,setComments] = useState("");
  const handleAddProduct = async () => {
    const newProduct = {
      productName,
        productCode,
        quantity,
      comments,
    };

    const res = await fetch(
      "https://crm-backend-34zd.onrender.com/api/products/user/add",
      {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      }
    );
    const data = await res.json();
    if (!data.data) {
      console.log("error");
    } else {
      setUserProduct([...userProduct, data.data]);
    }
  };
  return (
    <Home title={"AddProduct"}>
      <div className="addproduct">
        <form>
          <TextField
            id="outlined-basic"
            label="ProductName"
            variant="outlined"
            value={productName}
            type="text"
            onChange={(e) => setProductName(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="ProductCode"
            variant="outlined"
            value={productCode}
            type="text"
            onChange={(e) => setProductCode(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            value={quantity}
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Comments"
            variant="outlined"
            value={comments}
            type="text"
            onChange={(e) => setComments(e.target.value)}
          />
          <br />
          <br />

          <Button type="submit" variant="contained" onClick={handleAddProduct}>
            Add Product
          </Button>
        </form>
      </div>
    </Home>
  );
};
