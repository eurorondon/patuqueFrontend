import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductCategoria2 } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

import ReactPaginate from "react-paginate";
import { ArrowBack, ArrowForward, Search } from "@material-ui/icons";
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

  // AQUI EMPIEZA FUNCIONES DE PAGINACION

  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  const url = window.location.href;
  const match = url.match(/\d+$/);

  useEffect(() => {
    if (url.includes("page")) {
      const match = url.match(/\d+$/);
      setCurrentPage(match[0] * 1);
    }
  }, []);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    // scroll(0, 0);
    history.push(`?page=${selectedPage}`);
  };

  //AQUI TERMINA FUNCIONES DE PAGINACION

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

  const handleButtonCategoria = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    if (value === "") {
      history.push(`/`);
    } else {
      history.push(`/category/${value}`);
      setCurrentPage(0); // reseteamos la página al cambiar de categoría
    }
  };

  const handleGoBack = () => {
    history.push(`/`);
    setSelectedCategory("");
    setCurrentPage(0);
  };

  const currentPath = history.location.pathname;

  return (
    <>
      {/* <Grid /> */}
      <div className="">
        {loading ? (
          <div className="" style={{ margin: "200px 0px" }}>
            <Loading />
          </div>
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            {/* {!category ? null : (
              <button className="btn btn-primary" onClick={handleGoBack}>
                Volver Atrás
              </button>
            )} */}

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
            <GridOfertas products={products} />
          </>
        )}
      </div>
    </>
  );
};

export default Oferta;
