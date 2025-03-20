<template>
  <view class="accountEdit">
    <view class="formBox">
      <u-form :model="form" ref="accountRef">
        <u-form-item
          label="账号角色："
          required
          label-width="150rpx"
          class="firstItem"
        >
          <commonSelect
            v-model="form.role"
            :list="roleList"
            :placeholder="'请选择账号角色'"
          ></commonSelect>
        </u-form-item>
        <u-form-item label="账号名称：" required label-width="150rpx"
          ><u-input v-model="form.account" placeholder="请输入账号名称"
        /></u-form-item>
        <u-form-item label="账号密码：" required label-width="150rpx"
          ><u-input v-model="form.password" placeholder="请输入账号密码"
        /></u-form-item>
        <u-form-item label="用户性别：" required label-width="150rpx">
          <commonSelect
            v-model="form.gender"
            :list="genderList"
            :placeholder="'请选择用户性别'"
          ></commonSelect>
        </u-form-item>
        <u-form-item label="用户姓名：" required label-width="150rpx"
          ><u-input v-model="form.userName" placeholder="请输入用户姓名"
        /></u-form-item>
        <u-form-item label="所属班级：" required label-width="150rpx"
          ><u-input v-model="form.orgIds" placeholder="请选择所属班级"
        /></u-form-item>
        <u-form-item label="联系方式：" required label-width="150rpx"
          ><u-input v-model="form.phone" placeholder="请输入联系方式"
        /></u-form-item>
      </u-form>
    </view>
    <view class="submitButton">
      <u-button :custom-style="btnCustom" @click="handleLogin">确定</u-button>
    </view>
  </view>
</template>

<script setup name="accountEdit">
const accountRef = ref(null)
const data = new reactive({
  form: {
    account: undefined,
    password: '123456',
    userName: undefined,
    orgIds: [],
    gender: undefined,
    role: undefined,
    phone: undefined,
  },
  rules: {
    account: [
      {
        required: true,
        message: '账号名称不能为空',
        trigger: ['change', 'blur'],
      },
    ],
    password: [
      {
        required: true,
        message: '账号密码不能为空',
        trigger: ['change', 'blur'],
      },
    ],
    role: [
      {
        required: true,
        message: '请选择账号角色',
        trigger: ['change', 'blur'],
      },
    ],
    userName: [
      {
        required: true,
        message: '用户姓名不能为空',
        trigger: ['change', 'blur'],
      },
    ],
    gender: [
      {
        required: true,
        message: '请选择用户性别',
        trigger: ['change', 'blur'],
      },
    ],
    orgIds: [
      {
        required: true,
        message: '请选择绑定单位',
        trigger: ['change', 'blur'],
      },
    ],
    phone: [
      {
        required: true,
        message: '请输入联系方式',
        trigger: ['change', 'blur'],
      },
    ],
  },
})
const { form, rules } = toRefs(data)
const roleOpen = ref(false)
const roleList = ref([])
const genderOpen = ref(false)
const genderList = ref([
  {
    value: 'Male',
    label: '男',
  },
  {
    value: 'Female',
    label: '女',
  },
])
// 设置验证规则
onMounted(() => {
  accountRef.value.setRules(rules)
})
</script>

<style lang="scss" scoped>
.accountEdit {
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14rpx 32rpx 64rpx 32rpx;
  box-sizing: border-box;
  :deep(.u-form) {
    padding: 0rpx 16rpx;
    box-sizing: border-box;
    .firstItem {
      .u-form-item {
        border-top: 2rpx solid #e5e5e5;
      }
    }
    .u-form-item {
      height: 160rpx;
      line-height: 160rpx;
      padding: 0;
      border-bottom: 2rpx solid #e5e5e5;

      .u-form-item__body {
        display: flex;
        align-items: center;
        .u-form-item--left {
          width: 140rpx !important;
          .u-form-item--left__content {
            padding-right: 16rpx;
            .u-form-item--left__content__label {
              font-family: PingFang SC, PingFang SC;
              font-weight: 500;
              font-size: 28rpx;
              color: #000000;
            }
          }
        }
        .u-form-item--right {
          height: 100%;
          .u-form-item--right__content {
            height: 100%;
            .u-form-item--right__content__slot {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              :deep(.commonSelect) {
                width: 100%;
                height: 100%;
              }
              .u-input {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
