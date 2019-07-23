<template >
    <view class="container">
        <view class="center-box">
          <view>
          <img src="https://cdn.100eduonline.com/mini-images/bg.jpg" alt="bg" class="bg-image" />
          <img :src="userHeadImg" alt="head" class="head-image" @click="goToMyInfo"/>
          <span class="user-clear" @click="exitAndClear">登出</span>
          <h3 class="user-name">{{userName}}</h3>
          <view class="personal-center">
            <!-- <navigator url="/pages/center/signin/main"> -->
              <view class="item" @click="onClickSignin">
                <text :class="state == 0 ? 'timeRed' : 'time'">{{signinCount}}次</text>
                <text class="content">我的签到</text>
              </view>
            <!-- </navigator> -->
            <!-- <navigator url="/pages/center/message/main"> -->
              <view class="item" @click="onClickMessage">
                <text :class="state == 1 ? 'timeRed' : 'time'">{{discussCount}}次</text>
                <text class="content">我的留言</text>
              </view>
            <!-- </navigator> -->
            <!-- <navigator url="/pages/center/myactivity/main"> -->
              <view class="item"  @click="onClickActivity">
                <text :class="state == 2 ? 'timeRed' : 'time'">{{activityCount}}次</text>
                <text class="content">我的活动</text>
              </view>
            <!-- </navigator> -->
            <!-- <navigator url="/pages/center/integral/main"> -->
              <view class="item" @click="onClickIntegral">
                <text :class="state == 3 ? 'timeRed' : 'time'">{{integralCount}}次</text>
                <text class="content">我的积分</text>
              </view>
            <!-- </navigator> -->
          </view>
          <view class="center-sub" v-if="isShowSignin || isShowActivity || isShowIntegral">
            <mysignin v-if="isShowSignin" />
            <myactivity v-if="isShowActivity" />
            <myintegral v-if="isShowIntegral" :signin="signinCount" :discuss="discussCount" :activity="activityCount"/>
          </view>
          </view>
          <view class="center-sub-new" v-if="isShowMessage">
            <mymessage v-if="isShowMessage" />
          </view>
        </view>
    </view>
</template>

<script>
import mysignin from './signin/index';
import myintegral from './integral/index';
import myactivity from './myactivity/index';
import mymessage from './message/index';
import api from '@/utils/api';
// import dayjs from 'dayjs';

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
      state: 0,
      pageindex: 1,
      pagesize: 5,
      signinCount: 0,
      discussCount: 0,
      activityCount: 0,
      integralCount: 0,
      userName: '我是皮仔呀',
      userHeadImg: 'https://cdn.100eduonline.com/mini-images/user_head.png'
    };
  },
  onLoad () {
    this.userInfo = wx.getStorageSync('userInfo') || {};
    if (this.userInfo.stuNo === 0 || this.userInfo.stuNo === null) {
      wx.navigateTo({
        url: '/pages/center/login/main'
      })
    }
  },
  async onShow () {
    this.userInfo = wx.getStorageSync('userInfo');
    // },
    // async mounted () {
    this.userName = this.userInfo.studentName;
    this.userHeadImg = this.userInfo.photo;
    const signinRes = await api.getMySigninList({
      pageindex: this.pageindex,
      pagesize: this.pagesize,
      studentid: this.userInfo.studentID
    });
    this.signinCount = signinRes.data ? signinRes.data.counta : 0;

    const discussRes = await api.getMyDiscussList({
      pageindex: this.pageindex,
      pagesize: this.pagesize,
      studentid: this.userInfo.studentID
    });
    this.discussCount = discussRes.data ? discussRes.data.count : 0;

    const activityRes1 = await api.getMyActivityList({
      pageindex: this.pageindex,
      pagesize: this.pagesize,
      studentid: wx.getStorageSync('userInfo').studentID,
      hasjoin: 0
    });
    const activityRes2 = await api.getMyActivityList({
      pageindex: this.pageindex,
      pagesize: this.pagesize,
      studentid: wx.getStorageSync('userInfo').studentID,
      hasjoin: 1
    });
    const activityRes3 = await api.getMyActivityList({
      pageindex: this.pageindex,
      pagesize: this.pagesize,
      studentid: wx.getStorageSync('userInfo').studentID,
      hasjoin: 2
    });
    let ac1 = activityRes1.data ? activityRes1.data.count : 0;
    let ac2 = activityRes2.data ? activityRes2.data.count : 0;
    let ac3 = activityRes3.data ? activityRes3.data.count : 0;
    // this.activityCount = activityRes.data ? activityRes.data.count : 0;
    // const allCount = await api.getMyCount({
    //   studentid: wx.getStorageSync('userInfo').studentID,
    //   shstate: 1
    // })
    // this.signinCount = allCount.data[0].attentionSceneryTimes
    // this.discussCount = allCount.data[0].attentionDiscuss
    this.activityCount = ac1 + ac2 + ac3;
    this.integralCount = this.signinCount + this.discussCount + this.activityCount;
  },
  methods: {
    exitAndClear () {
      wx.clearStorage({
        success: res => {
          wx.navigateTo({ url: './homeflash/main' })
        }
      })
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
    },
    goToMyInfo () {
      wx.navigateTo({ url: '/pages/center/login/main?isMyselfInfo=true' })
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
  /* overflow-y: auto; */
  /* overflow-x: hidden; */
  width: 100%;
  position: relative;
}
.center-box {
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
.user-clear{
  position:absolute;
  top:10px;
  right:20px;
  font-size:26rpx;
  color:#fff;
  border-bottom: #fff solid 1px;
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
  width:100%;
  border-radius:16rpx;
  position:absolute;
  margin-top:16%;
  /* left:5%;
  margin-bottom:10px; */
  /* overflow: hidden; */
}
.center-sub-new{
  width:100%;
  border-radius:16rpx;
  position:absolute;
  margin-top:16%;
  /* left:5%; */
  /* margin-bottom:10px; */
  /* overflow: hidden; */
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
