<template >
    <view class="container">
        <view class="wrap">
          <view>
          <img src="http://hsyj.100eduonline.com/static/mini-images/bg.jpg" alt="bg" class="bg-image" />
          <img src="http://hsyj.100eduonline.com/static/mini-images/head1.jpeg" alt="head" class="head-image" />
          <h3 class="user-name">我是皮仔呀</h3>
          <view class="personal-center">
            <!-- <navigator url="/pages/center/signin/main"> -->
              <view class="item" @click="onClickSignin">
                <text :class="state == 0 ? 'timeRed' : 'time'">2次</text>
                <text class="content">我的签到</text>
              </view>
            <!-- </navigator> -->
            <!-- <navigator url="/pages/center/message/main"> -->
              <view class="item" @click="onClickMessage">
                <text :class="state == 1 ? 'timeRed' : 'time'">29次</text>
                <text class="content">我的留言</text>
              </view>
            <!-- </navigator> -->
            <!-- <navigator url="/pages/center/myactivity/main"> -->
              <view class="item"  @click="onClickActivity">
                <text :class="state == 2 ? 'timeRed' : 'time'">33次</text>
                <text class="content">我的活动</text>
              </view>
            <!-- </navigator> -->
            <!-- <navigator url="/pages/center/integral/main"> -->
              <view class="item" @click="onClickIntegral">
                <text :class="state == 3 ? 'timeRed' : 'time'">56次</text>
                <text class="content">我的积分</text>
              </view>
            <!-- </navigator> -->
          </view>
          <view class="center-sub">
            <mysignin v-if="isShowSignin" />
            <myactivity v-if="isShowActivity" />
            <myintegral v-if="isShowIntegral" />
            <mymessage v-if="isShowMessage" />
          </view>
          </view>
          <!-- <view class="center-sub">
            <mysignin v-if="isShowSignin" />
            <myactivity v-if="isShowActivity" />
            <myintegral v-if="isShowIntegral" />
            <mymessage v-if="isShowMessage" />
          </view> -->
        </view>
    </view>
</template>

<script>
import mysignin from './signin/index';
import myintegral from './integral/index';
import myactivity from './myactivity/index';
import mymessage from './message/index';

export default {
  components: {
    myactivity,
    mysignin,
    myintegral,
    mymessage
  },
  data () {
    return {
      userInfo: {},
      isShowIntegral: false,
      isShowMessage: false,
      isShowActivity: false,
      isShowSignin: true,
      state: 0
    };
  },
  onLoad () {
    this.userInfo = wx.getStorageSync('userInfo');
  },
  onShow () {
    this.userInfo = wx.getStorageSync('userInfo');
  },
  methods: {
    buttonClicked () {
      console.log('1')
    },
    onClickIntegral () {
      this.isShowIntegral = true;
      this.isShowMessage = false;
      this.isShowActivity = false;
      this.isShowSignin = false;
      this.state = 3
    },
    onClickMessage () {
      this.isShowIntegral = false;
      this.isShowMessage = true;
      this.isShowActivity = false;
      this.isShowSignin = false;
      this.state = 1
    },
    onClickActivity () {
      this.isShowIntegral = false;
      this.isShowMessage = false;
      this.isShowActivity = true;
      this.isShowSignin = false;
      this.state = 2
    },
    onClickSignin () {
      this.isShowIntegral = false;
      this.isShowMessage = false;
      this.isShowActivity = false;
      this.isShowSignin = true;
      this.state = 0
    },
    gotoSignin () {
      wx.navigateTo({url: '/pages/center/signin/main'})
    },
    gotoMessage () {
      wx.navigateTo({url: '/pages/center/message/main'})
    },
    gotoActicity () {
      wx.navigateTo({url: '/pages/center/myactivity/main'})
    },
    gotoIntegral () {
      wx.navigateTo({url: '/pages/center/integral/main'})
    }
  }
};
</script>

<style scoped>
page {
  height: 100%;
  width: 100%;
}
.container {
  background: #ccc;
  height: auto;
  overflow: auto;
  width: 100%;
  position: relative;
}
.wrap {
  width: inherit;
  position: relative;
}
.bg-image {
  width: 100%;
  height: 180px;
}
.head-image{
  width: 70px;
  height: 70px;
  border-radius:50%;
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translate(-50%, 50%);
}
.user-name{
  border-radius:50%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: 15px;
  color: #fff;
}
.personal-center{
  width: 80%;
  /* height: 96px; */
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: #fff;
  margin: 10px auto;
  padding: 25rpx 40rpx 5rpx 40rpx;
  border-radius: 8px;
  /* box-shadow: 3px 3px 10px #c3c3c3; */
  display: flex;
  justify-content: space-around;
}
.item {
  height: 100%;
}
.time {
  display: block;
  width: 50px;
  text-align: center;
  margin: 0 auto;
  color: #fff;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: #888;
}
.timeRed {
  display: block;
  width: 50px;
  text-align: center;
  margin: 0 auto;
  color: #fff;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: #d25136;
}
.content {
  line-height: 40px;
}
.mySelf_group{
  margin-top:80px;
  width: 100%;
}
.center-sub{
  width:90%;
  border-radius:50%;
  position:absolute;
  margin-top:16%;
  left:5%;
  margin-bottom:10px;
}
.signin-page ._view{
  border-radius: 16rpx;
}
.wux-badge{
    border:1px solid #bbb;
    padding:4px 10px;
    border-radius:10rpx;
}
.wux-tabs__tab--current .wux-badge{
    color: #d25136;
    border:1px solid #d25136;
}
</style>
