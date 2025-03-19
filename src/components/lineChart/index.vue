<template>
  <view class="charts-box">
    <qiun-data-charts 
      type="area"
      :opts="opts"
      :chartData="chartData"
      :canvas2d="true"
      canvasId="WRWktZiUiMkqWRrZECNFeXRBEpGJUWKULineChart"
    />
  </view>
</template>

<script setup>
import { ref, onMounted } from "vue";

const chartData = ref({});
const opts = ref({
  timing: "easeOut",
  duration: 1000,
  rotate: false,
  rotateLock: false,
  color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
  padding: [15,10,0,15],
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
    position: "top",
    float: "left",
    padding: 5,
    margin: 12,
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    fontSize: 13,
    fontColor: "#666666",
    lineHeight: 11,
    hiddenColor: "#CECECE",
    itemGap: 8
  },
  xAxis: {
    disableGrid: true,
    disabled: false,
    axisLine: false,
    axisLineColor: "#CCCCCC",
    calibration: false,
    fontColor: "#666666",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 0,
    rotateLabel: false,
    rotateAngle: 45,
    itemCount: 5,
    boundaryGap: "justify",
    splitNumber: 5,
    gridColor: "#CCCCCC",
    gridType: "solid",
    dashLength: 4,
    gridEval: 1,
    scrollShow: false,
    scrollAlign: "left",
    scrollColor: "#A6A6A6",
    scrollBackgroundColor: "#EFEBEF",
    title: "",
    titleFontSize: 13,
    titleOffsetY: 0,
    titleOffsetX: 0,
    titleFontColor: "#666666",
    format: ""
  },
  yAxis: {
    gridType: "dash",
    dashLength: 2,
    disabled: false,
    disableGrid: false,
    splitNumber: 5,
    gridColor: "#CCCCCC",
    padding: 10,
    showTitle: false,
    data: [
      {
        type: "value",
        position: "left",
        disabled: false,
        axisLine: false,
        axisLineColor: "#E5E5E5",
        calibration: false,
        fontColor: "#818181",
        fontSize: 12,
        textAlign: "right",
        title: "",
        titleFontSize: 13,
        titleOffsetY: 0,
        titleOffsetX: 0,
        titleFontColor: "#666666",
        min: null,
        max: null,
        tofix: null,
        unit: "",
        format: ""
      }
    ]
  },
  extra: {
    line: {
      type: "straight",
      width: 2,
      activeType: "hollow",
      linearType: [[0,"#0EE2F8"],[0.5,"#2BDCA8"],[1,"#9A60B4"]],
      onShadow: false,
      animation: "vertical"
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
    },
    markLine: {
      type: "solid",
      dashLength: 4,
      data: []
    }
  }
});

const getServerData = () => {
  setTimeout(() => {
    chartData.value = {
      categories: ["2018","2019","2020","2021","2022","2023"],
      series: [
        { name: "成交量A", data: [35,8,25,37,4,20] },
        { name: "成交量B", data: [70,40,65,100,44,68] },
        { name: "成交量C", data: [100,80,95,150,112,132] }
      ]
    };
  }, 500);
};

onMounted(getServerData);
</script>

<style scoped>
.charts-box {
  width: 100%;
  height: 300px;
}
</style>
