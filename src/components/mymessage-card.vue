<template>
  <view class="wrap">
    <navigator
      url="/pages/activity/activityDetail/main?name=' + item.activityName + '&isSingle=' + item.isSingle + '&applyStatus=' + item.activityStatus">
      <view v-for="(item,index) in data" :key="index" class="mymessage-card">
        <view class="mymessage-card-image">
          <image mode="widthFix" :src="item.src"/>
        </view>
        <view class="mymessage-card-content">
          <view class="mymessage-card-content-username">{{item.userName}}<text class="mymessage-card-content-messageTime">{{item.messageTime}}</text></view>
          <view class="mymessage-card-content-messageInfo">{{item.messageInfo}}</view>
        </view>
        <view class="mymessage-card-content-icon-text">查看详情</view>
        <view class="mymessage-card-content-peopleNum">{{item.peopleNum}}</view>
      </view>
    </navigator>
  </view>
</template>

<script>
import iconGroup from './icon-group';
import thumbsupImg from '../../static/images/thumbsupImg.png'
import messageImg from '../../static/images/messageImg.png'
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
.wrap {
  margin-top:20rpx;
  padding:0 20rpx;
  background-color:white;
  border-radius: 10rpx;
}
.mymessage-card {
  display: flex;
  width: inherit;
  /* height: 85px; */
  /* justify-content: space-between; */
  margin-top: 15rpx;
  background-color: #fff;
  padding: 10px 10px;
  padding-bottom:48rpx;
  position: relative;
  border-bottom: 1px solid #6666;
}
.mymessage-card-image {
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius:34rpx;
  overflow:hidden;
  position:relative;
  margin-right: 10px;
}
.mymessage-card-image image {
  width: 100%;
  border-radius:40rpx;
}
.mymessage-card-content {
  /* display: flex;
  flex-direction: column; */
  flex: 1;
  width: 60%;
  overflow: hidden;
  /* margin-left: 15px; */
}
.mymessage-card-content-username {
  font-size: 14px;
}
.mymessage-card-content-messageInfo {
  font-size: 12px;
  text-overflow: ellipsis;
}
.mymessage-card-content-messageTime {
  float: right;
  font-size: 12px;
  color: grey;
}
.mymessage-card-content-icon-text {
  font-size: 12px;
  color: #d4d4d4;
  position: absolute;
  bottom: 10rpx;
  left: 46rpx;
}
.mymessage-card-content-peopleNum {
  font-size: 12px;
  color: #d4d4d4;
  position: absolute;
  bottom: 10rpx;
  right: 40rpx;
}
</style>
