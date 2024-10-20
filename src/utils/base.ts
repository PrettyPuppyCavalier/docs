/**
 * @name: base
 * @author: sand
 * @date: 2024-08-19 11:20
 * @description: base
 * @update: 2024-08-19 11:20
 */

export const isValidJson = (str: string): boolean => {
    try {
        JSON.parse(str)
        return true
    }
    catch (e) {
        return false
    }
}
