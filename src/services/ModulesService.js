import { API } from "./AxiosInstance";

const moduleEndPoint = `/modules`;

const getAllModules = async() => {
    try {
        const APIresponse = await API.get(moduleEndPoint);
        return APIresponse;
    } catch (error) {
        return null;
    }
};

const createModule = async(module) => {
    const header = {
        "Content-Type": "application/json"
    }
    try {
        const APIresponse = await API.post(moduleEndPoint, module, header);
        return APIresponse;
    } catch (error) {
        return null;
    }
}

const findByID = async(id) => {
    try {
        const APIresponse = await API.get(`${moduleEndPoint}/findById/${id}`);
        return APIresponse;
    } catch (error) {
        return null;
    }
}

export {
    getAllModules,
    createModule,
    findByID
}