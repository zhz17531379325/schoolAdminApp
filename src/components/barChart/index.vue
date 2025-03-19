<template>
  <view class="charts-box">
    <qiun-data-charts
      type="column"
      :opts="opts"
      :chartData="chartData"
      :canvas2d="true"
      canvasId="WRWktZiUiMkqWRrZECNFeXRBEpGJUWKUBarChart"
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
  color: [
    '#1890FF',
    '#91CB74',
    '#FAC858',
    '#EE6666',
    '#73C0DE',
    '#3CA272',
    '#FC8452',
    '#9A60B4',
    '#ea7ccc',
  ],
  padding: [15, 15, 0, 5],
  fontSize: 13,
  fontColor: '#666666',
  dataLabel: false,
  dataPointShape: true,
  dataPointShapeType: 'solid',
  touchMoveLimit: 60,
  enableScroll: false,
  enableMarkLine: false,
  legend: {
    show: true,
    position: 'bottom',
    float: 'center',
    padding: 5,
    margin: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    fontSize: 13,
    fontColor: '#666666',
    lineHeight: 11,
    hiddenColor: '#CECECE',
    itemGap: 30,
  },
  xAxis: {
    disableGrid: true,
    disabled: false,
    axisLine: true,
    axisLineColor: '#CCCCCC',
    calibration: false,
    fontColor: '#666666',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 0,
    rotateLabel: false,
    rotateAngle: 45,
    itemCount: 5,
    boundaryGap: 'center',
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
        max: 100,
        type: 'value',
        calibration: false,
        axisLine: false,
        unit: '%',
        textAlign: 'right',
      },
    ],
    disabled: false,
    disableGrid: false,
    splitNumber: 4,
    gridType: 'dash',
    dashLength: 8,
    gridColor: '#CCCCCC',
    padding: 10,
    showTitle: false,
  },
  extra: {
    column: {
      type: 'stack',
      width: 30,
      activeBgColor: '#000000',
      activeBgOpacity: 0.08,
      seriesGap: 2,
      categoryGap: 3,
      barBorderCircle: false,
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
  // 模拟从服务器获取数据时的延时
  setTimeout(() => {
    const res = {
      categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
      series: [
        {
          name: '目标值',
          data: [35, 36, 31, 33, 13, 34],
        },
        {
          name: '完成量',
          data: [18, 27, 21, 24, 6, 28],
        },
        {
          name: '完成量',
          data: [18, 27, 21, 24, 6, 28],
        },
        {
          name: '完成量',
          data: [18, 27, 21, 24, 6, 28],
        },
      ],
    }
    chartData.value = JSON.parse(JSON.stringify(res))
  }, 500)
}

onMounted(() => {
  getServerData()
})
</script>

<style scoped>
.charts-box {
  width: 100%;
  height: 300px;
}
</style>
