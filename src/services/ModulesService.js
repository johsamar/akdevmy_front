import axios from "axios";
import { environment } from "../config/environment";
import { API } from "./AxiosInstance";

const moduleEndPoint = `modules`;

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

const updateClassModule = async ({ body, moduleId }) => {
  const header = {
    "Content-Type": "application/json",
  };
  console.log(body);
  return await axios
    .patch(
      `${environment.backendBaseUrl}modules/${moduleId}/class/${body.get_id}`,
      body,
      {
        headers: header,
      }
    )
    .then((resp) => {
      console.log(resp);
      return resp;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export { getModules, createModule, getModuleById, updateClassModule };
