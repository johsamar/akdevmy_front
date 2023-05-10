import axios from "axios";
import { environment } from "../config/environment";


const getCourses = async () => {
    return await axios.get(`${environment.backendBaseUrl}listCourses`);
};


const createCourseAsync = async ({ body }) => {
    const header = {
        "Content-Type": "application/json"
    }
    console.log(body);
    return await axios.post(`${environment.backendBaseUrl}createCourse`, body, {
        headers: header
    });
};

const updateCourses = async ({body}) => {
    const header = {
        "Content-Type": "application/json"
    }
    console.log(body);
    return await axios.put(`${environment.backendBaseUrl}updateCourse`, body, {
        headers: header
    });
}

const deleteCoursesById = async ({id}) => {
    return await axios.delete(`${environment.backendBaseUrl}deleteCourse/${id}`);
}

export { getCourses, createCourseAsync, updateCourses, deleteCoursesById };
