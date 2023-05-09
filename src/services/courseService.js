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

export { getCourses, createCourseAsync };
