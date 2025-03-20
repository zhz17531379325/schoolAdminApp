import {
	defineConfig,
	loadEnv
} from 'vite'
// import path from 'path'
import createVitePlugins from './vite/plugins'

// // https://vitejs.dev/config/
export default defineConfig(({
	mode,
	command
}) => {
	const env = loadEnv(mode, process.cwd())
	const {
		VITE_APP_ENV
	} = env
	return {
		base: VITE_APP_ENV === "production" ? "/schoolAdminApp/" : "./",
		server: {
			port: 3000,
			host: true,
			open: true,
			proxy: {
				'/partyhistory-api': {
					target: 'http://192.168.180.159:8080',
					// target: 'http://121.4.108.219:6003',
					changeOrigin: true,
					rewrite: (pathProxy) => pathProxy.replace(/^\/partyhistory-api/, '/partyhistory-api')
				},
			}
		},
		plugins: createVitePlugins(env, command === 'build'),
		// css: {
		//   preprocessorOptions: {
		//     scss: {
		//       // 注入样式变量（根据自己需求注入其他）
		//       additionalData: `@import './src/assets/styles/variables.scss';`
		//     }
		//   },
		// },
		// resolve: {
		//   alias: {
		//     // 设置路径
		//     "~": path.resolve(__dirname, "./"),
		//     // 设置别名
		//     "@": path.resolve(__dirname, "./src")
		//   },
		//   extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
		// }
	}

})
