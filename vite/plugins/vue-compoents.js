/*
 * @Descripttion: 
 * @Author: 马俊飞
 * @Date: 2022-09-15 13:45:23
 * @LastEditors: 马俊飞
 * @LastEditTime: 2022-09-20 09:41:33
 */
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export const autoComponents = () => {
    return Components({
        dirs: ['src/components'], // 默认就是识别src/components文件，该文件夹下的所有组件都会自动 import
        resolvers: [ElementPlusResolver()]
    })
}