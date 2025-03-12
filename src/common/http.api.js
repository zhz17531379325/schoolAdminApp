import api from '@/api/index'
const install = (Vue, vm) => {
  // 此处没有使用传入的params参数
  // let getSearch = (params = {}) => vm.$u.get(hotSearchUrl, {
  // 	id: 2
  // });

  // 此处使用了传入的params参数，一切自定义即可
  // let getInfo = (params = {}) => vm.$u.post(indexUrl, params);

  // 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
  uni.$u.api = api
}

export default {
  install,
}
