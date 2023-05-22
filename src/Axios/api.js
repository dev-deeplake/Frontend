import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    withCredentials: true,
    "Content-Type": `application/json`,
  },
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken")
    const refreshToken = localStorage.getItem("refreshToken")
    console.log(`access: ${accessToken}`)
    config.headers.accessToken = `Bearer ${accessToken ? accessToken:''}`;
    config.headers.refreshToken = `Bearer ${refreshToken ? refreshToken:''}`;
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("request error", error);
    return Promise.reject(error);
  }
);

export const AuthAPI = {
  getUserInfo: () => instance.get("/api/userInfo"),
  postLogIn: (payload) => instance.post("/api/login", payload),

}

export const TodoAPI = {
  getTodo: () => instance.get("/api/mytodo"),
  postTodo: (payload) =>  instance.post("/api/mytodo", payload)
}
export default instance;
