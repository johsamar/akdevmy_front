import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourses } from "../services/courseService";
import { FaPlusCircle } from "react-icons/fa";
import { GeneralCardComponent } from "./GeneralCardComponent";
import { filterModuleById } from "../services/moduleService";

const CourseDetailsComponent = () => {
  // Id of the course received by url, it will be used later to add the modules of the course
  const { idCourse } = useParams();
  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);

  /**
   * This function currently serves to display only the name of the course,
   * but it also serves to display more information if needed.
   */
  const getCoursesFromService = async () => {
    const coursesList = await getCourses();
    const tempCourse = coursesList.data.find(
      (element) => (element.idCourse = idCourse)
    );
    setCourses(tempCourse);
  };

  // Show only the modules of this course
  const getModulesFromService = async () => {
    const tempModuleList = filterModuleById(idCourse);
    setModules(tempModuleList);
  };

  useEffect(() => {
    getCoursesFromService();
    getModulesFromService();
  }, []);

  return (
    <>
      <div className="container-fluid">
        {/* Tittle */}
        <div className="row justify-content-center">
          <div className="col">
            <h3>{courses.name}</h3>
          </div>
        </div>

        {/* Div Card */}
        <div className="row justify-content-around">
          {modules &&
            modules.map((module) => {
              return (
                <GeneralCardComponent
                  key={module.id}
                  singleElement={module}
                  options={"Ir al modulo"}
                />
              );
            })}
        </div>

        {/* Add Module Button */}
        <div className="position-absolute bottom-0 end-0 m-5">
          <span className="text-primary card-edit-actions">
            <FaPlusCircle />
          </span>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsComponent;
