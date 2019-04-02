<template>
  <view>
    <!-- <navigator url="/pages/map/navigation/main?activitySight=true"> -->
      <view v-for="(item,index) in data" :key="index" class="navigation-card">
        <view class="navigation-card-image">
          <image mode="widthFix" :src="item.src"/>
        </view>
        <view class="navigation-card-content">
          <view class="common-card-content-tag">
          <!-- <wux-tag v-if="item.activityStatus=='进行中'" color="red">进行中</wux-tag> -->
          <wux-tag color="geekblue">{{item.tagText}}</wux-tag>
          </view>
          <view class="navigation-card-content-title">
            <text>{{ item.activityName }}</text>
          </view>
          <view class="navigation-card-content-icongroup">
            <icon-group :list="item.iconArr"/>
          </view>
        </view>
        <view class="navigation-card-icon">
          <view v-if="item.isIcon" class="navigation-card-icon-inner" @click="click(item)">
            <wux-icon :type="item.iconType" :color="item.iconColor"/>
          </view>
          <view class="navigation-card-icon-text">
            <view class="on-status">{{ item.iconText }}</view>
          </view>
        </view>
      </view>
    <!-- </navigator> -->
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
.navigation-card {
  display: flex;
  width: 100%;
  height: 85px;
  /* border-bottom:1px solid #888; */
  margin-bottom: 10px;
  background-color: #fff;
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
  width: 60%;
}
.navigation-card-content-title {
  padding-top: 5px;
  padding-left: 5px;
  padding-bottom: 5px;
  font-size: 18px;
  display: flex;
  line-height: 40px;
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
  width: 50%;

}
.navigation-card-content-icongroup .icon-group {
  width: 100%;
}
.navigation-card-content-icongroup .on-status {
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color: rgb(223, 64, 64);
}
.navigation-card-content-icongroup .sign-up-status {
  margin-left: 20px;
  font-size: 14px;
  line-height: 27px;
  color: rgb(96, 170, 231);
}
.navigation-card-icon {
  width: 15%;
  margin: auto;
}
.navigation-card-icon-inner {
  width: 62%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.navigation-card-icon-text {
  text-align: center;
  font-size: 13px;
}
</style>
