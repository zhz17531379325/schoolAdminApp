<!-- pages/tabs/tabs.vue -->
<template>
  <view class="commonComponentSwitching">
    <!-- 顶部选项卡 -->
    <view class="tabsHeader">
      <view
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
          'tabItem',
          { activeTab: currentTabIndex === index },
          { nextTab: currentTabIndex + 1 === index },
          { prevTab: currentTabIndex - 1 === index && tabs.length > 2 },
        ]"
        @click="switchTab(tab, index)"
      >
        {{ tab.title }}
      </view>
    </view>
    <!-- 内容区域 -->
    <view class="tabsContent">
      <slot></slot>
    </view>
  </view>
</template>

<script setup name="commonComponentSwitching">
const emit = defineEmits(['update:modelValue', 'switchTab'])
// 接收外部传入的 tabs 数据
const props = defineProps({
  modelValue: {
    type: String,
    default: () => '',
  },
  tabs: {
    type: Array,
    required: true,
  },
})
const currentTab = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    return emit('update:modelValue', val)
  },
})
const currentTabIndex = ref(0)
// 选项卡切换
const switchTab = (tab, index) => {
  currentTab.value = tab.component
  currentTabIndex.value = index
  emit('switchTab', tab)
}
</script>

<style scoped lang="scss">
.commonComponentSwitching {
  width: 100%;
  height: 100%;
  .tabsHeader {
    display: flex;
    height: 96rpx;
    .tabItem {
      flex: 1;
      text-align: center;
      line-height: 96rpx;
      background-color: #f4f5f7;
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 28rpx;
      color: #434343;
      &.activeTab {
        color: #3D7CFD;
        background-color: #ffffff;
        border-top-left-radius: 12rpx;
        border-top-right-radius: 12rpx;
      }
      &.prevTab {
        border-bottom-right-radius: 12rpx;
      }
      &.nextTab {
        border-bottom-left-radius: 12rpx;
      }
    }
  }
  .tabsContent {
    flex: 1;
    height: calc(100% - 96rpx);
    overflow-y: auto;
    background-color: #ffffff;
  }
}
</style>
