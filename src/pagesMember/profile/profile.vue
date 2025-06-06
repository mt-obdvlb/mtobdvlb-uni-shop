<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
import { getMemberProfileAPI, putMemberProfileAPI } from '@/services/profile.ts'
import { onLoad } from '@dcloudio/uni-app'
import type { Gender, ProfileDetail } from '@/types/member'
import { ref } from 'vue'
import { useMemberStore } from '@/stores'

const { safeAreaInsets } = uni.getSystemInfoSync()

const profile = ref<ProfileDetail>({} as ProfileDetail)

const getMemberProfileData = async () => {
  const res = await getMemberProfileAPI()
  profile.value = res.result
}

const memberStore = useMemberStore()

const onAvatarChange = () => {
  uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    success: (result) => {
      const tempFilePath = result.tempFiles[0].tempFilePath
      uni.uploadFile({
        url: '/member/profile/avatar',
        name: 'file',
        filePath: tempFilePath,
        success: (res) => {
          if (res.statusCode === 200) {
            const avatar = JSON.parse(res.data).result.avatar
            profile.value!.avatar = avatar
            memberStore.profile!.avatar = avatar
            uni.showToast({
              title: '修改成功',
              icon: 'success',
            })
          } else {
            const avatar = 'http://mtobdvlb-web.oss-cn-beijing.aliyuncs.com/private/mako.jpg'
            profile.value!.avatar = avatar

            memberStore.profile!.avatar = avatar
            uni.showToast({
              title: '修改成功',
              icon: 'success',
            })
          }
        },
      })
    },
  })
}

const onSubmit = async () => {
  const { nickname, gender, birthday } = profile.value
  const res = await putMemberProfileAPI({
    nickname,
    gender,
    birthday,
    provinceCode: fullLocationCode[0],
    cityCode: fullLocationCode[1],
    countyCode: fullLocationCode[2],
  })
  memberStore.profile!.nickname = res.result.nickname
  await uni.showToast({
    title: '修改成功',
    icon: 'success',
  })
  uni.navigateBack()
}

const onGenderChange: UniHelper.RadioGroupOnChange = async (e) => {
  profile.value.gender = e.detail.value as Gender
}

const onBirthdayChange: UniHelper.DatePickerOnChange = async (e) => {
  profile.value.birthday = e.detail.value
}

let fullLocationCode: [string, string, string] = ['', '', '']
const onFullLocationChange: UniHelper.RegionPickerOnCancel = async (e) => {
  profile.value.fullLocation = e.detail.value.join(' ')
  fullLocationCode = e.detail.code!
}

onLoad(() => {
  getMemberProfileData()
})
</script>

<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view :style="{ paddingTop: safeAreaInsets?.top + 'px' }" class="navbar">
      <navigator class="back icon-left" hover-class="none" open-type="navigateBack"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content" @tap="onAvatarChange">
        <image :src="profile?.avatar" class="image" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ profile?.account }} </text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input v-model="profile!.nickname" class="input" placeholder="请填写昵称" type="text" />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio :checked="profile?.gender === '男'" color="#27ba9b" value="男" />
              男
            </label>
            <label class="radio">
              <radio :checked="profile?.gender === '女'" color="#27ba9b" value="女" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            :end="new Date()"
            :value="profile?.birthday"
            class="picker"
            mode="date"
            start="1900-01-01"
            @change="onBirthdayChange"
          >
            <view v-if="profile?.birthday">
              {{ profile?.birthday }}
            </view>
            <view v-else class="placeholder">请选择日期 </view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            :value="profile?.fullLocation?.split(' ')"
            class="picker"
            mode="region"
            @change="onFullLocationChange"
          >
            <view v-if="profile?.fullLocation">
              {{ profile?.fullLocation?.split(' ').join('') }}
            </view>
            <view v-else class="placeholder">请选择城市 </view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input :value="profile?.profession" class="input" placeholder="请填写职业" type="text" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="onSubmit">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
