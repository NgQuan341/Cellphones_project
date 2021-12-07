import axiosClient from './axios'

class OrderApi {
    getAll = () => {
    const url = `/payment`;
    return axiosClient.get(url);
    };
    getOne = (id) =>{
        const url = `/payment?accountID=${id}`;
        return axiosClient.get(url)
    }
    
    post = (data) =>{
        const url = `/payment`;
        return axiosClient.post(url,data)
    }
    put = (data,id) =>{
        const url  = `/payment/${id}`;
        return axiosClient.put(url,data)
    };
    delete = (id) =>{
        const url  = `/payment/${id}`;
        return axiosClient.delete(url)
    }
    }
    const orderapi = new OrderApi();
export default orderapi;