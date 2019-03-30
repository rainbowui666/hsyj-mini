<template >
    <view class="container">
        <wux-cell-group class="myintegral_group">
            <wux-cell title="我的签到" extra="10分"></wux-cell>
            <wux-cell title="我的留言" extra="8分"></wux-cell>
            <wux-cell title="参加过的活动" extra="10分"></wux-cell>
        </wux-cell-group>
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
page {
  height: 100%;
  width: 100%;
}
.container {
  background: #ffffff;
  height: auto;
  overflow: hidden;
  width: 100%;
  position: relative;
}
.myintegral_group{
  width: 100%;
}
</style>
