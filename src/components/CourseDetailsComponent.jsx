import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GeneralCardComponent } from "./GeneralCardComponent";
import { Button } from "reactstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { getModules } from "../services/ModulesService";
import { findCourseByID } from "../services/courseService";
import LoadingComponent from "./LoadingComponent";

const CourseDetailsComponent = () => {
  // Id of the course received by url, it will be used later to add the modules of the course
  const { idCourse } = useParams();
  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  /**
   * This function currently serves to display only the name of the course,
   * but it also serves to display more information if needed.
   */
  const getCoursesFromService = async () => {
    const coursesList = await findCourseByID(idCourse);
    /**
     *
     * * Esta linea de setCourses puede cambiar dependiendo de la modificación en el courseService, apenas se verifique que
     * * funcione se debe eliminar este comentario.
     */
    setCourses(coursesList.data.data);
    setIsLoading(false);
  };

  // Show only the modules of this course
  const getModulesFromService = async () => {
    const moduleList = await getModules();
    const tempModuleList = moduleList.filter(
      (module) => module.idCourse == idCourse
    );
    setModules(tempModuleList);
  };

  useEffect(() => {
    setIsLoading(true);
    getCoursesFromService();
    getModulesFromService();
  }, []);

  return (
    <>
      {/* loading validation */}
      {isLoading && <LoadingComponent />}
      <div className="container-fluid">
        {/* Tittle */}
        <div className="row justify-content-center">
          <div className="col">
            <h3>{courses.name}</h3>
          </div>
        </div>

        {/* Div Card */}
        <div className="row justify-content-around">
          {modules.length < 1 ? (
            <div className="col">
              <h2 className="text-center">
                Este curso aún no tiene ningún módulo
              </h2>
            </div>
          ) : (
            modules.map((module) => {
              return (
                <GeneralCardComponent
                  key={module._id}
                  singleElement={module}
                  options={"Ir al modulo"}
                />
              );
            })
          )}
        </div>

        {/* Add Module Button */}
        <div className="position-absolute bottom-0 end-0 m-5">
          <Button href="#" className="btn-flotante">
            <AiFillPlusCircle className="addCourseIcon" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsComponent;
