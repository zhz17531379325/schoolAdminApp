<template>
  <view class="commonPanel">
    <view :class="applyStyle">
      <view class="titleBox">
        <view class="title">{{ title }}</view>
      </view>
      <view class="contentBox">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script setup name="commonPanel">
const emit = defineEmits([])
const props = defineProps({
  // 标题
  title: {
    type: String,
    default: () => {
      return ''
    },
  },
  applyStyle: {
    type: String,
    default: () => {
      return 'default'
    },
  },
})
</script>

<style lang="scss" scoped>
.commonPanel {
  width: 100%;
  height: 100%;
  .default {
    width: 100%;
    height: 100%;
    padding: 24rpx 32rpx;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 12rpx;
    .titleBox {
      width: 100%;
      height: 36rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      margin-bottom: 32rpx;
      .title {
        height: 100%;
        font-family: PingFang SC, PingFang SC;
        font-weight: bold;
        font-size: 26rpx;
        color: #434343;
        line-height: 36rpx;
        padding-left: 14rpx;
        position: relative;
        &::after {
          content: '';
          width: 6rpx;
          height: 20rpx;
          background-color: #3d7cfd;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
    }
    .contentBox {
      width: 100%;
      height: calc(100% - 68rpx);
    }
  }
  .special {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .titleBox {
      width: 100%;
      height: 40rpx;
      padding-left: 16rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .title {
        height: 100%;
        width: 112px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 28rpx;
        color: #000000;
        line-height: 40rpx;
        padding-left: 14rpx;
        position: relative;
        &::after {
          content: '';
          width: 6rpx;
          height: 20rpx;
          background-color: #3d7cfd;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
    }
    .contentBox {
      width: 100%;
      height: calc(100% - 40rpx);
    }
  }
}
</style>
