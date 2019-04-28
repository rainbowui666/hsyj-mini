<template >
    <view class="container">
        <view class="wrap">
          <img src="../../../static/images/center_bg.jpeg" alt="bg" class="bg-image" />
          <view class="personal-center">
            <!-- <navigator url="/pages/center/signin/main"> -->
              <view class="item">
                <text class="time">2次</text>
                <text class="content">我的签到</text>
              </view>
            <!-- </navigator> -->
            <!-- <navigator url="/pages/center/message/main"> -->
              <view class="item">
                <text class="time">29次</text>
                <text class="content">我的留言</text>
              </view>
            <!-- </navigator> -->
            <!-- <navigator url="/pages/center/myactivity/main"> -->
              <view class="item">
                <text class="time">33次</text>
                <text class="content">我的活动</text>
              </view>
            <!-- </navigator> -->
            <!-- <navigator url="/pages/center/integral/main"> -->
              <view class="item">
                <text class="time">56次</text>
                <text class="content">我的积分</text>
              </view>
            <!-- </navigator> -->
          </view>
        </view>
        <wux-cell-group class="mySelf_group">
            <wux-cell thumb="../../../static/images/map.png" title="我的签到" is-link extra="2次"  @click="gotoSignin"></wux-cell>
            <wux-cell thumb="../../../static/images/edit1.png" title="我的留言" is-link extra="29次"  @click="gotoMessage"></wux-cell>
            <wux-cell thumb="../../../static/images/activity.png" title="我的活动" is-link extra="33次"  @click="gotoActicity"></wux-cell>
            <wux-cell thumb="../../../static/images/integral.png" title="我的积分" is-link extra="56分" @click="gotoIntegral"></wux-cell>
        </wux-cell-group>
    </view>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
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
  background: #ffffff;
  height: auto;
  overflow: hidden;
  width: 100%;
  position: relative;
}
.wrap {
  width: inherit;
  position: relative;
}
.bg-image {
  width: 100%;
  height: 200px;
}
.personal-center{
  width: 85%;
  height: 100px;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: #fff;
  margin: 20rpx auto;
  padding: 10px 20px;
  border-radius: 40rpx;
  box-shadow: 3px 3px 10px #c3c3c3;
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
  color: #777;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: aliceblue;
}
.content {
  line-height: 50px;
}
.mySelf_group{
  margin-top:80px;
  width: 100%;
}
</style>
