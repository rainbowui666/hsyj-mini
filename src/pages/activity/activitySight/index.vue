<template >
  <scroll-view class="sight-page" :scroll-x="false" :scroll-y="false">
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
    <scroll-view class="activity-sight-card" :scroll-x="false" :scroll-y="true">
      <sight-card :data="sightList" :iconClick="iconClick"/>
    </scroll-view>
    <view class="activity-sight-bottom"/>
    </view>
  </scroll-view>
</template>

<script>
import sightCard from '../../../components/sight-card';
export default {
  components: {
    sightCard
  },
  data () {
    return {
      sightList: [
        {
          src: '../../../static/images/fudan.jpg',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          sightStatus: '导航',
          iconColor: '#007fff',
          start: true,
          thumbsupImg: '../../../static/images/thumbsupImg.png',
          messageImg: '../../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111
        },
        {
          src: '../../../static/images/fudan.jpg',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-checkmark-circle',
          sightStatus: '已完成',
          iconColor: 'red',
          thumbsupImg: '../../../static/images/thumbsupImg.png',
          messageImg: '../../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111
        },
        {
          src: '../../../static/images/fudan.jpg',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          thumbsupImg: '../../../static/images/thumbsupImg.png',
          messageImg: '../../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111
        },
        {
          src: '../../../static/images/fudan.jpg',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          thumbsupImg: '../../../static/images/thumbsupImg.png',
          messageImg: '../../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111
        },
        {
          src: '../../../static/images/fudan.jpg',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          thumbsupImg: '../../../static/images/thumbsupImg.png',
          messageImg: '../../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111
        },
        {
          src: '../../../static/images/fudan.jpg',
          sightName: '中共一大会址纪念馆',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          end: true,
          thumbsupImg: '../../../static/images/thumbsupImg.png',
          messageImg: '../../../static/images/messageImg.png',
          thumbsupNum: 111,
          messageNum: 111
        }
      ]
    };
  },
  methods: {
    iconClick (item) {
      console.log('item', item);
      // wx.navigateTo({ url: 'sightDetail/main?name=' + item.sightName })
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
  height:100vh;
  overflow: hidden;
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

/*模糊背景*/
.frosted-glass-container{   
  width:100%;
  height:340rpx;   
  background-image: url('https://hsyj.100eduonline.com/static/mini-images/school.png');   
  background-repeat: no-repeat;   
  background-attachment: fixed;   
  overflow: hidden;   
} 

.frosted-glass{   
  width:120%;
  height:380rpx;  
  background: inherit;   
  -webkit-filter: blur(10px);   
  -moz-filter: blur(10px);   
  -ms-filter: blur(10px);   
  -o-filter: blur(10px);   
  filter: blur(10px);   
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);   
} 

.backgroubd-modal{
  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.activity-sight-list{
  flex-direction:row;
  position:absolute;
  top:30rpx;
  width:92%;
  left:4%;
  z-index: 120;
  height: 82%;

}
.activity-sight-card{
  height:100%;
  background-color: #fff;
}
.activity-sight-bottom{
  height:3%;
  background-color: #fff;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px
}
.activity-sight-title-group{
  background-color: #fff;
  border:1px solid #eee;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px
}
.activity-sight-title-label{
  margin-left: 15px;
}
.activity-sight-title-share{
  margin-right: 15px;
}
</style>
