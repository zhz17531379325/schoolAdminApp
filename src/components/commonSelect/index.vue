<template>
  <view class="commonSelect">
    <!-- 选择框（点击时打开 u-select） -->
    <view class="select-box" @click="open = true">
      <text class="selected-text">{{ selectedLabel || placeholder }}</text>
      <image :src="getImgUrl(`/public/selectIcon.svg`)" class="icon"></image>
    </view>
    <!-- u-select 组件 -->
    <u-select v-model="open" :list="list" @confirm="handleSelect" />
  </view>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'
const props = defineProps({
  modelValue: [String, Number], // 绑定的选中值
  list: { type: Array, required: true }, // 选项列表
  placeholder: { type: String, default: '请选择' }, // 占位符
})
const emit = defineEmits(['update:modelValue', 'change'])
const open = ref(false) // 控制 `u-select` 是否打开
// 计算属性：根据 modelValue 获取当前选中的 label
const selectedLabel = computed(() => {
  const selectedItem = props.list.find(
    (item) => item.value === props.modelValue
  )
  return selectedItem ? selectedItem.label : ''
})
// 选择后更新 `modelValue` 并关闭选择框
const handleSelect = (selectedItem) => {
  emit('update:modelValue', selectedItem[0].value) // 绑定的值为 `value`
  emit('change', selectedItem) // 触发 change 事件
  open.value = false // 关闭选择框
}
</script>
<style scoped>
.commonSelect {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 15px;
}
.select-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.selected-text {
  flex: 1;
  color: #333;
}
.icon {
  width: 20px;
  height: 20px;
}
</style>
