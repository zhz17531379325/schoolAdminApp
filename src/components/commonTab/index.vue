<template>
  <div class="commonTab">
    <div
      class="tabs"
      v-for="(item, index) in tabList"
      :key="index"
      :class="[activeId === item.value ? 'active' : '', size]"
      @click="handleTab(item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script setup name="commonTab">
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
  // 组件尺寸
  size: {
    type: String,
    default: () => {
      return 'small'
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
.commonTab {
  display: flex;
  justify-content: center;
  align-items: center;
  .tabs {
    border: 1px solid #e5e5e5;
    font-family: PingFang SC, PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #434343;
    text-align: center;
    margin-right: 16px;
    cursor: pointer;
    background-color: #ffffff;
    &.small {
      // height: 26px;
      // line-height: 26px;
      padding: 2px 16px;
    }
    &.large {
      width: 88px;
      height: 34px;
      line-height: 34px;
    }
    &:last-child {
      margin-right: 0;
    }
    &.active {
      border-color: #3d7cfd;
      color: #3d7cfd;
      background-color: #eaf4fe;
    }
  }
}
</style>
