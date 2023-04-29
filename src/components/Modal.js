import React from "react";
import SimpleSlider from "./SlickTest";
import { Close } from "@material-ui/icons";

const Modal = ({ children, modal, setModal, galeria }) => {
  return (
    <>
      {modal && (
        <div className="overlay">
          <div
            className="contenedorModal"
            style={{ maxWidth: "100%", height: "70vh" }}
          >
            {/* <div className="encabezadoModal">
              <h3>Galeria de Imagenes</h3>
            </div> */}
            <button className="botonCerrar" onClick={() => setModal(false)}>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg> */}
              <Close />
            </button>
            <div
              className=" d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <img
                className="img-fluid"
                src={galeria.url}
                alt=""
                style={{ maxHeight: "100%", margin: "auto" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
