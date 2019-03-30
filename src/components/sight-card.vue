<template>
  <view>
    <navigator url="/pages/map/sight/main?activitySight=true">
      <view v-for="(item,index) in data" :key="index" class="common-card">
        <view class="common-card-image">
          <image mode="widthFix" :src="item.src"/>
        </view>
        <view class="common-card-content">
          <view class="common-card-content-title">
            <span v-if="item.start" class="drip-start"/>
            <span v-if="item.end" class="drip-end"/>
            <text>{{ item.sightName }}</text>
          </view>
          <view class="common-card-content-icongroup">
            <icon-group :list="item.iconArr"/>
          </view>
        </view>
        <view class="common-card-icon">
          <view class="common-card-icon-inner" @click="click(item)">
            <wux-icon :type="item.iconType"/>
          </view>
          <view class="common-card-icon-text">
            <view v-if="item.sightStatus=='导航'" class="on-status">{{ item.sightStatus }}</view>
            <view v-if="item.sightStatus=='已完成'" class="sign-up-status">{{ item.sightStatus }}</view>
          </view>
        </view>
      </view>
    </navigator>
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
.common-card {
  display: flex;
  width: 100%;
  height: 85px;
  border-bottom:1px solid #888;
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
  width: 60%;
}
.common-card-content-title {
  padding-top: 5px;
  padding-left: 5px;
  padding-bottom: 5px;
  font-size: 18px;
  display: flex;
  line-height: 40px;
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
.common-card-content-icongroup .icon-group {
  width: 50%;
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
  width: 15%;
  margin: auto;
}
.common-card-icon-inner {
  width: 62%;
  margin: auto;
}
.common-card-icon-text {
  text-align: center;
}
.common-card-icon-inner {
  display: flex;
  justify-content: center;
}
span {
  height: 38px;
  width: 38px;
  display: block;
  position: relative;
}
.drip-start {
  width: 26px;
}
.drip-start:before {
  content: "起";
  height: 26px;
  width: 26px;
  display: block;
  position: absolute;
  top: 2px;
  left: 0px;
  z-index: 1;
  line-height: 26px;
  background: #333;
  border-radius: 40px;
  -webkit-border-radius: 40px;
  -moz-border-radius: 40px;
  color: #fff;
  text-align: center;
}
.drip-start:after {
  content: "";
  height: 0px;
  width: 0px;
  display: block;
  position: absolute;
  bottom: 2px;
  left: 3px;
  border: 10px transparent solid;
  border-top-color: #333;
  border-width: 15px 10px 0px 10px;
}
.drip-end {
  width: 26px;
}
.drip-end:before {
  content: "终";
  height: 26px;
  width: 26px;
  display: block;
  position: absolute;
  top: 2px;
  left: 0px;
  z-index: 1;
  line-height: 26px;
  background: #333;
  border-radius: 40px;
  -webkit-border-radius: 40px;
  -moz-border-radius: 40px;
  color: #fff;
  text-align: center;
}
.drip-end:after {
  content: "";
  height: 0px;
  width: 0px;
  display: block;
  position: absolute;
  bottom: 2px;
  left: 3px;
  border: 10px transparent solid;
  border-top-color: #333;
  border-width: 15px 10px 0px 10px;
}
</style>
