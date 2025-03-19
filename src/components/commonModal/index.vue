<template>
  <view class="commonModal">
    <u-modal
      v-model="visible"
      :title="title"
      :show-title="showTitle"
      :content="content"
      :show-cancel-button="showCancel"
      :confirm-text="confirmText"
      :cancel-text="cancelText"
      :confirm-color="confirmColor"
      :cancel-color="cancelColor"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
      <!-- <slot></slot> -->
    </u-modal>
  </view>
</template>

<script setup name="commonModal">
import { ref, defineExpose, defineProps } from 'vue'
const props = defineProps({
  title: { type: String, default: '提示' },
  content: { type: String, default: '' },
  showTitle: { type: Boolean, default: true },
  showCancel: { type: Boolean, default: true },
  confirmText: { type: String, default: '确定' },
  cancelText: { type: String, default: '取消' },
  confirmColor: { type: String, default: '#2979ff' },
  cancelColor: { type: String, default: '#606266' },
})

const visible = ref(false)
let resolvePromise = null

// 处理确定按钮
const handleConfirm = () => {
  if (resolvePromise) resolvePromise(true)
  visible.value = false
}

// 处理取消按钮
const handleCancel = () => {
  if (resolvePromise) resolvePromise(false)
  visible.value = false
}

// 使用 Promise 方式调用
const openWithPromise = () => {
  visible.value = true
  return new Promise((resolve) => {
    resolvePromise = resolve
  })
}

defineExpose({ openWithPromise })
</script>

<style lang="scss" scoped>
.commonModal {
  :deep(.u-model) {
    .u-model__title {
      height: 56rpx;
      padding-top: 40rpx;
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 32rpx;
      color: #000000;
      line-height: 56rpx;
    }
    .u-model__content {
      .u-model__content__message {
        padding: 16rpx 34rpx 46rpx 34rpx;
        height: 51rpx;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 30rpx;
        color: #434343;
        line-height: 51rpx;
      }
    }
    .u-model__footer {
      border-top: 2rpx solid #f4f5f7;
      .u-model__footer__button {
        height: 102rpx;
        line-height: 102rpx;
        font-family: PingFang SC, PingFang SC;
        font-size: 30rpx;
        font-weight: 400;
        box-sizing: border-box;
        cursor: pointer;
        text-align: center;
        border-radius: 4rpx;
        box-shadow: inset -1rpx 0 0rpx 0rpx #e5e6eb;
        &:first-child {
          border-right: 2rpx solid #f4f5f7;
        }
      }
    }
  }
}
</style>
