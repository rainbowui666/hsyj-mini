<template >
  <web-view :src="src" v-if="src"></web-view>
</template>

<script>
export default {
  onLoad (option) {
    this.src = 'https://cdn.100eduonline.com/map.html?id=' + option.id;
  },
  data () {
    return {
      src: null
    };
  }
};
</script>