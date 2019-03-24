<template >
  <view class="login">
    <view class="login-list">
      <img class="img" :src="header" style="height:312px">
      <view class="userinfo">
        <view class="userinfo-tel">
          <input maxlength="11" type="number" placeholder="请输入手机号" @input="bindInput">
        </view>
        <view class="userinfo-code">
          <input type="number" placeholder="短信验证码" @input="bindCode">
          <button plain="true" class="valdationBtn"
            v-if="showtime===null&&!showSpin"
            @click="getPhoneCode"
            :disabled="codeDisabled"
          >获取验证码</button>
          <div v-if="showtime!=null" class="captcha-button">{{showtime}}</div>
          <wux-spin  v-if="showSpin" wux-class="spin" size="default" />
        </view>
        <view class="userinfo-confirm">
          <button
            v-if="canIUse"
            plain="true"
            :disabled="userInfo2.disabled"
            open-type="getUserInfo"
            @getuserinfo="onConfirm"
            @class="goLoginBtn"
          >进入小程序</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import api from '@/utils/api';
export default {
  data () {
    return {
      timeCounter: null,
      showtime: null,
      spinning: true,
      showSpin: false,
      userInfo2: {
        disabled: true
      },
      header: 'https://rainbow.ebaotech.com/static/rainbow/image/login_header.jpg',
      userInfo: {},
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    };
  },
  onShow () {
    this.userInfo = wx.getStorageSync('userInfo');
    this.userInfo2.disabled = true;
    this.userInfo2.phone = null;
    this.showtime = null;
    this.timeCounter = null;
  },
  methods: {
    countDownText (s) {
      this.showtime = `${s}s`;
      this.showSpin = false
    },
    // 倒计时 60秒 不需要很精准
    countDown (times) {
      const self = this;
      // 时间间隔 1秒
      const interval = 1000;
      let count = 0;
      self.timeCounter = setTimeout(countDownStart, interval);
      function countDownStart () {
        if (self.timeCounter == null) {
          return false;
        }
        count++;
        self.countDownText(times - count + 1);
        if (count > times) {
          clearTimeout(self.timeCounter);
          self.showtime = null;
        } else {
          self.timeCounter = setTimeout(countDownStart, interval);
        }
      }
    },
    async onConfirm (event) {
      if (wx.canIUse('button.open-type.getUserInfo')) {
      } else {
        wx.showToast({
          title: '请升级微信版本',
          icon: 'none',
          duration: 2000,
          mask: true
        });
      }
      this.userInfo = event.mp.detail.userInfo;

      if (event.mp.detail.rawData) {
        wx.login({
          success: async res => {
            this.userInfo.code = res.code;
            this.userInfo.phone = this.userInfo2.phone;
            const userInfoObj = await api.login(this.userInfo);
            wx.setStorageSync('token', userInfoObj.auth.token);
            wx.setStorageSync('userInfo', userInfoObj.user);
            wx.switchTab({
              url: '/pages/center/main'
            });
          }
        });
      } else {
        wx.showModal({
          title: '提示',
          content: '授权后才能进行后续操作',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
            } else {
              console.log('用户点击取消');
            }
          }
        });
        this.userInfo2 = {};
      }
    },
    // 点击登陆
    goLogin (event) {
      this.userInfo = event.mp.detail.userInfo;
    },
    bindInput (e) {
      this.userInfo2.phone = e.mp.detail.value;
    },
    bindCode (e) {
      this.userInfo2.code = e.mp.detail.value;
      if (this.userInfo2.code.length === 6) {
        this.checkCode();
      }
    },
    async checkCode () {
      const res = await api.validateVerification({
        phoneNumber: '+86' + this.userInfo2.phone,
        code: this.userInfo2.code
      });
      if (res.verified) {
        this.userInfo2.disabled = false;
      } else {
        wx.showToast({
          title: '验证码错误',
          icon: 'none',
          duration: 1000,
          mask: true
        });
      }
    },
    async getPhoneCode () {
      if (!this.userInfo2.phone) {
        wx.showToast({
          title: '请填写手机号',
          icon: 'none',
          duration: 1000,
          mask: true
        });
      } else {
        this.showSpin = true
        this.countDown(59);
        const res = await api.getVerification({
          phoneNumber: '+86' + this.userInfo2.phone
        });
        if (res.successful) {
          wx.setStorageSync('token', res.token);
        } else {
          wx.showToast({
            title: '验证码发送失败',
            icon: 'none',
            duration: 1000,
            mask: true
          });
        }
      }
    }
  }
};
</script>

<style>
page {
  background: #f4f4f4;
  min-height: 100%;
}

.container {
  background: #f4f4f4;
  min-height: 100%;
}

.login-list {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #fff;
  border-top: 1px solid #e1e1e1;
}

.userinfo-tel,
.userinfo-code {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  border: solid 1px #d6d6d6;
  border-radius: 4px;
}
.userinfo-tel > input,
.userinfo-code > input{
  line-height:48px;
  height:48px;
  font-size:14px;
  justify-content:space-between;
  width:70%;
  padding-left:36px;
}
.userinfo-tel > input
{
      background: url('../../../../static/images/phone.png');
      background-repeat: no-repeat;
      background-size: 8%;
      background-position: 10px;
}
.userinfo-code > input
{
      background: url('../../../../static/images/validate.png');
      background-repeat: no-repeat;
      background-size: 8%;
      background-position: 10px;
}
.userinfo-tel button,
.userinfo-code button{
  border:none;
  color:#278cec;
  height:24px;
  margin:12px 0 0 0;
  align-items:center;
  padding:4px 0;
  border-left:solid 1px #d6d6d6;
  line-height:24px;
  padding:0;
  width:30%;
  font-size:14px;
  text-align:right;
  padding:0 12px;
  border-radius:0;
  flex-shrink:0;
}
.captcha-button{font-size:14px;line-height:48px;padding-right:10px;width:50%;text-align: right}
.spin{
  margin-top:15px;
  padding-right:10px
}
.userinfo-tel button{border:none;}
.login-list > image{
width:100%;
}

.userinfo-confirm{
  width:100%;
}

.userinfo-confirm button{
  border:none;
  margin:40px 20px 20px 20px;
  color:white;
  height:48px;
  line-height:48px;
  background: #26ab28;
}
.userinfo-code button{
  color: #ff9a14;
}

</style>
