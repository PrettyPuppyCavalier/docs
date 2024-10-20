/**
 * @name: request
 * @author: sand
 * @date: 2024-08-19 10:01
 * @description: request
 * @update: 2024-08-19 10:01
 */

import axios from 'axios'
import { ElMessage } from 'element-plus'

/**
 * 网络请求配置
 */
const port = 3100
const hostname = window.location.hostname

const service = axios.create({
    baseURL: 'https://gateway.workerpath.org',
    timeout: 10000
})

/**
 * http request 拦截器
 */
service.interceptors.request.use(
    (config: axios.InternalAxiosRequestConfig): (Promise<axios.InternalAxiosRequestConfig> | axios.InternalAxiosRequestConfig) => {
        config.headers = {
            'Content-Type': 'application/json',
            ...config.headers
        }

        return config
    },
    (error: any) => {
        return Promise.reject(error)
    }
)

/**
 * http response 拦截器
 */
service.interceptors.response.use(async (response: axios.AxiosResponse): Promise<axios.AxiosResponse> => {
        if (response.data.code !== 200) {
            ElMessage.error(response.data?.message || '网络错误')
        }

        return response.data
    },
    (error: any) => {
        console.log('response error：', error)

        const {response, message} = error
        const { data } = response || {}
        ElMessage.error(data?.message || message || '网络错误')

        return Promise.reject(error)
    }
)

export default service
