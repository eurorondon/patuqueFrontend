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
    link: "https://wa.me/message/T53QKXRSLJE3B1",
  },
  {
    nombre: "Aprende",
    imagen: "/images/aprende.png",
    link: "https://instagram.com/patuquee?igshid=YmMyMTA2M2Y=",
  },
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
    setTimeout(function () {
      window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
    }, 100);
    history.push(`/category/${nombreCategoria}`);
  };

  return (
    <div
      className={
        window.innerWidth > 1280 ? "  mx-auto  mt-4" : "  container mt-4"
      }
      id="Destacados"
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
          <div>
            {categoria.link ? (
              <a href={categoria.link}>
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
                  <div style={{ cursor: "pointer" }}>
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
              </a>
            ) : (
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;
