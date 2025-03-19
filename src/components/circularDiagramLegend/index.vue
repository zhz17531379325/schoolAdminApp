<template>
  <view class="circularDiagramLegend" :class="arrangement">
    <view class="left">
      <!-- 图表容器 -->
      <view class="charts-box">
        <qiun-data-charts
          type="ring"
          :opts="opts"
          :chartData="chartData"
          :canvas2d="false"
          :canvasId="`WRWktZiUiMkqWRrZECNFeXRBEpGJUWKUCircularDiagramLegend${chartsId}`"
          :tooltipShow="false"
          @complete="complete"
          @error="error"
        />
      </view>
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
      return '200rpx'
    },
  },
})
const chartData = ref({})
const opts = reactive({
  timing: 'easeOut',
  duration: 1000,
  rotate: false,
  rotateLock: false,
  color: props.colorList,
  padding: [0, 0, 0, 0],
  fontSize: 13,
  fontColor: '#666666',
  dataLabel: false,
  dataPointShape: false,
  dataPointShapeType: 'solid',
  touchMoveLimit: 60,
  enableScroll: false,
  enableMarkLine: false,
  background: 'rgba(0,0,0,0)',
  legend: {
    show: false,
    position: 'right',
    lineHeight: 25,
    float: 'center',
    padding: 5,
    margin: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    fontSize: 13,
    fontColor: '#666666',
    hiddenColor: '#CECECE',
    itemGap: 10,
  },
  title: {
    name: '共 212 人',
    fontSize: 13,
    color: '#000000',
    offsetX: 0,
    offsetY: 0,
  },
  subtitle: {
    name: '',
    color: '#7cb5ec',
    offsetX: 0,
    offsetY: 0,
  },
  extra: {
    ring: {
      ringWidth: 8,
      activeOpacity: 0.5,
      activeRadius: 10,
      offsetAngle: 0,
      labelWidth: 15,
      border: false,
      borderWidth: 3,
      borderColor: '#FFFFFF',
      centerColor: '#FFFFFF',
      customRadius: 0,
      linearType: 'none',
    },
    tooltip: {
      showBox: false,
      showArrow: false,
      showCategory: false,
      borderWidth: 0,
      borderRadius: 0,
      borderColor: '#000000',
      borderOpacity: 0.7,
      bgColor: '#000000',
      bgOpacity: 0.7,
      gridType: 'solid',
      dashLength: 4,
      gridColor: '#CCCCCC',
      boxPadding: 3,
      fontSize: 13,
      lineHeight: 20,
      fontColor: '#FFFFFF',
      legendShow: false,
      legendShape: 'auto',
      splitLine: false,
      horizentalLine: false,
      xAxisLabel: false,
      yAxisLabel: false,
      labelBgColor: '#FFFFFF',
      labelBgOpacity: 0.7,
      labelFontColor: '#666666',
    },
  },
})
const chartsSize = ref(props.chartsSize)
const dataTotal = computed(() => {
  return props.data.reduce((total, item) => total + item.value, 0)
})
function countPercentage(num) {
  return num > 0 ? ((num / dataTotal.value) * 100).toFixed(0) : 0
}
onMounted(() => {
  getServerData()
})
// watch(
//   () => props.data,
//   (val) => {
//     if (myChart.value) {
//       myChart.value.dispose() // 销毁实例
//       myChart.value = null
//     }
//     initCharts()
//   },
//   {
//     deep: true,
//   }
// )
watchEffect(() => {})
function getServerData() {
  // 模拟从服务器获取数据时的延时
  setTimeout(() => {
    const res = {
      series: [
        {
          data: props.data,
        },
      ],
    }
    chartData.value = JSON.parse(JSON.stringify(res))
  }, 500)
}

function complete(e) {
  console.log(e)
}

function error(e) {
  console.log(e)
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
    .charts-box {
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
