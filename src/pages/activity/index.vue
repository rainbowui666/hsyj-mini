<template >
  <view class="activity-page">
    <div class="activity-banner-group">
      <div class="swiperBgLeft"></div>
      <div class="swiperBgRight"></div>
      <swiper class="swiper" :indicator-dots="true" :autoplay="true" interval="3000" duration="800">
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
            <image :src="item.url" class="slide-image"/>
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

export default {
  components: {
    commonCard
  },
  data () {
    return {
      movies: [
        {
          url: '../../static/images/fudan1.jpeg'
        },
        {
          url: '../../static/images/fudan2.jpeg'
        },
        {
          url: '../../static/images/fudan1.jpeg'
        },
        {
          url: '../../static/images/fudan2.jpeg'
        }
      ],
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
        },
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
        },
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
        },
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
  mounted () {
    this.getActivityList();
  },
  methods: {
    formatDte (date) {
      let time = date.substring(0, 19)
      let time1 = time.split('T')[0] + ' ' + time.split('T')[1]
      console.log(time1)
      return time1
    },
    async getActivityList () {
      const res = await api.getActivityList({
        pageindex: this.pageindex,
        pagesize: this.pagesize
      });
      this.activityList = res.data.data ? res.data.data : [];
      this.activityList.forEach(element => {
        element.thumbsupImg = 'http://hsyj.100eduonline.com/static/mini-images/thumbsUp.png'
        element.messageImg = 'http://hsyj.100eduonline.com/static/mini-images/messageImg.png'
        element.startDate = this.formatDte(element.startDate)
      });
      this.activityList = this.activityList
      console.log('分类主页,请求结果', this.activityList);
    },
    onMessageClick (item, index) {
      console.log('onMessageClick', item, index);
      // wx.navigateTo({url: 'activityDetail/main?name=' + item.activityName + '&isGroup=' + item.isGroup + '&applyStatus=' + item.activityStatus})
    },
    onThumbsupClick (item, index) {
      console.log('onThumbsupClick', item, index);
      this.activityList[index].thumbsupImg =
        '../../static/images/thumbsUp_red.png';

      // wx.navigateTo({url: 'activityDetail/main?name=' + item.activityName + '&isGroup=' + item.isGroup + '&applyStatus=' + item.activityStatus})
    },
    viewDetail (item) {
      wx.navigateTo({ url: 'activitySight/main?id=' + item.activityID });
    }
  },
  onReachBottom: function () {
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中'
    });

    // 页数+1
    let that = this;
    console.log('==============', that.pageindex);

    this.pageindex = this.pageindex + 1;
    wx.request({
      url:
        'https://hsyj.100eduonline.com/api/api/activity/frontList?pageindex=' +
        this.pageindex +
        '&pagesize=' +
        this.pagesize,
      method: 'GET',
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      success: res => {
        console.log('推荐留言,请求结果2222', res.data.data.data);

        // 回调函数
        console.log('==============', this.activityList);

        let newActivityList = res.data.data.data ? res.data.data.data : [];
        newActivityList.forEach(element => {
          element.thumbsupImg = 'http://hsyj.100eduonline.com/static/mini-images/thumbsUp.png'
          element.messageImg = 'http://hsyj.100eduonline.com/static/mini-images/messageImg.png'
          element.startDate = this.formatDte(element.startDate)
        });
        for (var i = 0; i < newActivityList.length; i++) {
          console.log('==============', this.activityList);
          this.activityList.push(newActivityList[i]);
        }
        wx.hideLoading();
      }
    });
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
