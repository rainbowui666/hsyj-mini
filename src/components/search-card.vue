<template>
  <view style="padding: 0 20px;">
    <!-- <navigator url="/pages/map/navigation/main?activitySight=true"> -->
      <view v-for="(item,index) in data" :key="index" class="search-card">
        <image class="gpsImg" :src="item.gpsImg" @click="thumbsupClick(item,index)"/>
        <view class="search-card-content">
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
          <image class="navigationImg" :src="item.navigationImg" @click="thumbsupClick(item,index)"/>
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
  methods: {
    click (item) {
      if (this.iconClick) {
        this.iconClick(item);
      }
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
  width: 30px;
  margin:auto 10px;
}
.search-card-content{
  /* display: flex; */
  width: 65%;
  overflow: hidden;
}
.search-card-content-title{
  margin: 10px 5px;
  font-size: 14px;
  max-height: 58px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.search-card-content-desc {
  display: flex;
  /* flex-direction: column; */
  padding: 5rpx 20rpx 10rpx 20rpx;
  font-size: 26rpx;
  color: #777;
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
}
.navigationImg{
  height: 30px;
  width: 30px;
  position:relative;
  left:50%;
  transform:translateX(-50%);
  /* transform:rotate(45deg); */
}
</style>
