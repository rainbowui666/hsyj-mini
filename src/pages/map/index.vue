<template >
  <view>
    <view v-if="showGif">
      <img class="img_flash" :src="homeFlash">
    </view>
    <view v-else class="activity-page">
      <wux-search-bar clear show-cancel controlled placeholder="Search"/>
      <swiper class="swiper" :indicator-dots="true" :autoplay="true" interval="3000" duration="800">
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
            <image :src="item.url" class="slide-image"/>
          </swiper-item>
        </block>
      </swiper>
      <view class="scenic-spot-recommendation-group">
        <view class="scenic-spot-recommendation-text">景点推荐</view>
        <scroll-view scroll-x="true" class="scenic-spot-recommendation">
          <view class="scenic-spot-recommendation-view">
            <view
              scroll-x="true"
              v-for="(item, index) in imgList"
              :key="index"
              class="scenic-spot-recommendation-view-inner"
            >
              <image :src="item.url" class="scenic-spot-recommendation-view-inner-image"/>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      movies: [
        {
          url: '../../static/images/fudan1.jpeg'
        },
        {
          url: '../../static/images/fudan2.jpeg'
        },
        {
          url: '../../static/images/fudan1.jpeg'
        },
        {
          url: '../../static/images/fudan2.jpeg'
        }
      ],
      imgList: [
        {
          url: '../../static/images/fudan1.jpeg'
        },
        {
          url: '../../static/images/fudan2.jpeg'
        },
        {
          url: '../../static/images/fudan1.jpeg'
        },
        {
          url: '../../static/images/fudan2.jpeg'
        },
        {
          url: '../../static/images/fudan1.jpeg'
        },
        {
          url: '../../static/images/fudan2.jpeg'
        },
        {
          url: '../../static/images/fudan1.jpeg'
        },
        {
          url: '../../static/images/fudan2.jpeg'
        }
      ],
      homeFlash: 'http://hsyj.100eduonline.com/static/images/into_flash.gif',
      showGif: true
    };
  },
  mounted () {
    setTimeout(() => {
      this.showGif = false;
      wx.setNavigationBarTitle({
        title: '红色印记'
      })
    }, 2010)
  },
  methods: {}
};
</script>

<style>
.activity-page {
  background-color: #f4f4f4;
}
.activity-page .swiper {
  margin-top: 10px;
  width: 100%;
  height: 230px;
}
.activity-page .slide-image {
  width: 100%;
}
.activity-page .common-card-content-icongroup .icon-group {
  width: 95%;
}
.img_flash{
  width: 100%;
  height: 100vh;
}
.scenic-spot-recommendation-group {
  height: 120px;
  margin-top: 15px;
  background-color: #fff;
}
.scenic-spot-recommendation {
  display: flex;
  flex-direction: row;
  height: 100%;
}
.scenic-spot-recommendation-text {
  margin-left: 10px;
}
.scenic-spot-recommendation-view {
  height: 85%;
  display: flex;
  flex-direction: row;
}
.scenic-spot-recommendation-view-inner {
  width: 70px;
  padding: 5px;
  margin-left: 5px;
}
.scenic-spot-recommendation-view-inner-image {
  height: 100%;
  width: 70px;
  border-radius: 15%;
}
</style>
