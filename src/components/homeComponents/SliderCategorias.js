import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import { listCategory } from "../../Redux/Actions/CategoryActions";

const breakPoints = [
  { width: 1, itemsToShow: 2, itemsToScroll: 2 },
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

const SliderCategorias = () => {
  const [category, setCategory] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProduct("", "", category));
  }, [dispatch, category]);

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  const categoriesList = useSelector((state) => state.categoryList);
  const categorias = categoriesList.categories;

  const seleccionarCategoria = (nombreCategoria) => {
    setCategory(nombreCategoria);
    setTimeout(function () {
      window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
    }, 100);
    history.push(`/category/${nombreCategoria}`);
  };

  const categoria = categorias
    ? categorias.map((item) => (
        <div
          style={{
            width: "100%",
            gap: "1px",
            margin: "0 0px",
            fontSize: "15px",
            fontWeight: "600",
          }}
          onClick={() => seleccionarCategoria(item.categoria)}
        >
          <div
            className="  d-flex justify-content-center align-items-center rounded text-center   "
            style={{
              height: "50px",
              width: "100%",
              // backgroundColor: "#D8D8F0",

              margin: "0 2px",
            }}
          >
            {item.categoria}
          </div>
        </div>
      ))
    : null;
  return (
    <div className="mx-1">
      {window.innerWidth < 767 ? (
        <div>
          <h2 className="mt-5 mb-1 text-center">Categorias </h2>
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
          <div className="my-2">
            <Carousel
              breakPoints={breakPoints}
              itemsToShow={3}
              itemsToScroll={3}
              renderArrow={customArrow}
            >
              {categoria}
            </Carousel>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SliderCategorias;
