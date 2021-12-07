import axiosClient from './axios'

class AccountsApi {
    getAll = () => {
    const url = `/accounts`;
    return axiosClient.get(url);
    };
    getOne = (id) => {
        const url = `/accounts/${id}`;
        return axiosClient.get(url)
    };
    post = (data) =>{
        const url = `/accounts`;
        return axiosClient.post(url,data)
    }
    put = (data,id) =>{
        const url  = `/accounts/${id}`;
        return axiosClient.put(url,data)
    };
    delete = (id) =>{
        const url  = `/accounts/${id}`;
        return axiosClient.delete(url)
    }
    }
    const accountsApi = new AccountsApi();
export default accountsApi;