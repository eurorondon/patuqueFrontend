import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "./../components/Header";
import PatuqueImage from "../components/homeComponents/PatuqueImage";
import Menu from "../components/homeComponents/Menu";
import SliderCategorias from "../components/homeComponents/SliderCategorias";
import ElasticCaruselLoMasNuevo from "../components/homeComponents/ElasticCaruselLoMasNuevo";
import Categorias from "../components/Categorias";
import Oferta from "../components/homeComponents/Oferta";
import ShopSection from "./../components/homeComponents/ShopSection";
import Footer from "./../components/Footer";
import { Undo } from "@material-ui/icons";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;

  let history = useHistory();
  const currentPath = history.location.pathname;

  const [currentPage, setCurrentPage] = useState(0);

  const handleGoBack = () => {
    history.push(`/`);
    // setSelectedCategory("");
    setCurrentPage(0);
  };

  return (
    <div className="" style={{ backgroundColor: "" }}>
      <Navbar setCurrentPage={setCurrentPage} currentPath={currentPath} />
      <Header setCurrentPage={setCurrentPage} />
      {currentPath == "/" ? null : (
        <div className="mt-3 ms-3">
          <button className="btn btn-primary" onClick={handleGoBack}>
            <div>
              <Undo className="mx-1" />
            </div>
          </button>
        </div>
      )}
      <PatuqueImage setCurrentPage={setCurrentPage} />
      <Menu setCurrentPage={setCurrentPage} />
      {currentPath === "/" && currentPage === 0 && <SliderCategorias />}
      {currentPath === "/" && currentPage === 0 && <ElasticCaruselLoMasNuevo />}
      {currentPath === "/" && currentPage === 0 && <Categorias />}
      {currentPath === "/" && currentPage === 0 && (
        <Oferta
          keyword={keyword}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPath !== "" ? (
        <ShopSection
          keyword={keyword}
          pagenumber={pagenumber}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
      <button className=" whatsapp ">
        <a
          className="ocultar"
          href="https://api.whatsapp.com/send?phone=65255567&text=Hola,%20te%20saluda%20Juan%20Severino,%20c%C3%B3mo%20puedo%20ayudarte"
        >
          <img
            className="  "
            src="/images/whatsapp.png"
            alt=""
            style={{ maxWidth: "10vh" }}
          />
        </a>
      </button>
      <Footer />
    </div>
  );
};

export default HomeScreen;
