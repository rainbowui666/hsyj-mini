<template>
<view class="page-mymessage">
  <view class="my-message-card">
    <!-- <navigator
      url="/pages/activity/activityDetail/main?name=' + item.activityName + '&isSingle=' + item.isSingle + '&applyStatus=' + item.activityStatus"> -->
      <view v-for="(item,index) in data" :key="index" class="mymessage-card" @click="gotoMyPage(item)">
        <view class="mymessage-card-image">
          <image mode="widthFix" :src="item.src"/>
        </view>
        <view class="mymessage-card-content">
          <view class="mymessage-card-content-user">
            <text class="mymessage-card-content-userName">{{item.studentName}}</text>
            <text class="mymessage-card-content-messageTime">{{item.createdate}}</text>
          </view>
          <view class="mymessage-card-content-messageInfo">{{item.content}}</view>
        </view>
        <view class="mymessage-card-content-icon-text">查看详情</view>
        <view class="mymessage-card-content-peopleNum">{{item.peopleNum}}</view>
      </view>
    <!-- </navigator> -->
  </view>
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
    gotoMyPage (item) {
      console.log(item)
      if (item.distype === 0) {
        wx.navigateTo({url: '/pages/map/sight/main?activitySight=true&id=' + item.targetid})
      }
      if (item.distype === 1) {
        wx.navigateTo({url: '/pages/activity/activityDetail/main?id=' + item.targetid})
      }
    }
  }
};
</script>

<style>
.page-mymessage{
  padding: 10rpx 5%;
  /* overflow-y: auto; */
}
.my-message-card {
  padding:0 20rpx;
  background-color:white;
  border-radius: 10rpx;
}
.mymessage-card {
  display: flex;
  width: inherit;
  /* height: 85px; */
  /* justify-content: space-between; */
  /* margin-top: 15rpx; */
  background-color: #fff;
  padding: 10px 10px;
  padding-bottom:48rpx;
  position: relative;
  border-bottom: 1px solid #6666;
}
.mymessage-card:last-child {
  border-bottom: none;
}
.mymessage-card-image {
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius:34rpx;
  overflow:hidden;
  position:relative;
  margin-right: 2px;
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
.mymessage-card-content-user {
  font-size: 14px;
  display: flex
}
.mymessage-card-content-messageInfo {
  font-size:22rpx;
  margin-top:10rpx;
  max-height:35px;
}
.mymessage-card-content-userName{
  flex-grow:1;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.mymessage-card-content-messageTime {
  /* float: right; */
  font-size:22rpx!important;
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
