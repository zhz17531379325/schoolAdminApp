<template>
  <view class="class">
    <view class="tabsBox">
      <view class="tabs">
        <u-tabs
          :is-scroll="false"
          :list="tabsList"
          v-model="currentTab"
        ></u-tabs>
      </view>
      <view class="divider"></view>
      <view class="dropdown">
        <u-dropdown>
          <u-dropdown-item
            v-model="taskStatusListActive"
            title="测试状态"
            :options="taskStatusList"
          ></u-dropdown-item>
        </u-dropdown>
      </view>
    </view>
    <view class="contentBox">
      <view class="dataStatisticsBox">
        <view class="icon"></view>
        <view class="information">
          <view class="title">数据统计：初一</view>
          <view class="peopleNum">共 39 人</view>
        </view>
        <view class="checkStatics" @click="viewStatistics">查看统计</view>
      </view>
      <view class="staffList">
        <view class="staffItem">
          <view class="top">
            <view class="userName">孙亚莉</view>
            <view class="right">
              <view class="status">已完成</view>
              <view class="editIcon"></view>
            </view>
          </view>
          <view class="divider"></view>
          <view class="bottom">
            <view class="row">
              <view class="label">测试时间：</view>
              <view class="value">
                <view class="text">2023/01/01</view>
                <view class="result">12:55 ~ 13:34</view>
              </view>
            </view>
            <view class="row">
              <view class="label">无效量表：</view>
              <view class="value">
                <view class="text">《EPQ》</view>
                <view class="result">信效度低</view>
              </view>
            </view>
            <view class="scaleBox">
              <view class="scaleResult">
                <view class="scaleName">艾森克人格问卷-EPQ（7-15岁）</view>
                <view class="scaleContent img"></view>
              </view>
              <view class="scaleResult">
                <view class="scaleName">MHT</view>
                <view class="scaleContent chart"></view>
              </view>
              <view class="scaleResult">
                <view class="scaleName">阿森斯失眠量表</view>
                <view class="scaleContent text">可疑失眠</view>
              </view>
              <view class="scaleResult">
                <view class="scaleName">阿森斯失眠量表</view>
                <view class="scaleContent text">可疑失眠</view>
              </view>
            </view>
            <view class="operateBox">
              <u-button :custom-style="btnCustomNo">导出报告</u-button>
              <u-button :custom-style="btnCustom">查看详情</u-button>
            </view>
          </view>
        </view>
        <view class="staffItem">
          <view class="top">
            <view class="userName">孙亚莉</view>
            <view class="right">
              <view class="status">已完成</view>
              <view class="editIcon"></view>
            </view>
          </view>
          <view class="divider"></view>
          <view class="bottom">
            <view class="scaleBox">
              <view class="none">暂无测试数据</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup name="class">
const currentTab = ref(0)
const tabsList = ref([
  {
    name: '量表测试',
  },
  {
    name: '手环测试',
  },
])
const taskStatusListActive = ref(0)
const taskStatusList = ref([
  {
    label: '全部',
    value: 0,
  },
  {
    label: '已完成',
    value: 1,
  },
  {
    label: '未开始',
    value: 2,
  },
  {
    label: '测试中',
    value: 3,
  },
])
// 查看作答情况跳转
const viewStatistics = (index) => {
  uni.navigateTo({
    url: '/testingTasks/historicalRecords/statistics',
  })
}
</script>

<style lang="scss" scoped>
.class {
  width: 100vw;
  height: 100vh;
  background-color: #f4f5f7;
  display: flex;
  flex-direction: column;
  .tabsBox {
    width: 100%;
    height: 74rpx;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: #ffffff;
    position: relative;
    .tabs {
      width: calc(100% - 270rpx);
      z-index: 12;
      height: 74rpx;
      :deep(.u-scroll-view) {
        height: 100%;
        .u-tab-item {
          height: 74rpx !important;
        }
      }
    }
    .divider {
      width: 2rpx;
      height: 32rpx;
      background-color: #e5e5e5;
      margin: 0rpx 24rpx;
    }
    .dropdown {
      width: 100%;
      height: 74rpx;
      position: absolute;
      :deep(.u-dropdown__menu) {
        width: 140rpx;
        height: 74rpx;
        right: 32rpx;
        position: absolute;
        .u-dropdown__menu__item {
          .u-flex {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
  .contentBox {
    width: 100%;
    height: calc(100% - 74rpx);
    padding: 24rpx 24rpx 0rpx 24rpx;
    box-sizing: border-box;
    .dataStatisticsBox {
      width: 100%;
      height: 148rpx;
      margin-bottom: 24rpx;
      background: linear-gradient(135deg, #87d1ff 0%, #3d7cfd 100%);
      box-shadow: 0rpx 8 40rpx 0rpx rgba(238, 238, 238, 0.5);
      border-radius: 16rpx;
      padding: 26rpx 24rpx;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .icon {
        width: 96rpx;
        height: 96rpx;
        margin-right: 32rpx;
      }
      .information {
        flex: 1;
        height: 100%;
        margin-right: 32rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          height: 44rpx;
          font-family: PingFang SC, PingFang SC;
          font-weight: 800;
          font-size: 32rpx;
          color: #ffffff;
          line-height: 44rpx;
        }
        .peopleNum {
          height: 40rpx;
          font-family: PingFang SC, PingFang SC;
          font-weight: 500;
          font-size: 28rpx;
          color: #ffffff;
          line-height: 40rpx;
        }
      }
      .checkStatics {
        width: 172rpx;
        height: 56rpx;
        background-color: #ffffff;
        border-radius: 48rpx;
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 28rpx;
        color: #4297fe;
        line-height: 56rpx;
        text-align: center;
        cursor: pointer;
      }
    }
    .staffList {
      width: 100%;
      height: calc(100% - 172rpx);
      display: flex;
      flex-direction: column;
      margin-bottom: 24rpx;
      &:last-child {
        margin-bottom: 0rpx;
      }
      .staffItem {
        width: 100%;
        max-height: 626rpx;
        background-color: #ffffff;
        padding: 24rpx;
        box-sizing: border-box;
        margin-bottom: 24rpx;
        &:last-child {
          margin-bottom: 0rpx;
        }
        .top {
          width: 100%;
          height: 80rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .userName {
            font-family: PingFang SC, PingFang SC;
            font-weight: bold;
            font-size: 32rpx;
            color: #434343;
          }
          .right {
            display: flex;
            align-items: center;
            .status {
              padding: 8rpx 16rpx;
              box-sizing: border-box;
              border-radius: 8rpx;
              margin-right: 16rpx;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 28rpx;
            }
            .editIcon {
              width: 40rpx;
              height: 40rpx;
              cursor: pointer;
            }
          }
        }
        .divider {
          width: 100%;
          height: 4rpx;
          background-color: #e5e5e5;
          margin: 16rpx 0rpx;
        }
        .bottom {
          width: 100%;
          display: flex;
          flex-direction: column;
          .row {
            width: 100%;
            height: 32rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16rpx;
            .label {
              height: 32rpx;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 26rpx;
              color: #818181;
              line-height: 32rpx;
            }
            .value {
              display: flex;
              align-items: center;
              .text {
                height: 32rpx;
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 26rpx;
                color: #818181;
                line-height: 32rpx;
                margin-right: 16rpx;
              }
              .result {
                height: 32rpx;
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 26rpx;
                color: #000000;
                line-height: 32rpx;
              }
            }
          }
          .scaleBox {
            width: 100%;
            padding: 16rpx;
            box-sizing: border-box;
            background-color: #f9f9f9;
            margin-bottom: 16rpx;
            display: flex;
            align-items: center;
            overflow-x: scroll;

            .scaleResult {
              width: 192rpx;
              height: 240rpx;
              display: flex;
              flex-direction: column;
              margin-right: 48rpx;
              &:last-child {
                margin-right: 0rpx;
              }
              .scaleName {
                width: 192rpx;
                height: 32rpx;
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 24rpx;
                color: #434343;
                line-height: 32rpx;
                text-align: center;
                margin-bottom: 16rpx;
                white-space: nowrap; /* 不换行 */
                overflow: hidden; /* 隐藏超出的内容 */
                text-overflow: ellipsis; /* 用省略号表示被隐藏的部分 */
              }
              .scaleContent {
                width: 192rpx;
                height: calc(100% - 48rpx);
                &.img {
                }
                &.chart {
                }
                &.text {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-family: PingFang SC, PingFang SC;
                  font-weight: 400;
                  font-size: 24rpx;
                  color: #434343;
                }
              }
            }
            .none {
              width: 100%;
              height: 80rpx;
              text-align: center;
              line-height: 80rpx;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 26rpx;
              color: #818181;
            }
          }
          .operateBox {
            width: 100%;
            height: 80rpx;
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 16rpx;
            :deep(.u-btn) {
              width: 100%;
              height: 100% !important;
            }
          }
        }
      }
    }
  }
}
</style>
