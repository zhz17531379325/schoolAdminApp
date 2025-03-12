/*
 * @Descripttion: 
 * @Author: 马俊飞
 * @Date: 2022-09-15 10:31:33
 * @LastEditors: 马俊飞
 * @LastEditTime: 2022-09-24 19:20:51
 */
// import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import.js'
import createSetupExtend from './setup-extend.js'
import { autoComponents } from './vue-compoents.js'
import createCompression from './compression.js'
import uniPlugin from './vite-plugin-uni.js'

export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = []
    vitePlugins.push(createAutoImport())
    vitePlugins.push(createSetupExtend())
    vitePlugins.push(autoComponents())
	vitePlugins.push(uniPlugin())
	// isBuild && vitePlugins.push(...createCompression(viteEnv))
    return vitePlugins
}
