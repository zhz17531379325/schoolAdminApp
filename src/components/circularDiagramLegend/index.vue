<template>
  <view class="circularDiagramLegend" :class="arrangement">
    <view class="left">
      <!-- 图表容器 -->
      <view :id="chartsId" class="charts"></view>
    </view>
    <view class="right">
      <view class="legendList">
        <view class="legendItem" v-for="(item, index) in data" :key="index">
          <view
            class="icon"
            :style="{
              backgroundColor: colorList[index],
            }"
          ></view>
          <view class="name">{{ item.name }}</view>
          <view class="percentage">{{ countPercentage(item.value) }}%</view>
          <view class="num" v-if="isNum">{{ item.value }}人</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup name="circularDiagramLegend">
// 引入 echarts 组件
import * as echarts from 'echarts'
const props = defineProps({
  // 绑定的ID
  chartsId: {
    type: String,
    require: true,
  },
  // 数据
  data: {
    type: Array,
    require: true,
  },
  // 颜色列表
  colorList: {
    type: Array,
    require: true,
  },
  // 默认文本
  defaultText: {
    type: String,
    require: true,
  },
  // 具体人数
  isNum: {
    type: Boolean,
    require: true,
  },
  // 查看
  isCheck: {
    type: Boolean,
    require: true,
  },
  // 排列方式
  arrangement: {
    type: String,
    require: true,
    default: () => {
      return 'row'
    },
  },
  // 风险名称
  risk: {
    type: String,
    require: true,
  },
  // 图例大小
  chartsSize: {
    type: String,
    require: true,
    default: () => {
      return '136px'
    },
  },
})
// 创建实例容器
const myChart = ref(null)
const chartsData = ref([])
const chartsSize = ref(props.chartsSize)
const dataTotal = computed(() => {
  return props.data.reduce((total, item) => total + item.value, 0)
})
function countPercentage(num) {
  return num > 0 ? ((num / dataTotal.value) * 100).toFixed(0) : 0
}
onMounted(() => {
  setTimeout(() => {
    initCharts()
  }, 500)
})
watch(
  () => props.data,
  (val) => {
    if (myChart.value) {
      myChart.value.dispose() // 销毁实例
      myChart.value = null
    }
    initCharts()
  },
  {
    deep: true,
  }
)
function initCharts() {
  myChart.value = markRaw(echarts.init(document.getElementById(props.chartsId)))
  if (props.data && props.data.length > 0) {
    chartsData.value = props.data.map((item) => {
      return {
        ...item,
        percentage: ((item.value / dataTotal.value) * 100).toFixed(0),
      }
    })
  }
  const option = {
    color: dataTotal.value === 0 ? '#d3d3d3' : props.colorList,
    tooltip: {
      trigger: 'item',
    },
    toolbox: {
      show: true,
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: props.defaultText,
        type: 'pie',
        radius: ['80%', '95%'],
        center: ['50%', '50%'],
        silent: dataTotal.value === 0,
        label: {
          show: true,
          position: 'center',
          avoidLabelOverlap: false,
          color: '#000000',
          fontSize: 16,
          fontWeight: '400',
          fontFamily: 'PingFang SC, PingFang SC',
          formatter: `${props.risk ? `{risk|${props.risk}}\n` : ''}共 {num|${
            dataTotal.value
          }} 人`,
          lineHeight: props.risk ? 30 : 0,
          rich: {
            risk: {
              fontSize: 20,
              fontWeight: '800',
            },
            num: {
              fontSize: 20,
            },
          },
        },
        labelLine: {
          show: true,
        },
        data: chartsData.value,
      },
    ],
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.value.setOption(option)
  window.addEventListener('resize', () => {
    if (myChart.value) {
      myChart.value.resize()
    }
  })
}
</script>

<style lang="scss" scoped>
.circularDiagramLegend {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  &.row {
    flex-direction: row;
    justify-content: space-around;
  }
  &.column {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    width: v-bind(chartsSize);
    height: v-bind(chartsSize);
    display: flex;
    align-items: center;
    justify-content: center;
    .charts {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .legendList {
      .legendItem {
        height: 34rpx;
        display: flex;
        align-items: center;
        margin-bottom: 16rpx;
        &:last-child {
          margin-bottom: 0rpx;
        }
        .icon {
          width: 16rpx;
          height: 16rpx;
          border-radius: 50%;
          margin-right: 16rpx;
        }
        .name {
          font-family: PingFang SC, PingFang SC;
          font-weight: 500;
          font-size: 24rpx;
          color: #000000;
          margin-right: 24rpx;
          min-width: 50rpx;
        }
        .percentage {
          font-family: PingFang SC, PingFang SC;
          font-weight: 500;
          font-size: 24rpx;
          color: #818181;
          margin-right: 24rpx;
          min-width: 55rpx;
        }
        .num {
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 24rpx;
          color: #000000;
          min-width: 70rpx;
        }
      }
    }
  }
}
</style>
