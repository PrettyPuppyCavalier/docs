/**
 * @name: testApi
 * @author: sand
 * @date: 2024-08-19 11:04
 * @description: testApi
 * @update: 2024-08-19 11:04
 */
import { isValidJson } from '@/utils/base'
import request from '@/utils/request'

export const testApi = (method: string, url: string, _params?: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            let result
            const params = isValidJson(_params) ? JSON.parse(_params) : {}
            if (method === 'GET') {
                result = await request.get(url, {params})
            }
            else if (method === 'POST') {
                result = await request.post(url, params)
            }
            else if (method === 'PUT') {
                result = await request.put(url, params)
            }
            else if (method === 'DELETE') {
                result = await request.delete(url, {params})
            }

            resolve(result)
        }
        catch (e) {
            console.error('testApi() catch', e)
            reject(e)
        }
    })
}
