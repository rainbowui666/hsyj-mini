<template >
  <view class="sight-page">
    <sight-card :data="sightList" :iconClick="iconClick"/>
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
.sight-page .swiper {
  width: 100%;
  height: 230px;
}
.sight-page .slide-image {
  width: 100%;
}
</style>
