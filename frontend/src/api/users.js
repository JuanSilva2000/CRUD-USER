import axios_api from "./axios";

export const getUsers = async () => {
    try {
        const response = await axios_api.get("/usuarios");
        return response.data;
    } catch (error) {
        console.error("Error fetching usuarios");
    }
}

export const getUser = async (id) => {
    try {
        const response = await axios_api.get(`/usuarios/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching usuario", error);
    }
}

export const getUsersBySearch = async (nombre) => {
    try {
        const response = await axios_api.get(`/usuariosBusq/${nombre}`);
        return response.data;
    } catch (error) {
        console.error("Error buscando usuarios");
    }
};

export const createUser = async (user) => {
    try {
        const response = await axios_api.post("/usuarios", user);
        return response.data;
    } catch (error) {
        console.error("Error creando usuario");
    }
}

export const updateUser = async (id, user) => {
    try {
        const response = await axios_api.put(`/usuarios/${id}`, user);
        return response.data;
    } catch (error) {
        console.error("Error actualizando usuario");
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await axios_api.delete(`/usuarios/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error eliminando usuario", error);
    }
}