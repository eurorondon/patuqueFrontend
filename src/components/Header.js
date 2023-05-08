import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import { listProduct } from "../Redux/Actions/ProductActions";
import { Assessment, Search, ShoppingCart } from "@material-ui/icons";
import CategoriaSelector from "./CategoriaSelector";
import Announcement from "./../components/Announcement";

const Header = ({ setCurrentPage }) => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // const { category } = useParams();

  const [selectedCategory, setSelectedCategory] = useState();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
      setCurrentPage(0);
    } else {
      history.push("/");
    }
  };

  // const handleCategoria = (e) => {
  //   const value = e.target.value;
  //   setSelectedCategory(value);
  //   if (value === "") {
  //     history.push(`/`);
  //   } else {
  //     history.push(`/category/${value}`);
  //     setCurrentPage(0); // reseteamos la página al cambiar de categoría
  //   }
  // };

  return (
    <div>
      {/* Top Header */}
      <Announcement className="" />
      <div className=" pc-header">
        <div className=" Announcement  ">
          <div className="mx-4">
            <div className="row  " style={{ position: "relative" }}>
              <div className=" col-3 d-flex  align-items-center justify-content-start   ">
                <form onSubmit={submitHandler} className="input-group">
                  {/* <form className="input-group"> */}
                  <input
                    type="search"
                    className="form-control  rounded search my-auto"
                    placeholder="Buscar"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  {/* <button type="submit" className="search-button ">
                    <Search />
                  </button> */}
                </form>
              </div>

              <div className="col d-flex   align-items-center justify-content-center">
                <h2
                  style={{
                    fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
                  }}
                >
                  ¡Bienvenidas! Encuentra todo aquí
                </h2>
              </div>

              <div className=" col-3 d-flex  align-items-center justify-content-center">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn mx-1 dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user mx-1"></i>
                      Hola, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Perfil
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="text-black">
                    <Link to="/register" className=" button  my-auto ">
                      <span className=""> Registrar</span>
                    </Link>
                    <Link to="/login" className=" button my-auto">
                      Login
                    </Link>
                  </div>
                )}

                <Link to="/cart">
                  <ShoppingCart className="text-black" />
                  {/* <i className="fas fa-shopping-bag text-white"></i> */}
                  <span className="badge" style={{ position: "absolute" }}>
                    {cartItems.length}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      {/* <div className="header"> */}
      {/* Header */}
      {/* <div className="header"> */}
      <div className="">
        <div className=" " style={{ backgroundColor: "#D8D8F0" }}>
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className=" ">
              <div className="">
                <div className="Login-Register py-1  d-flex justify-content-between align-items-center">
                  {userInfo ? (
                    <div className="btn-group m-0" style={{ margin: "0px" }}>
                      <button
                        type="button "
                        className=" btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user mx-1 "></i>
                        Hola, {userInfo.name}
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Perfils
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandler}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="mx-auto">
                      <div className="    ">
                        <h2
                          className="text-center"
                          style={{
                            fontSize: "clamp(0.8rem, 3vw, 1.5rem)",
                          }}
                        >
                          ¡Bienvenidas! Encuentra todo aquí
                        </h2>
                      </div>
                    </div>
                  )}

                  {/* <h3>Bienvenidas</h3> */}
                  {userInfo ? (
                    <Link to="/cart" className="cart-mobile-icon  me-3">
                      <i className="fas fa-shopping-bag"></i>
                      <span className="badge">{cartItems.length}</span>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          {/* <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img
                    alt="logo"
                    src="/images/logo.png"
                    className="rounded-circle border border-danger bg-danger"
                    style={{ maxWidth: "200px" }}
                  />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Buscar"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    Buscar
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hola, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Perfil
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/register">Registrar</Link>
                    <Link to="/login">Login</Link>
                  </>
                )}

                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
