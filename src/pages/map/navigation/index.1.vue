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
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '导航',
          isIcon: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
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
