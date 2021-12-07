import axiosClient from './axios'

class CartApi {
    getAll = () => {
    const url = `/cart`;
    return axiosClient.get(url);
    };
    getOneCart = (id) =>{
        const url = `/cart/${id}`;
        return axiosClient.get(url)
    }
    getOne = (id) => {
        const url = `/cart?accountID=${id}`;
        return axiosClient.get(url)
    };
    post = (data) =>{
        const url = `/cart`;
        return axiosClient.post(url,data)
    }
    put = (data,id) =>{
        const url  = `/cart/${id}`;
        return axiosClient.put(url,data)
    };
    delete = (id) =>{
        const url  = `/cart/${id}`;
        return axiosClient.delete(url)
    }
    }
    const cartapi = new CartApi();
export default cartapi;