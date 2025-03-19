<template>
  <view class="accountManagement">
    <view class="tabsBox">
      <view class="tabs">
        <u-tabs
          :is-scroll="false"
          :list="tabsList"
          v-model="currentTab"
        ></u-tabs>
      </view>
    </view>
    <view class="accountList">
      <view class="accountItem">
        <view class="header">
          <view class="type">心理教师</view>
          <view class="account">root_xihuxiaoxue</view>
          <view class="operate">
            <image
              :src="getImgUrl(`/management/accountManagement/disabled.svg`)"
              @click="accountDisabled"
            ></image>
            <image
              :src="getImgUrl(`/management/accountManagement/edit.svg`)"
            ></image>
            <image
              :src="getImgUrl(`/management/accountManagement/delete.svg`)"
              @click="accountDelete"
            ></image>
          </view>
        </view>
        <view class="information">
          <view class="row">
            <view class="label">用户姓名：</view>
            <view class="value">包石楠</view>
          </view>
          <view class="row">
            <view class="label">联系方式：</view>
            <view class="value">19222818290</view>
          </view>
          <view class="row">
            <view class="label">绑定单位：</view>
            <view class="value">杭州西湖小学</view>
          </view>
          <view class="row status">
            <view class="label">账号状态：</view>
            <view class="value normal">正常</view>
          </view>
        </view>
      </view>
      <view class="accountItem">
        <view class="header">
          <view class="type">心理教师</view>
          <view class="account">root_xihuxiaoxue</view>
          <view class="operate">
            <image
              :src="getImgUrl(`/management/accountManagement/disabled.svg`)"
            ></image>
            <image
              :src="getImgUrl(`/management/accountManagement/edit.svg`)"
            ></image>
            <image
              :src="getImgUrl(`/management/accountManagement/delete.svg`)"
            ></image>
          </view>
        </view>
        <view class="information">
          <view class="row">
            <view class="label">用户姓名：</view>
            <view class="value">包石楠</view>
          </view>
          <view class="row">
            <view class="label">联系方式：</view>
            <view class="value">19222818290</view>
          </view>
          <view class="row">
            <view class="label">绑定单位：</view>
            <view class="value">杭州西湖小学</view>
          </view>
          <view class="row disabled">
            <view class="label">账号状态：</view>
            <view class="value normal">正常</view>
          </view>
        </view>
      </view>
    </view>
    <image
      class="addAccount"
      :src="getImgUrl(`/management/accountManagement/add.svg`)"
      @click="editAccount"
    ></image>
    <commonModal
      ref="disabledModal"
      title="禁用提醒"
      content="确认禁用该账号吗？"
      confirm-text="禁用"
      cancel-text="取消"
      confirm-color="#FF3A29"
      cancel-color="#3D7CFD"
    />
    <commonModal
      ref="deleteModal"
      title="删除提醒"
      content="确认删除该账号吗？"
      confirm-text="禁用"
      cancel-text="取消"
      confirm-color="#FF3A29"
      cancel-color="#3D7CFD"
    />
  </view>
</template>

<script setup name="accountManagement">
const currentTab = ref(0)
const tabsList = ref([
  {
    name: '心理教师',
  },
  {
    name: '班主任',
  },
  {
    name: '预约管理员',
  },
  {
    name: '学校管理员',
  },
])
const disabledModal = ref(null)
const deleteModal = ref(null)
const accountDisabled = () => {
  disabledModal.value.openWithPromise().then((confirmed) => {
    if (confirmed) {
      console.log('用户点击了【确定】')
    } else {
      console.log('用户点击了【取消】')
    }
  })
}
const accountDelete = () => {
  deleteModal.value.openWithPromise().then((confirmed) => {
    if (confirmed) {
      console.log('用户点击了【确定】')
    } else {
      console.log('用户点击了【取消】')
    }
  })
}
// 新增|修改
const editAccount = () => {
  uni.navigateTo({
    url: `/management/accountManagement/accountEdit`,
  })
}
</script>

<style lang="scss" scoped>
.accountManagement {
  width: 100vw;
  height: 100vh;
  background-color: #f4f5f7;
  display: flex;
  flex-direction: column;
  position: relative;
  .tabsBox {
    width: 100%;
    height: 74rpx;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: #ffffff;
    margin-bottom: 12rpx;
    .tabs {
      width: 100%;
      z-index: 12;
      height: 74rpx;
      :deep(.u-scroll-view) {
        height: 100%;
        .u-tab-item {
          height: 74rpx !important;
        }
      }
    }
  }
  .accountList {
    width: 100%;
    height: calc(100% - 86rpx);
    .accountItem {
      width: 100%;
      background: #ffffff;
      margin-bottom: 8rpx;
      display: flex;
      flex-direction: column;
      padding: 32rpx;
      box-sizing: border-box;
      &:last-child {
        margin-bottom: 0rpx;
      }
      .header {
        width: 100%;
        height: 64rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40rpx;
        .type {
          width: 112rpx;
          height: 48rpx;
          background-color: #3d7cfd;
          border-radius: 8rpx;
          font-family: PingFang SC, PingFang SC;
          font-weight: 500;
          font-size: 24rpx;
          color: #ffffff;
          line-height: 48rpx;
          text-align: center;
        }
        .account {
          width: calc(100% - 336rpx);
          font-family: PingFang SC, PingFang SC;
          font-weight: bold;
          font-size: 32rpx;
          color: #434343;
        }
        .operate {
          & > image {
            width: 64rpx;
            height: 64rpx;
          }
        }
      }
      .information {
        .row {
          width: 100%;
          height: 36rpx;
          display: flex;
          align-items: center;
          margin-bottom: 24rpx;
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
            width: calc(100% - 130rpx);
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 26rpx;
            color: #434343;
          }
          &.status {
            .value {
              font-weight: 500;
              font-size: 28rpx;
              &.normal {
                color: #81be07;
              }
              &.disabled {
                color: #ff3a29;
              }
            }
          }
        }
      }
    }
  }
  .addAccount {
    width: calc(96rpx * (48 / 26.18));
    height: calc(96rpx * (48 / 26.18));
    position: absolute;
    bottom: 48rpx;
    right: 48rpx;
    cursor: pointer;
  }
}
</style>
