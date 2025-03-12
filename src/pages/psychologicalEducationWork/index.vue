<template>
  <view class="psychologicalEducationWork">
    <view class="gradientColorBackground"></view>
    <view class="todayToDo">
      <commonPanel :title="'今日待办'" :applyStyle="'special'">
        <view class="pendingProcessing">
          <view class="counselling pendingProcessingModule">
            <image class="icon" :src="getImgUrl('/home/consulted.png')"></image>
            <view class="name">待咨询</view>
            <view class="num">320</view>
            <view class="unit">人</view>
          </view>
          <view class="assessment pendingProcessingModule">
            <image
              class="icon"
              :src="getImgUrl('/home/assessment.png')"
            ></image>
            <view class="name">待评估</view>
            <view class="num">1989</view>
            <view class="unit">人</view>
          </view>
        </view>
        <view class="menuList">
          <view
            class="menuItem"
            v-for="(item, index) in menuList"
            :key="index"
            @click="menuJump(item)"
          >
            <image
              class="menuIcon"
              :src="getImgUrl(`/home/svg/${item.value}.svg`)"
            ></image>
            <view class="label">{{ item.label }}</view>
          </view>
        </view>
      </commonPanel>
    </view>
    <view class="studentFacultySituation">
      <commonPanel :title="'学生状态与师资情况'">
        <view class="statisticsBox">
          <view class="studentStatus statisticsItem">
            <view class="term">
              <view class="label">学生总数</view>
              <view class="value">
                <view class="num">2080</view>
                <view class="unit">人</view>
              </view>
            </view>
            <view class="divider" />
            <view class="term">
              <view class="label">转介中心</view>
              <view class="value">
                <view class="num">210</view>
                <view class="unit">人</view>
              </view>
            </view>
            <view class="divider" />
            <view class="term">
              <view class="label">休学人数</view>
              <view class="value">
                <view class="num">28</view>
                <view class="unit">人</view>
              </view>
            </view>
          </view>
          <view class="facultySituation statisticsItem">
            <view class="term">
              <view class="label">班级总数</view>
              <view class="value">
                <view class="num">20</view>
                <view class="unit">个</view>
              </view>
            </view>
            <view class="divider" />
            <view class="term">
              <view class="label">班主任人数</view>
              <view class="value">
                <view class="num">16</view>
                <view class="unit">人</view>
              </view>
            </view>
            <view class="divider" />
            <view class="term">
              <view class="label">心理教师数</view>
              <view class="value">
                <view class="num">1</view>
                <view class="unit">人</view>
              </view>
            </view>
          </view>
        </view>
      </commonPanel>
    </view>
    <view class="consultationWorkload">
      <commonPanel :title="'咨询工作量'"></commonPanel>
    </view>
    <view class="dataStatisticalAnalysis">
      <commonComponentSwitching
        v-model="screeningEvaluationAnalysisTabActive"
        :tabs="screeningEvaluationAnalysisTabs"
      >
        <view
          class="initialScreeningEvaluation"
          v-if="
            screeningEvaluationAnalysisTabActive ===
            'initialScreeningEvaluation'
          "
        >
          <view class="testTaskTabBox"> </view>
          <view class="tabBox"></view>
          <view class="riskDimensionRanking chartBox">
            <view class="title">风险维度排行</view>
            <view class="chart rankingList">
              <view class="rankingItem" v-for="(item, index) in 5">
                <view class="information">
                  <view class="left">
                    <view class="index">
                      {{ index + 1 }}
                    </view>
                    <view class="name"> 轻度睡眠焦虑 </view>
                  </view>
                  <view class="right">
                    <view class="peopleNum"> 30076人 </view>
                    <view class="progress"> 60% </view>
                  </view>
                </view>
                <view class="progressBox">
                  <u-line-progress
                    :percent="70"
                    active-color="#ff9900"
                    inactive-color="#F5F5F5"
                    height="16"
                    >{{}}
                  </u-line-progress>
                </view>
              </view>
            </view>
          </view>
          <view class="initialScreeningRisk chartBox">
            <view class="title">初筛风险结果</view>
            <view class="chart">
              <circularDiagramLegend
                :chartsId="`studentRiskStatistics_crisisLevelStatistics`"
                :data="crisisLevelStatisticsData"
                :colorList="[
                  '#E5E5E5',
                  '#33C397',
                  '#FBD466',
                  '#FE9C00',
                  '#F2647C',
                ]"
                :isNum="true"
                v-if="
                  crisisLevelStatisticsData &&
                  crisisLevelStatisticsData.length > 0
                "
              />
            </view>
          </view>
          <view class="crisisAssessment chartBox">
            <view class="title">危机评估结果</view>
            <view class="chart">
              <circularDiagramLegend
                :chartsId="`studentRiskStatistics_crisisLevelStatistics`"
                :data="crisisLevelStatisticsData"
                :colorList="[
                  '#E5E5E5',
                  '#33C397',
                  '#FBD466',
                  '#FE9C00',
                  '#F2647C',
                ]"
                :isNum="true"
                v-if="
                  crisisLevelStatisticsData &&
                  crisisLevelStatisticsData.length > 0
                "
              />
            </view>
          </view>
        </view>
        <view
          class="visitorStatistics"
          v-if="screeningEvaluationAnalysisTabActive === 'visitorStatistics'"
        >
          <view class="testTaskTabBox"> </view>
          <view class="tabBox"></view>
          <view class="consultingTopicRanking chartBox">
            <view class="title">咨询主题排行</view>
            <view class="chart rankingList">
              <view class="rankingItem" v-for="(item, index) in 5">
                <view class="information">
                  <view class="left">
                    <view class="index">
                      {{ index + 1 }}
                    </view>
                    <view class="name"> 轻度睡眠焦虑 </view>
                  </view>
                  <view class="right">
                    <view class="peopleNum"> 30076人 </view>
                    <view class="progress"> 60% </view>
                  </view>
                </view>
                <view class="progressBox">
                  <u-line-progress
                    :percent="70"
                    active-color="#ff9900"
                    inactive-color="#F5F5F5"
                    height="16"
                    >{{}}
                  </u-line-progress>
                </view>
              </view>
            </view>
          </view>
          <view class="consultationQuantity chartBox">
            <view class="title">咨询学生数量变化</view>
            <view class="chart"> </view>
          </view>
        </view>
      </commonComponentSwitching>
    </view>
  </view>
</template>

<script setup name="psychologicalEducationWork">
const menuList = ref([
  {
    value: 'testingTasks',
    label: '测试任务',
  },
  {
    value: 'riskWarning',
    label: '风险预警',
  },
  {
    value: 'crisisIntervention',
    label: '危机干预',
  },
  {
    value: 'consultationAppointment',
    label: '咨询预约',
  },
  {
    value: 'monthlyEvaluation',
    label: '月度评价',
  },
  {
    value: 'scaleManagement',
    label: '量表管理',
  },
  {
    value: 'braceletManagement',
    label: '手环管理',
  },
  {
    value: 'accountManagement',
    label: '账号管理',
  },
  {
    value: 'recycleBin',
    label: '回收站',
  },
  {
    value: 'problemFeedback',
    label: '问题反馈',
  },
])
const screeningEvaluationAnalysisTabActive = ref('initialScreeningEvaluation')
const screeningEvaluationAnalysisTabs = ref([
  { title: '初筛与评估结果分析', component: 'initialScreeningEvaluation' },
  { title: '来访者统计与分析', component: 'visitorStatistics' },
])
const crisisLevelStatisticsData = ref([
  {
    name: '未测试',
    value: 2,
    type: 'UNTESTED',
  },
  {
    name: '无风险',
    value: 31,
    type: 'ZERO_STAR',
  },
  {
    name: '低风险',
    value: 30,
    type: 'ONE_STAR',
  },
  {
    name: '中风险',
    value: 14,
    type: 'TWO_STAR',
  },
  {
    name: '高风险',
    value: 4,
    type: 'THREE_STAR',
  },
])
// 菜单跳转
const menuJump = (item) => {
  uni.navigateTo({
    url: `/${item.value}/index/index`,
  })
}
</script>

<style lang="scss" scoped>
.psychologicalEducationWork {
  width: 100vw;
  height: 100vh;
  background-color: #f4f5f7;
  overflow: scroll;
  padding: 16rpx 24rpx;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  .gradientColorBackground {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #d8e5ff, #ffffff00);
    z-index: -1;
  }
  & > view {
    width: 100%;
    margin-bottom: 16rpx;
    &:last-child {
      margin-bottom: 0rpx;
    }
  }
  .todayToDo {
    height: 488rpx;
    .pendingProcessing {
      width: 100%;
      height: 112rpx;
      padding-top: 16rpx;
      display: flex;
      justify-content: space-between;
      margin-bottom: 16rpx;
      .pendingProcessingModule {
        flex: 1;
        height: 100%;
        background-color: #ffffff;
        border-radius: 12rpx;
        padding: 24rpx;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        & > view {
          height: 40rpx;
          font-family: PingFang SC, PingFang SC;
          font-size: 28rpx;
          line-height: 40rpx;
          margin-left: 16rpx;
        }
        .icon {
          width: 64rpx;
          height: 64rpx;
        }
        .name {
          font-weight: 500;
          color: #434343;
        }
        .num {
          font-weight: 800;
        }
        .unit {
          font-weight: 500;
          color: #434343;
        }
        &.counselling {
          margin-right: 16rpx;
          .num {
            color: #ff7d00;
          }
        }
        &.assessment {
          .num {
            color: #81be07;
          }
        }
      }
    }
    .menuList {
      width: 100%;
      height: 304rpx;
      background-color: #ffffff;
      border-radius: 12rpx;
      padding: 24rpx 16rpx;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 112rpx);
      align-content: space-between;
      column-gap: 5rpx;
      .menuItem {
        width: 100%;
        height: 100%;
        padding: 8rpx 0rpx;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        .menuIcon {
          width: 40rpx;
          height: 40rpx;
        }
        .label {
          height: 40rpx;
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 26rpx;
          color: #000000;
          line-height: 40rpx;
        }
      }
    }
  }
  .studentFacultySituation {
    height: 308rpx;
    .statisticsBox {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .statisticsItem {
        width: 100%;
        height: 80rpx;
        display: flex;
        align-items: center;
        .term {
          flex: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          .label {
            height: 36rpx;
            font-family: PingFang SC, PingFang SC;
            font-weight: 500;
            font-size: 26rpx;
            color: #434343;
            line-height: 36rpx;
          }
          .value {
            display: flex;
            align-items: center;
            height: 36rpx;
            font-family: PingFang SC, PingFang SC;
            font-weight: bold;
            font-size: 26rpx;
            line-height: 36rpx;
            .num {
            }
            .unit {
              margin-left: 16rpx;
            }
          }
        }
        .divider {
          width: 2rpx;
          height: 48rpx;
          background-color: #d9d9d9;
        }
      }
      .studentStatus {
        .value {
          color: #3d7cfd;
        }
      }
      .facultySituation {
        .value {
          color: #33adad;
        }
      }
    }
  }
  .consultationWorkload {
    height: 388rpx;
  }
  .dataStatisticalAnalysis {
    max-height: 1716rpx;
    .testTaskTabBox {
      width: 100%;
      height: 64rpx;
      margin-bottom: 32rpx;
    }
    .tabBox {
      width: 100%;
      height: 48rpx;
      margin-bottom: 32rpx;
    }
    .chartBox {
      width: 100%;
      background: #f8f8f8;
      border-radius: 12rpx;
      margin-bottom: 16rpx;
      padding: 20rpx 32rpx;
      box-sizing: border-box;
      &:last-child {
        margin-bottom: 0rpx;
      }
      .title {
        width: 100%;
        height: 36rpx;
        font-family: PingFang SC, PingFang SC;
        font-weight: bold;
        font-size: 26rpx;
        color: #434343;
        line-height: 36rpx;
        margin-bottom: 24rpx;
      }
      .chart {
        width: 100%;
        height: calc(100% - 60rpx);
        &.rankingList {
          display: flex;
          flex-direction: column;
          .rankingItem {
            width: 100%;
            height: 60rpx;
            margin-bottom: 24rpx;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .information {
              width: 100%;
              height: 36rpx;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .left {
                display: flex;
                align-items: center;
                .index {
                  width: 24rpx;
                  height: 24rpx;
                  border-radius: 2rpx;
                  margin-right: 12rpx;
                  font-family: Noto Sans SC, Noto Sans SC;
                  font-weight: bold;
                  font-size: 20rpx;
                  color: #ffffff;
                  line-height: 24rpx;
                  text-align: center;
                  background-color: #fe9c00;
                }
                .name {
                  height: 36rpx;
                  font-family: PingFang SC, PingFang SC;
                  font-weight: 500;
                  font-size: 26rpx;
                  color: #434343;
                  line-height: 36rpx;
                }
              }
              .right {
                display: flex;
                align-items: center;
                .peopleNum {
                  height: 36rpx;
                  font-family: PingFang SC, PingFang SC;
                  font-weight: 400;
                  font-size: 26rpx;
                  color: #000000;
                  line-height: 36rpx;
                  margin-right: 12rpx;
                }
                .progress {
                  width: 60rpx;
                  height: 36rpx;
                  font-family: PingFang SC, PingFang SC;
                  font-weight: 500;
                  font-size: 26rpx;
                  color: #818181;
                  line-height: 36rpx;
                }
              }
            }
            .progressBox {
              width: 100%;
              height: 16rpx;
              position: relative;
              :deep(.u-progress) {
                position: absolute;
                bottom: 50%;
                transform: translateY(50%);
                .u-active {
                  border-radius: 8rpx;
                }
              }
            }
            &:last-child {
              margin-bottom: 0rpx;
            }
          }
        }
      }
    }
    .initialScreeningEvaluation {
      padding: 16rpx;
      box-sizing: border-box;
      .riskDimensionRanking {
        height: 514rpx;
      }
      .initialScreeningRisk {
        height: 414rpx;
      }
      .crisisAssessment {
        height: 368rpx;
      }
    }
    .visitorStatistics {
      padding: 16rpx;
      box-sizing: border-box;
      .consultingTopicRanking {
        height: 510rpx;
      }
      .consultationQuantity {
        height: 474rpx;
      }
    }
  }
}
</style>
