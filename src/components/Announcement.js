import React from "react";
import { Facebook, Home, Instagram, Place, WhatsApp } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Announcement = () => {
  if (window.innerWidth > 767) {
    return (
      <>
        {/* <div className="bg-dark py-1 ">
          <div className="text-white d-flex justify-content-between mx-4 aling-items-center ">
            <div className="d-flex aling-items-center gap-5">
              <p>¿Quieres ser vendedor?</p>
              <p>
                <Place style={{ fontSize: "20px" }} className="mb-1 me-2" />
                Carrera23, calles 37 y 38, Barquisimeto - Lara
              </p>
            </div>
            <div className="d-flex   align-items-center gap-5">
              <p>
                <WhatsApp style={{ fontSize: "20px" }} className="mb-1 me-2" />
                <text> Contactanos </text>
              </p>
  
              <p>
                <text> 412-602-2991</text>
              </p>
              <p>
                <text> Siguenos </text>
                <Facebook style={{ fontSize: "" }} className="mb-1 me-2" />
                <Instagram style={{ fontSize: "" }} className="mb-1 me-2" />
              </p>
            </div>
          </div>
        </div> */}

        <div
          className={
            window.innerWidth > 768 ? "tex-white py-3 " : " tex-white py-4 "
          }
          style={{
            backgroundColor: "#6768A9",
            fontSize: "clamp(0.9rem, 3.5vw, 1.2rem)",
            position: "relative",
          }}
        >
          <div
            className="rounded"
            style={{
              position: "absolute",
              left: "15px",
              top: "15%",
              backgroundColor: "#D8D8F0",
            }}
          >
            <Link to="/">
              <Home style={{ fontSize: "2.5rem" }} />
            </Link>
          </div>
          <div className="text-white row ">
            <div className="col d-flex justify-content-center aling-items-center gap-5 ">
              <p>CONTACTANOS +58 0412-2647326</p>
            </div>
          </div>
        </div>
      </>
    );
  } else return null;
};

export default Announcement;
