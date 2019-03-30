<template >
    <view class="container">
        <wux-cell-group class="mySelf_group">
            <wux-cell title="我的签到" is-link extra="2次"  @click="gotoSignin"></wux-cell>
            <wux-cell title="我的留言" is-link extra="2次"  @click="gotoMessage"></wux-cell>
            <wux-cell title="参加过的活动" is-link extra="12次"  @click="gotoActicity"></wux-cell>
            <wux-cell title="我的积分" is-link extra="10分" @click="gotoIntegral"></wux-cell>
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
.mySelf_group{
  width: 100%;
}
</style>
