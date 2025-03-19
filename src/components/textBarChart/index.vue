<template>
  <view class="charts-box">
    <qiun-data-charts
      type="column"
      :opts="opts"
      :chartData="chartData"
      :canvas2d="true"
      canvasId="WRWktZiUiMkqWRrZECNFeXRBEpGJUWKUMultiLayerTextBarChart"
    />
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const chartData = ref({})
const opts = {
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
  padding: [0, 8, 0, 8],
  fontSize: 13,
  fontColor: '#666666',
  dataLabel: false,
  dataPointShape: true,
  dataPointShapeType: 'solid',
  touchMoveLimit: 60,
  enableScroll: false,
  enableMarkLine: false,
  legend: {
    show: false,
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
    itemGap: 10,
  },
  xAxis: {
    disableGrid: true,
    disabled: false,
    axisLine: false,
    axisLineColor: '#CCCCCC',
    calibration: false,
    fontColor: '#666666',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 16,
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
        axisLine: false,
        max: 4,
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
    format: function (value) {
      console.log('1111')
      var texts = []
      if (value === 0) {
        texts.push('')
      } else if (value === 1) {
        texts.push('正常')
      } else if (value === 2) {
        texts.push('一类 ')
      } else if (value === 3) {
        texts.push('二类 ')
      } else if (value === 4) {
        texts.push('三类')
      }
      return texts
    },
  },
  extra: {
    column: {
      type: 'group',
      width: 30,
      activeBgColor: '#000000',
      activeBgOpacity: 0.08,
      seriesGap: 2,
      categoryGap: 3,
      barBorderCircle: false,
      linearType: 'custom',
      linearOpacity: 1,
      customColor: ['#FF3A29', '#FFA600', '#FFF827', '#81BE07'],
      colorStop: 0.5,
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
}

const getServerData = () => {
  setTimeout(() => {
    chartData.value = {
      categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
      series: [{ name: '目标值', data: [4, 3, 2, 1, 3, 4, 3] }],
    }
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
