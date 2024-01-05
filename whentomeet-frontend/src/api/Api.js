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
        console.log("회원가입 시도")
        const response = await axiosInstance.post("/users/signup", data)
        console.log(response)
        return response;
    }

}

export default UserApi;