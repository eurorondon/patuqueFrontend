import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";

import "../topsell.css";
import { useDispatch, useSelector } from "react-redux";
import { listProductCategoria2 } from "../Redux/Actions/ProductActions";
import { useEffect } from "react";
import Loading from "./LoadingError/Loading";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1615 },
    items: 7,
    slidesToSlide: 7,
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
    items: 3,
    slidesToSlide: 3,
  },
};

export default function CarrucelCategoria2() {
  const dispatch = useDispatch();

  const productListCategoria2 = useSelector(
    (state) => state.productListCategoria2
  );

  const { products } = productListCategoria2;

  useEffect(() => {
    dispatch(listProductCategoria2());
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
        </Link>
      ))
    : null;

  return (
    <div className="bg-white py-3">
      {products && products.length > 1 ? (
        // <div className={window.innerWidth > 767 ? "mx-5" : "container"}>
        <div className={window.innerWidth > 1240 ? "mx-5" : "container"}>
          <h2 className=".topsell-title">Aluminio</h2>
          <Carousel showDots={true} responsive={responsive}>
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

    // <h1>hola</h1>
  );
}
