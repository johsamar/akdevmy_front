import React, { useState, useEffect } from "react";
import axios from "axios";

function CourseModules(props) {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    axios.get(`/api/courses/${props.courseId}/modules`)
      .then(response => {
        setModules(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.courseId]);

  return (
    <div>
      <h2>Modules</h2>
      <ul>
        {modules.map(module => (
          <li key={module.id}>{module.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseModules;
