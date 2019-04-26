<template >
  <view class="scenic-spot-message-text-group">
    <image
      :src="data.userImg"
      style="width:50px;height:50px;border-radius:50%"
      class="scenic-spot-message-view-inner-image"
    />
    <view class="scenic-spot-message-text">
      <view class="scenic-spot-message-text-label">
        <view>{{data.userName}}</view>
        <view>{{data.label}}</view>
        <view class="scenic-spot-message-text-icon-group" @click="click">
          <icon type="success" size="20"/>
          <view>{{data.pointsNum}}</view>
        </view>
      </view>
      <view>
        <view>{{data.text}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: []
    },
    iconClick: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
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
.scenic-spot-message-text-group {
  display: flex;
}
.scenic-spot-message-text {
  display: flex;
  flex-direction: column;
}
.scenic-spot-message-text-label {
  display: flex;
}
.scenic-spot-message-text-icon-group {
  display: flex;
}
</style>

