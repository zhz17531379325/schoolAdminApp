<template>
  <view class="scaleList">
    <view
      class="searchBox"
      :style="{
        marginBottom: !isFilter ? '12rpx' : '0rpx',
      }"
    >
      <view class="inputBox">
        <image
          class="icon"
          :src="getImgUrl(`/management/scaleManagement/search.svg`)"
        ></image>
        <view class="input">
          <u-input
            v-model="value"
            type="text"
            clearable
            placeholder="请输入量表名称"
          />
        </view>
      </view>
      <view class="filter" @click="filterOpen = true">
        <view class="text">筛选</view>
        <image
          class="icon"
          :src="getImgUrl(`/management/scaleManagement/filter.svg`)"
        ></image>
      </view>
    </view>
    <view class="filterOptions" v-show="isFilter"></view>
    <view class="scales">
      <view class="scaleItem" v-for="(item, index) in scales" :key="index">
        <view class="top">
          <image
            class="icon"
            :src="getImgUrl(`/management/scaleManagement/scale.svg`)"
          ></image>
          <view class="title">《{{ item.scaleName }}》</view>
          <view class="preview" @click="scalePreview">预览</view>
        </view>
        <view class="divider"></view>
        <view class="information">
          <view class="row">
            <view class="label">显示名称：</view>
            <view class="value">{{ item.scaleDisplayName }}</view>
          </view>
          <view class="row">
            <view class="label">量表类型：</view>
            <view class="value">{{ item.scaleType }}</view>
          </view>
          <view class="row">
            <view class="label">题目数量：</view>
            <view class="value">{{ item.questionCount }}</view>
          </view>
          <view class="row">
            <view class="label">适用人群：</view>
            <view class="value">{{ item.targetAudience }}</view>
          </view>
        </view>
      </view>
    </view>
    <u-popup v-model="filterOpen" mode="right" width="75%">
      <view class="filterPopup">
        <view class="tabs">
          <view class="conditionBox scaleType">
            <view class="title">量表类型</view>
            <view class="conditionOptionList">
              <view class="conditionOption active">能力量表</view>
              <view class="conditionOption">人格量表</view>
              <view class="conditionOption">学业量表</view>
              <view class="conditionOption">职业倦怠量表</view>
              <view class="conditionOption">心理健康量表</view>
            </view>
          </view>
          <view class="conditionBox apply">
            <view class="title">适用人群</view>
            <view class="conditionOptionList">
              <view class="conditionOption active">老师</view>
              <view class="conditionOption">学生</view>
              <view class="conditionOption">通用</view>
            </view>
          </view>
        </view>
        <view class="bottomButton">
          <u-button :custom-style="btnCustomNo" @click="filterOpen = false"
            >取消</u-button
          >
          <u-button :custom-style="btnCustom" @click="filterOpen = false"
            >确定</u-button
          >
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script setup name="scaleList">
const isFilter = ref(false)
const filterOpen = ref(false)
const scales = ref([
  {
    scaleId: '171078794030752718788397683584861023261',
    scaleName: '心理健康诊断测验-MHT（9-18岁）',
    scaleDisplayName: 'MHT',
    scaleType: 'StudentMentalHealth',
    questionCount: 100,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '264383488916008948586408931927481188133',
    scaleName: '阿森斯失眠量表',
    scaleDisplayName: '睡眠量表',
    scaleType: 'StudentMentalHealth',
    questionCount: 8,
    targetAudience: 'Other',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '147961753409794710209806592973271197255',
    scaleName: '艾森克人格问卷-EPQ（7-15岁）',
    scaleDisplayName: 'EPQ(7-15岁)',
    scaleType: 'StudentPersonality',
    questionCount: 88,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '213425799075510608855487029547371643759',
    scaleName: '抑郁症筛查量表PHQ-9',
    scaleDisplayName: '心理测评量表',
    scaleType: 'StudentMentalHealth',
    questionCount: 9,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '223591211899744310149847715226422798811',
    scaleName: '艾森克人格问卷简版（EPQ-RSC）',
    scaleDisplayName: 'EPQ-RSC',
    scaleType: 'StudentPersonality',
    questionCount: 48,
    targetAudience: 'Other',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '74964153999599602512277249432971602390',
    scaleName: '青少年睡眠-觉醒量表（ASWS）',
    scaleDisplayName: 'ASWS',
    scaleType: 'StudentMentalHealth',
    questionCount: 28,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '58951326521169223275402971414511971386',
    scaleName: '自杀意念自评量表（SIOSS)',
    scaleDisplayName: 'SIOSS',
    scaleType: 'StudentMentalHealth',
    questionCount: 26,
    targetAudience: 'Other',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '137797631672061474600152907982606009454',
    scaleName: '中国中学生心理健康量表（MSSMHS）',
    scaleDisplayName: 'MSSMHS',
    scaleType: 'StudentMentalHealth',
    questionCount: 60,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '25427079468565235015581648467526594730',
    scaleName: '儿童感知压力量表（PSS-C）',
    scaleDisplayName: 'PSS-C',
    scaleType: 'StudentMentalHealth',
    questionCount: 17,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '133275835079652574570902362974952340135',
    scaleName: '教师职业倦怠量表(MBI-ES)',
    scaleDisplayName: '教师职业倦怠量表(MBI-ES)',
    scaleType: 'TeacherBurnout',
    questionCount: 22,
    targetAudience: 'Teacher',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '28387429417823724412797100207632548389',
    scaleName: '症状自评量表SCL-90',
    scaleDisplayName: 'SCL-90',
    scaleType: 'StudentMentalHealth',
    questionCount: 90,
    targetAudience: 'Other',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '311120886225990024171649085069432029787',
    scaleName: '儿童自我意识量表（CSCS）',
    scaleDisplayName: 'CSCS',
    scaleType: 'StudentMentalHealth',
    questionCount: 80,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '216770987204311970757578458345688433310',
    scaleName: '青少年生活事件量表（ASLEC）',
    scaleDisplayName: 'ASLEC',
    scaleType: 'StudentMentalHealth',
    questionCount: 27,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '93039857396093863688862561202538223222',
    scaleName: '儿童抑郁障碍自评量表',
    scaleDisplayName: '心理自评量表',
    scaleType: 'StudentMentalHealth',
    questionCount: 18,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '26369761651172573383237995843451300548',
    scaleName: 'Spence儿童焦虑量表-简版',
    scaleDisplayName: '心理量表',
    scaleType: 'StudentMentalHealth',
    questionCount: 19,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '59440669111028396166176680338423766588',
    scaleName: '威廉斯创造力量表',
    scaleDisplayName: '创造力量表',
    scaleType: 'Ability',
    questionCount: 50,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '2036869239748155239353924249631592306',
    scaleName: '情绪智力量表中文版(WLEIS-C)',
    scaleDisplayName: 'WLEIS-C',
    scaleType: 'Ability',
    questionCount: 16,
    targetAudience: 'Other',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '100127831956623318615406148572864408854',
    scaleName: '抑郁 － 焦虑 － 压力量表( DASS － 21)',
    scaleDisplayName: '抑郁 － 焦虑 － 压力量表( DASS － 21)',
    scaleType: 'TeacherMentalHealth',
    questionCount: 21,
    targetAudience: 'Teacher',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '258647296841492166712851940729008897180',
    scaleName: '霍兰德职业兴趣测量表',
    scaleDisplayName: '职业兴趣测量表',
    scaleType: 'Career',
    questionCount: 60,
    targetAudience: 'Other',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '48878179225102875472602409703139576987',
    scaleName: '创伤后应激障碍自评量表',
    scaleDisplayName: '自评量表',
    scaleType: 'StudentMentalHealth',
    questionCount: 24,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '317236058047881272738225696371719113142',
    scaleName: '自卑感量表',
    scaleDisplayName: '自尊感量表',
    scaleType: 'StudentMentalHealth',
    questionCount: 36,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '175254761387667216257928607800674517652',
    scaleName: '中学生学习动机测试问卷',
    scaleDisplayName: '中学生学习动机测试问卷',
    scaleType: 'Academic',
    questionCount: 20,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '96432854466145615660608755123678188171',
    scaleName: '考试焦虑量表',
    scaleDisplayName: '考试焦虑量表',
    scaleType: 'Academic',
    questionCount: 37,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '130813353592755444615248756375225992074',
    scaleName: '学业求助量表',
    scaleDisplayName: '学业求助量表',
    scaleType: 'Academic',
    questionCount: 20,
    targetAudience: 'Student',
    deletedBy: null,
    updatedAt: null,
    assigned: true,
  },
  {
    scaleId: '43547478095567746387162138064283105539',
    scaleName: '艾森克人格问卷-EPQ（成人版）',
    scaleDisplayName: 'EPQ（16岁以上）',
    scaleType: 'StudentPersonality',
    questionCount: 88,
    targetAudience: 'Other',
    deletedBy: null,
    updatedAt: null,
    assigned: false,
  },
])

// 量表预览
const scalePreview = () => {
  uni.navigateTo({
    url: `/management/scaleManagement/subpage/scalePreview`,
  })
}
</script>

<style lang="scss" scoped>
.scaleList {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .searchBox {
    width: 100%;
    height: 104rpx;
    background-color: #ffffff;
    padding: 16rpx 24rpx;
    box-sizing: border-box;
    display: flex;
    .inputBox {
      flex: 1;
      height: 100%;
      margin-right: 36rpx;
      border-radius: 100rpx;
      border: 2rpx solid #e5e5e5;
      padding: 0rpx 24rpx;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .icon {
        width: 29rpx;
        height: 32rpx;
        margin-right: 14rpx;
      }
      .input {
        width: calc(100% - 43rpx);
        height: 100%;
      }
      :deep(.u-input) {
      }
    }
    .filter {
      display: flex;
      align-items: center;
      cursor: pointer;
      .text {
        height: 32rpx;
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 26rpx;
        color: #818181;
        line-height: 32rpx;
        margin-right: 4rpx;
      }
      .icon {
        width: 32rpx;
        height: 32rpx;
      }
    }
  }
  .filterOptions {
    width: 100%;
    height: 56rpx;
    background-color: #f4f5f7;
  }
  .scales {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .scaleItem {
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
        .preview {
          font-family: PingFang SC, PingFang SC;
          font-weight: 500;
          font-size: 26rpx;
          color: #3d7cfd;
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
        }
      }
    }
  }
  :deep(.filterPopup) {
    width: 100%;
    height: 100%;
    padding: 32rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .tabs {
      width: 100%;
      height: auto;
      .conditionBox {
        width: 100%;
        height: auto;
        margin-bottom: 32rpx;
        &:last-child {
          margin-bottom: 0rpx;
        }
        .title {
          width: 100%;
          height: 40rpx;
          font-family: PingFang SC, PingFang SC;
          font-weight: 500;
          font-size: 28rpx;
          color: #000000;
          line-height: 40rpx;
          margin-bottom: 24rpx;
        }
        .conditionOptionList {
          width: 100%;
          height: auto;
          display: flex;
          flex-wrap: wrap;
          .conditionOption {
            width: calc((100% - 44rpx) / 3);
            height: 84rpx;
            border: 2rpx solid #f9f9f9;
            background-color: #f9f9f9;
            border-radius: 4rpx;
            font-family: PingFang SC, PingFang SC;
            font-weight: 500;
            font-size: 26rpx;
            color: #818181;
            line-height: 84rpx;
            text-align: center;
            cursor: pointer;
            &.active {
              background: #f2f7ff;
              border: 2rpx solid #3d7cfd;
              color: #3d7cfd;
            }
            &:nth-child(1) {
              margin-right: 16rpx;
              margin-bottom: 24rpx;
            }
            &:nth-child(2) {
              margin-right: 16rpx;
              margin-bottom: 24rpx;
            }
            &:nth-child(3) {
              margin-bottom: 24rpx;
            }
            &:nth-child(4) {
              margin-right: 16rpx;
              width: calc(50% - 16rpx);
            }
            &:nth-child(5) {
              width: calc(50% - 16rpx);
            }
          }
        }
      }
    }
    .bottomButton {
      width: 100%;
      height: 80rpx;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 24rpx;
    }
  }
}
</style>
