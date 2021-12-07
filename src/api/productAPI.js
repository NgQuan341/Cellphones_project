import axiosClient from './axios'

class ProductApi {
    getAll = () => {
    const url = `/products`;
    return axiosClient.get(url);
    };
    getOne = (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url)
    };
    post = (data) =>{
        const url = `/products`;
        return axiosClient.post(url,data)
    }
    put = (data,id) =>{
        const url  = `/products/${id}`;
        return axiosClient.put(url,data)
    };
    delete = (id) =>{
        const url  = `/products/${id}`;
        return axiosClient.delete(url)
    }
    }
    const productApi = new ProductApi();
export default productApi;