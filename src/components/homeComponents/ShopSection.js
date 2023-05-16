import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import Grid from "../Grid";
import ReactPaginate from "react-paginate";
import {
  ArrowBack,
  ArrowForward,
  Search,
  SearchOutlined,
} from "@material-ui/icons";

const ShopSection = (props) => {
  const { keyword, setCurrentPage, currentPage } = props;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const categoriesList = useSelector((state) => state.categoryList);
  const categorias = categoriesList.categories;

  const [selectedCategory, setSelectedCategory] = useState();
  const { category } = useParams();

  let history = useHistory();
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = products?.length;

  useEffect(() => {
    dispatch(listProduct(keyword, currentPage, category));
  }, [dispatch, keyword, category, currentPage]);

  // useEffect(() => {
  //   setTimeout(function () {
  //     window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
  //   }, 100);
  // }, [category]);

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
    history.push(`?page=${selectedPage}`);

    setTimeout(function () {
      window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
    }, 100);
  };

  // useEffect(() => {
  //   dispatch(listProduct(keyword, currentPage, category));
  // }, [currentPage]);

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
        id="ShopSection"
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
                    <div className="d-flex  align-items-center" id="">
                      {keyword ? (
                        <div>
                          <h2 className="mx-5">
                            <SearchOutlined />{" "}
                            {keyword.charAt(0).toUpperCase() +
                              keyword.substring(1)}
                          </h2>
                        </div>
                      ) : (
                        <div className="text-center mx-auto">
                          <h2 className="">Todos los productos </h2>
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

                      <div className="mx-2">
                        <p
                          className="my-3 text-center"
                          style={{ fontSize: "1.3rem" }}
                        >
                          Puedes intentar con otro Nombre o buscar en alguna de
                          nuestras Categorias
                        </p>

                        <div className=" d-flex justify-content-center mt-3">
                          <select
                            name="categoria"
                            id=""
                            onChange={handleCategoria}
                          >
                            <option disabled selected value="">
                              {selectedCategory
                                ? selectedCategory
                                : "Categoria"}
                            </option>
                            <option value="">Todos</option>
                            {categorias.map((item) => (
                              <option>{item.categoria}</option>
                            ))}
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
                <div className="d-flex flex-column align-items-center justify-content-evenly  ">
                  <h2 className="">
                    <SearchOutlined style={{ fontSize: "2rem" }} /> {category}
                  </h2>

                  <div className="mt-3">
                    <select name="categoria" id="" onChange={handleCategoria}>
                      <option disabled selected value="">
                        {selectedCategory ? selectedCategory : "Categoria"}
                      </option>
                      <option value="">Todos</option>
                      {categorias.map((item) => (
                        <option>{item.categoria}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
            {products?.length > 0 ? (
              <Grid currentPosts={products} />
            ) : (
              <>
                {keyword ? null : (
                  <>
                    {" "}
                    <div className="d-flex flex-column align-items-center my-2">
                      <h2 className="mt-5">Categoria Agotada</h2>
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
              </>
            )}
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
