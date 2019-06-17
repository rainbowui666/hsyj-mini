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
    <common-card :data="activityList" :iconClick="iconClick" :viewDetail="viewDetail"/>
  </view>
</template>

<script>
import commonCard from '../../../components/common-card';
import headMessage from '../../../components/head-message';
import api from '@/utils/api';
import dayjs from 'dayjs';

export default {
  components: {
    commonCard,
    headMessage
  },
  data () {
    return {
      current: 'myactivity_tab1',
      valueData: '已报名：2次  成功活动：2次  失败活动：1次  进行中：1次',
      pageindex: 1,
      pagesize: 5,
      keyWord: '已报名',
      activityList: [
        // {
        //   src: '../../static/images/fudan.jpg',
        //   activityName: '复旦一日游',
        //   activityHolder: '复旦大学',
        //   activityTime: '2019年4月11日',
        //   iconType: 'ios-arrow-forward',
        //   activityStatus: '已报名',
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   thumbsupNum: 111,
        //   messageNum: 111,
        //   iconArr: [
        //     {
        //       icon: 'ios-thumbs-up',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // },
        // {
        //   src: '../../static/images/fudan.jpg',
        //   activityName: '复旦一日游',
        //   activityHolder: '复旦大学',
        //   activityTime: '2019年4月11日',
        //   iconType: 'ios-arrow-forward',
        //   activityStatus: '进行中',
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   thumbsupNum: 222,
        //   messageNum: 222,
        //   iconArr: [
        //     {
        //       icon: 'ios-thumbs-up',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // },
        // {
        //   src: '../../static/images/fudan.jpg',
        //   activityName: '复旦一日游',
        //   activityHolder: '复旦大学',
        //   activityTime: '2019年4月11日',
        //   iconType: 'ios-arrow-forward',
        //   isSingle: false,
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   thumbsupNum: 333,
        //   messageNum: 333,
        //   iconArr: [
        //     {
        //       icon: 'ios-thumbs-up',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // },
        // {
        //   src: '../../static/images/fudan.jpg',
        //   activityName: '复旦一日游',
        //   activityHolder: '复旦大学',
        //   activityTime: '2019年4月11日',
        //   iconType: 'ios-arrow-forward',
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   thumbsupNum: 444,
        //   messageNum: 444,
        //   iconArr: [
        //     {
        //       icon: 'ios-thumbs-up',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // },
        // {
        //   src: '../../static/images/fudan.jpg',
        //   activityName: '复旦一日游',
        //   activityHolder: '复旦大学',
        //   activityTime: '2019年4月11日',
        //   iconType: 'ios-arrow-forward',
        //   isSingle: false,
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   thumbsupNum: 333,
        //   messageNum: 333,
        //   iconArr: [
        //     {
        //       icon: 'ios-thumbs-up',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // },
        // {
        //   src: '../../static/images/fudan.jpg',
        //   activityName: '复旦一日游',
        //   activityHolder: '复旦大学',
        //   activityTime: '2019年4月11日',
        //   iconType: 'ios-arrow-forward',
        //   isSingle: false,
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   thumbsupNum: 333,
        //   messageNum: 333,
        //   iconArr: [
        //     {
        //       icon: 'ios-thumbs-up',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // },
        // {
        //   src: '../../static/images/fudan.jpg',
        //   activityName: '复旦一日游',
        //   activityHolder: '复旦大学',
        //   activityTime: '2019年4月11日',
        //   iconType: 'ios-arrow-forward',
        //   isSingle: false,
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   thumbsupNum: 333,
        //   messageNum: 333,
        //   iconArr: [
        //     {
        //       icon: 'ios-thumbs-up',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // },
        // {
        //   src: '../../static/images/fudan.jpg',
        //   activityName: '复旦一日游',
        //   activityHolder: '复旦大学',
        //   activityTime: '2019年4月11日',
        //   iconType: 'ios-arrow-forward',
        //   isSingle: false,
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   thumbsupNum: 333,
        //   messageNum: 333,
        //   iconArr: [
        //     {
        //       icon: 'ios-thumbs-up',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // }
      ]
    };
  },
  async mounted () {
    this.getMyActivityList();
  },
  methods: {
    viewDetail (item) {
      wx.navigateTo({ url: '/pages/activity/activitySight/main?id=' + item.activityID + '&name=' + item.activityName });
    },
    iconClick (item) {
      wx.navigateTo({ url: '/pages/activity/activityDetail/main?name=' + item.activityName })
    },
    onChange (e) {
      if (e.target.key === 'myactivity_tab1') {
        this.keyWord = '已报名'
        this.getMyActivityList()
      } else if (e.target.key === 'myactivity_tab2') {
        this.keyWord = '进行中'
        this.getMyActivityList()
      } else {
        this.keyWord = '已完成'
        this.getMyActivityList()
      }
      this.current = e.target.key;
    },
    async getMyActivityList () {
      const res = await api.getMyActivityList({
        pageindex: this.pageindex,
        pagesize: this.pagesize,
        studentid: wx.getStorageSync('userInfo').studentID,
        hasjoin: this.keyWord
      });
      let activityInfo = res.data.data ? res.data.data : [];
      activityInfo.forEach(element => {
        element.thumbsupImg =
          'https://cdn.100eduonline.com/mini-images/thumbsUp.png';
        element.messageImg =
          'https://cdn.100eduonline.com/mini-images/messageImg.png';
        element.startDate = dayjs(element.startDate).format('YYYY-MM-DD HH:mm:ss');
      });
      this.activityList = activityInfo;
    }
  },
  onReachBottom: function () {
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中'
    });

    // 页数+1
    this.pageindex = this.pageindex + 1;
    wx.request({
      url:
        'https://hsapi.100eduonline.com/api/myself/getMyActivityList?pageindex=' + this.pageindex + '&pagesize=' +
        this.pagesize + '&studentid=' + wx.getStorageSync('userInfo').studentID,
      method: 'GET',
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      success: res => {
        // 回调函数
        let newActivityList = res.data.data.data ? res.data.data.data : [];
        newActivityList.forEach(element => {
          element.thumbsupImg =
            'https://cdn.100eduonline.com/mini-images/thumbsUp.png';
          element.messageImg =
            'https://cdn.100eduonline.com/mini-images/messageImg.png';
          element.startDate = dayjs(element.startDate).format('YYYY-MM-DD HH:mm:ss')
        });
        for (var i = 0; i < newActivityList.length; i++) {
          this.activityList.push(newActivityList[i]);
        }
        wx.hideLoading();
      }
    });
  }
};
</script>

<style>
.myactivity-page{
  background-color: #ccc;
  /* border-radius:16rpx; */
  padding:0 5%;
}
.myactivity-page .common-page{
  padding: 0 5%;
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
