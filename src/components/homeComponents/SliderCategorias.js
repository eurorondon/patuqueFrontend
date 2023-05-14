import React from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

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

const categorias = [
  {
    title: "Skin care",
    id: 1,
  },
  {
    title: "Bases",
    id: 2,
  },
  {
    title: "Brochas",
    id: 3,
  },
  {
    title: "Bronceador",
    id: 4,
  },
  {
    title: "Skin care",
    id: 5,
  },
];

const categoria = categorias
  ? categorias.map((item) => (
      <Link
        key={item.id}
        className=""
        to={`/products/${item.title}`}
        style={{
          width: "100%",
          gap: "1px",
          margin: "0 0px",
          fontSize: "15px",
          fontWeight: "600",
        }}
      >
        <div
          className="  d-flex justify-content-center align-items-center rounded   "
          style={{
            height: "50px",
            width: "100%",
            // backgroundColor: "#D8D8F0",

            margin: "0 2px",
          }}
        >
          {item.title}
        </div>
      </Link>
    ))
  : null;

const SliderCategorias = () => {
  return (
    <div className="mx-1">
      {window.innerWidth < 767 ? (
        <div>
          <h2 className="mt-5 mb-1 text-center">Categorias</h2>
          <LinkScroll
            className="d-flex justify-content-center"
            activeClass="active"
            to="ShopSection"
            spy={true}
            smooth={true}
            offset={-25}
            duration={250}
          >
            <button
              className="text-center mx-auto block btn  "
              style={{
                backgroundColor: "",
              }}
            >
              Ver todos los productos
            </button>
          </LinkScroll>
          <Carousel
            breakPoints={breakPoints}
            itemsToShow={3}
            itemsToScroll={3}
            renderArrow={customArrow}
          >
            {categoria}
          </Carousel>
        </div>
      ) : null}
    </div>
  );
};

export default SliderCategorias;
