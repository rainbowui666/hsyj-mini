<template >
  <web-view :src="src" v-if="src"></web-view>
</template>

<script>
export default {
  onShow () {
    this.src = this.$mp
      ? this.$mp.query.videoUrl
        ? 'https://cdn.100eduonline.com/mini-images/video.html?url=' +
          this.$mp.query.videoUrl
        : this.$mp.query.soundurl
          ? 'https://cdn.100eduonline.com/mini-images/audio.html?url=' +
            this.$mp.query.soundurl
          : ''
      : '';
  },
  data () {
    return {
      src: this.$mp
        ? this.$mp.query.videoUrl
          ? 'https://cdn.100eduonline.com/mini-images/video.html?url=' +
            this.$mp.query.videoUrl
          : this.$mp.query.soundurl
            ? 'https://cdn.100eduonline.com/mini-images/audio.html?url=' +
              this.$mp.query.soundurl
            : ''
        : ''
    };
  }
};
</script>