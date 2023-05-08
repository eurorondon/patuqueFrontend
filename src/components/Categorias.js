import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listProduct } from "../Redux/Actions/ProductActions";
import { useHistory } from "react-router-dom";

const categorias = [
  {
    nombre: "Cuidado de la piel",
    imagen: "images/piel.png",
  },
  {
    nombre: "Labios",
    imagen: "/images/labios.png",
  },
  {
    nombre: "Aseosorias",
    imagen: "/images/asesorias.png",
  },
  {
    nombre: "Aprende",
    imagen: "/images/aprende.png",
  },
  // {
  //   nombre: "Belleza hombre y mujer",
  //   imagen:
  //     "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/6_jez0au.png",
  // },
  // {
  //   nombre: "Contenedores",
  //   imagen:
  //     "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663778/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-04-04T145558.460_lunpzm.png",
  // },
];

function Categorias() {
  const [category, setCategory] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProduct("", "", category));
  }, [dispatch, category]);

  const seleccionarCategoria = (nombreCategoria) => {
    setCategory(nombreCategoria);
    history.push(`/category/${nombreCategoria}`);
  };

  return (
    <div
      className={
        window.innerWidth > 1280 ? "  mx-auto  mt-4" : "  container mt-4"
      }
    >
      <h2 className="text-center my-4">DESTACADOS</h2>

      {/* <div className="row  row-cols-md-3 row-cols-lg-6 row-cols-xl-6 d-flex justify-content-center gap-2"> */}
      <div
        className={
          window.innerWidth > 768
            ? "grid3"
            : "row  row-cols-md-3 row-cols-lg-6 row-cols-xl-6 d-flex justify-content-center gap-4 mx-4 "
        }
      >
        {categorias.map((categoria, index) => (
          <div
            className={window.innerWidth > 767 ? "p-3 card   " : "p-1 "}
            key={index}
            style={{
              position: "relative",
              borderRadius: "15px",
              backgroundColor: "rgba(155, 156, 207, 0.08)",
              border: "solid 1px #6768A9",
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              onClick={() => seleccionarCategoria(categoria.nombre)}
              style={{ cursor: "pointer" }}
            >
              <div className="text-center my-2">
                <h3 className="categoria-name">{categoria.nombre}</h3>
              </div>
              <img
                src={categoria.imagen}
                className="card-img-top rounded"
                alt={categoria.nombre}
              />
            </div>
            <div className="text-center my-2">
              <span className="categoria-name">ver mas</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;
