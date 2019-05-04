<template >
  <view>
    <view v-if="showGif">
      <img class="img_flash" :src="homeFlash">
    </view>
    <view v-else class="activity-page">
      <div class="searchBar">
        <picker @change="pickerChange" :value="index" :range="array">
          <view class="picker">
            {{array[index]}}
          </view>
        </picker>
        <span class="sanjiao"></span>
        <wux-search-bar clear show-cancel controlled placeholder="Search"/>
      </div>
      <view class="activity-recommendation-group">
        <view class="activity-recommendation-text">活动推荐</view>
          <div class="swiperBgLeft"></div><div class="swiperBgRight"></div>
          <swiper class="swiper" :indicator-dots="true" :autoplay="true" interval="3000" duration="800">
            <block v-for="(item, index) in movies" :key="index">
              <swiper-item>
                <image :src="item.url" class="slide-image"  mode="widthFix"/>
              </swiper-item>
            </block>
          </swiper>
        <!-- </view> -->
      </view>
      <view class="scenic-spot-recommendation-group">
        <view class="scenic-spot-recommendation-text">景点推荐</view>
        <scroll-view scroll-x="true" class="scenic-spot-recommendation">
          <view class="scenic-spot-recommendation-view">
            <view
              v-for="(item, index) in imgList"
              :key="index"
              class="scenic-spot-recommendation-view-inner"
            >
              <image :src="item.url" class="scenic-spot-recommendation-view-inner-image"/>
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
              <image
                src="../../static/images/fudan1.jpeg"
                style="width:60px;height:50px"
                class="scenic-spot-message-view-inner-image"
              />
              <message-card :data="item"/>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import messageCard from '../../components/message-card';
export default {
  components: {
    messageCard
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
      imgList: [
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
        },
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
      messageList: [
        {
          url: '../../static/images/fudan1.jpeg',
          userImg: '../../static/images/fudan1.jpeg',
          userName: '用户1',
          label: '三天前',
          pointsNum: '1234',
          text: 'hahahahahahahahahah'
        },
        {
          url: '../../static/images/fudan1.jpeg',
          userImg: '../../static/images/fudan1.jpeg',
          userName: '用户1',
          label: '三天前',
          pointsNum: '1234',
          text: 'hahahahahahahahahah'
        },
        {
          url: '../../static/images/fudan1.jpeg',
          userImg: '../../static/images/fudan1.jpeg',
          userName: '用户1',
          label: '三天前',
          pointsNum: '1234',
          text: 'hahahahahahahahahah'
        },
        {
          url: '../../static/images/fudan1.jpeg',
          userImg: '../../static/images/fudan1.jpeg',
          userName: '用户1',
          label: '三天前',
          pointsNum: '1234',
          text: 'hahahahahahahahahah'
        }
      ],
      homeFlash: 'http://hsyj.100eduonline.com/static/images/into_flash.gif',
      showGif: true,
      array: ['上海大学', '上海复旦大学', '上海财经大学', '同济大学'],
      index: 0
    };
  },
  mounted () {
    setTimeout(() => {
      this.showGif = false;
      wx.setNavigationBarTitle({
        title: '红色印记'
      });
    }, 2010);
  },
  methods: {},
  onReachBottom: function () {
    // 显示顶部刷新图标
    console.log('11111');
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中'
    });
    // this.messageList.push({
    //   url: '../../static/images/fudan1.jpeg',
    //   text: '1'
    // });

    // 页数+1
    // page = page + 1;
    // wx.request({
    //   url: 'https://xxx/?page=' + page,
    //   method: 'GET',
    //   // 请求头部
    //   header: {
    //     'content-type': 'application/text'
    //   },
    //   success: function (res) {
    //     // 回调函数
    //     var moment_list = that.data.moment;

    //     for (var i = 0; i < res.data.data.length; i++) {
    //       moment_list.push(res.data.data[i]);
    //     }
    //     // 设置数据
    //     that.setData({
    //       moment: that.data.moment
    //     })
    // 隐藏加载框
    wx.hideLoading();
    // }
    // })
  }
};
</script>

<style>
.activity-page {
  background-color: #f4f4f4;
}
.activity-page .swiper{
  width:92%;
  height:360rpx;
  margin:0 auto;
  /* padding-bottom:30rpx; */
}
.swiperBgLeft{
  height:calc( 100% - 180rpx );
  width:40rpx;
  position:absolute;
  background-color:red;
  border-radius:10rpx;
  left:-20rpx;
  margin:50rpx 0;
}
.swiperBgRight{
  height:calc( 100% - 180rpx );
  width:40rpx;
  position:absolute;
  background-color:red;
  border-radius:10rpx;
  right:-20rpx;
  margin:50rpx 0;
}
.activity-page ._swiper-item{
  border-radius: 10rpx;
  overflow:visible!important
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
.scenic-spot-message-group{
  background-color: #fff;
  margin-top:10rpx;
  position: relative;
}
.activity-recommendation-group{
  padding-bottom: 30rpx
}
.activity-recommendation-text,
.scenic-spot-recommendation-text,
.scenic-spot-message-text{
  margin-left: 15px;
  font-size: 16px;
  padding: 6px 0;
  font-weight: bold
}
.scenic-spot-recommendation-group {
  height: 240rpx;
  padding-bottom:20rpx;
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
  width:95%;
  margin: 10px auto 0 auto;
}
.scenic-spot-message-view-inner > image{
  border-radius: 15%
}
/* // */
.searchBar{
  display: flex;
  background-color:#fff;
}
.searchBar > ._picker{
  padding:0 5px 0 15px;
}
.searchBar > ._picker ._view{
  line-height:84rpx;
  font-size:34rpx;
}
.sanjiao{
  width:0;
  border-width:8rpx;
  border-style:solid;
  border-color:#777 transparent transparent transparent;
  margin-top:40rpx;
}
.searchBar > ._wux-search-bar{
  flex-grow:1;
}

.swiper .wx-swiper-dots.wx-swiper-dots-horizontal{
     margin-bottom: 20rpx;
}
.swiper{
  position: relative
}
.swiper .wx-swiper-dot{
    width:40rpx;
    display: inline-flex;
    height: 10rpx;
    margin-left: 20rpx;
    justify-content:space-between;
    position: relative;
    top: 10px;
}
.swiper .wx-swiper-dot::before{
    content: '';
    flex-grow: 1; 
    background: #ddd;
    border-radius: 8rpx
}
.swiper .wx-swiper-dot-active::before{
    background:red;   
}
</style>

