<template >
  <!-- <scroll-view class="sight-page" :scroll-x="false" :scroll-y="false"> -->
  <view class="sight-page">
    <!-- <view class="tip">
      <wux-cell title="共计4个学校，9个景点"></wux-cell>
      <wux-cell title="已完成2个学校，4个景点"></wux-cell>
    </view>-->
    <!-- <view class="background-image">
      <image mode="widthFix" src="../../../static/images/fudan1.jpeg"/>
    </view>-->
    <view class='frosted-glass-container'>  
      <view class='frosted-glass'></view>
    </view>
    <view class="backgroubd-modal"/>
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
import api from '@/utils/api';

export default {
  components: {
    sightCard
  },
  data () {
    return {
      sightList: [
        {
          src: '../../../static/images/school.png',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          sightStatus: '导航',
          iconColor: '#aaa',
          start: true,
          thumbsupImg: '../../../static/images/thumbsupImg.png',
          messageImg: '../../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111
        },
        {
          src: '../../../static/images/school.png',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-checkmark-circle',
          sightStatus: '已完成',
          iconColor: '#d25136',
          thumbsupImg: '../../../static/images/thumbsupImg.png',
          messageImg: '../../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111
        },
        {
          src: '../../../static/images/school.png',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#aaa',
          thumbsupImg: '../../../static/images/thumbsupImg.png',
          messageImg: '../../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111
        },
        {
          src: '../../../static/images/school.png',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#aaa',
          thumbsupImg: '../../../static/images/thumbsupImg.png',
          messageImg: '../../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111
        },
        {
          src: '../../../static/images/school.png',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#aaa',
          thumbsupImg: '../../../static/images/thumbsupImg.png',
          messageImg: '../../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111
        },
        {
          src: '../../../static/images/school.png',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#aaa',
          end: true,
          thumbsupImg: '../../../static/images/thumbsupImg.png',
          messageImg: '../../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111
        }
      ]
    };
  },
  async onShow () {
    const res = await api.getActivitySceneryList({id: this.$mp.query.id});
    this.sightList = res.data.data ? res.data.data : []
    this.sightList.forEach(element => {
      element.thumbsupImg = 'https://hsyj.100eduonline.com/static/mini-images/thumbsUp.png'
      element.messageImg = 'https://hsyj.100eduonline.com/static/mini-images/messageImg.png'
      element.navigationImg = '../../../static/images/navigationImg.png',
      element.activityName = element.sceneryTitle,
      element.iconType = 'ios-navigate'
      element.iconColor = '#aaa'
    });
  },
  methods: {
    iconClick (item) {
      // wx.navigateTo({ url: 'sightDetail/main?name=' + item.sightName })
    }
  },
  onShareAppMessage: function (ops) {
    return {
      title: this.$mp.query.name
    };
  }
};
</script>

<style>
.sight-page {
  background-color: #f4f4f4;
  /* height:100vh; */
  /* overflow: hidden; */
}

.background-image image {
  width: 100%;
}
.activity-sight-title-group{
  display: flex;
  justify-content: space-between;
}
.activity-sight-title-share button {
  font-size:32rpx;
  font-weight:light;
  margin-left:10rpx;
  line-height:100rpx;
  padding:0;
  border-radius:0;
  box-sizing:inherit;
  background-color:#fff;
  display:flex;
  height:100rpx;
  color:#aaa;
}
.activity-sight-title-share button ._wux-icon{
  position:relative;
  top:10rpx;
  padding-right:6rpx;
}
.activity-sight-title-share button::after {
  border: none;
}
.activity-sight-title-share .button-hover {
  color: #000;
}


/*模糊背景*/
.frosted-glass-container{   
  width:100%;
  height:450rpx;   
  background-image: url('https://hsyj.100eduonline.com/static/mini-images/school.png');   
  background-repeat: no-repeat;   
  background-attachment: fixed;   
  overflow: hidden;  
  position: fixed; 
} 

.frosted-glass{   
  width:120%;
  height:500rpx;  
  background: inherit;   
  -webkit-filter: blur(10px);   
  -moz-filter: blur(10px);   
  -ms-filter: blur(10px);   
  -o-filter: blur(10px);   
  filter: blur(10px);   
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);   
} 

.backgroubd-modal{
  position: fixed;
  /* z-index: 100; */
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.activity-sight-list{
  flex-direction:row;
  /* position:absolute; */
  top:40rpx;
  width:92%;
  left:4%;
  /* z-index: 120; */
  /* height: 85vh-100rpx; */
  /* margin:0 auto; */
  position:relative;
  margin-left:0;
  margin-bottom: 20rpx
}
.activity-sight-title-group{
  background-color: #fff;
  border:1px solid #eee;
  border-top-right-radius: 28rpx;
  border-top-left-radius: 28rpx
}
.activity-sight-title-label{
  margin-left:30rpx;
  font-size:17px;
  color:#555;
  font-weight:light;
  line-height:100rpx;
}
.activity-sight-title-share{
  margin-right: 15px;
}
.activity-sight-list navigator,
.activity-sight-list .navigator-hover{
  
}
</style>
