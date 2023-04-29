import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { Link } from "react-router-dom";

import "../topsell.css";
import { useDispatch, useSelector } from "react-redux";
import { listProductCategoria3 } from "../Redux/Actions/ProductActions";
import { useEffect } from "react";
import Loading from "./LoadingError/Loading";

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

export default function CarrucelCategoria3() {
  const dispatch = useDispatch();

  const productListCategoria3 = useSelector(
    (state) => state.productListCategoria3
  );

  const { products } = productListCategoria3;

  useEffect(() => {
    dispatch(listProductCategoria3());
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
    <div className="py-4">
      {products && products.length > 1 ? (
        <div className={window.innerWidth > 1240 ? "mx-5" : "container"}>
          <h2 className=".topsell-title">Conservadores</h2>
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
