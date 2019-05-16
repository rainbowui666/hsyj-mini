<template >
  <view class="sight-page">
    <view class="activity-sight-list">
      <sight-card :data="sightList" :iconClick="iconClick"/>
    </view>
  </view>
</template>

<script>
import sightCard from '../../../components/sight-card';
// import api from '@/utils/api';

export default {
  components: {
    sightCard
  },
  data () {
    return {
      sightList: [
        {
          src: '../../static/images/school.png',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-checkmark-circle-outline',
          sightStatus: '已完成',
          iconColor: 'red',
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111,
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
          src: '../../static/images/school.png',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-checkmark-circle-outline',
          sightStatus: '已完成',
          iconColor: 'red',
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111,
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
          src: '../../static/images/school.png',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-checkmark-circle-outline',
          sightStatus: '已完成',
          iconColor: 'red',
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111,
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
          src: '../../static/images/school.png',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-checkmark-circle-outline',
          sightStatus: '已完成',
          iconColor: 'red',
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111,
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
          src: '../../static/images/school.png',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-checkmark-circle-outline',
          sightStatus: '已完成',
          iconColor: 'red',
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111,
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
  async onShow () {
    // debugger
    // const res = await api.getActivitySceneryList({id: this.$mp.query.id});
    // this.sightList = res.data.data ? res.data.data : []
    // this.sightList.forEach(element => {
    //   element.thumbsupImg = 'http://hsyj.100eduonline.com/static/mini-images/thumbsUp.png'
    //   element.messageImg = 'http://hsyj.100eduonline.com/static/mini-images/messageImg.png'
    //   element.iconType = 'ios-navigate'
    //   element.iconColor = '#aaa'
    // });
    // console.log('======', this.sightList)
  },
  methods: {
    iconClick (item) {
      console.log('item', item);
      // wx.navigateTo({ url: 'sightDetail/main?name=' + item.sightName })
    },
    onMessageClick (item, index) {
      console.log('onMessageClick', item, index)
      // wx.navigateTo({url: 'activityDetail/main?name=' + item.activityName + '&isSingle=' + item.isSingle + '&applyStatus=' + item.activityStatus})
    },
    onThumbsupClick (item, index) {
      console.log('onThumbsupClick', item, index)
      this.sightList[index].thumbsupImg = '../../static/images/thumbsUp_red.png'

      // wx.navigateTo({url: 'activityDetail/main?name=' + item.activityName + '&isSingle=' + item.isSingle + '&applyStatus=' + item.activityStatus})
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
