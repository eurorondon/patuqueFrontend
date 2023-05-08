import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import Oferta from "../components/homeComponents/Oferta";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import Slider from "../components/Slider";
import { useHistory } from "react-router-dom";
import TopSell from "../components/TopSell";
import Categorias from "../components/Categorias";
import Tarjetas from "../components/Tarjetas";
import CarrucelCategoria1 from "./../components/CarrucelCategoria1";
import CarrucelCategoria2 from "../components/CarrucelCategoria2";
import CarrucelCategoria3 from "../components/CarrucelCategoria3";
import { Undo } from "@material-ui/icons";
import PatuqueImage from "../components/homeComponents/PatuqueImage";
import Menu from "../components/homeComponents/Menu";
import SliderCategorias from "../components/homeComponents/SliderCategorias";
import ElasticCaruselLoMasNuevo from "../components/homeComponents/ElasticCaruselLoMasNuevo";
import Navbar from "../components/Navbar";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;

  let history = useHistory();
  const currentPath = history.location.pathname;

  const handleGoBack = () => {
    history.push(`/`);
    // setSelectedCategory("");
    setCurrentPage(0);
  };
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="" style={{ backgroundColor: "" }}>
      <Navbar />
      <Header setCurrentPage={setCurrentPage} />
      {currentPath == "/" ? null : (
        <div className="mt-3 ms-3">
          <button className="btn btn-primary" onClick={handleGoBack}>
            <div>
              <Undo className="mx-1" />
              Atrás
            </div>
          </button>
        </div>
      )}
      <PatuqueImage setCurrentPage={setCurrentPage} />
      <Menu />
      <SliderCategorias />

      {currentPath === "/" && currentPage === 0 && <ElasticCaruselLoMasNuevo />}

      {/* {currentPath == "/" ? <CarrucelCategoria1 /> : null} */}
      {currentPath === "/" && currentPage === 0 && <Categorias />}
      {/* {currentPath == "/" ? <CalltoActionSection /> : null} */}
      {/* {currentPath == "/" ? <Tarjetas /> : null} */}
      {/* {currentPath == "/" ? <CarrucelCategoria2 /> : null}
      {currentPath == "/" ? <CarrucelCategoria3 /> : null} */}

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

      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
