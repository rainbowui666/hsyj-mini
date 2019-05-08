<template >
  <view class="navigation-page">
    <wux-search-bar />
    <search-card :data="activityList" :iconClick="iconClick"/>
  </view>
</template>

<script>
import searchCard from '../../../components/search-card';
export default {
  components: {
    searchCard
  },
  data () {
    return {
      activityList: [
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true
        }
      ]
    };
  },
  methods: {
    iconClick (item) {
      console.log('item', item)
      wx.navigateTo({ url: 'activityDetail/main?name=' + item.activityName })
    }
  }
};
</script>

<style>
.navigation-page{
  background-color: #f4f4f4;
}
</style>
