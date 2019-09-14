<template >
  <web-view :src="src" v-if="src"></web-view>
</template>

<script>
export default {
  onLoad (option) {
    if (option.type) {
      const studentID = wx.getStorageSync('userInfo').studentID;
      this.src = 'https://cdn.100eduonline.com/group.html?studentId=' + studentID + '&id=' + option.id;
    } else {
      this.src = 'https://cdn.100eduonline.com/map.html?id=' + option.id;
    }
  },
  data () {
    return {
      src: null
    };
  }
};
</script>