<template>
  <view class="testingTasks">
    <commonComponentSwitching v-model="tabActive" :tabs="tabs">
      <view class="publish" v-if="tabActive === 'publish'">
        <image
          class="publishIcon"
          :src="getImgUrl('/testingTasks/publishIcon.png')"
        ></image>
        <view class="prompt">
          <view>测试任务在此发布</view>
          <view>发布成功后学生可登录网站进行测试</view>
        </view>
        <view class="createTestButton">
          <u-button :custom-style="btnCustom" @click="createTest"
            >创建测试</u-button
          >
        </view>
      </view>
      <view class="historicalRecords" v-if="tabActive === 'historicalRecords'">
        <view class="tabs">
          <u-tabs
            :list="tabsList"
            :is-scroll="false"
            v-model="currentTab"
            @change="tabChange"
          ></u-tabs>
        </view>
        <view class="historicalRecordsList">
          <view
            class="historicalRecordsItem"
            v-for="(item, index) in historicalRecordsList"
            :key="index"
            :style="{
              backgroundColor: statusData[item.taskStatus].bgColor,
            }"
          >
            <view class="top">
              <view
                class="status"
                :style="{
                  color: statusData[item.taskStatus].color,
                }"
              >
                {{ statusData[item.taskStatus].text }}</view
              >
              <view class="title">
                <view class="iconBox">
                  <image
                    class="icon"
                    :src="
                      getImgUrl(
                        `/testingTasks/${
                          statusData[item.taskStatus].icon
                        }${capitalizeFirstLetter(testCategory)}Icon.png`
                      )
                    "
                    v-for="(
                      testCategory, testCategoryIndex
                    ) in item.testCategory"
                    :key="testCategoryIndex"
                  ></image>
                </view>
                <view class="text">《{{ item.taskName }}》</view>
              </view>
              <view class="introduce">{{ item.taskDescription }}</view>
            </view>
            <view class="divider"></view>
            <view class="information">
              <view class="row">
                <view class="label">测试对象：</view>
                <view class="value grade">
                  <view
                    class="targetOrgs"
                    v-for="(org, orgIndex) in item.targetOrgs"
                    :key="orgIndex"
                  >
                    {{
                      `${org.organizationName}${
                        orgIndex + 1 !== item.targetOrgs.length ? '、' : ''
                      }`
                    }}
                  </view>
                </view>
              </view>
              <view class="row" v-if="item.isScalePublished">
                <view class="label">量表内容：</view>
                <view class="value scaleList">
                  <view
                    class="scaleItem"
                    v-for="(scale, index) in item.scales"
                    :key="index"
                  >
                    <view class="scaleName" @click="handlePreview(scale)">
                      {{ scale.scaleName }}
                    </view>
                    <view
                      class="splitters"
                      v-if="index + 1 < item.scales.length"
                    ></view>
                  </view>
                  <view class="scaleNum">共{{ item.scales.length }}个</view>
                </view>
              </view>
              <view class="row">
                <view class="label">有效时间：</view>
                <view class="value">
                  {{ item.startTime }} ~ {{ item.engTime }}</view
                >
              </view>
              <view class="row">
                <view class="label">重新测试权限：</view>
                <view class="value">
                  <view class="text" v-if="item.isWatchPublished"
                    >手环{{
                      item.watchRepeatable ? '可' : '不可'
                    }}重新测试</view
                  >
                  <view class="text" v-if="item.isScalePublished"
                    >量表{{
                      item.scaleRepeatable ? '可' : '不可'
                    }}重新答题</view
                  >
                </view>
              </view>
              <view class="row">
                <view class="label">测试人权限：</view>
                <view class="value">
                  <view class="text" v-if="item.isWatchPublished"
                    >{{
                      item.watchVisible ? '可' : '不可'
                    }}查看手环测试报告</view
                  >
                  <view class="text" v-if="item.isScalePublished"
                    >{{
                      item.scaleVisible ? '可' : '不可'
                    }}查看量表测试报告</view
                  >
                </view>
              </view>
              <view class="row">
                <view class="label">最长作答时间：</view>
                <view class="value">{{
                  item.minutes == 0 ? '-' : item.minutes + '分钟'
                }}</view>
              </view>
              <view class="row">
                <view class="label">发布时间：</view>
                <view class="value">{{ item.publishTime }}</view>
              </view>
              <view class="row">
                <view class="label">发布人：</view>
                <view class="value">{{ item.accountUser }}</view>
              </view>
            </view>
            <view class="bottom">
              <u-button
                :custom-style="{
                  ...btnCustom,
                  background: statusData[item.taskStatus].color,
                }"
                @click="viewAnsweringStatus(item)"
                >查看测试情况</u-button
              >
              <u-button
                :custom-style="btnCustomNo"
                v-if="
                  !item.centerPublished &&
                  item.taskStatus !== 'In_Publishing' &&
                  item.taskStatus !== 'Complete'
                "
                >撤销任务</u-button
              >
              <u-button
                :custom-style="btnCustomNo"
                v-if="!item.centerPublished && item.taskStatus === 'Complete'"
                >删除任务</u-button
              >
            </view>
          </view>
        </view>
      </view>
    </commonComponentSwitching>
  </view>
</template>

<script setup name="testingTasks">
import { onLoad } from '@dcloudio/uni-app'
const tabActive = ref('publish')
const tabs = ref([
  { title: '发布测试任务', component: 'publish' },
  { title: '历史记录', component: 'historicalRecords' },
])

const currentTab = ref(0)
const tabsList = ref([
  {
    name: '全部',
  },
  {
    name: '量表测试',
  },
  {
    name: '手环测试',
  },
  {
    name: '量表&手环',
  },
])
const historicalRecordsList = ref([
  {
    taskId: '218367328197065018636220713356158175501',
    taskName: '2025春季学生心理测评',
    taskDescription: '2025开学测评',
    targetOrgs: [
      {
        organizationId: '224595221323037893289047606368718757127',
        allOrganizationName: '遂昌民族中学/7年级',
        organizationType: 'Grade',
        organizationName: '7年级',
      },
      {
        organizationId: '325476159629490868948491217764872904716',
        allOrganizationName: '遂昌民族中学/测试',
        organizationType: 'Grade',
        organizationName: '测试',
      },
      {
        organizationId: '237140261651025170940322555243133326069',
        allOrganizationName: '遂昌民族中学/8年级',
        organizationType: 'Grade',
        organizationName: '8年级',
      },
      {
        organizationId: '246911511619090473722508336693604963509',
        allOrganizationName: '遂昌民族中学/9年级',
        organizationType: 'Grade',
        organizationName: '9年级',
      },
    ],
    startTime: '2025-02-18',
    engTime: '2025-04-01',
    publishTime: '2025-02-18 10:13',
    accountUser: '程梦婷',
    taskStatus: 'Ongoing',
    centerPublished: true,
    isWatchPublished: false,
    isScalePublished: true,
    scales: [
      {
        scaleId: '171078794030752718788397683584861023261',
        scaleName: '心理健康诊断测验-MHT（9-18岁）',
        existDimension: true,
      },
      {
        scaleId: '264383488916008948586408931927481188133',
        scaleName: '阿森斯失眠量表',
        existDimension: false,
      },
    ],
    scaleDuration: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    isWatchVisible: false,
    isWatchRepeatable: false,
    watchDuration: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    organizationType: 'MiddleSchool',
    scaleVisible: false,
    scaleRepeatable: false,
    testCategory: ['scale'],
    type: 1,
    watchRepeatable: false,
    watchVisible: false,
    minutes: 0,
  },
  {
    taskId: '337451560372610873140453234290694363284',
    taskName: '郑佳晨休学在家心理状态监测',
    taskDescription: '请根据自己的真实情况如实填写！',
    targetOrgs: [
      {
        organizationId: '263484638235778638132003985643877740313',
        organizationType: 'Class',
        organizationName: '3班',
        allOrganizationName: '遂昌民族中学/8年级/3班',
      },
    ],
    startTime: '2024-12-18',
    engTime: '2024-12-19',
    publishTime: '2024-12-18 09:12',
    accountUser: '程梦婷',
    taskStatus: 'Complete',
    centerPublished: false,
    isWatchPublished: false,
    isScalePublished: true,
    scales: [
      {
        scaleId: '100127831956623318615406148572864408854',
        scaleName: '抑郁 － 焦虑 － 压力量表( DASS － 21)',
        existDimension: true,
      },
      {
        scaleId: '216770987204311970757578458345688433310',
        scaleName: '青少年生活事件量表（ASLEC）',
        existDimension: true,
      },
      {
        scaleId: '171078794030752718788397683584861023261',
        scaleName: '心理健康诊断测验-MHT（9-18岁）',
        existDimension: true,
      },
      {
        scaleId: '58951326521169223275402971414511971386',
        scaleName: '自杀意念自评量表（SIOSS)',
        existDimension: false,
      },
    ],
    scaleDuration: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    isWatchVisible: false,
    isWatchRepeatable: false,
    watchDuration: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    organizationType: 'Class',
    scaleVisible: false,
    scaleRepeatable: true,
    testCategory: ['scale'],
    type: 1,
    watchRepeatable: false,
    watchVisible: false,
    minutes: 0,
  },
  {
    taskId: '12546105780702147392610271163879713386',
    taskName: '2024秋季学生心理健康测评',
    taskDescription: '补',
    targetOrgs: [
      {
        organizationId: '53016180002399385329463141066113600508',
        organizationType: 'Class',
        organizationName: '15',
        allOrganizationName: '遂昌民族中学/7年级/15',
      },
    ],
    startTime: '2024-09-12',
    engTime: '2024-09-30',
    publishTime: '2024-09-12 14:58',
    accountUser: '程梦婷',
    taskStatus: 'Complete',
    centerPublished: false,
    isWatchPublished: true,
    isScalePublished: true,
    scales: [
      {
        scaleId: '72211754243244012242179197640157744221',
        scaleName: '心理健康诊断测验-MHT（9-18岁）',
        existDimension: true,
      },
      {
        scaleId: '191302730229585674755576068515762419096',
        scaleName: '阿森斯失眠量表',
        existDimension: false,
      },
      {
        scaleId: '224983089849029756447973987227278368981',
        scaleName: '艾森克人格问卷-EPQ（7-15岁）',
        existDimension: true,
      },
      {
        scaleId: '131888859484807520728441975828479973570',
        scaleName: '抑郁症筛查量表PHQ-9',
        existDimension: false,
      },
      {
        scaleId: '12829421782336524604265186412712675990',
        scaleName: '儿童感知压力量表（PSS-C）',
        existDimension: false,
      },
    ],
    scaleDuration: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    isWatchVisible: false,
    isWatchRepeatable: false,
    watchDuration: {
      hours: 0,
      minutes: 15,
      seconds: 0,
    },
    organizationType: 'Class',
    scaleVisible: false,
    scaleRepeatable: true,
    testCategory: ['bracelet', 'scale'],
    type: 3,
    watchRepeatable: false,
    watchVisible: false,
    minutes: 0,
  },
  {
    taskId: '263420772809721388108387280915400653518',
    taskName: '11',
    taskDescription: '11',
    targetOrgs: [
      {
        organizationId: '325476159629490868948491217764872904716',
        organizationType: 'Grade',
        organizationName: '测试',
        allOrganizationName: '遂昌民族中学/测试',
      },
    ],
    startTime: '2024-09-10',
    engTime: '2024-09-14',
    publishTime: '2024-09-10 14:11',
    accountUser: '程梦婷',
    taskStatus: 'Complete',
    centerPublished: false,
    isWatchPublished: true,
    isScalePublished: false,
    scales: [],
    scaleDuration: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    isWatchVisible: false,
    isWatchRepeatable: false,
    watchDuration: {
      hours: 0,
      minutes: 15,
      seconds: 0,
    },
    organizationType: 'Grade',
    scaleVisible: false,
    scaleRepeatable: false,
    testCategory: ['bracelet'],
    type: 2,
    watchRepeatable: false,
    watchVisible: false,
    minutes: 15,
  },
  {
    taskId: '127227366370140461377405916426663169264',
    taskName: '心理普测',
    taskDescription: '无',
    targetOrgs: [
      {
        organizationId: '224595221323037893289047606368718757127',
        organizationType: 'Grade',
        organizationName: '7年级',
        allOrganizationName: '遂昌民族中学/7年级',
      },
    ],
    startTime: '2024-09-09',
    engTime: '2024-10-31',
    publishTime: '2024-09-09 13:23',
    accountUser: '程梦婷',
    taskStatus: 'Complete',
    centerPublished: false,
    isWatchPublished: true,
    isScalePublished: true,
    scales: [
      {
        scaleId: '72211754243244012242179197640157744221',
        scaleName: '心理健康诊断测验-MHT（9-18岁）',
        existDimension: true,
      },
      {
        scaleId: '191302730229585674755576068515762419096',
        scaleName: '阿森斯失眠量表',
        existDimension: false,
      },
      {
        scaleId: '224983089849029756447973987227278368981',
        scaleName: '艾森克人格问卷-EPQ（7-15岁）',
        existDimension: true,
      },
      {
        scaleId: '131888859484807520728441975828479973570',
        scaleName: '抑郁症筛查量表PHQ-9',
        existDimension: false,
      },
      {
        scaleId: '12829421782336524604265186412712675990',
        scaleName: '儿童感知压力量表（PSS-C）',
        existDimension: false,
      },
    ],
    scaleDuration: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    isWatchVisible: false,
    isWatchRepeatable: true,
    watchDuration: {
      hours: 0,
      minutes: 15,
      seconds: 0,
    },
    organizationType: 'Grade',
    scaleVisible: false,
    scaleRepeatable: true,
    testCategory: ['bracelet', 'scale'],
    type: 3,
    watchRepeatable: true,
    watchVisible: false,
    minutes: 0,
  },
  {
    taskId: '59656469755552741861834445409389591197',
    taskName: '新生秋季入学心理普测',
    taskDescription:
      '为确保心理测试的有效性，现将有关事项告知大家，希望同学们到时候能如实填写，对自己的心理健康负责。\n       1.本次心理测评的目的是帮助同学们更好地理解自己、认识自己、完善自己，以便在今后能够扬长补短地迎接新生活，展现出更精彩的自我风貌。\n       2.心理测评的结果是严格保密存档、绝不公布。\n       3.测试请依据近一两周内的情况作答；答题时请同学们按照自己对题目的理解作答。\n       4.心理测评不是考试，答案没有对错之分，请同学们在答题时不要反复思考，也不要左顾右盼，更不必相互交流讨论。按照自己的第一反应真实回答即可。\n       5.由于同学们的答题速度不同，请较快做完的同学保持安静，切勿大声交流和喧哗，以免影响其他同学答题。',
    targetOrgs: [
      {
        organizationId: '325476159629490868948491217764872904716',
        organizationType: 'Grade',
        organizationName: '测试',
        allOrganizationName: '遂昌民族中学/测试',
      },
    ],
    startTime: '2024-09-09',
    engTime: '2024-09-10',
    publishTime: '2024-09-09 11:53',
    accountUser: '程梦婷',
    taskStatus: 'Complete',
    centerPublished: false,
    isWatchPublished: false,
    isScalePublished: true,
    scales: [
      {
        scaleId: '72211754243244012242179197640157744221',
        scaleName: '心理健康诊断测验-MHT（9-18岁）',
        existDimension: true,
      },
      {
        scaleId: '191302730229585674755576068515762419096',
        scaleName: '阿森斯失眠量表',
        existDimension: false,
      },
      {
        scaleId: '224983089849029756447973987227278368981',
        scaleName: '艾森克人格问卷-EPQ（7-15岁）',
        existDimension: true,
      },
      {
        scaleId: '131888859484807520728441975828479973570',
        scaleName: '抑郁症筛查量表PHQ-9',
        existDimension: false,
      },
      {
        scaleId: '12829421782336524604265186412712675990',
        scaleName: '儿童感知压力量表（PSS-C）',
        existDimension: false,
      },
    ],
    scaleDuration: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    isWatchVisible: false,
    isWatchRepeatable: false,
    watchDuration: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    organizationType: 'Grade',
    scaleVisible: false,
    scaleRepeatable: true,
    testCategory: ['scale'],
    type: 1,
    watchRepeatable: false,
    watchVisible: false,
    minutes: 0,
  },
  {
    taskId: '248915619814188856871158154031593665474',
    taskName: '5月测试-初二',
    taskDescription: '5月测试初二学生',
    targetOrgs: [
      {
        organizationId: '246911511619090473722508336693604963509',
        organizationType: 'Grade',
        organizationName: '9年级',
        allOrganizationName: '遂昌民族中学/9年级',
      },
    ],
    startTime: '2024-05-01',
    engTime: '2024-06-15',
    publishTime: '2024-05-17 07:10',
    accountUser: '程梦婷',
    taskStatus: 'Complete',
    centerPublished: false,
    isWatchPublished: true,
    isScalePublished: true,
    scales: [
      {
        scaleId: '264383488916008948586408931927481188133',
        scaleName: '阿森斯失眠量表',
        existDimension: false,
      },
      {
        scaleId: '147961753409794710209806592973271197255',
        scaleName: '艾森克人格问卷-EPQ（7-15岁）',
        existDimension: true,
      },
      {
        scaleId: '171078794030752718788397683584861023261',
        scaleName: '心理健康诊断测验-MHT（9-18岁）',
        existDimension: true,
      },
    ],
    scaleDuration: {
      hours: 0,
      minutes: 45,
      seconds: 0,
    },
    isWatchVisible: false,
    isWatchRepeatable: false,
    watchDuration: {
      hours: 0,
      minutes: 3,
      seconds: 0,
    },
    organizationType: 'Grade',
    scaleVisible: false,
    scaleRepeatable: true,
    testCategory: ['bracelet', 'scale'],
    type: 3,
    watchRepeatable: false,
    watchVisible: false,
    minutes: 45,
  },
  {
    taskId: '95745125570851241694398924387672480228',
    taskName: '5月测试-初一',
    taskDescription: '5月测试针对初一学生',
    targetOrgs: [
      {
        organizationId: '237140261651025170940322555243133326069',
        organizationType: 'Grade',
        organizationName: '8年级',
        allOrganizationName: '遂昌民族中学/8年级',
      },
    ],
    startTime: '2024-05-01',
    engTime: '2024-05-31',
    publishTime: '2024-05-17 07:03',
    accountUser: '程梦婷',
    taskStatus: 'Complete',
    centerPublished: false,
    isWatchPublished: true,
    isScalePublished: true,
    scales: [
      {
        scaleId: '264383488916008948586408931927481188133',
        scaleName: '阿森斯失眠量表',
        existDimension: false,
      },
      {
        scaleId: '147961753409794710209806592973271197255',
        scaleName: '艾森克人格问卷-EPQ（7-15岁）',
        existDimension: true,
      },
      {
        scaleId: '171078794030752718788397683584861023261',
        scaleName: '心理健康诊断测验-MHT（9-18岁）',
        existDimension: true,
      },
    ],
    scaleDuration: {
      hours: 0,
      minutes: 45,
      seconds: 0,
    },
    isWatchVisible: false,
    isWatchRepeatable: false,
    watchDuration: {
      hours: 0,
      minutes: 3,
      seconds: 0,
    },
    organizationType: 'Grade',
    scaleVisible: false,
    scaleRepeatable: true,
    testCategory: ['bracelet', 'scale'],
    type: 3,
    watchRepeatable: false,
    watchVisible: false,
    minutes: 45,
  },
])
const statusData = ref({
  In_Publishing: {
    color: '#3D7CFD',
    bgColor: 'rgba(61,124,253,0.1)',
    text: '发布中',
    icon: 'published',
  },
  Published: {
    color: '#3D7CFD',
    bgColor: 'rgba(61,124,253,0.1)',
    text: '已发布',
    icon: 'published',
  },
  Ongoing: {
    color: '#EDB932',
    bgColor: 'rgba(237,185,50,0.1)',
    text: '进行中',
    icon: 'ongoing',
  },
  Complete: {
    color: '#81BE07',
    bgColor: 'rgba(129,190,7,0.1)',
    text: '已完成',
    icon: 'completed',
  },
})

// 菜单跳转
const createTest = () => {
  uni.navigateTo({
    url: '/testingTasks/publishTasks/index',
  })
}
// 历史记录tab切换
const tabChange = (index) => {
  currentTab.value = index
}
// 查看作答情况跳转
const viewAnsweringStatus = (index) => {
  uni.navigateTo({
    url: '/testingTasks/historicalRecords/grade',
  })
}
onLoad((e) => {
  if (e.completeRelease && e.completeRelease === 'true') {
    tabActive.value = 'historicalRecords'
  }
})
/**
 * 单词首字母大写
 */
function capitalizeFirstLetter(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
</script>

<style lang="scss" scoped>
.testingTasks {
  width: 100vw;
  height: 100vh;
  background-color: #f4f5f7;
  overflow: scroll;
  padding: 16rpx 16rpx 0rpx 16rpx;
  box-sizing: border-box;
  .publish {
    width: 100%;
    height: 100%;
    padding: 128rpx 32rpx 0rpx 32rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .publishIcon {
      width: 504rpx;
      height: 360rpx;
      margin-bottom: 80rpx;
    }
    .prompt {
      width: 100%;
      height: 96rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 80rpx;
      & > view {
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 26rpx;
        color: #434343;
      }
    }
    .createTestButton {
      width: 100%;
      height: 80rpx;
      :deep(.u-btn) {
        height: 100% !important;
      }
    }
  }
  .historicalRecords {
    width: 100%;
    height: 100%;
    padding: 24rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .tabs {
      width: 100%;
      height: 74rpx;
      margin-bottom: 16rpx;
      :deep(.u-scroll-view) {
        height: 100%;
        .u-tab-item {
          height: 74rpx !important;
        }
      }
    }
    .historicalRecordsList {
      width: 100%;
      height: calc(100% - 114rpx);
      display: flex;
      flex-direction: column;
      overflow: scroll;
      .historicalRecordsItem {
        width: 100%;
        padding: 32rpx;
        box-sizing: border-box;
        margin-bottom: 24rpx;
        border-radius: 16rpx;
        &:last-child {
          margin-bottom: 0;
        }
        .top {
          width: 100%;
          .status {
            padding-left: 16rpx;
            height: 32rpx;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 28rpx;
            color: #3d7cfd;
            line-height: 32rpx;
            margin-bottom: 32rpx;
          }
          .title {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 32rpx;
            .iconBox {
              height: 48rpx;
              display: flex;
              align-items: center;
              .icon {
                width: 48rpx;
                height: 48rpx;
                margin-right: 8rpx;
                &:last-child {
                  margin-right: 0;
                }
              }
            }
            .text {
              height: 48rpx;
              font-family: PingFang SC, PingFang SC;
              font-weight: bold;
              font-size: 32rpx;
              color: #434343;
              line-height: 48rpx;
            }
          }
          .introduce {
            width: 100%;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 26rpx;
            color: #434343;
            line-height: 48rpx;
          }
        }
        .divider {
          width: 100%;
          height: 2rpx;
          background-color: #e5e5e5;
          margin: 32rpx 0rpx;
        }
        .information {
          width: 100%;
          padding: 8rpx 0rpx;
          box-sizing: border-box;
          margin-bottom: 32rpx;
          .row {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 16rpx;
            &:last-child {
              margin-bottom: 0;
            }
            .label {
              width: 182rpx;
              height: 32rpx;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 26rpx;
              color: #818181;
              line-height: 32rpx;
              text-align: right;
            }
            .value {
              width: calc(100% - 198rpx);
              min-height: 32rpx;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 26rpx;
              color: #000000;
              &.grade {
                font-weight: bold;
                display: flex;
                flex-wrap: wrap;
              }
              &.scaleList {
                display: flex;
                align-items: flex-start;
                flex-wrap: wrap;
                .scaleItem {
                  display: flex;
                  align-items: center;
                  .scaleName {
                    font-family: PingFang SC, PingFang SC;
                    font-weight: 400;
                    font-size: 26rpx;
                    color: #3d7cfd;
                    cursor: pointer;
                    white-space: nowrap;
                  }
                  .splitters {
                    width: 1px;
                    height: 18px;
                    background-color: #818181;
                    margin: 0 8px;
                  }
                  .scaleNum {
                    font-family: PingFang SC, PingFang SC;
                    font-weight: 400;
                    font-size: 16px;
                    color: #000000;
                    white-space: nowrap;
                  }
                  &:last-child {
                    margin-right: 8px;
                  }
                }
              }
              .edit {
                width: 18px;
                height: 18px;
                margin-left: 12px;
                cursor: pointer;
              }
            }
            &.power {
              display: flex;
              align-items: flex-start;
              .value {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
              }
            }
          }
        }
        .bottom {
          :deep(.u-btn) {
            margin-bottom: 16rpx !important;
            &:last-child {
              margin-bottom: 0rpx;
            }
          }
        }
      }
    }
  }
}
</style>
