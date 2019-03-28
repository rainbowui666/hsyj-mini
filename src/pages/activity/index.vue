<template >
  <view class="activity-page">
    <swiper class="swiper" :indicator-dots="true" :autoplay="true" interval="3000" duration="800">
      <block v-for="(item, index) in movies" :key="index">
        <swiper-item>
          <image :src="item.url" class="slide-image"/>
        </swiper-item>
      </block>
    </swiper>
    <view class="common-card">
      <view class="common-card-image">
      <image mode="widthFix" src="https://picsum.photos/750/750/?image=413"/>
      </view>
      <view class="common-card-content">
        <view class="common-card-content-title">
        <text>上财一日游</text>
        </view>
        <view class="common-card-content-desc">
        <text>主办单位：</text><view>上海财经大学</view>
        <text>活动时间</text><view>2019年4月11日</view>
        </view>
        <view class="common-card-content-icongroup">
        <icon-group :list="iconArr"/>
        </view>
      </view>
      <view class="common-card-icon">
        <wux-icon type="ios-arrow-round-forward"/>
      </view>
    </view>
  </view>
</template>

<script>

import iconGroup from '../../components/icon-group';
export default {
  components: {
    iconGroup
  },
  data () {
    return {
      movies: [
        {
          url: 'https://picsum.photos/750/750/?image=413'
        },
        {
          url: 'https://picsum.photos/750/750/?image=413'
        },
        {
          url: 'https://picsum.photos/750/750/?image=413'
        },
        {
          url: 'https://picsum.photos/750/750/?image=413'
        }
      ],
      iconArr: [
        {
          icon: 'ios-heart',
          size: '24',
          color: 'red',
          label: 11
        },
        {
          icon: 'ios-chatboxes',
          size: '24',
          color: 'green',
          label: 11
        }
      ]
    };
  },
  methods: {
  }
};
</script>

<style>
.activity-page .swiper {
  width: 100%;
  height: 230px;
}
.activity-page .slide-image {
  width: 100%;
}
.common-card{
  display:flex;
  width:100%;
}
.common-card-image{
  width:20%;
}
.common-card-image image{
  width:100%;
}
.common-card-content{
  display: flex;
  flex-direction: column;
}
.common-card-content-desc{
  display: flex;
  flex-direction: row;
  font-size: 10px;
}
.common-card-content-icongroup{
  width: 50%;
}
</style>
