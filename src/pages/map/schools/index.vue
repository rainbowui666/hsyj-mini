<template >
  <view class="school-page">
    <div class="school-banner-group">
      <div class="swiperBgLeft"></div>
      <div class="swiperBgRight"></div>
      <swiper class="swiper" :indicator-dots="true" :autoplay="true" interval="3000" duration="800">
        <block v-for="(item, index) in movies" :key="index">
          <swiper-item>
            <image :src="item.sourceAddress?'https://hsstatic.sufe.edu.cn/images/'+item.sourceAddress:'https://hsstatic.sufe.edu.cn/mini-images/default.png'" class="slide-image"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!-- <view class='school-introduction-image'>
      <image
        width='360px'
        src='../../../static/images/fudan1.jpeg'
      />
    </view>-->
    <view class="school-introduction-group">
      <text
        :class="ellipsis?'school-introduction ellipsis':'school-introduction unellipsis'"
      >&nbsp;&nbsp;{{ schoolList.schooldesc }}</text>
      <view class="school-introduction-icon icon" @tap="expand">
        <wux-icon :type="ellipsis?'ios-arrow-down':'ios-arrow-up'" color="#888"/>
      </view>
    </view>
    <view class="school-introduction-group-list">
      <!-- <view :class="ellipsis?'sight-introduction-group-show':'sight-introduction-group-hide'"> -->
      <!-- <view class="sight-introduction-group-item">
          <wux-row gutter="12" v-for="(row,index) in newArr" :key="index">
            <wux-col span="6" v-for="(item,oindex) in row" :key="oindex">
              <navigator url="/pages/map/sight/main">
                <image width="170px" height="130px" :src="item.src"/>
                <icon-group :list="iconArr"/>
              </navigator>
              <text class="sight-introduction ellipsis">{{ item.desc }}</text>
            </wux-col>
          </wux-row>
      </view>-->
      <!-- </view> -->
      <!-- <view
        v-for="(item, index) in sight"
        :key="index"
        class="sight-introduction-group-item"
      > -->
        <school-card :data="sight"/>
      <!-- </view> -->
    </view>
  </view>
</template>

<script>
import iconGroup from '../../../components/icon-group';
import schoolCard from '../../../components/school-card';
import api from '@/utils/api';
export default {
  components: {
    iconGroup,
    schoolCard
  },
  data () {
    return {
      movies: [
        {
          url: '../../../static/images/fudan1.jpeg'
        },
        {
          url: '../../../static/images/fudan2.jpeg'
        },
        {
          url: '../../../static/images/fudan1.jpeg'
        },
        {
          url: '../../../static/images/fudan2.jpeg'
        }
      ],
      schoolList: {},
      sight: [],
      iconArr: [
        // {
        //   icon: 'ios-checkmark-circle-outline',
        //   size: '24',
        //   color: 'green',
        //   label: 11
        // },
        {
          icon: 'ios-thumbs-up',
          size: '16',
          color: 'white',
          label: 11
        },
        {
          icon: 'ios-chatboxes',
          size: '16',
          color: 'white',
          label: 11
        }
        // {
        //   icon: 'ios-share-alt',
        //   size: '24',
        //   color: '#007fff',
        //   label: 11
        // }
      ],
      ellipsis: true
      // newArr: []
    };
  },
  onShow () {
    this.getSchoolDetail();
  },
  mounted () {
    this.getSchoolDetail();
  },
  methods: {
    async getSchoolDetail () {
      const res = await api.getSchoolDetail({id: this.$mp.query.schoolId});
      this.movies = res.data ? res.data.schoolpics ? res.data.schoolpics : [] : []
      this.sight = res.data ? res.data.scenery ? res.data.scenery : [] : []
      if (this.sight.lenght !== 0) {
        this.sight.forEach(element => {
          element.thumbsupImg =
          'https://hsstatic.sufe.edu.cn/mini-images/thumbsUp.png';
          element.messageImg =
          'https://hsstatic.sufe.edu.cn/mini-images/messageImg.png';
        });
      }
      this.schoolList = res.data ? res.data : []
      wx.setNavigationBarTitle({ title: this.schoolList.schoolName });
    },
    expand () {
      var value = !this.ellipsis;
      this.ellipsis = value;
    }
  }
};
</script>

<style>
.school-page .school-introduction {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 10px;
  font-size: 13px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  /* 通过以上四行实现收缩功能 */
  background-color:#fff;
}
.school-introduction-icon{
  text-align:center;
  background-color:#fff;
  margin-bottom:10rpx;
}
.school-page .swiper {
  width: 100%;
  height: 230px;
}
.school-page .slide-image {
  width: 100%;
}
.school-page .school-introduction-image {
  display: flex;
  justify-content: center;
}
.school-page .sight-introduction {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  font-size: 13px;
  /* color: #888; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  /* 通过以上四行实现收缩功能 */
}
.school-page .school-introduction-group-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.school-page .sight-introduction-group-show {
  display: block;
  width: 95%;
  margin-left: 11.06px;
}
.school-page .sight-introduction-group-hide {
  display: none;
}
.school-page .school-introduction.ellipsis {
  -webkit-line-clamp: 3;
  /* 最多显示3行 */
  /* opacity: 0.75; */
  /* 透明度75% */
}
.school-page .unellipsis {
  -webkit-line-clamp: 0;
  /* 全部显示 */
  opacity: 1;
  /* 不透明 */
}
.school-page .school-introduction.icon {
  display: flex;
  justify-content: center;
}
.school-page .sight-introduction-group-item image {
  width: 170px;
  height: 130px;
}
.school-page .icon-group-item {
  margin-right: 10px;
  margin-top: -3px;
}
/* /////// */
.school-page {
  background-color: #eeecec;
}
.school-banner-group {
  position: relative;
  background-color: #fff;
  border-top: 15rpx solid #eeecec;
}
.school-page .slide-image {
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
.school-page .swiper {
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
.school-page ._swiper-item {
  border-radius: 10rpx;
  /* overflow: visible !important; */
}
</style>
