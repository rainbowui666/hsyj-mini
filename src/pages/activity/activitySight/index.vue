<template >
  <view class="sight-page">
    <view class="tip">
      <view>共计4个学校，9个景点</view>
      <view>已完成2个学校，4个景点</view>
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
          src: 'https://picsum.photos/750/750/?image=413',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          sightStatus: '导航',
          iconColor: '#007fff',
          start: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'red',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: 'green',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-checkmark-circle',
          sightStatus: '已完成',
          iconColor: 'red',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'red',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: 'green',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'red',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: 'green',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'red',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: 'green',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'red',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: 'green',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'red',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: 'green',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'red',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: 'green',
              label: 11
            }
          ]
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          end: true,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '24',
              color: 'red',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '24',
              color: 'green',
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
.sight-page .tip {
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  top: 0;
  padding-left: 10px;
}
.sight-page .activity-sight-list{
  margin-top: 54px;
}
</style>
