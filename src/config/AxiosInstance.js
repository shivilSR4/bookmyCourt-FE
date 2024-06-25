import axios from 'axios'

const axiosinstance = axios.create({
  baseURL:process.env.REACT_APP_BE_URL
})
axiosinstance.interceptors.request.use(function(config){
    const token = localStorage.getItem('token')
    config.headers['Authorization'] = 'Bearer '+token
    return config
})

export default axiosinstance