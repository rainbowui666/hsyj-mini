<template >
  <view class="myactivity-page">
    <head-message :valueData="valueData"> </head-message>
    <common-card :data="activityList" :iconClick="iconClick"/>
  </view>
</template>

<script>
import commonCard from '../../../components/common-card';
import headMessage from '../../../components/head-message';
export default {
  components: {
    commonCard,
    headMessage
  },
  data () {
    return {
      valueData: '已报名：2次  成功活动：2次  失败活动：1次  进行中：1次',
      activityList: [
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward',
          activityStatus: '已报名'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward',
          activityStatus: '进行中'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward'
        }

      ]
    };
  },
  methods: {
    iconClick (item) {
      console.log('item', item)
      wx.navigateTo({ url: '/pages/activity/activityDetail/main?name=' + item.activityName })
    }
  }
};
</script>

<style>
</style>
