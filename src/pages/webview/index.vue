<template >
      <web-view :src="src" v-if="src"></web-view>
</template>

<script>
export default {
  async onLoad (options) {
    if (options.id) {
      const item = wx.getStorageSync(options.id);
      this.src = item.url;
    } else if (options.result) {
      const item = wx.getStorageSync(options.result);
      this.src = item.url;
    } else {
      this.src = options.url;
    }
  },
  data () {
    return {
      src: null
    };
  }
};
</script>