<template>
  <view class="scaleCombination">
    <view class="combinationList">
      <view
        class="combinationListItem"
        v-for="(item, index) in combinationList"
        :key="index"
      >
        <view class="top">
          <image
            class="icon"
            :src="getImgUrl(`/management/scaleManagement/combination.svg`)"
          ></image>
          <view class="title">《{{ item.scaleGroupName }}》</view>
        </view>
        <view class="divider"></view>
        <view class="information">
          <view class="row">
            <view class="label">量表数量：</view>
            <view class="value">{{ item.scales.length }}</view>
          </view>
          <view class="row consistOf">
            <view class="label">量表组成：</view>
            <view class="value">{{ item.scales.join('、') }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup name="scaleCombination">
const combinationList = ref([
  {
    id: '265827062442877383532112054247305439640',
    scaleGroupName: '中学生心理健康普测（模板）',
    scales: [
      '中国中学生心理健康量表（MSSMHS）',
      '艾森克人格问卷简版（EPQ-RSC）',
      '青少年睡眠-觉醒量表（ASWS）',
      '儿童感知压力量表（PSS-C）',
    ],
  },
  {
    id: '188136187682715820972606519441264878593',
    scaleGroupName: '小学生心理健康普测（模板）',
    scales: [
      '儿童抑郁障碍自评量表',
      'Spence儿童焦虑量表-简版',
      '艾森克人格问卷简版（EPQ-RSC）',
      '青少年睡眠-觉醒量表（ASWS）',
      '儿童感知压力量表（PSS-C）',
    ],
  },
  {
    id: '23247919665820827551585488023858492460',
    scaleGroupName: '教师心理健康普测（模板）',
    scales: [
      '症状自评量表SCL-90',
      '教师职业倦怠量表(MBI-ES)',
      '艾森克人格问卷简版（EPQ-RSC）',
    ],
  },
  {
    id: '44671865720253953918280791594379856403',
    scaleGroupName: '丽水市高中生心理健康测评（春季）',
    scales: ['心理健康诊断测验-MHT（9-18岁）', '阿森斯失眠量表'],
  },
  {
    id: '154865436963081813300487953203147358408',
    scaleGroupName: '丽水市高中生心理健康测评（秋季）',
    scales: ['症状自评量表SCL-90', '艾森克人格问卷-EPQ（成人版）'],
  },
  {
    id: '241038812417812238654549967939454046999',
    scaleGroupName: '丽水市初中生心理健康测评（春季）',
    scales: ['心理健康诊断测验-MHT（9-18岁）', '阿森斯失眠量表'],
  },
  {
    id: '268270160667229787913011319772989868275',
    scaleGroupName: '丽水市初中生·心理健康测评（秋季）',
    scales: ['心理健康诊断测验-MHT（9-18岁）', '艾森克人格问卷-EPQ（7-15岁）'],
  },
  {
    id: '111900421488420052244922442048393620513',
    scaleGroupName: '丽水市小学生心理健康测评（春秋季）',
    scales: ['心理健康诊断测验-MHT（9-18岁）'],
  },
])
</script>

<style lang="scss" scoped>
.scaleCombination {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 12rpx;
  box-sizing: border-box;
  .combinationList {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .combinationListItem {
      width: 100%;
      padding: 24rpx 32rpx 32rpx 32rpx;
      box-sizing: border-box;
      background-color: #ffffff;
      margin-bottom: 8rpx;
      &:last-child {
        margin-bottom: 0rpx;
      }
      .top {
        width: 100%;
        height: 44rpx;
        display: flex;
        align-items: center;
        .icon {
          width: 40rpx;
          height: 40rpx;
          margin-right: 6rpx;
        }
        .title {
          flex: 1;
          font-family: PingFang SC, PingFang SC;
          font-weight: bold;
          font-size: 32rpx;
          color: #434343;
        }
      }
      .divider {
        width: 100%;
        height: 1rpx;
        background-color: #e5e5e5;
        margin: 24rpx 0;
      }
      .information {
        width: 100%;
        display: flex;
        flex-direction: column;
        .row {
          width: 100%;
          height: 36rpx;
          display: flex;
          align-items: center;
          margin-bottom: 16rpx;
          &:last-child {
            margin-bottom: 0rpx;
          }
          .label {
            width: 130rpx;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 26rpx;
            color: #818181;
          }
          .value {
            flex: 1;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 26rpx;
            color: #000000;
          }
          &.consistOf {
            height: auto;
            align-items: flex-start;
            .label {
              height: 36rpx;
            }
            .value {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 24rpx;
              color: #000000;
              line-height: 32rpx;
            }
          }
        }
      }
    }
  }
}
</style>
