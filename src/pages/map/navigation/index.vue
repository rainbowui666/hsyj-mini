<template >
  <view class="navigation-page">
    <wux-search-bar />
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
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'rgb(255, 95, 95)',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'rgb(255, 95, 95)',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'rgb(255, 95, 95)',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'rgb(255, 95, 95)',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'rgb(255, 95, 95)',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'rgb(255, 95, 95)',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'rgb(255, 95, 95)',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'rgb(255, 95, 95)',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: '#888',
              label: 11
            }
          ]
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
</style>
