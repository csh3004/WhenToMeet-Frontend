import axios from 'axios';


const axiosInstance = axios.create({
    baseURL : "http://localhost:3000/"
})

const UserApi = {
    Login: async data =>{
        const response = await axiosInstance.post("/users/signin", data)
        return response;
    },

    SignUp: async data => {
        const response = await axiosInstance.post("/users/signup", data)
        return response;
    }

}

export default UserApi;