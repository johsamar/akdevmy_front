import axios from "axios";
import { environment } from "../config/environment";

const getCourses = async () => {
  return await axios.get(`${environment.backendBaseUrl}listCourses`);
};

const createCourseAsync = async ({ body }) => {
  const header = {
    "Content-Type": "application/json",
  };
  console.log(body);
  return await axios.post(`${environment.backendBaseUrl}createCourse`, body, {
    headers: header,
  });
};

const findCourseByID = async (id) => {
  try {
    return await axios.get(`${environment.backendBaseUrl}/findById/${id}`);
  } catch (error) {
    return null;
  }
};

export { getCourses, createCourseAsync, findCourseByID };
