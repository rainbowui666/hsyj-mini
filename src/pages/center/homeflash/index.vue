<template >
  <view class="login">
    <view v-if="showFlash">
      <img class="img_flash" :src="homeFlash">
    </view>
    <view v-else>
      <img class="img_flash" :src="loginBg">
      <button
        type="default"
        plain="true"
        open-type="getUserInfo"
        @getuserinfo="onConfirm"
        class="login_btn"
        >登录</button>
      <span class="user-clear" @click="noLogin" style="border: 0px none #ffffff!important">随便逛逛>>></span>
    </view>
  </view>
</template>

<script>
import api from '@/utils/api';

export default {
  data () {
    return {
      showFlash: true,
      userInfo: {},
      homeFlash: 'https://hsstatic.sufe.edu.cn/mini-images/into_flash.gif',
      loginBg: 'https://hsstatic.sufe.edu.cn/mini-images/login_index.png'
    };
  },
  mounted () {
    setTimeout(() => {
      this.showFlash = false;
      // wx.switchTab({
      //   url: '/pages/map/main'
      // });
    }, 1600)
  },
  methods: {
    onConfirm (event) {
      wx.login({
        success: async res => {
          let wxUserInfo = event.mp.detail.userInfo;
          wxUserInfo.code = res.code;
          wx.setStorageSync('wxUserInfo', wxUserInfo)
          const userInfo = await api.indexLogin(wxUserInfo);
          // wx.removeStorageSync('userInfo')
          wx.setStorageSync('token', userInfo.data.token)
          wx.setStorageSync('userInfo', userInfo.data.userInfo)
          let token = wx.getStorageSync('token') || false;
          if (token) {
            wx.switchTab({
              url: '/pages/map/main'
            });
          }
        }
      })
    },
    noLogin (event) {
      wx.switchTab({
        url: '/pages/map/main'
      });
    }
  }
};
</script>

<style>
page {
  background: #f4f4f4;
  min-height: 100%;
}

.img_flash{
  width: 100%;
  height: 100vh;
}
.login_btn{
  position: absolute;
  width: 200px;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  color: #ffff!important;
  border: 1px solid #ffffff!important;
}
.user-clear{
  position:absolute;
  width: 200px;
  left: 50%;
  bottom: 5%;
  margin-top:10px;
  transform: translateX(-50%);
  font-size:26rpx;
  color:#fff;
  border: 0px none #ffffff;
  background-color:transparent;
  text-align:center;
}
</style>
