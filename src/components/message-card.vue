<template >
  <view class="scenic-spot-message-text-group">
    <image
      src="../../static/images/touxiang.png"
      style="width:40px;height:40px;border-radius:50%"
      class="scenic-spot-message-view-inner-image"
    />
    <view class="scenic-spot-message-text">
      <view class="scenic-spot-message-text-label">
        <view>大实践家</view>
        <view>三天前</view>
        <view class="scenic-spot-message-text-icon-group" @click="click">
          <!-- <wux-icon type="ios-thumbs-up" size="20"/> -->
          <image class="thumbsUpImg" :src="thumbsUpImg"/>
          <view>{{data.pointsNum}}</view>
        </view>
      </view>
      <view>
        <view class="scenic-spot-message-text-message">{{data.content}}</view>
      </view>
    </view>
  </view>
</template>

<script>
import thumbsUpImg from '../../static/images/thumbsUp.png'
export default {
  props: {
    data: {
      type: Object,
      default: []
    },
    iconClick: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      thumbsUpImg
    };
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
.scenic-spot-message-text {
  display: flex;
  flex-direction: column;
}
.scenic-spot-message-text-group {
  position: relative;
  display: flex;
  border:1px solid #eee;
  border-radius:10rpx;
  padding:10rpx 10rpx 10rpx 20rpx;
  margin-left:10rpx;
  flex-grow:1;
}
.scenic-spot-message-text {
  display: flex;
  flex-direction: column;
}
.scenic-spot-message-text-label {
  display: flex;
  font-size:12px;
}
.scenic-spot-message-text-label > view:nth-child(2){
  font-size:24rpx;
  color:#aaa;
  padding-left:20rpx;
}
/* .scenic-spot-message-text-icon-group {
  display: flex;
  position:absolute;
  right:10rpx;
  top:10rpx;
  font-size:24rpx;
  color:#aaa;
} */
.thumbsUpImg{
  position:absolute;
  width: 12px;
  height: 12px;
  right:10rpx;
  top:10rpx;
  color:#aaa
}
.scenic-spot-message-text-message{
  font-size: 24rpx;
  color: #aaa;
  font-weight: lighter
}
</style>

