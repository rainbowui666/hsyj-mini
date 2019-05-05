<template >
  <view class="sight-page">
    <!-- <view class="tip">
      <wux-cell title="共计4个学校，9个景点"></wux-cell>
      <wux-cell title="已完成2个学校，4个景点"></wux-cell>
    </view>-->
    <!-- <view class="background-image">
      <image mode="widthFix" src="../../../static/images/fudan1.jpeg"/>
    </view>-->
    <view class="activity-sight-list">
      <view class="activity-sight-title-group">
        <view class="activity-sight-title-label">路线推荐</view>
        <view class="activity-sight-title-share">
          <button size="default" open-type="share">
            <wux-icon type="ios-share-alt" size="30" color="#888"/>
            <view class="icon-group-item-label">分享</view>
          </button>
        </view>
      </view>
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
  },
  onShareAppMessage: function (ops) {
    return {
      title: '红色印记'
    };
  }
};
</script>

<style>
.sight-page {
  background-color: #f4f4f4;
}

.background-image image {
  width: 100%;
}
.activity-sight-title-group{
  display: flex;
  justify-content: space-between;
}
.activity-sight-title-share button {
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
  line-height: 40px;
  padding: 0;
  border-radius: 0px;
  box-sizing: inherit;
  background-color: #fff;
  display: flex;
}
.activity-sight-title-share button::after {
  border: none;
}
.activity-sight-title-share .button-hover {
  color: #000;
}
.activity-sight-title-label{
  line-height: 40px;
}
</style>
