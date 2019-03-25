<template >
  <view class='sight-page'>
    <swiper class='swiper' :indicator-dots='true' :autoplay='true' interval='3000' duration='800'>
      <block v-for='(item, index) in movies' :key='index'>
        <swiper-item>
          <image :src='item.url' class='slide-image'/>
        </swiper-item>
      </block>
    </swiper>
    <view class='sight-introduction-bar'>
      <view class='sight-introduction-bar-inner'>
        <view class='sight-introduction-bar-label'>
          <text>{{ information.desc }}</text>
        </view>
        <view class='sight-introduction-bar-icon' @click="toDestination">
          <wux-icon wux-class='navigation' type='ios-navigate' size='34' color='blue'/>
        </view>
      </view>
    </view>
    <view class='sight-introduction-video'>
      <view class='sight-introduction-video-inner'>
        <view class='sight-introduction-video-image' @click="popupVideo">
          <wux-icon wux-class='video-icon' type='ios-play' size='34' color='white'/>
        </view>
        <wux-popup position="bottom" :visible="showPopUp" :closable="true" @close="onClose">
           <video
              id="myVideo"
              src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
              enable-danmu
              danmu-btn
              controls
            ></video>
        </wux-popup>
        <view class='sight-introduction-video-text'>
          <text>{{ information.desc }}</text>
        </view>
      </view>
      <view class='sight-introduction-video-icon' @click="toDestination">
        <wux-icon wux-class='navigation' type='ios-navigate' size='34' color='white'/>
      </view>
    </view>
    <view class='sight-introduction-icon-group'>
      <view class='sight-introduction-icon-group-inner'>
       <icon-group :list='iconArr'/>
      </view>
    </view>
    <!-- <view :class='ellipsis?'sight-introduction-group-show':'sight-introduction-group-hide''>
      <view class='sight-introduction-group-item'>
        <wux-row gutter='12' v-for='(row,index) in newArr' :key='index'>
          <wux-col span='6' v-for='(item,oindex) in row' :key='oindex'>
            <icon-group :list='iconArr'/>
            <text
              class='sight-introduction ellipsis'
             >{{ item.desc }}</text>
          </wux-col>
        </wux-row>
      </view>
    </view>-->
  </view>
</template>

<script>
import iconGroup from '../../../components/icon-group';
export default {
  components: {
    iconGroup
  },
  data () {
    return {
      information: {
        name: '黄自半身铜像',
        desc: '黄自半身铜像'
      },
      movies: [
        {
          url: 'https://picsum.photos/750/750/?image=413'
        },
        {
          url: 'https://picsum.photos/750/750/?image=413'
        },
        {
          url: 'https://picsum.photos/750/750/?image=413'
        },
        {
          url: 'https://picsum.photos/750/750/?image=413'
        }
      ],
      iconArr: [
        {
          icon: 'ios-checkmark-circle-outline',
          size: '24',
          color: 'green',
          number: 11
        },
        {
          icon: 'ios-heart',
          size: '24',
          color: 'red',
          number: 11
        },
        {
          icon: 'ios-chatboxes',
          size: '24',
          color: 'green',
          number: 11
        },
        {
          icon: 'ios-share-alt',
          size: '24',
          color: 'blue',
          number: 11
        }
      ],
      showPopUp: false
    };
  },
  onShow () {
    wx.setNavigationBarTitle({ title: this.information.name });
  },
  methods: {
    popupVideo () {
      this.showPopUp = true;
    },
    onClose () {
      this.showPopUp = false;
    }
  }
};
</script>

<style>
.sight-page .swiper {
  width: 100%;
  height: 230px;
}
.sight-page .slide-image {
  width: 100%;
}
.sight-page .sight-introduction-bar {
  width: 100%;
  height: 60px;
  margin-top: -60px;
  z-index: 999;
  background: #000;
  opacity: 0.6;
  display: flex;
  line-height: 60px;
  justify-content: center;
}
.sight-page .sight-introduction-bar-inner{
  width: 95%;
  display: flex;
  justify-content: space-between;
}
.sight-page .sight-introduction-bar-label {
  color: #fff;
}
.sight-page .sight-introduction-bar-label text{
  font-size: 22px
}
.sight-page .sight-introduction-bar-icon {
  /* width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: blue; */
  margin-top: auto;
  margin-bottom: auto;
}
.sight-page .sight-introduction-bar-icon .navigation {
  display: flex;
  justify-content: center;
}
.sight-page .sight-introduction-video {
  width:90%;
  border:1px black solid;
  height:100px;
  margin-top:10px;
  margin-left:auto;
  margin-right:auto;
}
.sight-page .sight-introduction-video-inner{
  display: flex;
}
.sight-page .sight-introduction-video-image{
  background-image: url('https://picsum.photos/750/750/?image=413');
  background-size: 100%;
  width: 90px;
  height: 90px;
  padding: 5px;
  display: flex;
  justify-content: center;
}
.sight-page .sight-introduction-video-image wux-icon{
  display: flex;
}
.sight-page .video-icon{
  margin-top: auto;
  margin-bottom: auto;
}
.sight-page .sight-introduction-video-text text{
  margin-left: 10px;
}
.sight-page .sight-introduction-icon-group{
  display:flex;
  justify-content:flex-end;
}
.sight-page .sight-introduction-icon-group-inner{
  width: 50%;
}

</style>
