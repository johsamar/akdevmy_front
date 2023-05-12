import { useEffect, useState } from "react";
import { GeneralCardComponent } from "../components/GeneralCardComponent";
import { getCourses } from "../services/courseService";
import "../styles/MyCoursePage.css";
import { Button } from "reactstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { CourseModalComponent } from "../components/CourseModalComponent"
import { ActionEnum } from "../enums/action";
//import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoadingComponent from "../components/LoadingComponent";

const MyCoursePage = () => {
  const [selectedCourseData, setSelectedCourseData] = useState({});
  const [courses, setCourses] = useState({});
  const [action, setAction] = useState(ActionEnum.create);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [modal, setModal] = useState(false); //* modalVisibility

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  const getCoursesFromService = async () => {
    let coursesList = await getCourses();
    setCourses(coursesList.data);
    setFilteredCourses(coursesList.data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getCoursesFromService();
  }, []);

  const handleChange = (e) => {
    let textToFilter = e.target.value;

    const filter = courses.filter((course) =>
      course.name.toLowerCase().includes(textToFilter.toLowerCase())
    );

    setFilteredCourses(filter);
  };

  //* changeModalVisibility
  const changeModalState = () => {
    setModal(!modal);
  };

  const createCourse = () => {
    setAction(ActionEnum.create);
    changeModalState();
  }

  return (
    <>
      {isLoading && <LoadingComponent />}
      <div className="containerPage">
        {/* My Courses title */}
        <p className="title-section-course">Mis cursos</p>

        {/* Search filter */}
        <div className="searchBarContainer">
          <div className="containerInput">
            <input
              className="inputBuscar form-control"
              placeholder="Busqueda por nombre del curso"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Course cards */}
        <div className="rows-container">
          {filteredCourses &&
            filteredCourses.map((course) => {
              return (
                <GeneralCardComponent
                  selectedObject={setSelectedCourseData}
                  key={course.id}
                  singleElement={course}
                  options={"actions"}
                  actionState={setAction}
                  changeModalState={changeModalState}
                />
              );
            })}
        </div>

        {/* add course button */}
        <Button className="btn-flotante" onClick={createCourse}>
          {/* Add course icon */}
          <AiFillPlusCircle className="addCourseIcon" />
        </Button>

        <CourseModalComponent
          courseAction={selectedCourseData}
          action={action}
          changeModalState={changeModalState}
          modal={modal}
          courses={courses}
          setCourses={setCourses}
          setFilteredCourses={setFilteredCourses}
        />
      </div>
    </>
  );
};

export { MyCoursePage };
