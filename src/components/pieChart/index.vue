<template>
  <view class="charts-box">
    <qiun-data-charts
      type="pie"
      :opts="opts"
      :chartData="chartData"
      :canvas2d="true"
      canvasId="WRWktZiUiMkqWRrZECNFeXRBEpGJUWKUMultiLayerPieChart"
      :tooltipShow="false"
      @complete="complete"
      @error="error"
    />
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const chartData = ref({})

const opts = ref({
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
  padding: [0, 0, 0, 0],
  fontSize: 13,
  fontColor: '#666666',
  dataLabel: false,
  dataPointShape: false,
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
  extra: {
    pie: {
      activeOpacity: 0.5,
      activeRadius: 10,
      offsetAngle: 0,
      labelWidth: 15,
      border: false,
      borderWidth: 3,
      borderColor: '#FFFFFF',
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
      bgOpacity: 0,
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

const getServerData = () => {
  setTimeout(() => {
    chartData.value = {
      series: [
        {
          data: [
            { name: '一班', value: 50 },
            { name: '二班', value: 30 },
            { name: '三班', value: 20 },
            { name: '四班', value: 18 },
            { name: '五班', value: 8 },
          ],
        },
      ],
    }
  }, 500)
}

const complete = (e) => {
  console.log(e)
}

const error = (e) => {
  console.log(e)
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
