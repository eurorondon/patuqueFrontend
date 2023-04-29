import React, { useState } from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
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

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;

  let history = useHistory();
  const currentPath = history.location.pathname;

  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {currentPath == "/" ? <Slider /> : null}

      <ShopSection
        keyword={keyword}
        pagenumber={pagenumber}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
