<template>
  <view>
    <view v-for="(item,index) in data" :key="index" class="common-card">
      <view class="common-card-image">
        <image mode="widthFix" :src="item.src"/>
      </view>
      <view class="common-card-content">
        <view class="common-card-content-title">
          <text>{{ item.activityName }}</text>
        </view>
        <view class="common-card-content-desc">
          <text>主办单位：</text>
          <view class="common-card-content-desc-item">{{ item.activityHolder }}</view>
          <text>活动时间：</text>
          <view>{{ item.activityTime }}</view>
        </view>
        <view class="common-card-content-icongroup">
          <icon-group :list="item.iconArr"/>
        <view v-if="item.activityStatus=='进行中'" class="on-status">{{ item.activityStatus }}</view>
        <view v-if="item.activityStatus=='已报名'" class="sign-up-status">{{ item.activityStatus }}</view>
        </view>
      </view>
      <view class="common-card-icon">
        <view class="common-card-icon-inner" @click="click(item)">
          <wux-icon :type="item.iconType"/>
        </view>
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
        this.iconClick(item)
      }
    }
  }
};
</script>

<style>
.common-card {
  display: flex;
  width: 100%;
  height: 85px;
  border-bottom: 1px solid #6666;
}
.common-card-image {
  width: 20%;
  padding: 5px;
}
.common-card-image image {
  width: 100%;
}
.common-card-content {
  display: flex;
  flex-direction: column;
}
.common-card-content-title {
  padding-top: 5px;
  padding-left: 5px;
}
.common-card-content-desc {
  display: flex;
  flex-direction: row;
  padding: 5px;
  font-size: 10px;
}
.common-card-content-desc-item {
  margin-right: 5px;
}
.common-card-content-icongroup {
  padding-left: 5px;
  display: flex;
}
.common-card-content-icongroup .icon-group{
  width: 50%;
}
.common-card-content-icongroup .on-status{
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color:rgb(223, 64, 64);
}
.common-card-content-icongroup .sign-up-status{
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color:rgb(96, 170, 231);
}
.common-card-icon {
  width: 10%;
  margin: auto;
}
.common-card-icon-inner {
  border: 1px solid #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}
</style>
