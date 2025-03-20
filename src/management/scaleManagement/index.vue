<template>
  <view class="scaleManagement">
    <view class="tabsBox">
      <view class="tabs">
        <u-tabs
          :is-scroll="false"
          :list="tabsList"
          v-model="currentTab"
        ></u-tabs>
      </view>
    </view>
    <view class="contentBox">
      <view class="scaleListBox" v-if="currentTab === 0">
        <scaleList></scaleList>
      </view>
      <view class="scaleCombinationBox" v-else-if="currentTab === 1">
        <scaleCombination></scaleCombination>
      </view>
      <view class="scaleList" v-else-if="currentTab === 2">
        <validityTestingQuestions></validityTestingQuestions>
      </view>
    </view>
  </view>
</template>

<script setup name="scaleManagement">
import scaleList from './subpage/scaleList'
import scaleCombination from './subpage/scaleCombination'
import validityTestingQuestions from './subpage/validityTestingQuestions'
const currentTab = ref(0)
const tabsList = ref([
  {
    name: '量表清单',
  },
  {
    name: '量表组合',
  },
  {
    name: '效度检测题',
  },
])
</script>

<style lang="scss" scoped>
.scaleManagement {
  width: 100vw;
  height: 100vh;
  background-color: #f4f5f7;
  display: flex;
  flex-direction: column;
  .tabsBox {
    width: 100%;
    height: 74rpx;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: #ffffff;
    .tabs {
      width: 100%;
      z-index: 12;
      height: 74rpx;
      :deep(.u-scroll-view) {
        height: 100%;
        .u-tab-item {
          height: 74rpx !important;
        }
      }
    }
  }
  .contentBox {
    width: 100%;
    height: calc(100% - 74rpx);
    & > view {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
