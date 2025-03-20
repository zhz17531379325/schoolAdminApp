<template>
  <view class="chooseIdentity">
    <view class="title"> 请选择您的角色 </view>
    <view class="roleList">
      <view
        class="roleItem"
        v-for="item in roleList"
        :key="item.value"
        :class="item.value"
        @click="handleLogin(item)"
      >
        <image
          class="icon"
          :src="getImgUrl(`/login/${item.value}.png`)"
        ></image>
        <view class="text">{{ item.label }}</view>
      </view>
    </view>
  </view>
</template>

<script setup name="chooseIdentity">
const roleList = ref([
  { value: 'classTeacher', label: '我是班主任' },
  { value: 'psychologicalTeacher', label: '我是心理教师' },
])

function handleLogin(item) {
  // console.log(item);
  // uni.setStorageSync('authType', item.authType)
  uni.navigateTo({
    url: '/pages/login/index',
  })
}
</script>

<style lang="scss" scoped>
.chooseIdentity {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #d8e5ff, #ffffff);
  padding: 80rpx 32rpx 32rpx 32rpx;
  box-sizing: border-box;
  .title {
    height: 64rpx;
    font-family: PingFang SC, PingFang SC;
    font-weight: 800;
    font-size: 44rpx;
    color: #333333;
    line-height: 64rpx;
    margin-bottom: 32rpx;
  }
  .roleList {
    width: 100%;
    height: 624rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    .roleItem {
      width: 100%;
      height: calc(50% - 16rpx);
      background-color: #ffffff;
      border-radius: 16rpx;
      display: flex;
      align-items: center;
      padding: 64rpx 32rpx;
      box-sizing: border-box;
      cursor: pointer;
      .icon {
        width: 214rpx;
        height: 100%;
        margin-right: 48rpx;
      }
      .text {
        height: 56rpx;
        font-family: PingFang SC, PingFang SC;
        font-weight: 800;
        font-size: 40rpx;
        color: #000000;
        line-height: 56rpx;
      }
    }
  }
}
</style>
