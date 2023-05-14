import React from "react";
import CategoriaSelector from "./CategoriaSelector";

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
              TIENDA
            </button>

            <button className="col text-center btn" style={{ fontWeight: "" }}>
              <CategoriaSelector setCurrentPage={setCurrentPage} />
            </button>
            <button
              className="col text-center btn"
              style={{ fontWeight: "bold" }}
            >
              DESTACADOS
            </button>
            <button
              className="col text-center btn"
              style={{ fontWeight: "bold" }}
            >
              NOVEDADES
            </button>
            <button
              className="col text-center btn"
              style={{ fontWeight: "bold" }}
            >
              OFERTAS
            </button>
            <button
              className="col text-center btn"
              style={{ fontWeight: "bold" }}
            >
              OTROS
            </button>
            <button
              className="col text-center btn"
              style={{ fontWeight: "bold" }}
            >
              CONTACTANOS
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
