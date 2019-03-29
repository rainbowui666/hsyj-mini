<template >
  <view class="activity-page">
    <swiper class="swiper" :indicator-dots="true" :autoplay="true" interval="3000" duration="800">
      <block v-for="(item, index) in movies" :key="index">
        <swiper-item>
          <image :src="item.url" class="slide-image"/>
        </swiper-item>
      </block>
    </swiper>
    <common-card :data="activityList" :iconClick="iconClick"/>
    <!-- <view class="common-card">
      <view class="common-card-image">
        <image mode="widthFix" src="https://picsum.photos/750/750/?image=413"/>
      </view>
      <view class="common-card-content">
        <view class="common-card-content-title">
          <text>上财一日游</text>
        </view>
        <view class="common-card-content-desc">
          <text>主办单位：</text>
          <view class="common-card-content-desc-item">上海财经大学</view>
          <text>活动时间：</text>
          <view>2019年4月11日</view>
        </view>
        <view class="common-card-content-icongroup">
          <icon-group :list="iconArr"/>
        </view>
      </view>
      <view class="common-card-icon">
        <view class="common-card-icon-inner">
          <wux-icon type="ios-arrow-round-forward"/>
        </view>
      </view>
    </view> -->
  </view>
</template>

<script>
import commonCard from '../../components/common-card';
export default {
  components: {
    commonCard
  },
  data () {
    return {
      movies: [
        {
          url: 'https://picsum.photos/750/750/?image=413'
        },
        {
          url: 'https://picsum.photos/750/750/?image=413'
        },
        {
          url: 'https://picsum.photos/750/750/?image=413'
        },
        {
          url: 'https://picsum.photos/750/750/?image=413'
        }
      ],
      activityList: [
        {
          src: 'https://picsum.photos/750/750/?image=413',
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward',
          activityStatus: '已报名',
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
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward',
          activityStatus: '进行中',
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
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward',
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
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward',
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
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward',
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
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward',
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
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward',
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
          activityName: '上海财大一日游',
          activityHolder: '上海财经大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-round-forward',
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
      console.log('item', item)
      wx.navigateTo({ url: 'activityDetail/main?name=' + item.activityName })
    }
  }
};
</script>

<style>
.activity-page .swiper {
  width: 100%;
  height: 230px;
}
.activity-page .slide-image {
  width: 100%;
}

</style>
