<template>
  <view class="personalCenter"> </view>
</template>

<script setup name="personalCenter">
const data = [
  { value: 'visitor', label: '我是村民/游客', authType: 'serve' },
  { value: 'admin', label: '我是管理人员', authType: 'govern' },
]
</script>

<style lang="scss" scoped>
.personalCenter {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #D8E5FF, #FFFFFF);
}
</style>
