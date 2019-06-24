<template >
  <view class="scenic-spot-message-text-group">
    <view class="scenic-spot-message-view-image">
    <image
      :src="data.photo?data.photo:'https://cdn.100eduonline.com/mini-images/touxiang.png'"
      style="width:40px;height:40px;border-radius:50%;margin:0 20rpx 0 10rpx;"
      class="scenic-spot-message-view-inner-image"
    />
    </view>
    <view class="scenic-spot-message-text-content">
      <view class="scenic-spot-message-text-label">
        <view>{{data.studentName?data.studentName:'大实践家'}}</view>
        <wux-timeago :to="data.createdate" lang="zh_CN" refreshable />
        <view class="scenic-spot-message-text-icon-group" @click="click">
          <image class="thumbsUpImgClass" v-if="imageName!==undefine&&imageName!==null" :src="'https://cdn.100eduonline.com/mini-images/'+imageName+'.png'" @click="thumbsupClick(data,index)" mode="widthFix"/>
          <view>{{data.clicknum}}</view>
        </view>
      </view>
      <view>
        <view class="scenic-spot-message-text-message">{{data.content}}</view>
      </view>
    </view>
  </view>
</template>

<script>
// import dayjs from 'dayjs';
export default {
  props: {
    data: {
      type: Object,
      default: []
    },
    index: {
      type: String,
      default: null
    },
    imageName: {
      type: String,
      default: null
    },
    iconClick: {
      type: Function,
      default: null
    },
    onThumbsupClick: {
      type: Function,
      default: null
    },
    showTime: {
      type: Boolean,
      default: false
    },
    date: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      lang: 'zh_CN',
      to: null
    };
  },
  mounted () {
    // this.to = new Date().getTime()
  //   let today = dayjs().format('YYYY-MM-DD')
  //   let index = this.data.createdate ? this.data.createdate.indexOf(' ') : 0
  //   let theday = this.data.createdate ? this.data.createdate.substring(0, index) : ''
  //   this.betweenDays = dayjs(today).diff(dayjs(theday), 'day') ? dayjs(today).diff(dayjs(theday), 'day') + '天前' : '10天前'
  },
  methods: {
    thumbsupClick (item, index) {
      if (this.onThumbsupClick) {
        this.onThumbsupClick(item, index);
      }
    },
    click (item) {
      if (this.iconClick) {
        this.iconClick(item);
      }
    }
  }
};
</script>

<style>
.scenic-spot-message-text-content {
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
.scenic-spot-message-text-label {
  display: flex;
  font-size:12px;
}
.scenic-spot-message-text-label > view:nth-child(2){
  font-size:24rpx;
  color:#aaa;
  padding-left:20rpx;
}
.scenic-spot-message-text-icon-group {
  display: flex;
  position:absolute;
  right:10rpx;
  top:10rpx;
  font-size:24rpx;
  color:#aaa;
}
.thumbsUpImgClass{
  /* position:absolute; */
  width: 12px;
  height: 12px;
  /* right:10rpx;
  top:10rpx; */
  color:#aaa
}
.thumbsUpImgClass + ._view{
  position:relative;
  top:-2px;
  padding-left:5rpx;
}
.scenic-spot-message-text-message{
  font-size: 24rpx;
  color: #aaa;
  font-weight: lighter
}
</style>

