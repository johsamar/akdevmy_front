import axios from "axios";
import { environment } from "../config/environment";
import { API } from "./AxiosInstance";

const moduleEndPoint = `modules`;

// New getModules, load data from backend server
const getModules = async () => {
  return await axios
    .get(`${environment.backendBaseUrl}modules`)
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

const createModule = async (module) => {
  const header = {
    "Content-Type": "application/json",
  };
  try {
    const APIresponse = await API.post(moduleEndPoint, module, header);
    return APIresponse;
  } catch (error) {
    return null;
  }
};

export { getModules, createModule, getModuleById };
