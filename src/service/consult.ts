/**
 * @name: consult
 * @author: sand
 * @date: 2024-08-19 10:17
 * @description: consult
 * @update: 2024-08-19 10:17
 */

import RPC from '@/rpc/consult'
import request from '@/utils/request'

/**
 * 获取咨询模板
 * @return {Promise<Object>}
 */
export const getConsultTemplateList = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {

            const result = await request.get(RPC.getConsultTemplateList)
            resolve(result)
        }
        catch (e) {
            console.error('consult.getConsultTemplate() catch', e)
            reject(e)
        }
    })
}

/**
 * 提交咨询数据
 * @return {Promise<Object>}
 */
export const submitConsult = (token: string, params: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await request.post(RPC.submitConsult, params, {
                headers: {
                    'cf-turnstile-response': token
                }
            })
            resolve(result)
        }
        catch (e) {
            console.error('consult.submitConsult() catch', e)
            reject(e)
        }
    })
}
