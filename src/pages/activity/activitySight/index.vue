<template >
  <view class="sight-page">
    <view class="tip">
      <wux-cell title="共计4个学校，9个景点"></wux-cell>
      <wux-cell title="已完成2个学校，4个景点"></wux-cell>
    </view>
    <view class="activity-sight-list">
    <sight-card :data="sightList" :iconClick="iconClick"/>
    </view>
  </view>
</template>

<script>
import sightCard from '../../../components/sight-card';
export default {
  components: {
    sightCard
  },
  data () {
    return {
      sightList: [
        {
          src: '../../../static/images/fudan.jpg',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          sightStatus: '导航',
          iconColor: '#007fff',
          start: true,
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
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-checkmark-circle',
          sightStatus: '已完成',
          iconColor: 'red',
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
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
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
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
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
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
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
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
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
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
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
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          end: true,
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
      console.log('item', item);
      // wx.navigateTo({ url: 'sightDetail/main?name=' + item.sightName })
    }
  }
};
</script>

<style>

.sight-page .activity-sight-list{
  /* margin-top: 54px; */
}
</style>
