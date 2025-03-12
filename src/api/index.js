const files =
	import.meta.globEager('./modules/*.js')

const modules = {}
Object.keys(files).forEach((key) => {
	const name = /\/(\w+)\./.exec(key)[1]
	modules[name] = files[key].default
})
export default {
	...modules
}