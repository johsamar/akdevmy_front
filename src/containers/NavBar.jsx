import React from "react";

import "../styles/NavBar.css";
import { ImagenComponent } from "../components/ImagenComponent";
import {  NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid text-center">
          <div classNameName="card" style={{ width: "11rem" }}>
            <ImagenComponent
              src="https://img.freepik.com/vector-premium/ilustracion-arte-linea-logotipo-semilla-planta_592417-137.jpg?w=2000"
              alt="SEMILLERO"
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">

               <NavLink
                  to="/"
                  className="nav-link"
                  style={({ isActive }) => {
                    return { color: isActive ? "blue" : "gray" };
                  }}
                >
                  INICIO
                </NavLink>

             
                <NavLink
                  to="/misCursos"
                  className="nav-link"
                  style={({ isActive }) => {
                    return { color: isActive ? "blue" : "gray" };
                  }}
                >
                  MIS CURSOS
                </NavLink>
             
                <NavLink
                  to="/estudiantes"
                  className="nav-link"
                  style={({ isActive }) => {
                    return { color: isActive ? "blue" : "gray" };
                  }}
                >
                  ESTUDIANTES
                </NavLink>

              <br />
              <br />
              <br />
              <br />
              <br />
              <a className="nav-link align-items-end" href="#">
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
