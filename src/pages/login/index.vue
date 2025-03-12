<template>
  <view class="login">
    <view class="promptBox">
      <view class="text welcome">欢迎登录</view>
      <view class="text title">心语互动-校园平台</view>
    </view>
    <view class="loginForm">
      <u-form
        labelPosition="left"
        :model="queryForm"
        :rules="rules"
        ref="uForm"
        labelWidth="150rpx"
        labelAlign="right"
      >
        <view class="formLabel address">
          <view class="iconImg">
            <image :src="getImgUrl('/login/address.png')"></image>
          </view>
          <u-form-item label="" prop="account" borderBottom style="width: 100%">
            <uni-data-picker
              :localdata="dataTree"
              v-model="queryForm.address"
              :placeholder="'请选择'"
              :popup-title="'请选择区域'"
            >
            </uni-data-picker>
          </u-form-item>
        </view>
        <view class="formLabel">
          <view class="iconImg">
            <image :src="getImgUrl('/login/account.png')"></image>
          </view>
          <u-form-item label="" prop="account" borderBottom style="width: 100%">
            <u-input
              v-model="queryForm.account"
              :border="false"
              placeholder="请输入账号"
            ></u-input>
          </u-form-item>
        </view>
        <view class="formLabel">
          <view class="iconImg">
            <image :src="getImgUrl('/login/password.png')"></image>
          </view>
          <u-form-item
            label=""
            prop="password"
            borderBottom
            style="width: 100%"
          >
            <u-input
              v-model="queryForm.password"
              type="password"
              :border="false"
              placeholder="请输入密码"
            ></u-input>
          </u-form-item>
        </view>
      </u-form>
    </view>
    <view class="loginButton">
      <u-button :custom-style="btnCustom" @click="handleLogin">登录</u-button>
    </view>
  </view>
</template>

<script setup name="login">
const data = new reactive({
  queryForm: {
    address: '1-2',
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
const { queryForm, rules } = toRefs(data)
const dataTree = ref([
  {
    text: '一年级',
    value: '1-0',
    children: [
      {
        text: '1.1班',
        value: '1-1',
      },
      {
        text: '1.2班',
        value: '1-2',
      },
    ],
  },
  {
    text: '二年级',
    value: '2-0',
    children: [
      {
        text: '2.1班',
        value: '2-1',
      },
      {
        text: '2.2班',
        value: '2-2',
      },
    ],
  },
  {
    text: '三年级',
    value: '3-0',
    disable: true,
  },
])
function handleLogin(item) {
  uni.switchTab({
    url: '/pages/psychologicalEducationWork/index',
  })
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #f4f5f7;
  box-sizing: border-box;
  padding: 96rpx 80rpx 48rpx 80rpx;
  .promptBox {
    width: 100%;
    height: 128rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 64rpx;
    .text {
      width: 100%;
      height: 56rpx;
      font-family: PingFang SC, PingFang SC;
      font-weight: 800;
      font-size: 40rpx;
      color: #000000;
      line-height: 56rpx;
      text-align: center;
    }
  }
  .loginForm {
    width: 100%;
    height: 352rpx;
    margin-bottom: 64rpx;
    .u-form {
      .formLabel {
        width: 100%;
        height: 96rpx;
        background-color: #ffffff;
        border-radius: 16rpx;
        padding: 0rpx 24rpx 0rpx 64rpx;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 32rpx;
        border: 1rpx solid #c7c7c7;
      }

      .u-form-item {
        flex: 1;
        position: relative;
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
      .iconImg {
        width: 40rpx;
        height: 40prx;
        position: absolute;
        top: 54%;
        left: 26rpx;
        transform: translateY(-50%);
        z-index: 9999;
        image {
          width: 40rpx;
          height: 40rpx;
        }
      }
    }
  }
  .loginButton {
    width: 100%;
    height: 96rpx;
  }
}
</style>
