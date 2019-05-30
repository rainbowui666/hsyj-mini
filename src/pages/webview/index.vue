<template >
      <web-view :src="src" v-if="src"></web-view>
</template>

<script>
export default {
  onShow () {
    this.src = this.$mp ? this.$mp.query.videoUrl ? 'https://hsyj.100eduonline.com/static/mini-images/index.html?url=' + this.$mp.query.videoUrl : '' : ''
  },
  data () {
    return {
      src: this.$mp ? this.$mp.query.videoUrl ? 'https://hsyj.100eduonline.com/static/mini-images/index.html?url=' + this.$mp.query.videoUrl : '' : ''
    };
  }
};
</script>