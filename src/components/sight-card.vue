<template>
  <view class="page-sight">
    <view v-for="(item,index) in data" :key="index" class="sight-card">
      <navigator
        :url="item.activityid?'/pages/map/sight/main?activitySight=true&id='+ item.sceneryid+'&activityid='+item.activityid:'/pages/map/sight/main?&id='+ item.sceneryid"
      >
        <view class="sight-card-image">
          <image
            mode="widthFix"
            :src="item.pics?item.pics[0]?'https://cdn.100eduonline.com/images/'+item.pics[0].sourceAddress:defaultImg:defaultImg"
          />
          <!-- <view class="sight-card-content-icongroup">
            <icon-group :list="item.iconArr"/>
          </view>-->
        </view>
        <view class="sight-card-content">
          <view class="sight-card-content-title">
            <wux-tag v-if="item.startSceneryid===item.sceneryid" color="red">起点</wux-tag>
            <wux-tag v-if="item.endSceneryid===item.sceneryid" color="red">终点</wux-tag>
            <text style="margin-top: 4px;">{{ item.sceneryTitle }}</text>
          </view>
          <view class="sight-card-content-icongroup">
            <image
              class="thumbsUpImg"
              :src="item.thumbsupImg"
              @click="thumbsupClick(item,index)"
              mode="widthFix"
            />
            <view
              class="icon-group-item-label"
            >{{ item.shstate?item.shstate.wantto?item.shstate.wantto:0:0 }}</view>
            <image
              class="messageImg"
              :src="item.messageImg"
              @click="messageClick(item,index)"
              mode="widthFix"
            />
            <view
              class="icon-group-item-label"
            >{{ item.shstate?item.shstate.disnum?item.shstate.disnum:0:0 }}</view>
            <!-- <icon-group :list="item.iconArr"/> -->
          </view>
          <view class="sight-card-content-detail">
            <view>点击查看详情</view>
          </view>
        </view>
        <view class="sight-card-icon">
          <view class="sight-card-icon-inner">
          <image class="navigationImg" mode='widthFix' :src="item.navigationImg" @click="navigationClick(item)"/>
            <!-- <wux-icon :type="item.iconType" :color="item.iconColor"/> -->
          </view>
          <view class="sight-card-icon-text">
            <view
              v-if="item.sightStatus=='导航'"
              class="on-status"
              :style="'color:' + item.iconColor"
            >{{ item.sightStatus }}</view>
            <view v-if="item.sightStatus=='已完成'" class="sign-up-status">{{ item.sightStatus }}</view>
          </view>
        </view>
      </navigator>
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
    },
    onThumbsupClick: {
      type: Function,
      default: null
    },
    onMessageClick: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      defaultImg:
        'https://cdn.100eduonline.com/mini-images/default.png'
    };
  },
  methods: {
    click (item) {
      if (this.iconClick) {
        this.iconClick(item);
      }
    },
    thumbsupClick (item, index) {
      if (this.onThumbsupClick) {
        this.onThumbsupClick(item, index);
      }
    },
    messageClick (item, index) {
      if (this.onMessageClick) {
        this.onMessageClick(item, index);
      }
    },
    navigationClick (item) {
      let latitude = item.latitude;
      let longitude = item.longitude;
      let title = item.activityName
      wx.navigateTo({ url: '/pages/map/mapGps/main?longitude=' + longitude + '&latitude=' + latitude + '&title=' + title })
    }
  }
};
</script>

<style>
.page-sight{
  border-bottom-right-radius:28rpx;
  border-bottom-left-radius:28rpx;
  overflow: hidden;
}
.sight-card ._navigator{
  display: flex;
  width: 100%;
  height: 100px;
  margin-bottom: 3rpx;
  background-color: #fff;
  padding-bottom: 20rpx;
  /* border-bottom: 1px solid #888; */
}
.sight-card-image {
  width: 36%;
  margin: 15px;
  overflow: hidden;
  height: 166rpx;
  border-radius: 16rpx;
  padding: 0;
  margin-right: 0;
}
.sight-card .sight-card-content-icongroup {
  width: 50%;
  height: 26px;
  /* margin-top: -29px; */
  z-index: 999;
  /* background: #000; */
  /* opacity: 0.6; */
  display: flex;
  /* color: #fff; */
  line-height: 26px;
}
.sight-card-image image {
  width: 130%;
  border-radius: 16rpx;
}
.sight-card-content {
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: space-around;
}
.sight-card-content-title {
  padding: 18rpx 0 0 18rpx;
  margin: 0;
  /* font-size: 18px;
  display: flex; */
  flex-direction: column;
  /* line-height: 40px; */
}
.sight-card-content-title ._text {
  font-size: 30rpx;
  margin-top: 0 !important;
}
.sight-card-content-desc {
  display: flex;
  flex-direction: row;
  padding: 5px;
  font-size: 10px;
}
.sight-card-content-desc-item {
  margin-right: 5px;
}
.sight-card-content-icongroup {
  padding-left: 9px;
  display: flex;
  /* margin-bottom: 10px; */
}
.sight-card-content-icongroup .on-status {
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color: rgb(223, 64, 64);
}
.sight-card-content-icongroup .sign-up-status {
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color: rgb(96, 170, 231);
}
.sight-card-content-detail {
  font-size: 24rpx;
  color: #aaa;
  padding-left: 18rpx;
}
.sight-card-icon {
  width: 14%;
  margin: auto;
  padding: 12rpx;
  color: #d25136;
}
.sight-card-icon-inner {
  width: 62%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.sight-card-icon-inner ._wux-icon {
  color: #d25136;
}
.sight-card-icon-text {
  text-align: center;
  font-size: 13px;
}
.sight-card span {
  height: 38px;
  width: 38px;
  display: block;
  position: relative;
}
.sight-card-content-icongroup {
  padding-left: 20rpx;
  height: 52rpx;
  opacity: 0.6;
  display: flex;
  line-height: 52rpx;
  align-items: center;
  flex-direction: row;
}
.common-card-content-icongroup-text {
  width: 50%;
  font-size: 28rpx;
  color: #aaa;
}
.sight-card-content-icongroup-text {
  width: 50%;
  font-size: 28rpx;
  color: #aaa;
}
.thumbsUpImg {
  /* height: 35rpx; */
  width: 28rpx;
  padding: 4px;
}
.messageImg {
  /* height: 35rpx; */
  width: 32rpx;
  padding: 4px 4px 4px 15px;
}
.sight-card .icon-group-item-label {
  font-size: 24rpx;
  color: #666;
  align-self: flex-start;
  margin-left: 0;
}
</style>
