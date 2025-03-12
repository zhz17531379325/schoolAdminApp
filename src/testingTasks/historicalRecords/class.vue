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
        <view class="checkStatics">查看统计</view>
      </view>
      <view class="staffList">

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
        height: 626rpx;
        background-color: #ffffff;
        .top {
          width: 100%;
          height: 110rpx;
          padding: 0rpx 32rpx;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left {
            display: flex;
            align-items: center;
            .status {
              width: 116rpx;
              height: 48rpx;
              border-radius: 8rpx;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 28rpx;
              line-height: 48rpx;
              text-align: center;
              margin-right: 16rpx;
            }
            .className {
              font-family: PingFang SC, PingFang SC;
              font-size: 32rpx;
              color: #000000;
              display: flex;
              align-items: center;
              .gradeName {
                font-weight: 400;
              }
              .className {
                font-weight: bold;
              }
            }
          }
          .right {
            display: flex;
            align-items: center;
            .icon {
              width: 34rpx;
              height: 34rpx;
              margin-right: 8rpx;
            }
            .peopleNum {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 32rpx;
              color: #000000;
            }
          }
        }
        .divider {
          width: 100%;
          height: 4rpx;
          background-color: #f4f5f7;
        }
        .bottom {
          width: 100%;
          height: 102rpx;
          padding: 0rpx 32rpx;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .progressBox {
            width: calc(100% - 208rpx);
            display: flex;
            align-items: center;
            .text {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 32rpx;
              color: #000000;
              margin-right: 32rpx;
            }
            .progressBar {
              width: calc(100% - 244rpx);
              height: 20rpx;
              position: relative;
              margin-right: 32rpx;
              :deep(.u-progress) {
                position: absolute;
                bottom: 50%;
                transform: translateY(50%);
                .u-active {
                  border-radius: 8rpx;
                }
              }
            }
            .num {
              width: 52rpx;
              height: 44rpx;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 32rpx;
              color: #818181;
              line-height: 38rpx;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
          .checkDetails {
            width: 176rpx;
            height: 56rpx;
            background: #3d7cfd;
            border-radius: 46rpx;
            font-family: PingFang SC, PingFang SC;
            font-weight: 500;
            font-size: 28rpx;
            color: #ffffff;
            line-height: 56rpx;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
