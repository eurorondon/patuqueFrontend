import React, { useEffect } from "react";
import Product from "../Product";
import { useDispatch, useSelector } from "react-redux";
import { listProductCategoria1 } from "../../Redux/Actions/ProductActions";
import { Link } from "react-router-dom";
import Loading from "../LoadingError/Loading";
import Carousel from "react-elastic-carousel";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 8 },
// ];

const breakPoints = [
  // { width: 1, itemsToShow: 1 },
  { width: 320, itemsToShow: 1, itemsToScroll: 1 },
  { width: 480, itemsToShow: 3, itemsToScroll: 1 },
  { width: 768, itemsToShow: 4, itemsToScroll: 4 },
  { width: 992, itemsToShow: 5, itemsToScroll: 5 },
  { width: 1200, itemsToShow: 6, itemsToScroll: 6 },
  { width: 1440, itemsToShow: 7, itemsToScroll: 7 },
  { width: 1600, itemsToShow: 8, itemsToScroll: 8 },
  { width: 1800, itemsToShow: 9, itemsToScroll: 9 },
  { width: 2000, itemsToShow: 10, itemsToScroll: 10 },
];

const customArrow = ({ type, onClick }) => (
  <div
    // className="rounded-circle"
    onClick={onClick}
    style={{
      fontSize: "20px",
      width: "35px",
      height: "30px",
      lineHeight: "30px",
      textAlign: "center",
      backgroundColor: "#6768A9",
      color: "#fff",
      cursor: "pointer",
      margin: "auto",
    }}
  >
    {type === "PREV" ? "<" : ">"}
  </div>
);

const ElasticCaruselLoMasNuevo = () => {
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
        <Link key={item._id} to={`/products/${item._id}`}>
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
    <div
      className={window.innerWidth > 1280 ? "   mt-4" : "container mt-4"}
      id="Novedades"
    >
      {products && products.length > 1 ? (
        <div className={window.innerWidth > 1240 ? "mx-5" : "container"}>
          {/* <div className={window.innerWidth > 1240 ? "container" : "container"}> */}
          <h2 className="topsell-title text-center my-4">LO MAS NUEVO</h2>
          <Carousel
            breakPoints={breakPoints}
            renderArrow={customArrow}
            itemsToShow={1}
            itemsToScroll={1}
            dotWidth={7}
          >
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
    </div>
  );
};

export default ElasticCaruselLoMasNuevo;
