import { MenuOpen } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CategoriaSelector({ setCurrentPage }) {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();

  let history = useHistory();

  const categoriesList = useSelector((state) => state.categoryList);

  const categorias = categoriesList.categories;

  const handleCategoriaSeleccionada = (categoriaSeleccionada) => {
    setMostrarCategorias(false);
    setSelectedCategory(categoriaSeleccionada);
    setCategoria(categoriaSeleccionada);
    if (categoriaSeleccionada === "") {
      history.push(`/`);
    } else {
      history.push(`/category/${categoriaSeleccionada}`);
      setCurrentPage(0); // reseteamos la página al cambiar de categoría
    }
    // console.log(`La categoría seleccionada es: ${categoriaSeleccionada}`);
    // Aquí puedes ejecutar cualquier función que desees cuando el usuario seleccione una categoría
  };

  const handleMostrarCategorias = () => {
    setMostrarCategorias(!mostrarCategorias);
  };

  return (
    <div
      className="categorias-container button-desplegable  rounded  "
      onClick={handleMostrarCategorias}
    >
      <div
        className=""
        style={{
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        <div className="d-flex justify-content-center  ">
          <MenuOpen />
          <span className="" style={{ fontWeight: "bold" }}>
            CATEGORIAS
          </span>
        </div>
      </div>

      {mostrarCategorias && (
        <ul className="categorias-list  text-black">
          {categorias.map((item) => (
            <li
              key={categoria}
              className="categorias-list-item"
              onClick={() => handleCategoriaSeleccionada(item.categoria)}
            >
              {item.categoria}
            </li>
          ))}
        </ul>
      )}
      {/* {categoria && <p>Categoría seleccionada: {categoria}</p>} */}
    </div>
  );
}

export default CategoriaSelector;
