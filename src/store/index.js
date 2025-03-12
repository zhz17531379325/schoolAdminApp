import {
	createStore
} from 'vuex'
 
export default createStore({
	state: {
		isLogin: true
	},
	mutations: {
		IsLogin (state, type) {
			state.isLogin = type
		}
	},
	actions: {},
	getters: {},
	modules: {}
})