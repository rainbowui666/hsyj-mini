<template>
<view class="container">
    <view class="profile-info"/>
    <view class="menu">
      <navigator url="/pages/insureview/main" >
        <view class="character-item">
          <img src="/static/images/Health.png" style="width:32px;height:32px">
          <view class="text">
            <text class="description">健康</text>
          </view>
        </view>
      </navigator>
      <navigator url="/pages/insureview/main" >
        <view class="character-item">
          <img src="/static/images/Travel.png" style="width:32px;height:32px">
          <view class="text">
            <text class="description">旅行</text>
          </view>
        </view>
      </navigator>
      <navigator url="/pages/insureview/main" >
        <view class="character-item">
          <img src="/static/images/Property.png" style="width:32px;height:32px">
          <view class="text">
            <text class="description">财产</text>
          </view>
        </view>
      </navigator>
      <navigator url="/pages/insureview/main" >
      <!--<navigator url="/pages/mall/index" open-type="switchTab">-->
        <view class="character-item">
          <img src="/static/images/Accident.png" style="width:32px;height:32px">
          <view class="text">
            <text class="description">意外</text>
          </view>
        </view>
      </navigator>
    </view>
    <view class="row" style="margin-top:16%;">
      <wux-card
        :bordered="false"
        title="推荐保障"
        :full="true"
        thumb="https://rainbow.ebaotech.com/static/rainbow/image/bar.png"
        thumb-style="margin-left:-15px;margin-right:0;height:30rpx;"
      >
        <view slot="body">
          <wux-media
            @click="goto"
            thumb="https://rainbow.ebaotech.com/static/rainbow/image/9.jpg"
            title="百万医疗险"
            label="保额600万，花多少报多少，运动还能减少保费。"
          ></wux-media>
          <wux-media
            thumb="https://rainbow.ebaotech.com/static/rainbow/image/1.jpg"
            title="重疾险"
            label="确诊就陪，最高50万，覆盖高发的100种重疾。"
          ></wux-media>
          <wux-media
            thumb="https://rainbow.ebaotech.com/static/rainbow/image/8.jpg"
            title="住院医疗险"
            label="50万保额，癌症保障不限社保。报销医疗费用，性价比超高。"
          ></wux-media>
        </view>
      </wux-card>
      <wux-card
        :bordered="false"
        title="孝顺父母"
        :full="true"
        thumb="https://rainbow.ebaotech.com/static/rainbow/image/bar.png"
        thumb-style="margin-left:-15px;margin-right:0;height:30rpx;"
      >
        <view slot="body">
          <wux-media
            thumb="https://rainbow.ebaotech.com/static/rainbow/image/3.jpg"
            title="少儿长期重疾险"
            label="保100种重疾35种轻症，最高115万，宝宝成长必备，保费不涨价。"
          ></wux-media>
          <wux-media
            thumb="https://rainbow.ebaotech.com/static/rainbow/image/4.jpg"
            title="赡养父母定期寿险"
            label="200万保额，报销社保外医疗费用。45-80岁都能买，居然三高也能买。"
          ></wux-media>
        </view>
      </wux-card>
      <wux-card
        :bordered="false"
        title="爱出行"
        :full="true"
        thumb="https://rainbow.ebaotech.com/static/rainbow/image/bar.png"
        thumb-style="margin-left:-15px;margin-right:0;height:30rpx;"
      >
        <view slot="body">
          <wux-media
            thumb="https://rainbow.ebaotech.com/static/rainbow/image/5.jpg"
            title="车险"
            label="优选保险公司，保费3折起，"
          ></wux-media>
          <wux-media
            thumb="https://rainbow.ebaotech.com/static/rainbow/image/7.jpg"
            title="驾乘意外险"
            label="有车一族必备。驾驶，乘坐都可以保，保额最高20万。"
          ></wux-media>
        </view>
      </wux-card>
    </view>
  </view>
</template>

<script>

export default {
  computed: {},
  data () {
    return {
    };
  },
  methods: {
    goto (product) {
      wx.setStorageSync('__product_url', {url: 'https://rainbow.ebaotech.com/ssr/travel/TR_POC'});
      wx.navigateTo({
        url: '/pages/webview/main?id=__product_url'
      })
    }
  }
}
</script>

<style scoped>
page {
  overflow-x: hidden;
}
.profile-info {
  width: 100%;
  height: 167px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30.25rpx;
  background: url("https://rainbow.ebaotech.com/static/rainbow/image/header.jpg");
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;

  /* background: #fff; */
}
.menu {
  width: 90%;
  height: 70px;
  position: absolute;
  background-color: #ffffff;
  top: 147px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  text-align: center;
  z-index: 100;
  box-shadow: 2px 2px 5px #bbb;
}
.menu .character-item {
  padding: 10px 25px;
}

.menu .character-item .text {
  margin-top: -10px;
}
</style>
