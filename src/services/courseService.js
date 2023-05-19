import axios from "axios";
import { environment } from "../config/environment";

const getCourses = async () => {
  return await axios.get(`${environment.backendBaseUrl}courses/list`);
};

const createCourseAsync = async ({ body }) => {
  const header = {
    "Content-Type": "application/json",
  };
  console.log(body);
  return await axios.post(`${environment.backendBaseUrl}courses/create`, body, {
    headers: header,
  });
};

const updateCoursesAsync = async ({ body }) => {
    const header = {
        "Content-Type": "application/json"
    }
    console.log(body);
    return await axios.put(`${environment.backendBaseUrl}courses/update/${body.id}`, body, {
        headers: header
    });
}

const deleteCoursesByIdAsync = async ({ id }) => {
    return await axios.delete(`${environment.backendBaseUrl}courses/delete/${id}`);
}

const findCourseByID = async (id) => {
    try {
        return await axios.get(`${environment.backendBaseUrl}courses/findById/${id}`);
    } catch (error) {
        return null;
    }
};

export { getCourses, createCourseAsync, updateCoursesAsync, deleteCoursesByIdAsync, findCourseByID };
