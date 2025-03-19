<template>
  <view class="charts-box">
    <qiun-data-charts
      type="column"
      :opts="opts"
      :chartData="chartData"
      :canvas2d="false"
      canvasId="WRWktZiUiMkqWRrZECNFeXRBEpGJUWKUHistogramChart"
      @complete="complete"
      @error="error"
    />
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const chartData = ref({})

const opts = reactive({
  timing: 'easeOut',
  duration: 1000,
  rotate: false,
  rotateLock: false,
  color: ['#3B6BEA', '#FF777C'],
  padding: [0, 0, 0, 0],
  fontSize: 13,
  fontColor: '#818181',
  dataLabel: false,
  dataPointShape: true,
  dataPointShapeType: 'solid',
  touchMoveLimit: 60,
  enableScroll: false,
  enableMarkLine: false,
  legend: {
    show: true,
    position: 'top',
    float: 'right',
    padding: 0,
    margin: 16,
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    fontSize: 13,
    fontColor: '#434343',
    lineHeight: 30,
    hiddenColor: '#CECECE',
    itemGap: 32,
  },
  xAxis: {
    disableGrid: true,
    disabled: false,
    axisLine: false,
    axisLineColor: '#CCCCCC',
    calibration: false,
    fontColor: '#818181',
    fontSize: 12,
    lineHeight: 14,
    marginTop: 13,
    rotateLabel: false,
    rotateAngle: 45,
    itemCount: 5,
    boundaryGap: 'justify',
    splitNumber: 5,
    gridColor: '#CCCCCC',
    gridType: 'solid',
    dashLength: 4,
    gridEval: 1,
    scrollShow: false,
    scrollAlign: 'left',
    scrollColor: '#A6A6A6',
    scrollBackgroundColor: '#EFEBEF',
    title: '',
    titleFontSize: 13,
    titleOffsetY: 0,
    titleOffsetX: 0,
    titleFontColor: '#666666',
    format: '',
  },
  yAxis: {
    data: [
      {
        min: 0,
        disabled: false,
        axisLine: false,
        fontColor: '#818181',
        fontSize: 12,
        textAlign: 'left',
        title: '',
        unit: '人',
      },
    ],
    disabled: false,
    disableGrid: false,
    splitNumber: 4,
    gridType: 'dash',
    dashLength: 8,
    gridColor: '#E5E5E5',
    padding: 10,
    showTitle: false,
  },
  extra: {
    column: {
      type: 'group',
      width: 6,
      activeBgColor: '#000000',
      activeBgOpacity: 0.08,
      seriesGap: 2,
      categoryGap: 3,
      barBorderCircle: true,
      linearType: 'none',
      linearOpacity: 1,
      colorStop: 0,
      meterBorder: 1,
      meterFillColor: '#FFFFFF',
      labelPosition: 'outside',
    },
    tooltip: {
      showBox: false,
      showArrow: true,
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
      legendShow: true,
      legendShape: 'auto',
      splitLine: true,
      horizentalLine: false,
      xAxisLabel: false,
      yAxisLabel: false,
      labelBgColor: '#FFFFFF',
      labelBgOpacity: 0.7,
      labelFontColor: '#666666',
    },
    markLine: {
      type: 'solid',
      dashLength: 4,
      data: [],
    },
  },
})

function getServerData() {
  // 模拟从服务器获取数据的延时
  setTimeout(() => {
    const res = {
      categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
      series: [
        { name: '目标值', data: [35, 36, 31, 33, 13, 34] },
        { name: '完成量', data: [18, 27, 21, 24, 6, 28] },
      ],
    }
    // 深拷贝数据赋值给响应式变量
    chartData.value = JSON.parse(JSON.stringify(res))
  }, 500)
}

function complete(e) {
  console.log(e)
}

function error(e) {
  console.log(e)
}

onMounted(() => {
  getServerData()
})
</script>

<style scoped>
.charts-box {
  width: 100%;
  height: 100%;
}
</style>
