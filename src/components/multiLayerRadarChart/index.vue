<template>
  <view class="charts-box">
    <qiun-data-charts 
      type="radar"
      :opts="opts"
      :chartData="chartData"
      :canvas2d="true"
      canvasId="WRWktZiUiMkqWRrZECNFeXRBEpGJUWKUMultiLayerMultiLayerRadarChart"
    />
  </view>
</template>

<script setup>
import { ref, onMounted } from "vue";

const chartData = ref({});

const opts = {
  timing: "easeOut",
  duration: 1000,
  rotate: false,
  rotateLock: false,
  color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
  padding: [0, 8, 0, 8],
  fontSize: 13,
  fontColor: "#666666",
  dataLabel: false,
  dataPointShape: false,
  dataPointShapeType: "solid",
  touchMoveLimit: 60,
  enableScroll: false,
  enableMarkLine: false,
  legend: {
    show: true,
    position: "right",
    lineHeight: 25,
    float: "center",
    padding: 5,
    margin: 5,
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    fontSize: 14,
    fontColor: "#434343",
    hiddenColor: "#CECECE",
    itemGap: 20
  },
  extra: {
    radar: {
      gridType: "circle",
      gridColor: "#E5E5E5",
      gridCount: 5,
      opacity: 0.2,
      max: 200,
      labelShow: true,
      gridEval: 1,
      radius: 0,
      axisLabel: false,
      axisLabelTofix: 0,
      labelColor: "#666666",
      labelPointShow: false,
      labelPointRadius: 3,
      labelPointColor: "#CCCCCC",
      border: true,
      borderWidth: 1.5,
      linearType: "none"
    },
    tooltip: {
      showBox: false,
      showArrow: true,
      showCategory: false,
      borderWidth: 0,
      borderRadius: 0,
      borderColor: "#000000",
      borderOpacity: 0.7,
      bgColor: "#000000",
      bgOpacity: 0.7,
      gridType: "solid",
      dashLength: 4,
      gridColor: "#CCCCCC",
      boxPadding: 3,
      fontSize: 13,
      lineHeight: 20,
      fontColor: "#FFFFFF",
      legendShow: true,
      legendShape: "auto",
      splitLine: true,
      horizentalLine: false,
      xAxisLabel: false,
      yAxisLabel: false,
      labelBgColor: "#FFFFFF",
      labelBgOpacity: 0.7,
      labelFontColor: "#666666"
    }
  }
};

const getServerData = () => {
  setTimeout(() => {
    chartData.value = {
      categories: ["维度1", "维度2", "维度3", "维度4", "维度5", "维度6"],
      series: [
        { name: "最新采集（近7天）", data: [90, 110, 165, 195, 187, 172] },
        { name: "个体常模（近1月）", data: [190, 210, 105, 35, 27, 102] },
        { name: "群体常模（近1月）", data: [120, 151, 51, 64, 72, 83] }
      ]
    };
  }, 500);
};

onMounted(() => {
  getServerData();
});
</script>

<style scoped>
.charts-box {
  width: 100%;
  height: 300px;
}
</style>
