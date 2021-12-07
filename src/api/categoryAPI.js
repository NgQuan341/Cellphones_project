import axiosClient from './axios'

class CategoryApi {
    getAll = () => {
    const url = `/categories`;
    return axiosClient.get(url);
    };
    getOne = (id) => {
        const url = `/categories/${id}`;
        return axiosClient.get(url)
    };
    post = (data) =>{
        const url = `/categories`;
        return axiosClient.post(url,data)
    }
    put = (data,id) =>{
        const url  = `/categories/${id}`;
        return axiosClient.put(url,data)
    };
    delete = (id) =>{
        const url  = `/categories/${id}`;
        return axiosClient.delete(url)
    }
    }
    const categoryApi = new CategoryApi();
export default categoryApi;