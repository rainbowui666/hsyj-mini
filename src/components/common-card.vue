<template>
  <view class="common-page">
    <view v-for="(item,index) in data" :key="index" class="common-card">
      <navigator
        :url="'/pages/activity/activityDetail/main?id=' + item.activityID + '&isGroup=' + item.isGroup + '&applyStatus=' + item.hasjoin + '&startDate=' + item.startDate"
      >
        <view class="common-card-content">
          <!-- <view class="common-card-content-tag">
          <wux-tag v-if="item.hasjoin=='进行中'" color="red">进行中</wux-tag>
          <wux-tag v-if="item.hasjoin=='已报名'" color="geekblue">已报名</wux-tag>
          </view>-->
          <view class="common-card-content-title">
            <view>{{ item.activityName }}</view>
          </view>
          <view class="common-card-content-desc">
            <view class="common-card-content-desc-item">
              <text>主办单位：</text>
              <view>{{ item.sponsor }}</view>
            </view>
            <view class="common-card-content-desc-item">
              <text>活动时间：</text>
              <view>{{ item.startDate }}</view>
            </view>
          </view>
          <view class="common-card-content-icongroup">
            <view class="common-card-content-icongroup-text" @click="detailClick(item)">查看详情</view>
            <image class="thumbsUpImg" :src="item.thumbsupImg" @click="thumbsupClick(item,index)" mode="widthFix"/>
            <view class="icon-group-item-label">{{ item.shstate?item.shstate.wantto?item.shstate.wantto:0:0 }}</view>
            <image class="messageImg" :src="item.messageImg" @click="messageClick(item,index)" mode="widthFix"/>
            <view class="icon-group-item-label">{{ item.shstate?item.shstate.disnum?item.shstate.disnum:0:0 }}</view>
            <!-- <icon-group :list="item.iconArr"/> -->
            <!-- <view v-if="item.hasjoin=='进行中'" class="on-status">{{ item.hasjoin }}</view>
            <view v-if="item.hasjoin=='已报名'" class="sign-up-status">{{ item.hasjoin }}</view>-->
          </view>
        </view>
        <!-- <view class="common-card-icon">
          <view class="common-card-icon-inner" @click="click(item)">
            <wux-icon :type="item.iconType" color="#888"/>
          </view>
        </view>-->
        <view class="common-card-image">
          <image mode="widthFix" 
          :src="item.pics?item.pics[0]?'https://hsyj.100eduonline.com/static/images/'+item.pics[0].sourceAddress:defaultImg:defaultImg"/>
          <view v-if="item.hasjoin" class="common-card-content-status">
            <view v-if="item.hasjoin=='进行中'" class="on-status">{{ item.hasjoin }}</view>
            <view v-if="item.hasjoin=='已报名'" class="sign-up-status">{{ item.hasjoin }}</view>
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
    },
    viewDetail: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      thumbsupImg,
      messageImg,
      defaultImg: 'https://hsyj.100eduonline.com/static/images/54a22670-6ef8-44c3-a165-fa4771275079.jpg'
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
    detailClick (item) {
      if (this.viewDetail) {
        this.viewDetail(item);
      }
    }
  }
};
</script>

<style>
.common-card {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15rpx;
  background-color: #fff;
  padding-bottom: 20rpx;
}
.common-card-image {
  width: 40%;
  padding: 5px;
  border-radius: 20rpx;
  height: 170rpx;
  overflow: hidden;
  position: relative;
}
.common-card-image image {
  width: 100%;
  border-radius: 20rpx;
}
.common-card-content {
  display: flex;
  flex-direction: column;
  width: 60%;
}
.common-card-content-title {
  padding-top: 5px;
  padding-left: 10px;
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
}
.common-card-content-desc-item ._text {
  white-space: nowrap;
}
.common-card-content-desc-item ._view {
  height: 20px;
  overflow: hidden;
}
.common-card-content-status {
  width: 93%;
  text-align: center;
  font-size: 14px;
  background: rgba(210, 81, 54, 0.6);
  opacity: 0.99;
  color: #fff;
  line-height: 26px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  bottom: 0;
}
.common-card-content-icongroup {
  padding-left:20rpx;
  height:52rpx;
  opacity:0.6;
  display:flex;
  line-height:52rpx;
  align-items:center;
  flex-direction:row;
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
  width: 28rpx;
  padding: 4px;
}
.messageImg {
  width: 32rpx;
  padding: 4px 4px 4px 15px;
}
.common-card ._navigator{
  display:flex;
  width:100%;
}
.common-card .icon-group-item-label{
  font-size:24rpx;
  color:#666;
  align-self:flex-start;
  margin-left: 0
}
</style>

