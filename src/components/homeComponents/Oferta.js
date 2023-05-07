import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductCategoria2 } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { Search } from "@material-ui/icons";
import GridOfertas from "../GridOfertas";

const Oferta = (props) => {
  const { keyword, setCurrentPage, currentPage } = props;
  const dispatch = useDispatch();

  const productListCategoria2 = useSelector(
    (state) => state.productListCategoria2
  );

  const { loading, error, products, page, pages } = productListCategoria2;
  const [selectedCategory, setSelectedCategory] = useState();
  const { category } = useParams();

  let history = useHistory();

  useEffect(() => {
    dispatch(listProductCategoria2(category));
  }, [dispatch, category]);

  const handleCategoria = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    if (value === "") {
      history.push(`/`);
    } else {
      history.push(`/category/${value}`);
      setCurrentPage(0); // reseteamos la página al cambiar de categoría
    }
  };

  return (
    <>
      {/* <Grid /> */}
      <div
        className={
          window.innerWidth > 1400
            ? " mx-5  mt-4"
            : window.innerWidth > 1000
            ? "container mt-4"
            : " mt-4"
        }
      >
        {loading ? (
          <div className="" style={{ margin: "200px 0px" }}>
            <Loading />
          </div>
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            {!category ? (
              <div
                className={
                  window.innerWidth > 1240 ? "ms-5  mt-4" : "container mt-4"
                }
              >
                {products?.length > 0 ? (
                  <>
                    <div className="d-flex  align-items-center">
                      {keyword ? (
                        <div>
                          {" "}
                          <h2 className="me-4">
                            {keyword.charAt(0).toUpperCase() + keyword.slice(1)}
                          </h2>
                        </div>
                      ) : (
                        <div className="text-center mx-auto">
                          <h2 className="">OFERTAS </h2>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex flex-column align-items-center my-2">
                      <h2>
                        Sin Resultados <Search style={{ fontSize: "2rem" }} />
                      </h2>
                      <div className=" ">
                        <p className="my-3" style={{ fontSize: "1.3rem" }}>
                          Puedes intentar con otro Nombre o buscar en alguna de
                          nuestras Categorias
                        </p>
                        <div className=" d-flex justify-content-center mt-3">
                          <select
                            name="categoria"
                            id=""
                            onChange={handleCategoria}
                          >
                            <option disabled defaultValue="">
                              {selectedCategory
                                ? selectedCategory
                                : "Categoria"}
                            </option>
                            <option value="Conservadores">Conservadores</option>
                            <option value="Vasos">Vasos</option>
                            <option value="Poncheras">Poncheras</option>
                            <option value="Aluminio">Aluminio</option>
                            <option value="Tobos">Tobos</option>
                            <option value="Bigmark">Bigmark</option>
                            <option value="Inplast">Inplast</option>
                            <option value="Adonis">Adonis</option>
                            <option value="IPM">IPM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "contain",
                        }}
                        src="/images/not-found.png"
                        alt="Not-found"
                      />
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div
                className={
                  window.innerWidth > 1240 ? "ms-5  mt-4" : "container mt-4"
                }
              >
                <div className="d-flex  align-items-center">
                  <h2 className="me-4">{category}</h2>
                  <div>
                    <select name="categoria" id="" onChange={handleCategoria}>
                      <option disabled selected value="">
                        {selectedCategory ? selectedCategory : "Categoria"}
                      </option>
                      <option value="">Todos</option>
                      <option value="Conservadores">Conservadores</option>
                      <option value="Vasos">Vasos</option>
                      <option value="Poncheras">Poncheras</option>
                      <option value="Aluminio">Aluminio</option>
                      <option value="Tobos">Tobos</option>
                      <option value="Bigmark">Bigmark</option>
                      <option value="Inplast">Inplast</option>
                      <option value="Adonis">Adonis</option>
                      <option value="IPM">IPM</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            <div className=" ">
              <GridOfertas products={products} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Oferta;
