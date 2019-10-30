<template >
  <web-view :src="src" v-if="src"></web-view>
</template>

<script>
export default {
  onShow () {
    this.src = this.$mp
      ? this.$mp.query.videoUrl
        ? 'https://hsstatic.sufe.edu.cn/mini-images/video.html?url=' +
          this.$mp.query.videoUrl
        : this.$mp.query.soundurl
          ? 'https://hsstatic.sufe.edu.cn/mini-images/audio.html?url=' +
            this.$mp.query.soundurl
          : ''
      : '';
  },
  data () {
    return {
      src: this.$mp
        ? this.$mp.query.videoUrl
          ? 'https://hsstatic.sufe.edu.cn/mini-images/video.html?url=' +
            this.$mp.query.videoUrl
          : this.$mp.query.soundurl
            ? 'https://hsstatic.sufe.edu.cn/mini-images/audio.html?url=' +
              this.$mp.query.soundurl
            : ''
        : ''
    };
  }
};
</script>