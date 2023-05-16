import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/userActions";
import { LocationOn } from "@material-ui/icons";
import { Link, useHistory, useParams } from "react-router-dom";
import "../../responsive.css";

const PatuqueImage = ({ setCurrentPage }) => {
  let history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [keyword, setKeyword] = useState();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
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

    setTimeout(function () {
      window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="">
      <div className="d-flex " style={{ position: "relative" }}>
        {window.innerWidth < 1350 ? null : (
          <div
            className="d-flex"
            style={{ position: "absolute", left: "150px", top: "35%" }}
          >
            <LocationOn />
            <p className="">
              Calle20 entre carreras 22 y 23, <br /> Barquisimeto- Edo, Lara
            </p>
          </div>
        )}

        <img
          style={
            window.innerWidth > 768
              ? { width: "100%", height: "200px", objectFit: "contain" }
              : { width: "100%", height: "120px", objectFit: "contain" }
          }
          src="/images/patuqueHome.png"
          alt="Not-found"
          className="my-auto"
        />

        <div
          className="col-12 d-flex align-items-center Login-Register  "
          style={{ position: "absolute", backgroundColor: "red" }}
        >
          {userInfo ? null : (
            <div
              className="btn-group"
              // style={{ position: "absolute", left: "0", top: "40px" }}
              style={
                window.innerWidth > 768
                  ? {
                      position: "absolute",
                      left: "0",
                      top: "40px",
                      display: "none",
                    }
                  : { position: "absolute", left: "0", top: "40px" }
              }
            >
              <button
                type="button"
                className="name-button dropdown-toggle btn "
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i>
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/login">
                  Login
                </Link>

                <Link className="dropdown-item" to="/register">
                  Registrar
                </Link>
              </div>
            </div>
          )}

          <div
            className=""
            style={
              window.innerWidth > 768
                ? { display: "none" }
                : { position: "absolute", right: "30px", top: "40px" }
            }
          >
            {userInfo ? null : (
              <Link to="/cart" className="cart-mobile-icon">
                <i className="fas fa-shopping-bag"></i>
                <span className="badge" style={{ position: "absolute" }}>
                  {cartItems.length}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
      {window.innerWidth < 768 ? (
        <div className="col-12 d-flex align-items-center mt-2 mb-4">
          <form
            onSubmit={submitHandler}
            className="input-group mx-5"
            style={
              window.innerWidth < 768
                ? { backgroundColor: "" }
                : { display: "none" }
            }
          >
            {/* <form className="input-group"> */}
            <input
              type="search"
              className="form-control rounded search rounded-pill "
              placeholder="Buscar productos..."
              onChange={(e) => setKeyword(e.target.value)}
              style={
                window.innerWidth < 768
                  ? { backgroundColor: "#f2f2f2" }
                  : { display: "none" }
              }
            />
            {console.log(keyword)}
            {/* <button type="submit" className="search-button">
            Buscar
          </button> */}
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default PatuqueImage;
