import { API } from "./AxiosInstance";

const academyEndPoint = `/academy`;

const findByID = async(id) => {
    try {
        const APIresponse = await API.get(`${academyEndPoint}/${id}`);
        return APIresponse;
    } catch (error) {
        return null;
    }
};

const editProfile = async(id, academyEntity) => {
    const header = {
        "Content-Type": "application/json"
    };

    try {
        const APIresponse = await API.post(`${academyEndPoint}/${id}/editar_perfil`, academyEntity, header);
        return APIresponse;
    } catch (error) {
        return null
    }
};

export {
    findByID,
    editProfile,
}