<template>
<view class="search-card-wrap-wrap">
  <view class="search-card-wrap">
    <!-- <navigator url="/pages/map/navigation/main?activitySight=true"> -->
      <view v-for="(item,index) in data" :key="index" class="search-card">
        <image class="gpsImg" :src="item.gpsImg"/>
        <view class="search-card-content"  @click="goToclick(item)">
        <view class="search-card-content-title">
            <view>{{ item.activityName }}</view>
        </view>
        <view class="search-card-content-desc">
            <view class="search-card-content-desc-item">
              <text>旅游景点</text>
            </view>
            <view class="search-card-content-desc-item">
              <view>{{ item.address }}</view>
            </view>
        </view>
        </view>
        <view class="search-card-icon">
          <image class="navigationImg" :src="item.navigationImg" @click="navigationClick(item,index)"/>
          <!-- <view v-if="item.isIcon" class="search-card-icon-inner" @click="click(item)">
            <wux-icon :type="item.iconType" :color="item.iconColor"/>
          </view> -->
          <view class="search-card-icon-text">
            <view class="on-status">{{ item.iconText }}</view>
          </view>
        </view>
      </view>
    <!-- </navigator> -->
  </view>
</view>
</template>

<script>
import iconGroup from './icon-group';
export default {
  components: {
    iconGroup
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    iconClick: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      latitude: null,
      longitude: null
    }
  },
  methods: {
    goToclick (item) {
      if (this.iconClick) {
        this.iconClick(item);
      }
    },
    navigationClick (item) {
      let latitude = item.latitude;
      let longitude = item.longitude;
      let title = item.activityName;
      let address = item.address;
      wx.navigateTo({ url: '../mapGps/main?longitude=' + longitude + '&latitude=' + latitude + '&title=' + title + '&address=' + address })
    }
  }
};
</script>

<style>
.search-card {
  display: flex;
  width: 100%;
  height: 75px;
  /* border-bottom:1px solid #888; */
  margin-bottom: 1px;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
}
.search-card:last-child {
  border-bottom: none;
}
.gpsImg{
  height: 30px;
  width: 20px;
  margin:auto 10px;
}
.search-card-content{
  /* display: flex; */
  width: 65%;
  overflow: hidden;
}
.search-card-content-title{
  margin: 10px 5px;
  font-size: 32rpx;
  max-height: 58px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #777;
  margin-bottom:5px;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:1;
}
.search-card-content-desc {
  display: flex;
  /* flex-direction: column; */
  padding: 5rpx 20rpx 10rpx 10rpx;
  font-size: 28rpx;
  color: #aaa;
  /* white-space: nowrap; */
  flex-grow: 1;
  /* overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap */
}
.search-card-content-desc-item {
  display: flex;
  flex-direction: row;
  /* white-space: no-wrap; */
  /* overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap */
}
.search-card-content-desc-item ._text {
  white-space: nowrap;
  margin-right:10px;
}
.search-card-content-desc-item ._view {
  height: 20px;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:1;
}
.search-card-icon {
  width: 15%;
  margin: auto;
}
.search-card-icon-inner {
  width: 62%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.search-card-icon-text {
  text-align: center;
  font-size: 13px;
  color: #aaa
}
.navigationImg{
  height: 25px;
  width: 25px;
  position:relative;
  left:50%;
  transform:translateX(-50%);
  /* transform:rotate(45deg); */
}

.search-card-wrap-wrap{
  background-color:#eee;
  /* height:100vh; */
  padding-top:10px;
}
.search-card-wrap{
  padding:10px 20px;
  border-radius:16rpx;
  margin:0 20px;
  background-color:#fff;
}
.search-card-wrap > ._view:first-child{
  border-top-left-radius: 16rpx;
  border-top-right-radius: 16rpx;
}
.search-card-wrap > ._view:last-child{
  border-bottom-left-radius: 16rpx;
  border-bottom-right-radius: 16rpx;
}
</style>
