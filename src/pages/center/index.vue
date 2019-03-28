<template >
    <view class="container">
        <wux-cell-group class="mySelf_group">
            <wux-cell thumb="/static/images/my_policy.png" title="我的签到" is-link></wux-cell>
            <wux-cell thumb="/static/images/my_claims.png" title="参加过的活动" is-link></wux-cell>
            <wux-cell thumb="/static/images/Quit.png" title="我的积分" is-link @click="gotoIntegral"></wux-cell>
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
    gotoIntegral () {
      wx.removeStorageSync('userInfo');
      wx.reLaunch({
        url: '/pages/center/login/main'
      });
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
