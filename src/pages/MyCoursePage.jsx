import { useEffect, useState } from "react";
import { GeneralCardComponent } from "../components/GeneralCardComponent";
import { getCourses } from "../services/courseService";
import "../styles/MyCoursePage.css";
import { Button } from "reactstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { CourseModalComponent } from "../components/CourseModalComponent"

const MyCoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [modal, setModal] = useState(false); //* modalVisibility

  const getCoursesFromService = async () => {
    let coursesList = await getCourses();
    setCourses(coursesList.data);
    setFilteredCourses(coursesList.data);
  };

  useEffect(() => {
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

  return (
    <>
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
                  key={course.idCourse}
                  singleElement={course}
                  options={"actions"}
                />
              );
            })}
        </div>

        {/* add course button */}
        <Button className="btn-flotante" onClick={changeModalState}>
          {/* Add course icon */}
          <AiFillPlusCircle className="addCourseIcon" />
        </Button>

        <CourseModalComponent
          changeModalState={changeModalState}
          modal={modal}
          courses={courses}
          setFilteredCourses={setFilteredCourses}
        />
      </div>
    </>
  );
};

export { MyCoursePage };
