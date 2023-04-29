import Reac, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../Redux/Actions/ProductActions";
import Loading from "./LoadingError/Loading";

const categorias = [
  {
    nombre: "Cocina",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/1_rtfcmb.png",
  },
  {
    nombre: "Limpieza",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/2_eqi0xl.png",
  },
  {
    nombre: "Aluminio",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/4_wanod2.png",
  },
  {
    nombre: "Combos",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/5_rkp6cz.png",
  },
  {
    nombre: "Belleza hombre y mujer",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/6_jez0au.png",
  },
  {
    nombre: "Contenedores",
    imagen:
      "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-04-04T145558.460_lunpzm.png",
  },
];

function CardGroupBootstrap() {
  const [category, setCategory] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProduct("", "", category));
  }, [dispatch, category]);

  const seleccionarCategoria = () => {
    setCategory("Electronicos");
    // console.log(nombreCategoria);
    history.push(`/category/Electronicos`);
  };

  console.log(category);

  const handleVerMasClick = () => {
    history.push("/todos");
  };
  return (
    <div className={window.innerWidth > 630 ? "mx-5 my-5" : " container my-5"}>
      <h2 className="">¡Destaca tu negocio ya!</h2>
      <div className="row">
        <div className="col-md-4   ">
          <div
            className="  mx-auto my-2  "
            style={{
              width: "100%",
              borderRadius: "10px",
              maxWidth: "500px",
              background: "#f2f2f2",
            }}
          >
            <img
              className="card-img-top "
              src="https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680660017/1_sf7ir8.png"
              alt="Card image cap"
              style={{
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            />
            <div className="card-body bg-white">
              <h5 className="card-title">
                Productos <br />
                <span
                  className="text-danger font-weight-bold"
                  style={{ fontWeight: "bold" }}
                >
                  electronicos
                </span>
              </h5>
              <p className="card-text">
                Los mejores precios mayoristas para compras por catalogo.
              </p>
              <button
                className="btn btn-danger"
                onClick={() => seleccionarCategoria("electronicos")}
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4   ">
          <div
            className="  mx-auto my-2  "
            style={{
              width: "100%",
              borderRadius: "10px",
              maxWidth: "500px",
              background: "#f2f2f2",
            }}
          >
            <img
              className="card-img-top "
              src="https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680660017/2_lhknp0.png"
              alt="Card image cap"
              style={{
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            />
            <div className="card-body bg-white">
              <h5 className="card-title">
                Descarga nuestro <br /> catalogo
                <span
                  className="text-danger font-weight-bold"
                  style={{ fontWeight: "bold" }}
                >
                  {" "}
                  mayorista
                </span>
              </h5>

              <p className="card-title text-danger"></p>
              <p className="card-text">
                Los mejores precios mayoristas para compras por catalogo.
              </p>
              <button className="btn btn-danger">Ver más</button>
            </div>
          </div>
        </div>
        <div className="col-md-4   ">
          <div
            className="  mx-auto my-2  "
            style={{
              width: "100%",
              borderRadius: "10px",
              maxWidth: "500px",
              background: "#f2f2f2",
            }}
          >
            <img
              className="card-img-top "
              src="https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680660017/3_c7oawi.png"
              alt="Card image cap"
              style={{
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            />
            <div className="card-body bg-white">
              <h5 className="card-title">
                Todos nuestros <br />
                <span
                  className="text-danger font-weight-bold"
                  style={{ fontWeight: "bold" }}
                >
                  productos
                </span>
              </h5>
              <p className="card-text">
                Los mejores precios mayoristas para compras por catalogo.
              </p>
              <button className="btn btn-danger" onClick={handleVerMasClick}>
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGroupBootstrap;
