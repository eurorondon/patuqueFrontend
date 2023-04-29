import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";

const SimpleSlider = () => {
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;
  //   console.log(image);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="  d-flex  justify-content-center  mx-auto   "
      style={{ maxWidth: "", maxHeight: "" }}
    >
      <Slider
        {...settings}
        style={{ height: "", maxWidth: "100%", zIndex: "" }}
        className="   mb-5  d-flex align-items-center "
      >
        {product.image ? (
          product.image.map((image) => (
            <div className=" d-flex justify-content-center  " key={product._id}>
              <img
                src={image}
                className=" img-fluid mx-auto my-auto  "
                style={{ maxHeight: "", margin: "", maxWidth: "" }}
              />
            </div>
          ))
        ) : (
          <p>no carga</p>
        )}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
