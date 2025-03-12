<template>
  <view class="tabs">
    <view
      class="tab"
      v-for="(item, index) in tabList"
      :key="index"
      :class="[activeId === item.value ? 'active' : '', size]"
      @click="handleTab(item)"
    >
      {{ item.label }}
    </view>
  </view>
</template>

<script setup name="tabs">
const emit = defineEmits(['update:modelValue', 'handleTab'])
const props = defineProps({
  // 选中的tabId
  modelValue: {
    type: [String, Number],
    default: () => {
      return ''
    },
  },
  // 数据列表
  tabList: {
    type: Array,
    default: () => {
      return []
    },
  },
})
const activeId = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    return emit('update:modelValue', val)
  },
})

watch(
  () => props.tabList,
  (val) => {
    if (val && val.length > 0) {
      handleTab(props.tabList[0])
    }
  },
  {
    deep: true,
  }
)

// tab切换
function handleTab(item) {
  activeId.value = item.value
  emit('handleTab', item.value)
}
handleTab(props.tabList[0])
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  .tab {
    width: 334rpx;
    height: 82rpx;
    background-color: #f4f5f7;
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    font-size: 26rpx;
    color: #818181;
    line-height: 82rpx;
    text-align: center;
    margin-right: 16rpx;
    border: 2rpx solid #f4f5f7;
      border-radius: 4rpx;
      cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &.active {
      border-color: #3d7cfd;
      color: #3d7cfd;
      background: #f2f7ff;
    }
  }
}
</style>
