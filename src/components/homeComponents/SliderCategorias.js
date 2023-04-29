import React from "react";
import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 3 },
  { width: 550, itemsToShow: 4 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

const customArrow = ({ type, onClick }) => (
  <div
    className="rounded-circle"
    onClick={onClick}
    style={{
      fontSize: "20px",
      width: "30px",
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

const SliderCategorias = () => {
  return (
    <div className="mx-1">
      {window.innerWidth < 767 ? (
        <div>
          <h2 className="mt-5 text-center">Categorias</h2>
          <Carousel
            breakPoints={breakPoints}
            itemsToShow={3}
            itemsToScroll={3}
            renderArrow={customArrow}
          >
            <div
              className=" text-dark d-flex justify-content-center align-items-center "
              style={{ height: "50px", width: "100%", margin: "0 2px" }}
            >
              Skin care
            </div>
            <div
              className="text-dark d-flex justify-content-center align-items-center "
              style={{ height: "50px", width: "100%", margin: "0 2px" }}
            >
              Bases
            </div>
            <div
              className="text-dark d-flex justify-content-center align-items-center "
              style={{ height: "50px", width: "100%", margin: "0 2px" }}
            >
              Brochas
            </div>
            <div
              className="text-dark d-flex justify-content-center align-items-center "
              style={{ height: "50px", width: "100%", margin: "0 2px" }}
            >
              Bronceador
            </div>
            <div
              className="text-dark d-flex justify-content-center align-items-center "
              style={{ height: "50px", width: "100%", margin: "0 2px" }}
            >
              uno
            </div>
            <div
              className="text-dark d-flex justify-content-center align-items-center "
              style={{ height: "50px", width: "100%", margin: "0 3px" }}
            >
              uno
            </div>
            <div
              className="text-dark d-flex justify-content-center align-items-center "
              style={{ height: "50px", width: "100%", margin: "0 3px" }}
            >
              uno
            </div>
            <div
              className="bg-dark text-white d-flex justify-content-center align-items-center mx-1"
              style={{ height: "50px", width: "100%" }}
            >
              uno
            </div>
          </Carousel>
        </div>
      ) : null}
    </div>
  );
};

export default SliderCategorias;
