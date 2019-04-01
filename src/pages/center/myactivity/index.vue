<template >
  <view class="myactivity-page">
      <wux-tabs theme="assertive" controlled :current="current" @change="onChange">
        <wux-tab key="myactivity_tab1">
            <wux-badge count="3">已报名</wux-badge>
        </wux-tab>
        <wux-tab key="myactivity_tab2">
            <wux-badge count="1024">成功活动</wux-badge>
        </wux-tab>
        <wux-tab key="myactivity_tab3">
            <wux-badge count="4">失败活动</wux-badge>
        </wux-tab>
        <wux-tab key="myactivity_tab4">
            <wux-badge count="4">进行中</wux-badge>
        </wux-tab>
      </wux-tabs>
    <!-- <head-message :valueData="valueData"> </head-message> -->
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
      current: 'myactivity_tab1',
      valueData: '已报名：2次  成功活动：2次  失败活动：1次  进行中：1次',
      activityList: [
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward',
          activityStatus: '已报名'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward',
          activityStatus: '进行中'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward'
        }

      ]
    };
  },
  methods: {
    iconClick (item) {
      console.log('item', item)
      wx.navigateTo({ url: '/pages/activity/activityDetail/main?name=' + item.activityName })
    },
    onChange (e) {
      console.log('onChange', e)
      this.current = e.target.key;
    }
  }
};
</script>

<style>
.myactivity-page{
  background-color: #f4f4f4;
}
</style>
