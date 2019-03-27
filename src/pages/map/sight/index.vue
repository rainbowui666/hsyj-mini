<template >
  <view class="sight-page">
    <swiper class="swiper" :indicator-dots="true" :autoplay="true" interval="3000" duration="800">
      <block v-for="(item, index) in movies" :key="index">
        <swiper-item>
          <image :src="item.url" class="slide-image"/>
        </swiper-item>
      </block>
    </swiper>
    <view class="sight-introduction-bar">
      <view class="sight-introduction-bar-inner">
        <view class="sight-introduction-bar-label">
          <text>{{ information.desc }}</text>
        </view>
        <view class="sight-introduction-bar-icon" @click="toDestination">
          <wux-icon wux-class="navigation" type="ios-navigate" size="34" color="blue"/>
        </view>
      </view>
    </view>
    <view class="sight-introduction-video">
      <view class="sight-introduction-video-inner">
        <view class="sight-introduction-video-image" @click="popupVideo">
          <wux-icon wux-class="video-icon" type="ios-play" size="34" color="white"/>
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
        <view class="sight-introduction-video-text">
          <text>{{ information.desc }}</text>
        </view>
      </view>
      <view class="sight-introduction-video-icon" @click="toDestination">
        <wux-icon wux-class="navigation" type="ios-navigate" size="34" color="white"/>
      </view>
    </view>
    <view class="sight-introduction-icon-group">
      <view class="sight-introduction-icon-group-inner">
        <icon-group :list="iconArr"/>
      </view>
    </view>
    <view class="sight-introduction-text">
      <text>{{ information.introduction }}</text>
    </view>
    <view class="sight-introduction-icon-group2">
      <view class="sight-introduction-icon-group2-inner">
        <icon-group :list="iconArr2" :iconClick="onClick"/>
      </view>
    </view>
    <wux-popup position="bottom" :visible="showWords" :closable="true" @close="onClose">
      <scroll-view class="sight-words" :scroll-y="true">
        <view class="sight-words-item" v-for="(item,index) in wordsList" :key="index">
          <view class="sight-words-title">
            <text>{{ item.name }}</text>
            <text>{{ item.time }}</text>
          </view>
          <view class="sight-words-content">
            <text>&nbsp;{{ item.content }}</text>
          </view>
        </view>
      </scroll-view>
      <view class="sight-words-btn">
        <button type="default" size="mini" :plain="false" @click="hideWords">隐藏</button>
        <button type="primary" size="mini" :plain="false" @click="comment">我要留言</button>
      </view>
    </wux-popup>
    <wux-popup position="bottom" :visible="showComment" :closable="true" @close="onClose">
      <view class="sight-comment">
        <textarea bindblur="bindTextAreaBlur" placeholder="发表留言" style="height:60px"/>
      </view>
      <view class="sight-comment-btn">
        <button type="default" size="mini" :plain="false" @click="hideWords">撤销</button>
        <button type="primary" size="mini" :plain="false" @click="comment">确定</button>
      </view>
    </wux-popup>
    <view class="sight-introduction-icon-btn">
      <view class="sight-introduction-icon-btn-inner">
        <button type="warn" size="default" :plain="false" @click="onSign">第{{ count }}次签到</button>
      </view>
    </view>
    <wux-popup position="bottom" :visible="showCamera" :closable="true" @close="onClose">
      <view class="sight-camera">
        <camera
          v-if="showCamera"
          device-position="back"
          flash="off"
          style="width: 100%; height: 300px;"
        ></camera>
        <image v-if="src!=''" mode="widthFix" :src="src"></image>
      </view>
      <view class="sight-camera-btn">
        <button type="default" size="mini" :plain="false" @click="takePhoto">拍照</button>
        <button type="primary" size="mini" :plain="false" @click="comment">上传照片</button>
      </view>
    </wux-popup>
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
      count: 1,
      information: {
        name: '黄自半身铜像',
        desc: '黄自半身铜像',
        introduction:
          '位于上海音乐学院汾阳路校区，草坪西侧，为纪念上海音乐学院前教务主任、著名作曲家、音乐教育家黄自先生而建，黄自先生创作的《抗敌歌》是中国第一首以抗日救亡为主题的歌曲。'
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
          label: 11
        },
        {
          icon: 'ios-heart',
          size: '24',
          color: 'red',
          label: 11
        },
        {
          icon: 'ios-chatboxes',
          size: '24',
          color: 'green',
          label: 11
        },
        {
          icon: 'ios-share-alt',
          size: '24',
          color: 'blue',
          label: 11
        }
      ],
      iconArr2: [
        {
          icon: 'ios-heart-empty',
          size: '40',
          color: 'red',
          label: '想去'
        },
        {
          icon: 'ios-chatboxes',
          size: '40',
          color: 'green',
          label: '留言'
        },
        {
          icon: 'ios-share-alt',
          size: '40',
          color: 'blue',
          label: '分享',
          isButton: true,
          openType: 'share'
        }
      ],
      wordsList: [
        {
          name: 'hahaha',
          time: '2019年3月27日',
          content:
            '1234567890qwertyuiodbhjsbjbsjncjknskjdnskjnjs111111gdfbchsjdcjdnnsk'
        },
        {
          name: 'hahaha',
          time: '2019年3月27日',
          content: '1234567890qwertyuio'
        },
        {
          name: 'hahaha',
          time: '2019年3月27日',
          content: '1234567890qwertyuio'
        },
        {
          name: 'hahaha',
          time: '2019年3月27日',
          content: '1234567890qwertyuio'
        },
        {
          name: 'hahaha',
          time: '2019年3月27日',
          content:
            '1234567890qwertyuiodbhjsbjbsjncjknskjdnskjnjs111111gdfbchsjdcjdnnsk'
        },
        {
          name: 'hahaha',
          time: '2019年3月27日',
          content: '1234567890qwertyuio'
        },
        {
          name: 'hahaha',
          time: '2019年3月27日',
          content: '1234567890qwertyuio'
        },
        {
          name: 'hahaha',
          time: '2019年3月27日',
          content: '1234567890qwertyuio'
        }
      ],
      showPopUp: false,
      showWords: false,
      showComment: false,
      showCamera: false,
      src: ''
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
      this.showWords = false;
      this.showComment = false;
      this.showCamera = false;
    },
    onClick (item, index) {
      if (index === 0) {
        this.iconArr2[0].icon = 'ios-heart';
      }
      if (index === 1) {
        this.showWords = true;
      }
    },
    hideWords () {
      this.showWords = false;
    },
    comment () {
      this.showWords = false;
      this.showComment = true;
    },
    onSign () {
      // this.showCamera = true;
      wx.chooseImage({
        count: 1,
        success (res) {
          // 这里无论用户是从相册选择还是直接用相机拍摄，拍摄完成后的图片临时路径都会传递进来
          // app.startOperating('保存中')
          // var filePath = res.tempFilePaths[0];
          // var session_key = wx.getStorageSync('session_key');
          // 这里顺道展示一下如何将上传上来的文件返回给后端，就是调用wx.uploadFile函数
        }
      })
    },
    takePhoto () {
      // const ctx = wx.createCameraContext()
      // ctx.takePhoto({
      //   quality: 'high',
      //   success: (res) => {
      //     this.src = res.tempImagePath
      //   }
      // })
      wx.chooseImage({
        count: 1,
        success (res) {
          // 这里无论用户是从相册选择还是直接用相机拍摄，拍摄完成后的图片临时路径都会传递进来
          // app.startOperating('保存中')
          // var filePath = res.tempFilePaths[0];
          // var session_key = wx.getStorageSync('session_key');
          // 这里顺道展示一下如何将上传上来的文件返回给后端，就是调用wx.uploadFile函数
        }
      })
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
  height: 110vh;
}
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
.sight-page .sight-introduction-bar-inner {
  width: 95%;
  display: flex;
  justify-content: space-between;
}
.sight-page .sight-introduction-bar-label {
  color: #fff;
}
.sight-page .sight-introduction-bar-label text {
  font-size: 22px;
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
  width: 95%;
  border: 1px black solid;
  height: 100px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}
.sight-page .sight-introduction-video-inner {
  display: flex;
}
.sight-page .sight-introduction-video-image {
  background-image: url("https://picsum.photos/750/750/?image=413");
  background-size: 100%;
  width: 90px;
  height: 90px;
  margin: 5px;
  display: flex;
  justify-content: center;
}
.sight-page .sight-introduction-video-image wux-icon {
  display: flex;
}
.sight-page .video-icon {
  margin-top: auto;
  margin-bottom: auto;
}
.sight-page .sight-introduction-video-text text {
  margin-left: 10px;
}
.sight-page .sight-introduction-icon-group {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
.sight-page .sight-introduction-icon-group-inner {
  width: 50%;
}
.sight-page .sight-introduction-text {
  display: flex;
  justify-content: center;
}

.sight-page .sight-introduction-text text {
  width: 95%;
}

.sight-page .sight-introduction-icon-group2,
.sight-page .sight-introduction-icon-btn {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.sight-page .sight-introduction-icon-group2-inner {
  display: flex;
  justify-content: center;
  width: 95%;
}

.sight-page .sight-introduction-icon-group2-inner .icon-group-item-label {
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
  line-height: 40px;
}
.sight-page .sight-introduction-icon-group2-inner button {
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
.sight-page .sight-introduction-icon-group2-inner button::after {
  border: none;
}
.sight-page .sight-introduction-icon-group2-inner .button-hover {
  color: #000;
}
.sight-page .sight-introduction-icon-btn-inner {
  width: 60%;
}
.sight-page .sight-words {
  padding-bottom: 40px;
}
.sight-page .sight-words-item {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  line-height: 30px;
  width: 95%;
}
.sight-page .sight-words-title {
  min-height: 30px;
  text-align: left;
  margin-left: 10px;
  font-size: 20px;
}
.sight-page .sight-words-content,
.sight-page .sight-words-title > text:last-child {
  min-height: 30px;
  text-align: left;
  margin-left: 10px;
  font-size: 16px;
}
.sight-page .sight-words-btn,
.sight-page .sight-comment-btn ,.sight-page .sight-camera-btn{
  position: fixed;
  bottom: 0;
  right: 20px;
}
.sight-page .sight-words-btn button:last-child {
  margin-left: 20px;
}
.sight-page .sight-comment{
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.sight-page .sight-comment textarea {
  height: 60px;
  border: 1px #000 solid;
}
 .sight-page .sight-camera{
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  flex-direction: column
 }
 .sight-page .sight-camera image{
   margin: 10px auto;
 }
</style>
