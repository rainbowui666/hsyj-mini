<template >
  <view class="activity-page">
    <div class="activity-banner-group">
      <div class="swiperBgLeft"></div>
      <div class="swiperBgRight"></div>
      <swiper class="swiper" :indicator-dots="true" :autoplay="true" interval="3000" duration="800">
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
            <image
              :src="item.pics[0]?item.pics[0].sourceAddress?'https://hsstatic.sufe.edu.cn/images/'+item.pics[0].sourceAddress:'https://hsstatic.sufe.edu.cn/mini-images/default.png':'https://hsstatic.sufe.edu.cn/mini-images/default.png'"
              class="slide-image"
              @click="navigatoTo(item)"
            />
          </swiper-item>
        </block>
      </swiper>
    </div>
    <common-card
      :data="activityList"
      :onMessageClick="onMessageClick"
      :onThumbsupClick="onThumbsupClick"
      :viewDetail="viewDetail"
    />
  </view>
</template>

<script>
import commonCard from '../../components/common-card';
import api from '@/utils/api';
import dayjs from 'dayjs';

export default {
  components: {
    commonCard
  },
  data () {
    return {
      movies: [],
      activityList: [
        {
          src: '../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          activityHolder: '复旦大学',
          activityTime: '2019年4月11日',
          iconType: 'ios-arrow-forward',
          isGroup: false,
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
      ],
      pageindex: 1,
      pagesize: 5
    };
  },
  async onShow () {
    this.pageindex = 1;
    const res1 = await api.getRecommendList({
      studentid: wx.getStorageSync('userInfo').studentID
    });
    this.movies = res1.data.activitydata ? res1.data.activitydata : [];

    this.getActivityList();
  },
  methods: {
    async getActivityList () {
      const res = await api.getActivityList({
        pageindex: this.pageindex,
        pagesize: this.pagesize,
        studentid: wx.getStorageSync('userInfo').studentID
      });
      this.activityList = res.data.data ? res.data.data : [];
      this.activityList.forEach(element => {
        if (element.shstate.wantto) {
          element.thumbsupImg =
            'https://hsstatic.sufe.edu.cn/mini-images/thumbsUp_red.png';
        } else {
          element.thumbsupImg =
            'https://hsstatic.sufe.edu.cn/mini-images/thumbsUp.png';
        }
        element.messageImg =
          'https://hsstatic.sufe.edu.cn/mini-images/messageImg.png';
        element.startDate = dayjs(element.startDate).format('YYYY-MM-DD HH:mm:ss')
      });
      this.activityList = this.activityList;
    },
    navigatoTo (item) {
      wx.navigateTo({
        url: '/pages/activity/activityDetail/main?id=' + item.activityID + '&isGroup=' + item.isGroup + '&applyStatus=' + item.hasjoin + '&startDate=' + item.startDate + '&name=' + item.activityName
      });
    },
    onMessageClick (item, index) {
      // wx.navigateTo({url: 'activityDetail/main?name=' + item.activityName + '&isGroup=' + item.isGroup + '&applyStatus=' + item.activityStatus})
    },
    onThumbsupClick (item, index) {
      this.activityList[index].thumbsupImg =
        '../../static/images/thumbsUp_red.png';

      // wx.navigateTo({url: 'activityDetail/main?name=' + item.activityName + '&isGroup=' + item.isGroup + '&applyStatus=' + item.activityStatus})
    },
    viewDetail (item) {
      console.log('====', item)
      wx.navigateTo({ url: 'activitySight/main?id=' + item.activityID + '&name=' + item.activityName + '&hasjoin=' + item.hasjoin });
    },
    async refresh () {
      this.pageindex = 1;
      const res1 = await api.getRecommendList({
        studentid: wx.getStorageSync('userInfo').studentID
      });
      this.movies = res1.data.activitydata ? res1.data.activitydata : [];

      this.getActivityList();
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
        'https://gzhgl.sufe.edu.cn/api/activity/frontList?pageindex=' +
        this.pageindex +
        '&pagesize=' +
        this.pagesize +
        '&studentid=' +
        wx.getStorageSync('userInfo').studentID,
      method: 'GET',
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      success: res => {
        // 回调函数

        let newActivityList = res.data.data.data ? res.data.data.data : [];
        newActivityList.forEach(element => {
          if (element.shstate.wantto) {
            element.thumbsupImg =
            'https://hsstatic.sufe.edu.cn/mini-images/thumbsUp_red.png';
          } else {
            element.thumbsupImg =
            'https://hsstatic.sufe.edu.cn/mini-images/thumbsUp.png';
          }
          element.messageImg =
            'https://hsstatic.sufe.edu.cn/mini-images/messageImg.png';
          element.startDate = dayjs(element.startDate).format('YYYY-MM-DD HH:mm:ss')
        });
        for (var i = 0; i < newActivityList.length; i++) {
          this.activityList.push(newActivityList[i]);
        }
        wx.hideLoading();
      }
    });
  },
  onPullDownRefresh: function () {
    this.pageindex = 1;
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    // // 隐藏导航栏加载框
    wx.hideNavigationBarLoading();
    // // 停止下拉动作
    this.refresh()
    wx.stopPullDownRefresh();
  }
};
</script>

<style>
.activity-page {
  background-color: #eeecec;
}
.activity-banner-group {
  position: relative;
  background-color: #fff;
  border-top: 15rpx solid #eeecec;
}
.activity-page .slide-image {
  width: 100%;
  border-radius: 10rpx;
}
/* /swiper/ */
.swiper .wx-swiper-dots.wx-swiper-dots-horizontal {
  margin-bottom: 20rpx;
}
.swiper {
  position: relative;
}
.swiper .wx-swiper-dot {
  width: 40rpx;
  display: inline-flex;
  height: 10rpx;
  margin-left: 5rpx;
  justify-content: space-between;
  position: relative;
  top: 10px;
}
.swiper .wx-swiper-dot::before {
  content: "";
  flex-grow: 1;
  background: #c4c1c1;
  border-radius: 8rpx;
}
.swiper .wx-swiper-dot-active::before {
  background: #d25136;
}
/* // */
.activity-page .swiper {
  width: 92%;
  height: 360rpx;
  margin: 0 auto;
  padding: 26rpx 0;
}
.swiperBgLeft {
  height: calc(100% - 90rpx);
  width: 40rpx;
  position: absolute;
  background-color: #d25136;
  border-radius: 8rpx;
  left: -20rpx;
  margin: 50rpx 0;
}
.swiperBgRight {
  height: calc(100% - 90rpx);
  width: 40rpx;
  position: absolute;
  background-color: #d25136;
  border-radius: 8rpx;
  right: -20rpx;
  margin: 50rpx 0;
}
.activity-page ._swiper-item {
  border-radius: 10rpx;
  /* overflow: visible !important; */
}
</style>
