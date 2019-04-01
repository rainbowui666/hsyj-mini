<template >
  <view class="signin-page">
    <wux-tabs controlled :current="current" @change="onChange">
        <wux-tab key="signin_tab1">
            <wux-badge count="3">累计签到</wux-badge>
        </wux-tab>
    </wux-tabs>
    <!-- <head-message :valueData="valueData"> </head-message> -->
    <navigation-card :data="activityList" :iconClick="iconClick"/>
  </view>
</template>

<script>
import navigationCard from '../../../components/navigation-card';
import headMessage from '../../../components/head-message';
export default {
  components: {
    navigationCard,
    headMessage
  },
  data () {
    return {
      current: 'signin_tab1',
      valueData: '累计签到： 28次',
      activityList: [
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true
        },
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
    },
    onChange (e) {
      console.log('onChange', e)
      this.current = e.target.key;
    }
  }
};
</script>

<style>
.signin-page .navigation-card-content-title {
  padding-top: 25px;
  padding-left: 5px;
}
</style>
