<template >
  <view class="login">
    <view v-if="showFlash">
      <img class="img_flash" :src="homeFlash">
    </view>
    <view v-else>
      <img class="img_flash" :src="loginBg">
      <button
        plain="true"
        open-type="getUserInfo"
        @getuserinfo="onConfirm"
        class="login_btn"
        >登录</button>
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
      homeFlash: 'https://hsyj.100eduonline.com/static/mini-images/into_flash.gif',
      loginBg: 'https://hsyj.100eduonline.com/static/mini-images/login_index.png'
    };
  },
  mounted () {
    setTimeout(() => {
      this.showFlash = false;
      // wx.switchTab({
      //   url: '/pages/map/main'
      // });
    }, 2000)
  },
  methods: {
    onConfirm (event) {
      wx.login({
        success: async res => {
          this.userInfo = event.mp.detail.userInfo;
          this.userInfo.code = res.code;
          const userInfo = await api.indexLogin(this.userInfo);
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
</style>
