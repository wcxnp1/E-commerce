import axios from 'axios';

const server = axios.create({
  baseURL: "http://ws 9yuecloud.com/",

  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})
server.interceptors.request.use((res) => {
  return res
}, (err) => {
  return Promise.reject(err)
})
server.interceptors.response.use((conflot) => {
  return conflot
}, (err) => {
  return Promise.reject(err)
})
export default server;
