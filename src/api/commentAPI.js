import axiosClient from './axios'

class Comment {
    getAll = () => {
    const url = `/comments`;
    return axiosClient.get(url);
    };
    getOne = (id) => {
        const url = `/comments/${id}`;
        return axiosClient.get(url)
    };
    post = (data) =>{
        const url = `/comments`;
        return axiosClient.post(url,data)
    }
    put = (data,id) =>{
        const url  = `/comments/${id}`;
        return axiosClient.put(url,data)
    };
    delete = (id) =>{
        const url  = `/comments/${id}`;
        return axiosClient.delete(url)
    }
    }
    const commentApi = new Comment();
export default commentApi;