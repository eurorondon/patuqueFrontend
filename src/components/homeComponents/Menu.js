import React from "react";
import CategoriaSelector from "./CategoriaSelector";
import { Link as LinkScroll } from "react-scroll";

const Menu = ({ setCurrentPage }) => {
  return (
    <div style={{ backgroundColor: "rgba(231, 233, 255, 0.50)" }} className="">
      {window.innerWidth > 767 ? (
        <div className="container py-3 ">
          <div className="row gap-1">
            <button
              className="col text-center btn"
              style={{ fontWeight: "bold" }}
            >
              <LinkScroll
                className=""
                activeClass=""
                to="ShopSection"
                spy={true}
                smooth={true}
                offset={-100}
                duration={250}
              >
                TIENDA
              </LinkScroll>
            </button>

            <button className="col text-center btn " style={{ fontWeight: "" }}>
              <CategoriaSelector setCurrentPage={setCurrentPage} />
            </button>

            <button
              className="col text-center btn"
              style={{ fontWeight: "bold" }}
            >
              <LinkScroll
                className=""
                activeClass=""
                to="Destacados"
                spy={true}
                smooth={true}
                offset={-100}
                duration={250}
              >
                DESTACADOS
              </LinkScroll>
            </button>

            <button
              className="col text-center btn"
              style={{ fontWeight: "bold" }}
            >
              <LinkScroll
                className=""
                activeClass=""
                to="Novedades"
                spy={true}
                smooth={true}
                offset={-50}
                duration={250}
              >
                NOVEDADES
              </LinkScroll>
            </button>
            <button
              className="col text-center btn"
              style={{ fontWeight: "bold" }}
            >
              <LinkScroll
                className=""
                activeClass=""
                to="Ofertas"
                spy={true}
                smooth={true}
                offset={-50}
                duration={250}
              >
                OFERTAS
              </LinkScroll>
            </button>
            {/* <button
              className="col text-center btn"
              style={{ fontWeight: "bold" }}
            >
              OTROS
            </button> */}
            <button
              className="col text-center btn"
              style={{ fontWeight: "bold" }}
            >
              <LinkScroll
                className=""
                activeClass=""
                to="Footer"
                spy={true}
                smooth={true}
                offset={-50}
                duration={250}
              >
                CONTACTANOS
              </LinkScroll>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
