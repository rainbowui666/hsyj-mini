<template >
  <view>
    <!-- <view v-if="showGif">
      <img class="img_flash" :src="homeFlash">
    </view>-->
    <view class="activity-page">
      <div class="searchBar">
        <picker @change="pickerChange" :value="index" range-key="schoolName" :range="schoolList">
          <view class="picker">{{isPickerChange?schoolList[index].shortName ? schoolList[index].shortName : schoolList[index].schoolName:"学校列表"}}</view>
        </picker>
        <span class="sanjiao"></span>
        <image class="search_bar_img" :src="searchBarImg" @click="goToSearch"/>
        <!-- <wux-search-bar clear controlled placeholder="想要去哪儿?"/> -->
      </div>
      <view class="activity-recommendation-group">
        <view class="activity-recommendation-text">活动推荐</view>
        <div class="swiperBgLeft"></div>
        <div class="swiperBgRight"></div>
        <swiper
          class="swiper"
          :indicator-dots="true"
          :autoplay="true"
          interval="3000"
          duration="800"
        >
          <block v-for="(item, index) in movies" :key="index">
            <swiper-item>
              <image
                :src="item.pics?item.pics[0]?'https://hsstatic.sufe.edu.cn/images/'+item.pics[0].sourceAddress:defaultImg:defaultImg"
                class="slide-image"
                @click="navigatoTo(item)"
              />
              <div class="bannerHead">{{item.activityName ? item.activityName : ''}}</div>
            </swiper-item>
          </block>
        </swiper>
        <!-- </view> -->
      </view>
      <!-- <wux-search-bar clear show-cancel controlled placeholder="Search"/> -->

      <view class="scenic-spot-recommendation-group">
        <view class="scenic-spot-recommendation-text">景点推荐</view>
        <scroll-view scroll-x="true" class="scenic-spot-recommendation">
          <view class="scenic-spot-recommendation-view">
            <view
              v-for="(item, index) in imgList"
              :key="index"
              class="scenic-spot-recommendation-view-inner"
            >
              <!-- <navigator
                class="scenic-spot-recommendation-view-inner-image"
                url="/pages/map/sight/main?activitySight=true"
              > -->
                <view class="sceneryRecommend" @click='navigatoToSight(item)'>
                  <image
                    :src="item.pics?item.pics[0]?'https://hsstatic.sufe.edu.cn/images/'+item.pics[0].sourceAddress:defaultImg:defaultImg"
                    class="scenic-spot-recommendation-view-inner-image"
                  />
                  <p class="title">{{item.shortName}}</p>
                  <p class="content">{{item.joinnum}}在这里</p>
                </view>
              <!-- </navigator> -->
            </view>
          </view>
        </scroll-view>
      </view>
      <view class="scenic-spot-message-group">
        <view class="scenic-spot-message-text">精选评论</view>
        <view scroll-x="true" class="scenic-spot-message">
          <view class="scenic-spot-message-view">
            <view
              v-for="(item, index) in messageList"
              :key="index"
              class="scenic-spot-message-view-inner"
            >
              <!-- <view class="scenic-spot-message-view-inner"> -->
              <!-- <navigator
                class="scenic-spot-message-view-inner-image"
                :url="'/pages/activity/activityDetail/main?id=' + item.activityID + '&isGroup=' + item.isGroup + '&applyStatus=' + item.hasjoin + '&startDate=' + item.startDate+ '&name=' + item.activityName"
              > -->
              <view class="scenic-spot-message-view-image" >
                <image
                  :src="item.pics?item.pics[0]?'https://hsstatic.sufe.edu.cn/images/'+item.pics[0].sourceAddress:defaultImg:defaultImg"
                  style="width:92px;height:66px;border-radius:16rpx"
                  class="scenic-spot-message-view-inner-image"
                  @click="navigatoToRecommend(item)"
                />
              </view>
              <!-- </navigator> -->
              <message-card :data="item" :imageName="item.thumbsupImg" :onThumbsupClick="onThumbsupClick" :index="index"/>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import messageCard from '../../components/message-card';
import api from '@/utils/api';
import dayjs from 'dayjs';

export default {
  components: {
    messageCard
  },
  data () {
    return {
      isPickerChange: false,
      movies: [],
      imgList: [
        {
          url: '../../static/images/fudan1.jpeg'
        },
        {
          url: '../../static/images/fudan2.jpeg'
        }
      ],
      messageList: [
        {
          url: '../../static/images/fudan1.jpeg',
          userImg: '../../static/images/fudan1.jpeg',
          userName: '用户1',
          label: '三天前',
          pointsNum: '1234',
          text: 'hahahahahahahahahah'
        }
      ],
      defaultImg: 'https://hsstatic.sufe.edu.cn/mini-images/default.png',
      homeFlash: 'https://hsstatic.sufe.edu.cn/images/into_flash.gif',
      searchBarImg: '../../static/images/searchBar.png',
      showGif: true,
      schoolList: [
        { id: 79, name: '上海大学' },
        { id: 80, name: '上海复旦大学' },
        { id: 82, name: '上海财经大学' },
        { id: 83, name: '同济大学' }
      ],
      index: 0,
      pageindex: 1,
      pagesize: 5
    };
  },
  mounted () {
    // setTimeout(() => {
    //   this.showGif = false;
    //   wx.setNavigationBarTitle({
    //     title: '红色印记'
    //   });
    // }, 2010);
    this.getAllRecommendList();
  },
  onShow () {
    this.isPickerChange = false;
  },
  methods: {
    async onThumbsupClick (item, index) {
      if (wx.getStorageSync('userInfo').studentID === undefined) {
        wx.navigateTo({ url: '/pages/center/login/main' });
        return;
      }
      if (!item.likednum) {
        await api.homeThumbsUp({id: item.discussID, studentid: wx.getStorageSync('userInfo').studentID});
        this.messageList[index].thumbsupImg = 'thumbsUp_red'
        this.$set(item, 'clicknum', item.clicknum + 1)
      }
    },
    pickerChange (value) {
      console.log('===============')
      this.isPickerChange = true;
      wx.navigateTo({ url: '/pages/map/schools/main?schoolId=' + this.schoolList[value.mp.detail.value].schoolID });
    },
    goToSearch () {
      wx.navigateTo({ url: '/pages/map/navigation/main' });
    },
    async getAllRecommendList () {
      const res1 = await api.getRecommendList({
        studentid: wx.getStorageSync('userInfo').studentID
      });
      this.movies = res1.data.activitydata ? res1.data.activitydata : [];
      console.log('this.movies', this.movies)
      this.imgList = res1.data.scenerydata ? res1.data.scenerydata : [];
      const res2 = await api.getRecommendMessageList({
        pageindex: this.pageindex,
        pagesize: this.pagesize,
        studentid: wx.getStorageSync('userInfo').studentID
      });
      this.messageList = res2.data.data ? res2.data.data : [];
      this.messageList.forEach(element => {
        element.createdate = dayjs(element.createdate).format('YYYY-MM-DD HH:mm:ss')
        if (!element.likednum) {
          element.thumbsupImg = 'thumbsUp'
        } else {
          element.thumbsupImg = 'thumbsUp_red'
        }
      });
      const schoolInfo = await api.getSchoolList();
      this.schoolList = schoolInfo.data.data;
    },
    navigatoTo (item) {
      wx.navigateTo({
        url: '/pages/activity/activityDetail/main?id=' + item.activityID + '&isGroup=' + item.isGroup + '&applyStatus=' + item.hasjoin + '&startDate=' + item.startDate + '&name=' + item.activityName
      });
    },
    navigatoToSight (item) {
      console.log('---', item)
      wx.navigateTo({
        url: '/pages/map/sight/main?id=' + item.sceneryID + '&name=' + item.sceneryTitle
      });
    },
    async navigatoToRecommend (item) {
      if (item.distype === 1) {
        if (item.isgroup) {
          const res = await api.getGroupActivityDetail({
            id: item.targetid,
            studentid: wx.getStorageSync('userInfo').studentID
          });
          wx.navigateTo({
            url: '/pages/activity/activityDetail/main?id=' + res.data.activityID + '&isGroup=' + res.data.isGroup + '&applyStatus=' + res.data.hasjoin + '&startDate=' + res.data.startDate + '&name=' + res.data.activityName
          });
        } else {
          const res = await api.getActivityDetail({id: item.targetid, studentid: wx.getStorageSync('userInfo').studentID});
          wx.navigateTo({
            url: '/pages/activity/activityDetail/main?id=' + res.data.activityID + '&isGroup=' + res.data.isGroup + '&applyStatus=' + res.data.hasjoin + '&startDate=' + res.data.startDate + '&name=' + res.data.activityName
          });
        }
      } else {
        wx.navigateTo({
          url: '/pages/map/sight/main?id=' + item.targetid
        });
      }
    }

  },
  onReachBottom: function () {
    // 显示顶部刷新图标
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中'
    });

    // 页数+1
    this.pageindex = this.pageindex + 1;
    wx.request({
      url:
        'https://gzhgl.sufe.edu.cn/api/discuss/homeDiscuss?pageindex=' +
        this.pageindex +
        '&pagesize=' +
        this.pagesize + '&studentid=' + wx.getStorageSync('userInfo').studentID,
      method: 'GET',
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      success: res => {
        // 回调函数

        let newMessageList = res.data.data.data ? res.data.data.data : [];
        newMessageList.forEach(element => {
          element.createdate = dayjs(element.createdate).format('YYYY-MM-DD HH:mm:ss')
          if (!element.likednum) {
            element.thumbsupImg = 'thumbsUp'
          } else {
            element.thumbsupImg = 'thumbsUp_red'
          }
        });
        for (var i = 0; i < newMessageList.length; i++) {
          this.messageList.push(newMessageList[i]);
        }
        // 设置数据
        // that.setData({
        //   moment: that.data.moment
        // })
        // 隐藏加载框
        wx.hideLoading();
      }
    });
  },
  onPullDownRefresh: function () {
    console.log('下拉刷新')
    this.pageindex = 1;
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    // // 隐藏导航栏加载框
    wx.hideNavigationBarLoading();
    // // 停止下拉动作
    this.getAllRecommendList();
    wx.stopPullDownRefresh();
  }
};
</script>

<style>
.activity-page {
  background-color: #f4f4f4;
}
.activity-page .swiper {
  width: 92%;
  height: 360rpx;
  margin: 0 auto;
  /* padding-bottom:30rpx; */
}
.swiperBgLeft {
  height: calc(100% - 180rpx);
  width: 40rpx;
  position: absolute;
  background-color: #d25136;
  border-radius: 8rpx;
  left: -20rpx;
  margin: 50rpx 0;
}
.swiperBgRight {
  height: calc(100% - 180rpx);
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
.activity-page .slide-image {
  width: 100%;
  border-radius: 10rpx;
}
.activity-page .common-card-content-icongroup .icon-group {
  width: 95%;
}
.img_flash {
  width: 100%;
  height: 100vh;
}
.activity-recommendation-group,
.scenic-spot-recommendation-group,
.scenic-spot-message-group {
  background-color: #fff;
  margin-top: 14rpx;
  position: relative;
}
.activity-recommendation-group {
  padding-bottom: 30rpx;
}
.activity-recommendation-text,
.scenic-spot-recommendation-text,
.scenic-spot-message-text {
  margin-left: 15px;
  font-size: 18px;
  padding: 6px 0;
  /* font-weight: bold; */
}
.scenic-spot-recommendation-group {
  height: 240rpx;
  padding-bottom: 20rpx;
}
.scenic-spot-recommendation {
  display: flex;
  flex-direction: row;
  height: 100%;
}
.scenic-spot-recommendation-view {
  height: 76%;
  display: flex;
  flex-direction: row;
}
.scenic-spot-recommendation-view-inner {
  width: 70px;
  padding: 5px;
  margin-left: 5px;
}
.scenic-spot-recommendation-view-inner-image {
  height: 100%;
  width: 70px;
  border-radius: 15%;
}
.scenic-spot-message-view-inner {
  display: flex;
  width: 95%;
  margin: 10px auto 0 auto;
}
.scenic-spot-message-view-inner > ._navigator {
  height: 60px;
  overflow: hidden;
  border-radius: 16rpx;
}
.scenic-spot-message-view-inner > ._navigator > image {
  border-radius: 15%;
  width: 120%;
}
/* /searchBar/ */
.searchBar {
  display: flex;
  background-color: #fff;
  position: relative;
}
.searchBar > ._picker {
  padding: 0 5px 0 15px;
}
.searchBar > ._picker ._view {
  line-height: 84rpx;
  font-size: 34rpx;
}
.sanjiao {
  width: 0;
  border-width: 8rpx;
  border-style: solid;
  border-color: #777 transparent transparent transparent;
  margin-top: 36rpx;
  height: 10px;
}
.searchBar > ._wux-search-bar {
  flex-grow: 1;
  margin-top: -1px;
  margin-bottom: -1px;
}
.search_bar_img {
  width: 74%;
  height: 34px;
  position: absolute;
  top: 50%;
  left: 96px;
  transform: translateY(-50%);
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
.sceneryRecommend {
  position: relative;
  text-align: center;
  height: 100%;
}
.sceneryRecommend .title {
  position: absolute;
  font-size: 40rpx;
  bottom: 30rpx;
  width: 100%;
  color: #fff;
}
.sceneryRecommend .content {
  position: absolute;
  font-size: 18rpx;
  width: 100%;
  bottom: 5rpx;
  color: #fff;
}
.scenic-spot-message-view-image{
  border-radius:16rpx;
  overflow:hidden;
  padding-right: 10rpx
}
.bannerHead{
  position:absolute;
  top:60rpx;
  left:0;
  font-size:34rpx;
  background-color:rgba(210,81,54,0.5);
  padding:10rpx 30rpx 10rpx 60rpx;
  color:#fff;
  border-top-right-radius:10rpx;
  border-bottom-right-radius:10rpx;
  max-width:250rpx;
  letter-spacing:12px;
}
</style>

