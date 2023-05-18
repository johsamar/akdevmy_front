import axios from "axios";
import { environment } from "../config/environment";
//import { API } from "./AxiosInstance";

//const moduleEndPoint = `modules`;

// New getModules, load data from backend server
const getModules = async () => {
  return await axios
    .get(`${environment.backendBaseUrl}modules/list`)
    .then((resp) => {
      return resp.data.data;
    })
    .catch((error) => {
      return error;
    });
};

const getModuleById = async (id) => {
  return await axios
    .get(`${environment.backendBaseUrl}modules/findById/${id}`)
    .then((resp) => {
      console.log(resp.data);
      return resp.data.data;
    })
    .catch((error) => {
      return error;
    });
};

const createModuleAsync = async ({ body }) => {
  const header = {
    "Content-Type": "application/json",
  };
  console.log(body);
  return await axios.post(`${environment.backendBaseUrl}modules/create`, body, {
    headers: header,
  });
};

const deleteModuleByIdAsync = async ({ id }) => {
  return await axios.delete(`${environment.backendBaseUrl}courses/delete/${id}`);
}

// const createModule = async (module) => {
//   const header = {
//     "Content-Type": "application/json",
//   };
//   try {
//     const APIresponse = await API.post(moduleEndPoint, module, header);
//     return APIresponse;
//   } catch (error) {
//     return null;
//   }
// };

export { getModules, getModuleById, createModuleAsync, deleteModuleByIdAsync };
