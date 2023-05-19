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
  return await axios.delete(
    `${environment.backendBaseUrl}modules/delete/${id}`
  );
};


/**
 * CRUD classes: Create, Update, Delete
 */

const createClassModule = async ({ body, moduleId }) => {
  const header = {
    "Content-Type": "application/json",
  };
  return await axios
    .post(`${environment.backendBaseUrl}modules/${moduleId}/class`, body, {
      headers: header,
    })
    .then((resp) => {
      return resp.data.message;
    })
    .catch((error) => {
      // !Delete comment
      console.log(error);
      return error;
    });
};

const updateClassModule = async ({ body, moduleId }) => {
  const header = {
    "Content-Type": "application/json",
  };

  return await axios
    .patch(
      `${environment.backendBaseUrl}modules/${moduleId}/class/${body.get_id}`,
      body,
      {
        headers: header,
      }
    )
    .then((resp) => {
      return resp.data.message;
    })
    .catch((error) => {
      // !Delete comment
      console.log(error);
      return error;
    });
};

const deleteClassModule = async ({ classId, moduleId }) => {
  return await axios
    .delete(`${environment.backendBaseUrl}modules/${moduleId}/class/${classId}`)
    .then((resp) => {
      return resp.data.message;
    })
    .catch((error) => {
      // !Delete comment
      console.log(error);
      return error;
    });
};

export {
  getModules,
  getModuleById,
  createModuleAsync,
  deleteModuleByIdAsync,
  createClassModule,
  updateClassModule,
  deleteClassModule,
};
