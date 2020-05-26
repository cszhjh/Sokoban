import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'https://api.itzjh.cn',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  })

  instance.interceptors.response.use(config => {
    return config
  })

  return instance(config)
}
