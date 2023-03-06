import Axios from 'axios'

export const axios = Axios.create({
  baseURL: '/api',
})

axios.interceptors.response.use( (response) => {
  const data = response.data
  if (data.code === 0) {
    return data.data
  }
  data.message = data.message || data.msg
  return Promise.reject(data)
})