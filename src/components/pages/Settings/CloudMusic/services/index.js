import axios from "axios"

const service = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 2000
})

export default service