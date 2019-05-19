<template >
    <view class="myintegral">
      <view class="group_list">
        <wux-cell-group class="myintegral_group">
            <wux-cell title="我的签到" extra="10分"></wux-cell>
            <wux-cell title="我的留言" extra="8分"></wux-cell>
            <wux-cell title="参加过的活动" extra="10分"></wux-cell>
        </wux-cell-group>
      </view>
      <view class="integral_btn_box">
        <button class="integral_btn">积分兑换</button>
      </view>
    </view>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped>
/* page {
  height: 100%;
  width: 100%;
} */
.myintegral {
  background: #ffffff;
  width: 80%;
  height: 200px;
  border-radius: 16rpx;
  padding: 0 5%;
  margin-left: 5%;
}
.myintegral .group_list{
  /* padding-top: 10px; */
  border-radius: 16rpx;
}
.myintegral_group{
  width: 100%;
  font-size: 14px;
}
.myintegral .myintegral_group .wux-cell-group{
  border-radius: 16rpx;
}
.myintegral .integral_btn{
  margin: 36rpx auto;
  background-color: #d25136;
  color: #fff;
  width: 80%;
  font-size: 32rpxx;
  height: 80rpx;
  line-height: 80rpx
}
</style>
