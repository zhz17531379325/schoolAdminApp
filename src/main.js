import { createSSRApp } from 'vue'
import store from './store'
import uView from './uni_modules/vk-uview-ui'
import httpInterceptor from '@/common/http.interceptor.js'
// http接口API集中管理引入部分
import httpApi from '@/common/http.api.js'
// 按钮统一样式
import { btnCustom, btnCustomNo } from '@/common/utils.js'
// 模态框
import { useModal } from '@/hooks/useModal.js'
// 通用方法
import {
  useToast,
  getImgUrl,
  getOriginImage,
  getProfileUrl,
  formatRichText,
  clearRichText,
} from '@/hooks/useToast.js'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.clearRichText = clearRichText
  app.config.globalProperties.btnCustom = btnCustom
  app.config.globalProperties.btnCustomNo = btnCustomNo
  app.config.globalProperties.useModal = useModal
  app.config.globalProperties.useToast = useToast
  app.config.globalProperties.getImgUrl = getImgUrl
  app.config.globalProperties.getOriginImage = getOriginImage
  app.config.globalProperties.getProfileUrl = getProfileUrl
  app.config.globalProperties.formatRichText = formatRichText
  app.use(store)
  // 使用 uView UI
  app.use(uView)
  app.use(httpInterceptor)
  app.use(httpApi)
  return {
    app,
  }
}
