import React, { useEffect, useState } from "react";
import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

export const User = () => {
  const [userProduct, setUserProduct] = useState([]);
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login", { replace: true });
    }
    const fetchUserData = async () => {
      const res = await fetch(
        "https://crm-backend-code-1.onrender.com/api/products/user/all/",
        {
          method: "GET",
          headers: {
            "x-auth-token": token,
          },
        }
      );
      const data = await res.json();
      console.log(data);

      if (!data.data) {
        console.log("error", data.error);
      } else {
        setUserProduct(data.data);
      }
    };
    fetchUserData();
  }, []);

  async function handleDelete(id) {
    const res = await fetch(
      `https://crm-backend-code.onrender.com/api/products/user/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "applications/json",
          "x-auth-token": token,
        },
      }
    );
    const data = await res.json();

    const newUserProduct = userProduct.filter((data) => data._id !== id);
    setUserProduct([...newUserProduct]);
    console.log(data);
    console.log(newUserProduct);
  }

  return (
    <Home>
      <div>
        <Button
          edge="end"
          color="primary"
          aria-label="Add_Product"
          onClick={() => navigate("/add")}
        >
          Add Products
        </Button>
      </div>
      {userProduct && (
        <div>
          <h2> Welcome {userProduct[0]?.user.userName} </h2>
          <div className="productDetails">
            {userProduct.map((data) => (
              <Paper key={data._id} className="productDetailsDiv">
                <br />
                <b>Product Name:</b> {data.productName}
                <br />
                <b>Product Code : </b>
                {data.productCode}
                <br />
                <b>Quantity : </b>
                {data.quantity}
                <br />
                <b>Purchase Date :</b> {data.date}
                <br />
                <b>Comments :</b> {data.comments}
                <br />
                <br />
                <Button onClick={() => navigate(`/edit/product/${data._id}`)}>
                  {" "}
                  Edit{" "}
                </Button>
                <Button onClick={() => handleDelete(data._id)}> Delete </Button>
              </Paper>
            ))}
          </div>
        </div>
      )}
    </Home>
  );
};