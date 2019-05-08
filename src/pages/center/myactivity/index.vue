<template >
  <view class="myactivity-page">
      <wux-tabs theme="assertive" controlled :current="current" @change="onChange">
        <wux-tab key="myactivity_tab1">
          <view class="title">已报名</view>
            <!-- <wux-badge count="3">已报名</wux-badge> -->
        </wux-tab>
        <wux-tab key="myactivity_tab2">
          <view class="title">进行中</view>
            <!-- <wux-badge count="1024">成功活动</wux-badge> -->
        </wux-tab>
        <wux-tab key="myactivity_tab3">
          <view class="title">已完成</view>
            <!-- <wux-badge count="4">失败活动</wux-badge> -->
        </wux-tab>
        <!-- <wux-tab key="myactivity_tab4">
            <wux-badge count="4">进行中</wux-badge>
        </wux-tab> -->
      </wux-tabs>
    <!-- <head-message :valueData="valueData"> </head-message> -->
    <common-card :data="activityList" :iconClick="iconClick"/>
  </view>
</template>

<script>
import commonCard from '../../../components/common-card';
import headMessage from '../../../components/head-message';
export default {
  components: {
    commonCard,
    headMessage
  },
  data () {
    return {
      current: 'myactivity_tab1',
      valueData: '已报名：2次  成功活动：2次  失败活动：1次  进行中：1次',
      activityList: [
        {
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward',
          activityStatus: '已报名',
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111,
          iconArr: [
            {
              icon: 'ios-thumbs-up',
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
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward',
          activityStatus: '进行中',
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 222,
          messageNum: 222,
          iconArr: [
            {
              icon: 'ios-thumbs-up',
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
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward',
          isSingle: false,
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 333,
          messageNum: 333,
          iconArr: [
            {
              icon: 'ios-thumbs-up',
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
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward',
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 444,
          messageNum: 444,
          iconArr: [
            {
              icon: 'ios-thumbs-up',
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
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward',
          isSingle: false,
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 333,
          messageNum: 333,
          iconArr: [
            {
              icon: 'ios-thumbs-up',
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
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward',
          isSingle: false,
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 333,
          messageNum: 333,
          iconArr: [
            {
              icon: 'ios-thumbs-up',
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
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward',
          isSingle: false,
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 333,
          messageNum: 333,
          iconArr: [
            {
              icon: 'ios-thumbs-up',
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
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward',
          isSingle: false,
          thumbsupImg: '../../static/images/thumbsupImg.png',
          messageImg: '../../static/images/messageImg.png',
          thumbsupNum: 333,
          messageNum: 333,
          iconArr: [
            {
              icon: 'ios-thumbs-up',
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
      console.log('item', item)
      wx.navigateTo({ url: '/pages/activity/activityDetail/main?name=' + item.activityName })
    },
    onChange (e) {
      console.log('onChange', e)
      this.current = e.target.key;
    }
  }
};
</script>

<style>
.myactivity-page{
  background-color: #f4f4f4;
  border-radius:16rpx;
}
.myactivity-page > ._view{
  border-top:1px solid #aaa;
  background-color: #fff;
}
.myactivity-page .wux-tabs{
  border-top-left-radius:8px;
  border-top-right-radius:8px;
}
.myactivity-page .common-card{
  margin-top:0;
  margin:0 20rpx;
  width:calc(100% - 40rpx);
  border-bottom:1px solid #aaa;
}
.myactivity-page .common-card:last-child{
  border-bottom:none
}
.myactivity-page ._navigator,
.myactivity-page .navigator-hover{
  background-color:#fff;
  border-radius:16rpx;
}
.myactivity-page .title{
    border:1px solid #bbb;
    padding:4px 10px;
    border-radius:10rpx;
    line-height:18px;
}
.myactivity-page .wux-tabs__tab--current .title{
    color: #d25136;
    border:1px solid #d25136;
}
</style>
