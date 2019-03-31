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
        <view class="sight-introduction-icon-group">
          <icon-group :list="iconArr"/>
        </view>
        <!-- <view class="sight-introduction-bar-icon" @click="toDestination">
          <wux-icon wux-class="navigation" type="ios-navigate" size="34" color="#007fff"/>
        </view>-->
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
    <!-- <view class="sight-introduction-icon-group">
      <view class="sight-introduction-icon-group-inner">
        <icon-group :list="iconArr"/>
      </view>
    </view>-->
    <view class="sight-introduction-text">
      <text>{{ information.introduction }}</text>
    </view>
    <view class="sight-introduction-icon-group2">
      <view class="sight-introduction-icon-group2-inner">
        <icon-group :list="iconArr2" :iconClick="onClick"/>
      </view>
    </view>
    <view :class="showWords?'pop':'pop-hide'">
      <!-- <view :class="showWords?'modal':'modal-hide'" @click="onClose"> -->
      <view :class="showWords?'modal':'modal-hide'">
        <scroll-view :class="showWords?'inner':'inner-hide'" :scroll-y="true">
          <!-- <wux-popup position="bottom" :visible="showWords" :closable="true" @close="onClose"> -->
          <view class="sight-words">
            <view class="sight-words-item" v-for="(item,index) in wordsList" :key="index">
              <view class="sight-words-title">
                <text>{{ item.name }}</text>
                <text>{{ item.time }}</text>
              </view>
              <view class="sight-words-content">
                <text>&nbsp;{{ item.content }}</text>
              </view>
            </view>
          </view>
          <view class="sight-words-btn">
            <button type="default" size="mini" :plain="false" @click="hideWords">隐藏留言</button>
            <button type="primary" size="mini" :plain="false" @click="comment">我要留言</button>
          </view>
          <!-- </wux-popup> -->
        </scroll-view>
      </view>
    </view>
    <wux-popup
      title="我要留言"
      position="bottom"
      :visible="showComment"
      :closable="true"
      @close="onClose"
      :maskClosable="false"
    >
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
        <button
          :class="signText=='签到'?'sign':'signed'"
          type="warn"
          size="default"
          :plain="false"
          @click="onSign"
        >{{signText}}</button>
      </view>
    </view>
    <view :class="showCameraPopup?'pop':'pop-hide'">
      <view :class="showCameraPopup?'modal':'modal-hide'">
        <scroll-view :class="showCameraPopup?'inner':'inner-hide'" :scroll-y="true">
          <view class="sight-camera" v-if="showCamera">
            <camera device-position="back" flash="off" style="width: 100%; height: 300px;"></camera>
          </view>
          <view class="sight-camera-btn">
            <button type="primary" size="mini" :plain="false" @click="uploadPhoto">上传照片</button>
          </view>
        </scroll-view>
      </view>
    </view>
    <wux-popup position="bottom" :visible="showQuestion" @close="onClose" :maskClosable="false">
      <view class="sight-question">
        <view class="sight-question-title">单选题</view>
        <view class="sight-question-content">&nbsp;&nbsp;{{question}}</view>
      </view>
      <view class="sight-answer">
        <radio-group class="radio-group" @change="radioChange">
          <label class="radio" v-for="(item,index) in radioList" :key="index">
            <radio :value="item.name" :checked="item.checked"/>
            {{item.value}}
          </label>
        </radio-group>
      </view>
      <view class="sight-question-btn">
        <button type="primary" size="mini" :plain="false" @click="commitQuestion">完成答题</button>
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
      signText: '签到',
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
        // {
        //   icon: 'ios-checkmark-circle-outline',
        //   size: '24',
        //   color: 'green',
        //   label: 11
        // },
        {
          icon: 'ios-heart',
          size: '25',
          color: '#fff',
          label: 11
        },
        {
          icon: 'ios-chatboxes',
          size: '25',
          color: '#fff',
          label: 11
        }
        // {
        //   icon: 'ios-share-alt',
        //   size: '24',
        //   color: '#007fff',
        //   label: 11
        // }
      ],
      iconArr2: [
        {
          icon: 'ios-heart-empty',
          size: '30',
          color: 'red',
          label: '想去'
        },
        {
          icon: 'ios-chatboxes',
          size: '30',
          color: 'green',
          label: '留言'
        },
        {
          icon: 'ios-share-alt',
          size: '30',
          color: '#007fff',
          label: '分享',
          isButton: true,
          openType: 'share'
        },
        {
          icon: 'ios-navigate',
          size: '30',
          color: '#007fff',
          label: '导航',
          isButton: true,
          openType: null
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
      radioList: [
        { name: 'A', value: '继续前进' },
        { name: 'B', value: '牢记使命' },
        { name: 'C', value: '方得始终' },
        { name: 'D', value: '砥砺前行' }
      ],
      showPopUp: false,
      showWords: false,
      showComment: false,
      showCameraPopup: false,
      showCamera: false,
      showQuestion: false,
      src: '',
      question:
        '十九大的主题是：不忘初心，________，高举中国特色社会主义伟大旗帜，决胜全面建成小康社会，夺取新时代中国特色社会主义伟大胜利，为实现中华民族伟大复兴的中国梦不懈奋斗。'
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
      this.showCameraPopup = false;
      this.showQuestion = false;
    },
    onClose2 () {
      this.showCameraPopup = true;
    },
    onClick (item, index) {
      console.log('1111')
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
    uploadPhoto () {
      console.log('111');
      this.showCameraPopup = false;
      this.showQuestion = true;
    },
    commitQuestion () {
      this.showQuestion = false;
    },
    onSign () {
      this.signText = '已签到';
      if (this.$mp.query.activitySight === 'true') {
        this.showCameraPopup = true;
        this.showCamera = true;
      }
      // wx.chooseImage({
      //   count: 1,
      //   success (res) {
      //     // 这里无论用户是从相册选择还是直接用相机拍摄，拍摄完成后的图片临时路径都会传递进来
      //     // app.startOperating('保存中')
      //     // var filePath = res.tempFilePaths[0];
      //     // var session_key = wx.getStorageSync('session_key');
      //     // 这里顺道展示一下如何将上传上来的文件返回给后端，就是调用wx.uploadFile函数
      //   }
      // })
    },
    takePhoto () {
      const ctx = wx.createCameraContext();
      ctx.takePhoto({
        quality: 'high',
        success: res => {
          this.src = res.tempImagePath;
        }
      });
      // wx.chooseImage({
      //   count: 1,
      //   success (res) {
      //     // 这里无论用户是从相册选择还是直接用相机拍摄，拍摄完成后的图片临时路径都会传递进来
      //     // app.startOperating('保存中')
      //     // var filePath = res.tempFilePaths[0];
      //     // var session_key = wx.getStorageSync('session_key');
      //     // 这里顺道展示一下如何将上传上来的文件返回给后端，就是调用wx.uploadFile函数
      //   }
      // })
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
  /* border: 1px black solid; */
  height: 100px;
  margin-top: 5px;
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
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: flex-end;
  width: 30%;
  color: #fff;
}
.sight-page .sight-introduction-icon-group-inner {
  width: 50%;
  display: flex;
  justify-content: flex-end;
}
.sight-page .sight-introduction-icon-group-inner .icon-group {
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
  font-size: 16px;
  font-weight: 600;
  margin-left: 5px;
  line-height: 30px;
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
.sight-page .sight-introduction-icon-btn-inner .signed {
  background-color: rgb(5, 145, 226);
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

.sight-page .inner {
  position: fixed;
  width: 100%;
  background-color: #fff;
  height: calc(100% - 44px);
  /*border-top-left-radius: 20px;*/
  /*border-top-right-radius: 20px;*/
  bottom: 0px;
  z-index: 1001;
  padding-bottom: 40px;
  height: 60vh;
}
.sight-page .pop-hide,
.sight-page .modal-hide,
.sight-page .inner-hide {
  display: block;
  position: fixed;
  width: 100vw;
  bottom: 600vh;
  background: #fff;
  z-index: 1002;
  height: calc(100% - 44px);
  box-sizing: border-box;
  /* border: 1px solid #eee; */
  /*border-radius: 4px;*/
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.13);
  transition: bottom 200ms ease-in;
}
.sight-page .modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}
.sight-page .pop .modal .inner .sight-words-btn,
.sight-page .pop .modal .inner .sight-camera-btn {
  position: fixed;
  bottom: 0;
  right: 20px;
}
.sight-page .pop .modal .inner .sight-words-btn button:last-child,
.sight-page .pop .modal .inner .sight-camera-btn button:last-child,
.sight-page .sight-question-btn button:last-child,
.sight-page .sight-comment-btn button:last-child {
  margin-left: 20px;
  background-color: rgb(5, 145, 226);
}
.sight-page .sight-comment-btn {
  margin-top: 15px;
}
.sight-page .sight-comment {
  display: flex;
  justify-content: center;
}
.sight-page .sight-comment textarea {
  margin-top: 15px;
  height: 60px;
  border: 1px #000 solid;
}
.sight-page .sight-camera {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  flex-direction: column;
}
.sight-page .sight-camera image {
  margin: 10px auto;
}
.sight-page .sight-question {
  display: flex;
  flex-direction: column;
}
.sight-page .sight-answer {
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
}
.sight-page .sight-answer radio-group {
  display: flex;
  flex-direction: column;
}
.sight-page .sight-answer radio-group label {
  padding: 5px;
}
.sight-page .sight-question-title {
  display: flex;
  margin-left: 20px;
}
.sight-page .sight-question-content {
  display: flex;
  margin-left: 20px;
  text-align: initial;
}
</style>
