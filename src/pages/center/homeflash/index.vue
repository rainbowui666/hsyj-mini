<template >
  <view class="login">
    <view>
      <img class="img_flash" :src="homeFlash">
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      homeFlash: 'https://hsyj.100eduonline.com/static/images/into_flash.gif'
    };
  },
  mounted () {
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/map/main'
      });
    }, 2000)
  },
  methods: {
  }
};
</script>

<style>
page {
  background: #f4f4f4;
  min-height: 100%;
}

.img_flash{
  width: 100%;
  height: 100vh;
}
</style>
