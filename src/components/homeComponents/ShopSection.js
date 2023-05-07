import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import Grid from "../Grid";
import ReactPaginate from "react-paginate";
import { ArrowBack, ArrowForward, Search } from "@material-ui/icons";

const ShopSection = (props) => {
  const { keyword, setCurrentPage, currentPage } = props;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  console.log([products]);
  const [selectedCategory, setSelectedCategory] = useState();
  const { category } = useParams();

  // console.log(pages);

  let history = useHistory();
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = products?.length;

  useEffect(() => {
    dispatch(listProduct(keyword, currentPage, category));
  }, [dispatch, keyword, category, currentPage]);

  useEffect(() => {
    // Función que se ejecuta al inicio para establecer el valor inicial, esta funcion es para variar la cantidad de tarjetas o productos que se muestran dependeiendo del responsive o query screen
    // function handleResize() {
    //   if (window.innerWidth > 1615) {
    //     setPostsPerPage(14);
    //   }
    //   if (window.innerWidth < 1726) {
    //     setPostsPerPage(12);
    //   }
    //   if (window.innerWidth < 1491) {
    //     setPostsPerPage(10);
    //   }
    //   if (window.innerWidth < 1256) {
    //     setPostsPerPage(12);
    //   }
    // }
    // function handleCategoryFromUrl() {
    //   const { category } = useParams();
    //   setSelectedCategory(category || ""); // establecer la categoría si existe en la URL
    // }
    // handleResize();
    // window.addEventListener("resize", handleResize);
  }, []);

  // AQUI EMPIEZA FUNCIONES DE PAGINACION

  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  // useEffect(() => {
  //   const storedPage = localStorage.getItem("currentPage");
  //   if (storedPage) {
  //     setCurrentPage(JSON.parse(storedPage));
  //   } else {
  //     setCurrentPage(location.state?.currentPage || 0);
  //   }
  // }, [location.state?.currentPage]);

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
  // console.log(currentPage);

  // useEffect(() => {
  //   dispatch(listProduct(keyword, currentPage, category));
  // }, [currentPage]);

  // console.log(page);

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
            {/* {!category ? null : (
              <button className="btn btn-primary" onClick={handleGoBack}>
                Volver Atrás
              </button>
            )} */}

            {!category ? (
              <div>
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
                          <h2 className="">Todos los productos </h2>
                        </div>
                      )}
                      {/* <div>
                        <select
                          name="categoria"
                          id=""
                          onChange={handleCategoria}
                        >
                          <option disabled selected value="">
                            {selectedCategory ? selectedCategory : "Categoria"}
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
                      </div> */}
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
                className={window.innerWidth > 1240 ? "ms-5  mt-4" : " mt-4"}
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
            <Grid currentPosts={products} />
          </>
        )}

        {products?.length > 0 ? (
          <ReactPaginate
            previousLabel={<ArrowBack />}
            nextLabel={<ArrowForward />}
            // totalPosts={products.length}
            pageCount={pages}
            // marginPagesDisplayed={1}
            pageRangeDisplayed={2} // Aquí estableces el número de botones de página a mostrar
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            forcePage={currentPage}
          />
        ) : null}
      </div>
    </>
  );
};

export default ShopSection;
