import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import Product from "./ProductGrid";

const Grid = ({ currentPosts }) => {
  // const productList = useSelector((state) => state.productList);
  // const { products } = productList;

  let products = currentPosts;

  const product = products
    ? products.map((item) => (
        <div className="" key={item._id}>
          <Link to={`/products/${item._id}`}>
            <Product
              url={item.photo[0].url}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          </Link>
        </div>
      ))
    : null;

  const navigatehandle = (id) => {
    <Navigate to={`/products/${id}`} />;
  };

  return (
    <>
      <div
        className={window.innerWidth > 767 ? "mb-5 mx-5" : "container"}
        style={{}}
      >
        <div className="grid my-2">{product}</div>
      </div>
    </>
  );
};

export default Grid;
