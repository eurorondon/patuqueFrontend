import React from "react";

const Navbar = () => {
  if (window.innerWidth < 768) {
    return (
      <div className=" " style={{ backgroundColor: "#6768A9" }}>
        <nav
          className="navbar navbar-expand-lg navbar-dark  py-4 "
          style={{ position: "relative" }}
        >
          <button
            className=" ms-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              position: "absolute",
              top: "14px",
              // left: "5px",
              border: "none",
              backgroundColor: "transparent",
              fontSize: "20px",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h3
            className="text-center mx-auto text-white"
            style={{ fontSize: "clamp(0.9rem, 3.5vw, 1.2rem)" }}
          >
            CONTACTANOS +58 412 5263763
          </h3>
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}

          <div
            className="collapse navbar-collapse pt-3 ms-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  } else return null;
};

export default Navbar;
