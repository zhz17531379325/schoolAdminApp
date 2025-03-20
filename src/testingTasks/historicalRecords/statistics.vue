<template>
  <view class="statistics">
    <view class="header">
      <view class="source">数据统计：初一/1班</view>
      <view class="testInformation">
        <view class="row">
          <view class="label">总人数</view>
          <view class="value">45人</view>
        </view>
        <view class="row">
          <view class="label">已完成</view>
          <view class="value">16人</view>
        </view>
        <view class="row">
          <view class="label">测试异常</view>
          <view class="value abnormal">
            <view class="num">2人</view>
            <view class="check">查看 ></view>
          </view>
        </view>
      </view>
    </view>

    <view class="scaleResultStatistics">
      <view class="title">量表信息汇总</view>
      <view class="testStatus module">
        <view class="moduleTitle">量表测试状态</view>
        <view class="testStatusChartBox"></view>
        <view class="testStatusTable"></view>
      </view>
      <view class="information module">
        <view class="moduleTitle">量表信息汇总</view>
        <view class="informationChartList">
          <view class="informationChartItem">
            <view class="top">
              <view class="chartTitle"></view>
              <view class="exportData"></view>
            </view>
            <view class="chartContent histogram"></view>
          </view>
          <view class="informationChartItem">
            <view class="top">
              <view class="chartTitle"></view>
              <view class="exportData"></view>
            </view>
            <view class="chartContent circularDiagram"></view>
          </view>
        </view>
      </view>
      <view class="invalidStatistics module">
        <view class="moduleTitle">无效测试统计</view>
        <view class="invalidStatisticsChartList">
          <view class="invalidStatisticsChartItem"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup name="statistics"></script>

<style lang="scss" scoped>
.statistics {
  width: 100vw;
  height: 100vh;
  background-color: #f4f5f7;
  .header {
    width: 100%;
    height: 228rpx;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin-bottom: 24rpx;
    .source {
      width: 100%;
      height: 76rpx;
      font-family: PingFang SC, PingFang SC;
      font-weight: bold;
      font-size: 32rpx;
      color: #000000;
      line-height: 76rpx;
      text-align: center;
    }
    .testInformation {
      width: 100%;
      height: 152rpx;
      padding: 24rpx 16rpx;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      .row {
        width: 100%;
        height: 104rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .label {
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 32rpx;
          color: #434343;
        }
        .value {
          font-family: PingFang SC, PingFang SC;
          font-weight: 500;
          font-size: 32rpx;
          color: #434343;
          &.abnormal {
            display: flex;
            align-items: center;
            .num {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 32rpx;
              color: #ff3a29;
              margin-right: 16rpx;
            }
            .check {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 32rpx;
              color: #3d7cfd;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .scaleResultStatistics {
    width: 100%;
    padding: 48rpx 32rpx;
    box-sizing: border-box;
    background-color: #ffffff;
    .title {
      width: 100%;
      height: 44rpx;
      font-family: PingFang SC, PingFang SC;
      font-weight: bold;
      font-size: 32rpx;
      color: #434343;
      line-height: 44rpx;
      text-align: center;
      margin-bottom: 24rpx;
    }
    .module {
      width: 100%;
      border-radius: 16rpx;
      border: 2rpx solid #e5e5e5;
      margin-bottom: 24rpx;
      padding: 32rpx 48rpx;
      box-sizing: border-box;
      &:last-child {
        margin-bottom: 0rpx;
      }
      .moduleTitle {
        width: 100%;
        height: 42rpx;
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 30rpx;
        color: #000000;
        line-height: 42rpx;
        margin-bottom: 48rpx;
      }
    }
    .testStatus {
      .testStatusChartBox {
        width: 100%;
        height: 160rpx;
      }
      .testStatusTable {
        width: 100%;
        height: 470rpx;
      }
    }
    .information {
      .informationChartList {
        width: 100%;
        display: flex;
        flex-direction: column;
        .informationChartItem {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-bottom: 80rpx;
          &:last-child {
            margin-bottom: 0rpx;
          }
          .top {
            width: 100%;
            height: 40rpx;
            display: flex;
            justify-content: space-between;
            margin-bottom: 24rpx;
            .chartTitle {
              height: 40rpx;
              font-family: PingFang SC, PingFang SC;
              font-weight: bold;
              font-size: 28rpx;
              color: #434343;
              line-height: 40rpx;
            }
            .exportData {
              height: 40rpx;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 28rpx;
              color: #3d7cfd;
              line-height: 40rpx;
            }
          }
          .chartContent {
            width: 100%;
            &.histogram {
              height: 536rpx;
            }
            &.circularDiagram {
              height: 160rpx;
            }
          }
        }
      }
    }
    .invalidStatistics {
      .invalidStatisticsChartList {
        display: flex;
        flex-direction: column;
        .invalidStatisticsChartItem {
          width: 100%;
          height: 172rpx;
          margin-bottom: 48rpx;
          &:last-child {
            margin-bottom: 0rpx;
          }
        }
      }
    }
  }
}
</style>
