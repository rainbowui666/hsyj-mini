<template>
  <view>
    <!-- <navigator url="/pages/map/navigation/main?activitySight=true"> -->
      <view v-for="(item,index) in data" :key="index" class="search-card">
        <view class="search-card-icon">
          <view v-if="item.isIcon" class="search-card-icon-inner" @click="click(item)">
            <wux-icon :type="item.iconType" :color="item.iconColor"/>
          </view>
          <view class="search-card-icon-text">
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
.search-card {
  display: flex;
  width: 100%;
  height: 85px;
  /* border-bottom:1px solid #888; */
  margin-bottom: 1px;
  background-color: #fff;
}
.search-card-icon {
  width: 15%;
  margin: auto;
}
.search-card-icon-inner {
  width: 62%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.search-card-icon-text {
  text-align: center;
  font-size: 13px;
}
</style>
