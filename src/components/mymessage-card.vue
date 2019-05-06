<template>
  <view>
    <navigator
      url="/pages/activity/activityDetail/main?name=' + item.activityName + '&isSingle=' + item.isSingle + '&applyStatus=' + item.activityStatus"
    >
      <view v-for="(item,index) in data" :key="index" class="mymessage-card">
        <view class="mymessage-card-content">
          <view class="mymessage-card-image">
            <image mode="widthFix" :src="item.src"/>
          </view>
          <view class="mymessage-card-content-icon-text">查看详情</view>
          
          <!-- <view class="mymessage-card-content-icongroup">
            <view class="mymessage-card-content-icongroup-text">查看详情</view>
            <image class="thumbsUpImg" :src="item.thumbsupImg" @click="thumbsupClick(item,index)"/>
            <view class='icon-group-item-label'>{{ item.thumbsupNum }}</view>
            <image class="messageImg" :src="item.messageImg" @click="messageClick(item,index)"/>
            <view class='icon-group-item-label'>{{ item.messageNum }}</view>
          </view> -->
        </view>
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
.mymessage-card {
  display: flex;
  width: 100%;
  /* height: 85px; */
  /* justify-content: space-between; */
  margin-top: 15rpx;
  background-color: #fff;
  padding-bottom: 20rpx;
  /* border-bottom: 1px solid #6666; */
}
.mymessage-card-image {
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius:34rpx;
  overflow:hidden;
  position:relative;
}
.mymessage-card-image image {
  width: 100%;
  border-radius:40rpx;
}
.mymessage-card-content {
  display: flex;
  flex-direction: column;
  width: 60%;
  /* margin-left: 15px; */
}
.mymessage-card-content-icon-text {
  font-size: 12px;
}
</style>
