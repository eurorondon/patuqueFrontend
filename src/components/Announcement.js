import { Facebook, Instagram, Place, WhatsApp } from "@material-ui/icons";
import React from "react";

const Announcement = () => {
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
        }}
      >
        <div className="text-white row ">
          <div className="col d-flex justify-content-center aling-items-center gap-5 ">
            <p>CONTACTANOS +58 412 5263763</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
