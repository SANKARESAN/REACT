import axios from "axios";

//create axios object with basic configuration
const axiosHttp=axios.create({
    baseURL:window.location.hostname.includes("localhost")? "http://localhost:8888":"http://www.hematitecorp.com"

});

//create interceptor for request
axiosHttp.interceptors.request.use(
    (config)=>{
        const token=!!sessionStorage.getItem("accessToken");
        return{
            ...config,
            headers:{
                ...axios(token && {'Authorization':`Bearer ${sessionStorage.getItem("accessToken")}`}),
                ...config.headers
            }
        }
    },
    (error)=>{
        return Promise.reject(error)
    }
);

//create interceptor for response
axiosHttp.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error)=>{
        return Promise.all(error)
    }
)

// Global Request Http Request

export const GET = (url, header = {}) => {
    return axiosHttp.get(url,{headers:header});
}

export const DELETE = (url, header = {}) => {
    return axiosHttp.delete(url,{headers:header});
}

export const POST = (url, header = {}) => {
    return axiosHttp.post(url,payload,{headers:header});
}

export const PUT = (url, header = {}) => {
    return axiosHttp.put(url,payload,{headers:header});
}
