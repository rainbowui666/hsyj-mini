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
  width: 95%;
  height: 200px;
  margin: 0 auto;
  border-radius: 10px;
}
.myintegral .group_list{
  padding-top: 10px;
}
.myintegral_group{
  width: 100%;
  font-size: 14px;
}
.myintegral .integral_btn{
  margin: 8px auto;
  background-color: #be2a2a;
  color: #fff;
  width: 80%;
  font-size: 18px;
}
</style>
