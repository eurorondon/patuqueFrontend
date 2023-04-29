import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProductCategoria1 } from "../Redux/Actions/ProductActions";
import { useEffect } from "react";
import Loading from "./LoadingError/Loading";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1615 },
    items: 5,
    slidesToSlide: 5,
  },

  desktop: {
    breakpoint: { max: 1615, min: 1000 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1000, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

const CarrucelCategoria1 = () => {
  const dispatch = useDispatch();

  const productListCategoria1 = useSelector(
    (state) => state.productListCategoria1
  );

  const { products } = productListCategoria1;

  useEffect(() => {
    dispatch(listProductCategoria1());
  }, [dispatch]);

  const product = products
    ? products.slice(0, window.innerWidth > 767 ? 30 : 12).map((item) => (
        <Link to={`/products/${item._id}`}>
          <Product
            url={item.photo[0].url}
            name={item.name}
            description={item.description}
            price={item.price}
          />
          {/* {console.log(item.image)} */}
        </Link>
      ))
    : null;

  return (
    <>
      {products && products.length > 1 ? (
        <div className={window.innerWidth > 1240 ? "mx-5" : "container"}>
          {/* <div className={window.innerWidth > 1240 ? "container" : "container"}> */}
          <h2 className="topsell-title text-center my-4">LO MAS NUEVO</h2>
          <Carousel showDots={true} responsive={responsive} swipeable={true}>
            {product}
          </Carousel>
        </div>
      ) : (
        <div
          className="d-flex  align-items-center justify-content-center"
          style={{ height: "400px" }}
        >
          <Loading className="" />
        </div>
      )}
    </>
  );
};

export default CarrucelCategoria1;
