import { useEffect, useState } from "react";
import { GeneralCardComponent } from "../components/GeneralCardComponent";
import { getCourses } from "../services/courseService";

const MyCoursePage = () => {
  const [courses, setCourses] = useState([]);

  const getCharacterFromService = async () => {
    let coursesList = await getCourses();
    setCourses(coursesList.data);
  };

  useEffect(() => {
    getCharacterFromService();
  }, []);

  return (
    <>
      <div className="container-fluid">
        {/* My Courses title */}

        {/* Search filter */}

        {/* Course cards */}
        <div className="rows-container">
          {courses &&
            courses.map((course) => {
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
      </div>
    </>
  );
};

export { MyCoursePage };
