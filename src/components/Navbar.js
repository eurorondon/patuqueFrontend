import React from "react";

const Navbar = () => {
  if (window.innerWidth < 768) {
    return (
      <div className=" " style={{ backgroundColor: "#6768A9" }}>
        <nav
          class="navbar navbar-expand-lg navbar-dark  py-4 "
          style={{ position: "relative" }}
        >
          <button
            class=" ms-2"
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
            <span class="navbar-toggler-icon"></span>
          </button>
          <h3
            className="text-center mx-auto text-white"
            style={{ fontSize: "clamp(0.9rem, 3.5vw, 1.2rem)" }}
          >
            CONTACTANOS +58 412 5263763
          </h3>
          {/* <a class="navbar-brand" href="#">
            Navbar
          </a> */}

          <div
            class="collapse navbar-collapse pt-3 ms-3"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
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
