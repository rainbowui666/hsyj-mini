<template >
  <view class="myactivity-page">
    <common-card :data="activityList" :iconClick="iconClick"/>
  </view>
</template>

<script>
import commonCard from '../../../components/common-card';
export default {
  components: {
    commonCard
  },
  data () {
    return {
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
