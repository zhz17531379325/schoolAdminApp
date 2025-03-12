const login = {
	authLogin(params) {
		return uni.$u.get('/getInfo', params)
	}
}
export default login
