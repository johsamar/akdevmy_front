import { useEffect, useState } from "react";
import { GeneralCardComponent } from "../components/GeneralCardComponent";
import { getCourses } from "../services/courseService";
import "../styles/MyCoursePage.css";

const MyCoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const getCoursesFromService = async () => {
    let coursesList = await getCourses();
    setCourses(coursesList.data);
    setFilteredCourses(coursesList.data);
    console.log(coursesList.data); //! to delete
  };

  useEffect(() => {
    getCoursesFromService();
  }, []);

  const handleChange = (e) => {
    let textToFilter = e.target.value;
    //console.log(e.target.value);

    const filter = courses.filter((course) =>
      course.name.toLowerCase().includes(textToFilter.toLowerCase())
    );

    setFilteredCourses(filter);
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
                  key={course.courseId}
                  singleElement={course}
                />
              );
            })}
        </div>

        {/* add course button */}
      </div>
    </>
  );
};

export { MyCoursePage };
