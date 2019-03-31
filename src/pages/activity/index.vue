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
          url: '../../static/images/fudan1.jpg'
        },
        {
          url: '../../static/images/fudan2.jpg'
        },
        {
          url: '../../static/images/fudan1.jpg'
        },
        {
          url: '../../static/images/fudan2.jpg'
        }
      ],
      activityList: [
        {
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-dropright-circle',
          activityStatus: '已报名',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#FFF',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#FFF',
              label: 11
            }
          ]
        },
        {
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-dropright-circle',
          activityStatus: '进行中',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#FFF',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#FFF',
              label: 11
            }
          ]
        },
        {
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-dropright-circle',
          isSingle: false,
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#FFF',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#FFF',
              label: 11
            }
          ]
        },
        {
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-dropright-circle',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#FFF',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#FFF',
              label: 11
            }
          ]
        },
        {
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-dropright-circle',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#FFF',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#FFF',
              label: 11
            }
          ]
        },
        {
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-dropright-circle',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#FFF',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#FFF',
              label: 11
            }
          ]
        },
        {
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-dropright-circle',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#FFF',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#FFF',
              label: 11
            }
          ]
        },
        {
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-dropright-circle',
          iconArr: [
            {
              icon: 'ios-heart',
              size: '16',
              color: '#FFF',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#FFF',
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
      wx.navigateTo({url: 'activityDetail/main?name=' + item.activityName + '&isSingle=' + item.isSingle + '&applyStatus=' + item.activityStatus})
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
.activity-page .common-card-content-icongroup .icon-group {
  width: 95%;
}
</style>
