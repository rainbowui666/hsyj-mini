<template>
  <div class="container">
    <wux-row class="row wux-text--center topbar">
      <cover-view class="result">{{level}}</cover-view>
      <cover-view class="test" @click="test"></cover-view>
      <image src="/static/images/risk.jpg" style="width: 100%"/>
    </wux-row>
     <wux-card
      :bordered="false"
      title="已有保障"
      thumb="https://rainbow.ebaotech.com/static/rainbow/image/bar.png"
      thumb-style="margin-left:-15px;margin-right:0;height:30rpx;"
    >
      <view slot="body">
        <wux-media thumb="https://rainbow.ebaotech.com/static/rainbow/image/9.jpg" title="百万医疗险">
          <wux-row class="row sub-title">
            <wux-col span="3">投保人：</wux-col>
            <wux-col span="9">王佳佳</wux-col>
          </wux-row>
          <wux-row class="row sub-title">
            <wux-col span="3">保单号：</wux-col>
            <wux-col span="9">wux0987654321</wux-col>
          </wux-row>
          <wux-row class="row sub-title">
            <wux-col span="3">有效期：</wux-col>
            <wux-col span="9">2019-01-01～2019-12-31</wux-col>
          </wux-row>
        </wux-media>
      </view>
    </wux-card>
    <wux-card
      :bordered="false"
      title="建议保障"
      thumb="https://rainbow.ebaotech.com/static/rainbow/image/bar.png"
      thumb-style="margin-left:-15px;margin-right:0;height:30rpx;"
    >
      <view slot="body">
        <wux-media
          thumb="https://rainbow.ebaotech.com/static/rainbow/image/1.jpg"
          title="重疾险"
          label="确诊就陪，最高50万，覆盖高发的100种重疾。"
        >
        </wux-media>
        <wux-media
          thumb="https://rainbow.ebaotech.com/static/rainbow/image/8.jpg"
          title="住院医疗险"
          label="50万保额，癌症保障不限社保。报销医疗费用，性价比超高。"
        >
        </wux-media>
         <wux-media
          thumb="https://rainbow.ebaotech.com/static/rainbow/image/7.jpg"
          title="驾乘意外险"
          label="有车一族必备。驾驶，乘坐都可以保，保额最高20万。"
        >
        </wux-media>
      </view>
    </wux-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      level: '未知'
    };
  },
  methods: {
    test (e) {
      wx.navigateTo({
        url: '/pages/risk/test/main'
      });
    },
    gotoMap () {
      wx.navigateBack();
    },
    gotoJyhs () {
      wx.makePhoneCall({
        phoneNumber: '15821495852'
      });
    }
  }
};
</script>

<style scoped>
.sub-title {
  font-size: 14px;
  color: grey;
}
.result {
  top: 17%;
  left: 40%;
  position: absolute;
  font-size: 40px;
  line-height: 120px;
  color: #ff9a14;
}
.test {
  top: 30%;
  left: 38%;
  position: absolute;
  font-size: 32rpx;
  width: 90px;
  color: #ff9a14;
  height: 34px;
}
</style>
