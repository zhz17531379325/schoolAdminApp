<template>
  <view class="publishTasks">
    <view class="stepList">
      <view
        :class="['stepItem', { currentStep: currentStep === index }]"
        v-for="(item, index) in stepList"
        :key="index"
      >
        <view class="index">{{ index + 1 }}</view>
        <view class="text">{{ item.label }}</view>
        <view class="dashed" v-if="index + 1 < stepList.length"></view>
      </view>
    </view>
    <view class="publishStep">
      <view class="stepTitle">
        <view class="serialNumber">{{ currentStep + 1 }}</view>
        <view class="title">{{ stepList[currentStep].label }}</view>
      </view>
      <!-- 测试对象与类别 -->
      <view class="testObjectCategory parameter" v-if="currentStep === 0">
        <view class="row">
          <view class="label">测试类别：</view>
          <view class="tab">
            <tabs
              :tabList="testCategory"
              v-model="publishTasksForm.testCategory"
            ></tabs>
          </view>
        </view>
        <view class="row">
          <view class="label">测试对象：</view>
          <view class="tab">
            <tabs
              :tabList="testObject"
              v-model="publishTasksForm.testOrgType"
            ></tabs>
          </view>
        </view>
        <view class="selectedClass">
          <view class="top">
            <view class="label">已选班级</view>
            <view class="modify">
              <view class="text">修改</view>
              <image
                class="modifyIcon"
                :src="getImgUrl('/testingTasks/modify.png')"
              ></image>
            </view>
          </view>
        </view>
      </view>
      <!-- 确定测试内容 -->
      <view class="determineTestingContent parameter" v-if="currentStep === 1">
        <view class="row">
          <view class="label">学生端显示名称：</view>
          <view class="input">
            <view class="formLabel">
              <u-form-item
                label=""
                prop="displayName"
                borderBottom
                style="width: 100%"
              >
                <u-input
                  v-model="publishTasksForm.displayName"
                  :border="false"
                  placeholder="请输入学生端显示名称"
                ></u-input>
              </u-form-item>
            </view>
          </view>
        </view>
        <view class="row">
          <view class="label">本次测试引导语：</view>
          <view class="input">
            <view class="formLabel">
              <u-form-item
                label=""
                prop="account"
                borderBottom
                style="width: 100%"
              >
                <u-input
                  v-model="publishTasksForm.displayName"
                  :border="false"
                  placeholder="请输入本次测试引导语"
                ></u-input>
              </u-form-item>
            </view>
          </view>
        </view>
        <view class="selectTestScale">
          <view class="top">
            <view class="label">选择测试量表：</view>
            <view class="prompt">(请按作答顺序点击)</view>
          </view>
        </view>
      </view>
      <!-- 时间设置 -->
      <view class="timeSetting parameter" v-if="currentStep === 2">
        <view class="row">
          <view class="label">测试有效期：</view>
          <view class="calendar" @click="showDate = true">
            <view class="date">{{ publishTasksForm.startTime }}</view>
            <view class="connect">-</view>
            <view class="date">{{ publishTasksForm.deadLine }}</view>
            <u-calendar
              v-model="showDate"
              mode="range"
              @change="dateChange"
            ></u-calendar>
          </view>
          <view class="pour">注：有效期外学生端不显示测试内容</view>
        </view>
        <view class="row">
          <view class="label">答题时间：</view>
          <view class="tab">
            <tabs
              :tabList="limitTime"
              v-model="publishTasksForm.canViewed"
            ></tabs>
          </view>
          <view class="input time">
            <view class="formLabel">
              <u-form-item
                label=""
                prop="account"
                borderBottom
                style="width: 100%"
              >
                <u-input
                  v-model="publishTasksForm.displayName"
                  :border="false"
                  placeholder="请输入答题时间"
                ></u-input>
              </u-form-item>
            </view>
          </view>
        </view>
      </view>
      <!-- 权限设置 -->
      <view class="permissionSettings parameter" v-if="currentStep === 3">
        <view class="row">
          <view class="label">测试人是否可查看报告：</view>
          <view class="tab">
            <tabs
              :tabList="viewReport"
              v-model="publishTasksForm.canViewed"
            ></tabs>
          </view>
        </view>
        <view class="row">
          <view class="label">测试人是否可重新测试：</view>
          <view class="tab">
            <tabs
              :tabList="retest"
              v-model="publishTasksForm.allowRetest"
            ></tabs>
          </view>
        </view>
      </view>
      <!-- 底部按钮 -->
      <view class="footerButton">
        <u-button
          :custom-style="btnCustomNo"
          v-if="currentStep === 0"
          @click="cancelPublish"
          >取消发布</u-button
        >
        <u-button
          :custom-style="btnCustomNo"
          v-if="currentStep > 0"
          @click="previousStep"
          >上一步</u-button
        >
        <u-button
          :custom-style="btnCustom"
          v-if="currentStep < 3"
          @click="nextStep"
          >下一步</u-button
        >
        <u-button
          :custom-style="btnCustom"
          v-if="currentStep === 3"
          @click="publishTask"
          >发布任务</u-button
        >
      </view>
    </view>
  </view>
</template>

<script setup name="publishTasks">
import tabs from './components/tabs.vue'
const currentStep = ref(2)
const stepList = ref([
  {
    label: '测试对象与类别',
    value: 0,
  },
  {
    label: '确定测试内容',
    value: 1,
  },
  {
    label: '时间设置',
    value: 2,
  },
  {
    label: '权限设置',
    value: 3,
  },
])
const testCategory = ref([
  {
    label: '量表',
    value: 'scale',
  },
  {
    label: '手环',
    value: 'watch',
  },
])
const testObject = ref([
  {
    label: '班级',
    value: 'Class',
  },
  {
    label: '年级',
    value: 'Grade',
  },
])
const limitTime = ref([
  {
    label: '限制答题时间',
    value: 'scale',
  },
  {
    label: '不限制',
    value: 'watch',
  },
])
const viewReport = ref([
  {
    label: '可以',
    value: 'Class',
  },
  {
    label: '不可以',
    value: 'Grade',
  },
])
const retest = ref([
  {
    label: '可以',
    value: 'scale',
  },
  {
    label: '不可以',
    value: 'watch',
  },
])
const showDate = ref(false)
const data = new reactive({
  publishTasksForm: {
    testCategory: 'scale',
    testOrgType: 'Class',
    canViewed: 'Class',
    allowRetest: 'scale',
    startTime: '',
    deadLine: '',
  },
  rules: {
    account: [
      {
        required: true,
        message: '请输入账号',
        // 可以单个或者同时写两个触发验证方式
        trigger: ['change', 'blur'],
      },
    ],
    password: [
      {
        required: true,
        message: '请输入您的密码',
        trigger: ['change', 'blur'],
      },
    ],
  },
})
const { publishTasksForm, rules } = toRefs(data)
const cancelPublish = () => {
  uni.navigateBack(1)
}
const nextStep = () => {
  currentStep.value++
}
const previousStep = () => {
  currentStep.value--
}
const publishTask = () => {
  uni.redirectTo({
    url: '/testingTasks/index/index?completeRelease=true',
  })
}
const dateChange = (e) => {
  publishTasksForm.value.startTime = e.startDate
  publishTasksForm.value.deadLine = e.endDate
}
</script>

<style lang="scss" scoped>
.publishTasks {
  width: 100vw;
  height: 100vh;
  background-color: #f4f5f7;
  padding-top: 12rpx;
  box-sizing: border-box;
  .stepList {
    width: 100%;
    height: 100rpx;
    background-color: #ffffff;
    margin-bottom: 12rpx;
    display: flex;
    align-items: center;
    overflow: scroll;
    padding: 34rpx 24rpx;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
    }
    .stepItem {
      height: 32rpx;
      display: flex;
      align-items: center;
      .index {
        width: 32rpx;
        height: 32rpx;
        border: 1rpx solid #e5e5e5;
        border-radius: 50%;
        text-align: center;
        line-height: 32rpx;
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 24rpx;
        color: #b5b5b5;
        background-color: #ffffff;
        margin-right: 8rpx;
      }
      .text {
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 24rpx;
        color: #b5b5b5;
        margin-right: 16rpx;
        white-space: nowrap;
      }
      .dashed {
        width: 48rpx;
        border: 1rpx dashed #c7c7c7;
        margin-right: 16rpx;
      }
      &:last-child {
        .dashed {
          margin-right: 0rpx;
        }
      }
      &.currentStep {
        .index {
          border: 1rpx solid #3d7cfd;
          color: #3d7cfd;
          background-color: #f4f5f7;
        }
        .text {
          color: #3d7cfd;
        }
      }
    }
  }
  .publishStep {
    width: 100%;
    height: calc(100% - 124rpx);
    background-color: #ffffff;
    padding: 48rpx 48rpx 64rpx 48rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .stepTitle {
      display: flex;
      align-items: center;
      justify-content: center;
      .serialNumber {
        width: 56rpx;
        height: 56rpx;
        background: #3d7cfd;
        border-radius: 50%;
        border: 1rpx solid rgba(0, 0, 0, 0.1);
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 32rpx;
        color: #ffffff;
        line-height: 56rpx;
        text-align: center;
        margin-right: 32rpx;
      }
      .title {
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 28rpx;
        color: #3d7cfd;
      }
    }
    .parameter {
      width: 100%;
      height: calc(100% - 232rpx);
      .row {
        width: 100%;
        min-height: 148rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 32rpx;
        &:last-child {
          margin-bottom: 0rpx;
        }
        .label {
          width: 100%;
          height: 64rpx;
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 28rpx;
          color: #000000;
          line-height: 64rpx;
        }
        .tab {
          width: 100%;
          height: 84rpx;
        }
        .input {
          .formLabel {
            width: 100%;
            height: 68rpx;
            background-color: #ffffff;
            border-radius: 8rpx;
            padding: 0rpx 16rpx;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            position: relative;
            border: 2rpx solid #e5e5e5;
          }

          .u-form-item {
            flex: 1;
            position: relative;
            padding: 0rpx;
            .u-form-item__message {
              position: absolute;
              bottom: 50%;
              transform: translateY(50%);
            }
            .u-input {
              padding-left: 40rpx;
              .u-input__input {
              }
            }
          }
          &.time{
            margin-top: 16rpx;
          }
        }
        .calendar {
          width: 100%;
          height: 80rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .date {
            width: calc(50% - 24rpx);
            height: 100%;
            background: #ffffff;
            border-radius: 8rpx;
            border: 1rpx solid #c7c7c7;
            text-align: center;
            line-height: 80rpx;
          }
          .connect {
            margin: 0 16rpx;
          }
        }
        .pour {
          margin-top: 16rpx;
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 26rpx;
          color: #b5b5b5;
        }
      }
      &.testObjectCategory {
        .selectedClass {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-top: 48rpx;
          .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .label {
              height: 64rpx;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 28rpx;
              color: #000000;
              line-height: 64rpx;
            }
            .modify {
              height: 64rpx;
              display: flex;
              align-items: center;
              .text {
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 28rpx;
                color: #818181;
                margin-right: 8rpx;
              }
              .modifyIcon {
                width: 13rpx;
                height: 20rpx;
                padding: 14rpx 18rpx;
                box-sizing: border-box;
              }
            }
          }
        }
      }
      &.determineTestingContent {
        .selectTestScale {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-top: 32rpx;
          .top {
            display: flex;
            align-items: center;
            .label {
              height: 64rpx;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 28rpx;
              color: #000000;
              line-height: 64rpx;
            }
            .prompt {
              color: #818181;
              font-size: 26rpx;
            }
          }
        }
      }
    }
    .footerButton {
      width: 100%;
      height: 80rpx;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 24rpx;
    }
  }
}
</style>
