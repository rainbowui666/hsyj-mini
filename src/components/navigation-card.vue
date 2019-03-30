<template>
  <view>
    <view v-for="(item,index) in data" :key="index" class="navigation-card">
      <view class="navigation-card-image">
        <image mode="widthFix" :src="item.src"/>
      </view>
      <view class="navigation-card-content">
        <view class="navigation-card-content-title">
          <text>{{ item.activityName }}</text>
        </view>
        <view class="navigation-card-content-icongroup">
          <icon-group :list="item.iconArr"/>
        </view>
      </view>
      <view class="navigation-card-icon">
        <view class="navigation-card-icon-inner" @click="click(item)">
          <wux-icon :type="item.iconType" :color="item.iconColor"/>
        </view>
        <view class="navigation-card-icon-text">
          <text>{{ item.iconText }}</text>
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
.navigation-card {
  display: flex;
  width: 100%;
  height: 85px;
  border-bottom: 1px solid #6666;
}
.navigation-card-image {
  width: 20%;
  padding: 5px;
}
.navigation-card-image image {
  width: 100%;
}
.navigation-card-content {
  display: flex;
  flex-direction: column;
}
.navigation-card-content-title {
  padding-top: 5px;
  padding-left: 5px;
}
.navigation-card-content-desc {
  display: flex;
  flex-direction: row;
  padding: 5px;
  font-size: 10px;
}
.navigation-card-content-desc-item {
  margin-right: 5px;
}
.navigation-card-content-icongroup {
  padding-left: 5px;
  display: flex;
}
.navigation-card-content-icongroup .icon-group{
  width: 50%;
}
.navigation-card-content-icongroup .on-status{
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color:rgb(223, 64, 64);
}
.navigation-card-content-icongroup .sign-up-status{
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color:rgb(96, 170, 231);
}
.navigation-card-icon {
  width: 10%;
  margin-left: 50px;
  margin: auto;
}
.navigation-card-icon-inner {
  background-color: #1fabf3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}
.navigation-card-icon-text{
  font-size: 13px;
  text-align: center;
}
</style>
