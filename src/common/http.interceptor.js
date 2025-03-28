const { VITE_APP_BASE_URL, VITE_APP_BASE_API } = import.meta.env
const install = (Vue) => {
  // 此为自定义配置参数，具体参数见上方说明
  Vue.config.globalProperties.$u.http.setConfig({
    baseUrl: VITE_APP_BASE_URL + VITE_APP_BASE_API,
    loadingText: '努力加载中~',
    loadingTime: 800,
    originalData: false,
    header: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })

  // 请求拦截，配置Token等参数
  Vue.config.globalProperties.$u.http.interceptor.request = (config) => {
    // 引用token
    // 方式一，存放在vuex的token，假设使用了uView封装的vuex方式
    // 见：https://uviewui.com/components/globalVariable.html
    // config.header.token = uni.token;

    // 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
    // config.header.token = uni.$store.state.token;

    // 方式三，如果token放在了globalData，通过getApp().globalData获取
    // config.header.token = getApp().globalData.username;

    // 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的
    // 所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
    // const token = uni.getStorageSync('token');
    // config.header.token = token;
    config.header.Authorization =
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjQ2MGRjNjljLWQwNTgtNDdiNS04ZDBiLWI5OTYyN2YyZDY1YiJ9.BEZJTOStDLhvETdtqmffoFK8-625EF8Qg5loi6bYyCNFu4c81kxDoh4l0495V_Ng7uSK7DaUjM6h9BaomB7yuA'

    // 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
    if (config.url == '/user/login') config.header.noToken = true
    // 最后需要将config进行return
    return config
    // 如果return一个false值，则会取消本次请求
    // if(config.url == '/user/rest') return false; // 取消某次请求
  }

  // 响应拦截，判断状态码是否通过
  Vue.config.globalProperties.$u.http.interceptor.response = (res) => {
    console.log(res)
    if (res.code == 200) {
      // res为服务端返回值，可能有code，result等字段
      // 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
      // 如果配置了originalData为true，请留意这里的返回值
      return res.result
    } else if (res.code == 401) {
      // 假设201为token失效，这里跳转登录
      Vue.config.globalProperties.$u.toast('验证失败，请重新登录')
      setTimeout(() => {
        // 此为uView的方法，详见路由相关文档
        // uni.$u.route('/pages/user/login')
      }, 1500)
      return false
    } else {
      // 如果返回false，则会调用Promise的reject回调，
      // 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
      Vue.config.globalProperties.$u.toast(msg)
      return false
    }
  }
}

export default {
  install,
}
