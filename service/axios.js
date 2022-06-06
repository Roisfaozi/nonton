import axios from 'axios'
import qs from 'qs'

const baseUrl = process.env.API_URL
const apiKey = process.env.API_KEY

const instance = axios.create({
  baseURL: baseUrl,
  params: { api_key: apiKey },
  paramsSerializer: (params) => qs.stringify({ ...params }),
})

instance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }

    return response
  },
  (error) => {
    throw error
  }
)
export default instance
