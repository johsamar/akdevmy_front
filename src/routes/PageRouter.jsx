import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MyCoursePage } from "../pages/MyCoursePage";
import Academia from "../pages/Academia";
import Estudiantes from "../pages/Estudiantes";
import NavBar from "../containers/NavBar";
import "../styles/PageRouter.css";
import { useState } from "react";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import ModuleDetailsPage from "../pages/ModuleDetailsPage";
import { AiOutlineBars } from "react-icons/ai";

function PageRouter() {
  const [showSideBar, setShowSideBar] = useState(true);

  const changeSideBarStatus = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <Router>
        <div className="principal-container">
          <div
            className="sidebar"
            style={showSideBar ? { width: "20%" } : { width: "0%" }}
          >
            <NavBar />
          </div>

          <div
            className="routes overflow-auto"
            style={showSideBar ? { marginLeft: "20%" } : { marginRight: "0%" }}
          >
            <button href="#" className="hidden-button btn" onClick={changeSideBarStatus}>
            {/* navbarIcon */}
            <AiOutlineBars className="navBarIcon" />
            </button>
            <Routes>
              <Route path="/" element={<Academia />} />
              <Route path="/estudiantes" element={<Estudiantes />} />
              <Route path="/misCursos" element={<MyCoursePage />}></Route>
              {/* Esta ruta sirve para ver los detalles del curso */}
              <Route
                path="/misCursos/:idCourse"
                element={<CourseDetailsPage />}
              />
              {/* Esta ruta dirige al detalle del modulo */}
              <Route
                path="/module/:idModule"
                element={<ModuleDetailsPage/>}
              />
              <Route path="*" element={<h1>Not Found 404</h1>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default PageRouter;
