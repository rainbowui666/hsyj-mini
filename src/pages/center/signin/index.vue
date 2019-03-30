<template >
  <view class="signin-page">
    <navigation-card :data="activityList" :iconClick="iconClick"/>
  </view>
</template>

<script>
import navigationCard from '../../../components/navigation-card';
export default {
  components: {
    navigationCard
  },
  data () {
    return {
      activityList: [
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-send',
          iconColor: '#ffff',
          iconText: '导航'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-send',
          iconColor: '#ffff',
          iconText: '导航'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-send',
          iconColor: '#ffff',
          iconText: '导航'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-send',
          iconColor: '#ffff',
          iconText: '导航'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-send',
          iconColor: '#ffff',
          iconText: '导航'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-send',
          iconColor: '#ffff',
          iconText: '导航'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-send',
          iconColor: '#ffff',
          iconText: '导航'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-send',
          iconColor: '#ffff',
          iconText: '导航'
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
.signin-page .navigation-card-content-title {
  padding-top: 25px;
  padding-left: 5px;
}
.activity-page .slide-image {
  width: 100%;
}

</style>
