<template>
  <view>
    <navigator url="/pages/map/sight/main?activitySight=true">
      <view v-for="(item,index) in data" :key="index" class="sight-card">
        <view class="sight-card-image">
          <image mode="widthFix" :src="item.src"/>
          <view class="sight-card-content-icongroup">
            <icon-group :list="item.iconArr"/>
          </view>
        </view>
        <view class="sight-card-content">
          <view class="sight-card-content-title">
            <wux-tag v-if="item.start" color="red">起点</wux-tag>
            <wux-tag v-if="item.end" color="red">终点</wux-tag>
            <text>{{ item.sightName }}</text>
          </view>
        </view>
        <view class="sight-card-icon">
          <view class="sight-card-icon-inner" @click="click(item)">
            <wux-icon :type="item.iconType" :color="item.iconColor"/>
          </view>
          <view class="sight-card-icon-text">
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
.sight-card {
  display: flex;
  width: 100%;
  height: 85px;
  border-bottom: 1px solid #888;
}
.sight-card-image {
  width: 20%;
  padding: 5px;
}
.sight-card .sight-card-content-icongroup {
  width: 100%;
  height: 26px;
  margin-top: -29px;
  z-index: 999;
  background: #000;
  opacity: 0.6;
  display: flex;
  color:#fff;
  line-height: 26px;
}
.sight-card-image image {
  width: 100%;
}
.sight-card-content {
  display: flex;
  flex-direction: column;
  width: 60%;
}
.sight-card-content-title {
  padding-top: 5px;
  padding-left: 5px;
  padding-bottom: 5px;
  margin: auto 0;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  line-height: 40px;
}
.sight-card-content-desc {
  display: flex;
  flex-direction: row;
  padding: 5px;
  font-size: 10px;
}
.sight-card-content-desc-item {
  margin-right: 5px;
}
.sight-card-content-icongroup {
  padding-left: 5px;
  display: flex;
}
.sight-card-content-icongroup .on-status {
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color: rgb(223, 64, 64);
}
.sight-card-content-icongroup .sign-up-status {
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color: rgb(96, 170, 231);
}
.sight-card-icon {
  width: 15%;
  margin: auto;
}
.sight-card-icon-inner {
  width: 62%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.sight-card-icon-text {
  text-align: center;
  font-size: 13px;
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
