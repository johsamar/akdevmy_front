import React from "react";

import "../styles/NavBar.css";
import { ImagenComponent } from "../components/ImagenComponent";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="sidebar-container">
        <ImagenComponent
          src="https://img.freepik.com/vector-premium/ilustracion-arte-linea-logotipo-semilla-planta_592417-137.jpg?w=2000"
          alt="SEMILLERO"
          className="side-img"
        />

        <div className="side-button-container">
          <NavLink to="/" className="side-button btn">
            INICIO
          </NavLink>

          <NavLink to="/misCursos" className="side-button btn">
            MIS CURSOS
          </NavLink>

          <NavLink to="/estudiantes" className="side-button btn">
            ESTUDIANTES
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default NavBar;
