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
  const handleAddProduct = async (e) => {
    e.preventDefault();
    
    const newProduct = {
      productName,
        productCode,
        quantity,
      comments,
    };
    console.log("New Product:", newProduct); 

    const res = await fetch(
      "https://crm-backend-code-1.onrender.com/api/products/user/add",
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

      setProductName("");
      setProductCode("");
      setQuantity("");
      setComments("");
    }
  };

  
  return (
    <Home title={"AddProduct"}>
      <div className="addproduct">
        <form>
          <TextField
            // id="outlined-basic"
            label="ProductName"
            variant="outlined"
            value={productName}
            type="text"
            onChange={(e) => setProductName(e.target.value)}
          />
          <br />
          <br />
          <TextField
            // id="outlined-basic"
            label="ProductCode"
            variant="outlined"
            value={productCode}
            type="text"
            onChange={(e) => setProductCode(e.target.value)}
          />
          <br />
          <br />
          <TextField
            // id="outlined-basic"
            label="Quantity"
            variant="outlined"
            value={quantity}
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <br />
          <br />
          <TextField
            // id="outlined-basic"
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


// const handleAddProduct = async () => {
  //   // Check if required fields are empty
  //   if (!productName || !productCode || !quantity) {
  //     console.log("Please fill all required fields");
  //     return;
  //   }

  //   const newProduct = {
  //     productName,
  //     productCode,
  //     quantity,
  //     comments,
  //   };

  //   try {
  //     const res = await fetch(
  //       "https://crm-backend-code-1.onrender.com/api/products/user/add",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(newProduct),
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-auth-token": token,
  //         },
  //       }
  //     );
  //     const data = await res.json();
  //     if (!data.data) {
  //       console.error("Failed to add product:", data.error);
  //     } else {
  //       setUserProduct([...userProduct, data.data]);
  //       // Clear input fields after successful addition
  //       setProductName("");
  //       setProductCode("");
  //       setQuantity("");
  //       setComments("");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred while adding the product:", error);
  //   }
  // };
