import { useEffect, useState } from "react";
import { GeneralCardComponent } from "../components/GeneralCardComponent";
import { getCourses } from "../services/courseService";
import "../styles/MyCoursePage.css";

const MyCoursePage = () => {
  const [courses, setCourses] = useState([]);

  const getCharacterFromService = async () => {
    let coursesList = await getCourses();
    setCourses(coursesList.data);
    console.log(coursesList.data); //! to delete
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
              return <GeneralCardComponent key={course.courseId} singleElement={course} />;
            })}
        </div>

        {/* add course button */}
      </div>
    </>
  );
};

export { MyCoursePage };
