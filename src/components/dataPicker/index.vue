<template>
  <uni-data-picker
    :localdata="pickerData"
    v-model="goodInfo.image_id"
    :placeholder="pickerPlaceholder"
    :popup-title="pupTitle"
    @nodeclick="handleNodeClick"
  >
  </uni-data-picker>
</template>

<script name="dataPicker" setup>
const props = defineProps({
  pickerData: {
    type: Array,
    default: () => {
      return []
    },
  },
  pickerPlaceholder: {
    type: String,
    default: () => {
      return '请选择'
    },
  },
})

const publicImgList = ref([])
let _id = 0
let level = 0
let pupTitle = ref('框架类型')

// 格式化数据
function formatData(data, level) {
  level = level + 1
  let result = []
  if (!data.length) return []
  result = data.map((item, index) => {
    console.log(_id, index, level)
    let obj = {
      ...item,
      text: item.label,
      value: _id++, // 仅仅用于唯一标识数据作用的,解决value值重复问题
      level: level, // 标识当前属于第几个层级
      children:
        item.children && item.children.length > 0
          ? formatData(item.children, level)
          : [],
    }
    return obj
  })
  return result
}

// 获取系统镜像
async function getPublicImgList() {
  const res = await getPublicImageListApi()
  if (res.code === 0) {
    publicImgList.value = formatData(res.data, level)
  }
}

// 节点点击事件
function handleNodeClick(e) {
  console.log('当前是第几层:', e.level)
  switch (e.level) {
    case 0:
      pupTitle.value = '框架版本'
      break
    case 1:
      pupTitle.value = '框架版本'
      break
    case 2:
      pupTitle.value = 'python版本'
      break
    case 3:
      pupTitle.value = 'cuda版本'
      break
    default:
      pupTitle.value = '请选择'
      break
  }
}
</script>
