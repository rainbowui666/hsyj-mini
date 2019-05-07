<template>
  <view>
    <view v-for="(item,index) in data" :key="index" class="common-card">
      <navigator
        :url="'/pages/activity/activityDetail/main?name=' + item.activityName + '&isSingle=' + item.isSingle + '&applyStatus=' + item.activityStatus"
      >
        <view class="common-card-content">
          <!-- <view class="common-card-content-tag">
          <wux-tag v-if="item.activityStatus=='进行中'" color="red">进行中</wux-tag>
          <wux-tag v-if="item.activityStatus=='已报名'" color="geekblue">已报名</wux-tag>
          </view>-->
          <view class="common-card-content-title">
            <view>{{ item.activityName }}</view>
          </view>
          <view class="common-card-content-desc">
            <view class="common-card-content-desc-item">
              <text>主办单位：</text>
              <view>{{ item.activityHolder }}</view>
            </view>
            <view class="common-card-content-desc-item">
              <text>活动时间：</text>
              <view>{{ item.activityTime }}</view>
            </view>
          </view>
          <view class="common-card-content-icongroup">
            <view class="common-card-content-icongroup-text">查看详情</view>
            <image class="thumbsUpImg" :src="item.thumbsupImg" @click="thumbsupClick(item,index)"/>
            <view class="icon-group-item-label">{{ item.thumbsupNum }}</view>
            <image class="messageImg" :src="item.messageImg" @click="messageClick(item,index)"/>
            <view class="icon-group-item-label">{{ item.messageNum }}</view>
            <!-- <icon-group :list="item.iconArr"/> -->
            <!-- <view v-if="item.activityStatus=='进行中'" class="on-status">{{ item.activityStatus }}</view>
            <view v-if="item.activityStatus=='已报名'" class="sign-up-status">{{ item.activityStatus }}</view>-->
          </view>
        </view>
        <!-- <view class="common-card-icon">
          <view class="common-card-icon-inner" @click="click(item)">
            <wux-icon :type="item.iconType" color="#888"/>
          </view>
        </view>-->
        <view class="common-card-image">
          <image mode="widthFix" :src="item.src"/>
          <view v-if="item.activityStatus" class="common-card-content-status">
            <view v-if="item.activityStatus=='进行中'" class="on-status">{{ item.activityStatus }}</view>
            <view v-if="item.activityStatus=='已报名'" class="sign-up-status">{{ item.activityStatus }}</view>
            <!-- <icon-group :list="item.iconArr"/> -->
          </view>
        </view>
      </navigator>
    </view>
  </view>
</template>

<script>
import iconGroup from './icon-group';
import thumbsupImg from '../../static/images/thumbsupImg.png';
import messageImg from '../../static/images/messageImg.png';
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
      thumbsupImg,
      messageImg
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
    }
  }
};
</script>

<style>
.common-card {
  display: flex;
  width: 100%;
  /* height: 85px; */
  justify-content: space-between;
  margin-top: 15rpx;
  background-color: #fff;
  padding-bottom: 20rpx;
  /* border-bottom: 1px solid #6666; */
}
.common-card-image {
  width: 40%;
  padding: 5px;
  border-radius: 34rpx;
  height: 110px;
  overflow: hidden;
  position: relative;
}
.common-card-image image {
  width: 100%;
  border-radius: 40rpx;
}
.common-card-content {
  display: flex;
  flex-direction: column;
  width: 60%;
  /* margin-left: 15px; */
}
.common-card-content-title {
  padding-top: 5px;
  padding-left: 10px;
  /* font-size: 16px; */
  max-height: 58px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.common-card-content-desc {
  display: flex;
  flex-direction: column;
  padding: 5rpx 20rpx 10rpx 20rpx;
  font-size: 26rpx;
  color: #777;
  white-space: nowrap;
  flex-grow: 1;
}
.common-card-content-desc-item {
  display: flex;
  flex-direction: row;
  white-space: no-wrap;
  /* padding: 5px; */
}
.common-card-content-desc-item ._text {
  white-space: nowrap;
}
.common-card-content-desc-item ._view {
  height: 20px;
  overflow: hidden;
}
.common-card-content-status {
  /* padding-left: 5px; */
  width: 93%;
  text-align: center;
  /* height: 26px; */
  font-size: 14px;
  /* margin-top: -29px; */
  /* z-index: 999; */
  background: rgba(210, 81, 54, 0.6);
  opacity: 0.99;
  /* display: flex; */
  color: #fff;
  line-height: 26px;
  /* justify-content: center; */
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  bottom: 0;
}
.common-card-content-icongroup {
  padding-left: 10px;
  /* width: 80%; */
  height: 26px;
  /* margin-top: -29px; */
  /* z-index: 999; */
  /* background: #000; */
  opacity: 0.6;
  display: flex;
  /* color:#fff; */
  line-height: 26px;
  /* justify-content: center; */
}
.common-card-content-icongroup .icon-group {
  width: 30%;
}
.common-card-content-icongroup .on-status {
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color: rgb(223, 64, 64);
}
.common-card-content-icongroup .sign-up-status {
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color: rgb(96, 170, 231);
}
.common-card-icon {
  width: 10%;
  margin: auto 0 auto 10px;
  display: flex;
  justify-content: center;
}
.common-card-content-icongroup-text {
  width: 50%;
  font-size: 28rpx;
  color: #aaa;
}
.thumbsUpImg {
  height: 35rpx;
  width: 35rpx;
  padding: 4px;
}
.messageImg {
  height: 35rpx;
  width: 35rpx;
  padding: 4px;
}
</style>

