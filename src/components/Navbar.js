import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const categorias = [
  {
    title: "Labios",
    id: 1,
  },
  {
    title: "Bases",
    id: 2,
  },
  {
    title: "Brochas",
    id: 3,
  },
  {
    title: "Bronceador",
    id: 4,
  },
  {
    title: "Skin care",
    id: 5,
  },
];

const Navbar = ({ setCurrentPage, currentPath }) => {
  let history = useHistory();

  const [categoria, setCategoria] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();
  const [showMenu, setShowMenu] = useState();

  const handleCategoriaSeleccionada = (categoriaSeleccionada) => {
    setShowMenu(false);
    setSelectedCategory(categoriaSeleccionada);
    setCategoria(categoriaSeleccionada);
    if (categoriaSeleccionada === "") {
      history.push(`/`);
    } else {
      history.push(`/category/${categoriaSeleccionada}`);
    }
    if (currentPath == "/") {
      setCurrentPage(0);
    }
    // console.log(`La categoría seleccionada es: ${categoriaSeleccionada}`);
    // Aquí puedes ejecutar cualquier función que desees cuando el usuario seleccione una categoría
  };
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
            <span
              className="navbar-toggler-icon"
              onClick={() => setShowMenu(true)}
            ></span>
          </button>
          <h3
            className="text-center mx-auto text-white"
            style={{ fontSize: "clamp(0.9rem, 3.5vw, 1.2rem)" }}
          >
            CONTACTANOS +58 412 5263763
          </h3>

          <div
            className={`collapse navbar-collapse pt-3 ms-3 ${showMenu} `}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <LinkScroll
                  className="nav-link"
                  activeClass="active"
                  to="/#ShopSection"
                  spy={true}
                  smooth={true}
                  offset={-400}
                  duration={250}
                  onClick={() => setShowMenu(false)}
                >
                  Tienda
                </LinkScroll>
              </li> */}

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
                  Categorias
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {categorias.map((item) => (
                    <a
                      className="dropdown-item"
                      onClick={() => handleCategoriaSeleccionada(item.title)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </li>
              {currentPath == "/" ? (
                <li className="nav-item">
                  <LinkScroll
                    className="nav-link"
                    activeClass="active"
                    to="Destacados"
                    spy={true}
                    smooth={true}
                    offset={-370}
                    duration={250}
                    onClick={() => setShowMenu(false)}
                  >
                    Destacados
                  </LinkScroll>
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    activeClass="active"
                    href="/#Destacados"
                    spy={true}
                    smooth={true}
                    offset={-370}
                    duration={250}
                    onClick={() => setShowMenu(false)}
                  >
                    Destacados
                  </a>
                </li>
              )}
              {currentPath == "/" ? (
                <li className="nav-item">
                  <LinkScroll
                    className="nav-link"
                    activeClass="active"
                    to="Novedades"
                    spy={true}
                    smooth={true}
                    offset={-370}
                    duration={250}
                    onClick={() => setShowMenu(false)}
                  >
                    Novedades
                  </LinkScroll>
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    activeClass="active"
                    href="/#Novedades"
                    spy={true}
                    smooth={true}
                    offset={-370}
                    duration={250}
                    onClick={() => setShowMenu(false)}
                  >
                    Novedades
                  </a>
                </li>
              )}

              {currentPath == "/" ? (
                <li className="nav-item">
                  <LinkScroll
                    className="nav-link"
                    activeClass="active"
                    to="Ofertas"
                    spy={true}
                    smooth={true}
                    offset={-370}
                    duration={250}
                    onClick={() => setShowMenu(false)}
                  >
                    Ofertas
                  </LinkScroll>
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    activeClass="active"
                    href="/#Ofertas"
                    spy={true}
                    smooth={true}
                    offset={-370}
                    duration={250}
                    onClick={() => setShowMenu(false)}
                  >
                    Ofertas
                  </a>
                </li>
              )}

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Otros
                </a>
              </li>
              <li className="nav-item">
                <LinkScroll
                  className="nav-link"
                  activeClass="active"
                  to="Footer"
                  spy={true}
                  smooth={true}
                  offset={-370}
                  duration={250}
                  onClick={() => setShowMenu(false)}
                >
                  Contactanos
                </LinkScroll>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  } else return null;
};

export default Navbar;
