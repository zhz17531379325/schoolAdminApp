/*
 * @Descripttion: 
 * @Author: 马俊飞
 * @Date: 2022-08-29 15:24:35
 * @LastEditors: 马俊飞
 * @LastEditTime: 2022-09-20 09:41:49
 */
import autoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createAutoImport() {
    return autoImport({
        imports: [
            'vue',
            'vue-router',
			'vuex'
        ],
        dts: false,
        resolvers: [ElementPlusResolver()]
    })
}
