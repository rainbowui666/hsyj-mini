<template>
  <view>
    <view v-for="(item,index) in data" :key="index" class="school-card">
      <navigator url="/pages/map/sight/main" class="school-card-navigator">
        <view class="school-card-content">
          <view class="school-card-content-title">
            <text>{{ item.sceneryTitle }}</text>
          </view>
          <view class="school-card-content-desc">
            <view class="sight-introduction ellipsis">{{ item.shdesc }}</view>
          </view>
          <view class="school-card-content-icongroup">
            <view class="school-card-content-icongroup-text">查看详情</view>
            <icon-group :list="item.iconArr"/>
          </view>
        </view>
        <view class="school-card-image">
          <image mode="widthFix" :src="item.pics?'https://hsyj.100eduonline.com/static/images/'+item.pics[0].sourceAddress:defaultImg"/>
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
    }
  },
  data () {
    return {
      defaultImg: 'https://hsyj.100eduonline.com/static/images/54a22670-6ef8-44c3-a165-fa4771275079.jpg'
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
.school-card {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 3rpx;
  background-color: #fff;
}
.school-card-navigator{
  width: 100%;
  display: flex;
}
.school-card-image {
  width: 40%;
  padding: 5px;
  border-radius: 40rpx;
  height: 170rpx;
  overflow: hidden;
  position: relative;
}
.school-card-image image {
  width: 100%;
  border-radius: 40rpx;
}
.school-card-content {
  display: flex;
  flex-direction: column;
  width: 60%;
}
.school-card-content-title {
  padding-top: 5px;
  padding-left: 10px;
  max-height: 58px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.school-card-content-desc {
  display: flex;
  flex-direction: column;
  /* padding: 5px;
  font-size: 11px;
  margin-left: 5px; */
  padding: 5rpx 20rpx 10rpx 20rpx;
  font-size: 26rpx;
  color: #777;
  white-space: nowrap;
  flex-grow: 1;
  min-height: 85rpx
}
.school-card-content-desc-item {
  display: flex;
  flex-direction: row;
  padding: 5px;
}
.school-card-content-icongroup .on-status {
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color: rgb(223, 64, 64);
}
.school-card-content-icongroup .sign-up-status {
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color: rgb(96, 170, 231);
}
.school-card-icon {
  width: 10%;
  margin: auto 0 auto 10px;
  display: flex;
  justify-content: center;
}
.school-card-content-icongroup-text {
  width: 50%;
  font-size: 14px;
  color: #aaa;
}
.sight-introduction.ellipsis {
  -webkit-line-clamp: 3;
  /* 最多显示3行 */
  opacity: 0.75;
}
.school-card-content-icongroup {
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
.school-card-content-icongroup .icon-group {
  width: 30%;
}
.school-card-content-icongroup-text {
  width:50%;
  font-size: 14px;
}
</style>
