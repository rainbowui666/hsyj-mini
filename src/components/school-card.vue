<template>
  <view>
    <view v-for="(item,index) in data" :key="index" class="school-card">
      <view class="school-card-content">
        <view class="school-card-content-title">
          <text>{{ item.schoolName }}</text>
        </view>
        <view class="school-card-content-desc">
          <view class="sight-introduction ellipsis">{{ item.desc }}</view>
        </view>
        <view class="school-card-content-icongroup">
          <view class="school-card-content-icongroup-text">查看详情</view>
          <icon-group :list="item.iconArr"/>
        </view>
      </view>
      <view class="school-card-image">
        <image mode="widthFix" :src="item.src"/>
      </view>
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
  /* height: 85px; */
  justify-content: space-between;
  margin-bottom: 3rpx;
  background-color: #fff;
  padding-bottom: 20rpx;
  /* border-bottom: 1px solid #6666; */
}
.school-card-image {
  width: 40%;
  padding: 5px;
  margin: auto 0;
}
.school-card-image image {
  width: 100%;
}
.school-card-content {
  display: flex;
  flex-direction: column;
  width: 65%;
  /* margin-left: 15px; */
}
.school-card-content-title {
  padding-top: 5px;
  padding-left: 10px;
  /* font-size: 16px; */
}
.school-card-content-desc {
  display: flex;
  flex-direction: column;
  padding: 5px;
  font-size: 11px;
  margin-left: 5px;
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
