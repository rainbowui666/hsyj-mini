<template >
  <view>
    <view v-if="showGif">
      <img class="img_flash" :src="homeFlash">
    </view>
    <view v-else class="activity-page">
      <picker @change="pickerChange" :value="index" :range="array">
      <view class="picker">
        {{array[index]}}
      </view>
      </picker>
      <wux-search-bar clear show-cancel controlled placeholder="Search"/>
      <swiper class="swiper" :indicator-dots="true" :autoplay="true" interval="3000" duration="800">
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
            <image :src="item.url" class="slide-image"/>
          </swiper-item>
        </block>
      </swiper>
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
                style="width:80px;height:50px"
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
.activity-page .swiper {
  margin-top: 10px;
  width: 100%;
  height: 230px;
}
.activity-page .slide-image {
  width: 100%;
}
.activity-page .common-card-content-icongroup .icon-group {
  width: 95%;
}
.img_flash {
  width: 100%;
  height: 100vh;
}
.scenic-spot-recommendation-group {
  height: 140px;
  margin-top: 15px;
  background-color: #fff;
}
.scenic-spot-message-group {
  margin-top: 15px;
  background-color: #fff;
}
.scenic-spot-recommendation {
  display: flex;
  flex-direction: row;
  height: 100%;
}
.scenic-spot-recommendation-text {
  margin-left: 10px;
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
.scenic-spot-message-text-group {
  display: flex;
}
.scenic-spot-message-text {
  display: flex;
  flex-direction: column;
}
.scenic-spot-message-text-label {
  display: flex;
}
.scenic-spot-message-text-icon-group {
  display: flex;
}
</style>

