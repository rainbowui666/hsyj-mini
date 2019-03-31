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
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward',
          activityStatus: '已报名'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward',
          activityStatus: '进行中'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
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
