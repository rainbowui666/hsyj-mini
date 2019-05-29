<template >
  <view class="sight-page-wrap">
    <view
      class="frosted-glass-container"
      :style="sightObj.pics?sightObj.pics[0]
      ?sightObj.pics[0].sourceAddress===undefined
      ?'background-image:url(https://hsyj.100eduonline.com/static/images/7c6c88b9-9a12-4dfb-b210-875692555fbc.jpg)'
      :'background-image:url(https://hsyj.100eduonline.com/static/images/'+sightObj.pics[0].sourceAddress+')'
      :'background-image:url(https://hsyj.100eduonline.com/static/images/7c6c88b9-9a12-4dfb-b210-875692555fbc.jpg)'
      :'background-image:url(https://hsyj.100eduonline.com/static/images/7c6c88b9-9a12-4dfb-b210-875692555fbc.jpg)'"
    >
      <view class="frosted-glass"></view>
    </view>
    <view class="backgroubd-modal"/>
    <view class="sight-page">
      <view class="sight-audio">
        <view class="sight-audio-container">
          <image
              src="https://hsyj.100eduonline.com/static/mini-images/sceneryAudio.png"
              class="slide-audio-image"
              mode="widthFix"
              @click="showAudio"
            />
          <!-- <audio :name="name" :author="author" :src="audioSrc" id="myAudio" controls loop></audio> -->
        </view>
      </view>
      <swiper
        class="swiper"
        :indicator-dots="swiper.indicatorDots"
        :autoplay="swiper.autoplay"
        i:nterval="swiper.interval"
        :duration="swiper.duration"
        :current="swiper.current"
      >
        <block v-for="(item, index) in swiper.movies" :key="index">
          <swiper-item>
            <image
              :src="'https://hsyj.100eduonline.com/static/images/'+item.sourceAddress"
              class="slide-image"
            />
          </swiper-item>
        </block>
      </swiper>
      <view class="ceshi_next" @click="prevImg">
        <wux-icon type="ios-arrow-forward" size="20" color="#fff"/>
        <!-- <text class='icon ios-arrow-back'></text> -->
      </view>
      <view class="ceshi_prew" @click="nextImg">
        <wux-icon type="ios-arrow-back" size="20" color="#fff"/>
        <!-- <text class='icon ios-arrow-forward'></text> -->
      </view>
      <view class="sight-introduction-bar">
        <view class="sight-introduction-bar-inner">
          <view class="sight-introduction-bar-label" @click="navigationClick(sightObj)">
            <image :src="didaImg" mode="widthFix"/>
            <!-- <wux-icon type='ios-navigate' size='26' color='white'/> -->
            <text>点击导航</text>
          </view>
          <view class="sight-introduction-icon-group">
            <icon-group :list="iconArr2" :iconClick="onClick"/>
            <!-- <icon-group :list="iconArr"/> -->
          </view>
          <!-- <view class="sight-introduction-bar-icon" @click="toDestination">
          <wux-icon wux-class="navigation" type="ios-navigate" size="34" color="#007fff"/>
          </view>-->
        </view>
      </view>
      <view class="sight-introduction-content">
        <view class="sight-introduction-icon-btn">
          <view class="sight-introduction-icon-btn-inner">
            <button
              :class="signText=='签到'?'sign':'signed'"
              type="warn"
              size="default"
              :plain="false"
              @click="formSubmit"
            >{{signText}}</button>
            <!-- <wux-upload 
                listType="picture-card"
                :header="header"
                :formData="formData"
                url="https://hsyj.100eduonline.com/api/api/upload/wxUpload"
                @change="onChange"
                @success="onSuccess" 
                @fail="onFail"
                @remove="onRemove">
                    <button type="default">Click to Upload</button>
                </wux-upload> -->
          </view>
        </view>
        <view class="sight-introduction-video">
          <view class="sight-introduction-video-inner">
            <view class="sight-introduction-video-image" @click="showVideo">
              <image :src="playImg" mode="widthFix"/>
              <!-- <wux-icon wux-class="video-icon" type="ios-play" size="34" color="#d25136"/> -->
            </view>
            <!-- <wux-popup position="bottom" :visible="showPopUp" :closable="true" @close="onClose">
              <video
                id="myVideo"
                src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
                enable-danmu
                danmu-btn
                controls
              ></video>
            </wux-popup> -->
            <view class="sight-introduction-video-text">
              <text>点击播放 视频讲解</text>
            </view>
          </view>
          <!-- <view @click="toDestination">
        <wux-icon wux-class="navigation" type="ios-navigate" size="34" color="white"/>
          </view>-->
        </view>
        <!-- <view class="sight-introduction-icon-group">
      <view class="sight-introduction-icon-group-inner">
        <icon-group :list="iconArr"/>
      </view>
        </view>-->
        <view class="sight-introduction-text">
          <text>{{ sightObj.shdesc }}</text>
        </view>
        <!-- <view class="sight-introduction-icon-group2">
      <view class="sight-introduction-icon-group2-inner">
        <icon-group :list="iconArr2" :iconClick="onClick"/>
      </view>
        </view>-->
        <view :class="showWords?'pop':'pop-hide'">
          <!-- <view :class="showWords?'modal':'modal-hide'" @click="onClose"> -->
          <view :class="showWords?'modal':'modal-hide'">
            <scroll-view :class="showWords?'inner':'inner-hide'" :scroll-y="true">
              <!-- <wux-popup position="bottom" :visible="showWords" :closable="true" @close="onClose"> -->
              <view class="sight-words">
                <view class="sight-words-item" v-for="(item,index) in wordsList" :key="index">
                  <!-- <view class="sight-words-title"> -->
                  <!-- <text>{{ item.name }}</text>
                  <text>{{ item.time }}</text>-->
                  <!-- <wux-cell
                  thumb="https://wux.cdn.cloverstd.com/logo.png"
                  :title="item.name"
                  :extra="item.time"
                  ></wux-cell>-->
                  <message-card :data="item"/>
                  <!-- </view> -->
                  <!-- <view class="sight-words-content">
                <view>&nbsp;{{ item.content }}</view>
                  </view>-->
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
        <wux-popup position="bottom" :visible="showComment" @close="onClose" :maskClosable="false">
          <view class="sight-comment">
            <textarea v-model="content" placeholder="发表留言" style="height:60px"/>
          </view>
          <view class="sight-comment-btn">
            <!-- <button type="default" size="mini" :plain="false" @click="hideWords">撤销</button> -->
            <button type="primary" size="mini" :plain="false" @click="hideComment">确定</button>
          </view>
        </wux-popup>

        <view :class="showCameraPopup?'pop':'pop-hide'">
          <view :class="showCameraPopup?'modal':'modal-hide'">
            <scroll-view :class="showCameraPopup?'inner':'inner-hide'" :scroll-y="true">
              <view class="sight-camera" v-if="showCamera">
                <!-- <camera device-position="back" flash="off" style="width: 100%; height: 300px;"></camera> -->
                <wux-upload 
                listType="picture-card"
                :header="header"
                :formData="formData"
                url="https://hsyj.100eduonline.com/api/api/upload/wxUpload"
                @change="onChange"
                @success="onSuccess" 
                @fail="onFail"
                @remove="onRemove">
                    <button type="default" v-if='showTakePhoto'>拍照上传</button>
                </wux-upload>
              </view>
              <view class="sight-camera-btn">
                <button type="primary" size="mini" :plain="false" @click="uploadPhoto">下一步</button>
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
    </view>
  </view>
</template>

<script>
import messageCard from '../../../components/message-card';
import iconGroup from '../../../components/icon-group';
import didaImg from '../../../../static/images/dida_white.png';
import playImg from '../../../../static/images/play.png';
import api from '@/utils/api';
import QQMapWX from '../../../../build/qqmap-wx-jssdk.js';
import dayjs from 'dayjs';

export default {
  components: {
    iconGroup,
    messageCard
  },
  data () {
    return {
      showTakePhoto: true,
      header: {
        Authorization: wx.getStorageSync('token')
      },
      formData: {
        sourcetype: 3,
        insertid: 41
      },
      sightObj: {},
      wordsList: [],
      content: '',
      didaImg,
      playImg,
      audioCtx: null,
      qqmapsdk: null,
      distance: [],
      poster:
        'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      audioSrc:
        'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      signText: '签到',
      information: {
        name: '黄自半身铜像',
        desc: '黄自半身铜像',
        introduction:
          '位于上海音乐学院汾阳路校区，草坪西侧，为纪念上海音乐学院前教务主任、著名作曲家、音乐教育家黄自先生而建，黄自先生创作的《抗敌歌》是中国第一首以抗日救亡为主题的歌曲。'
      },
      swiper: {
        movies: [
          {
            sourceAddress: '7c6c88b9-9a12-4dfb-b210-875692555fbc.jpg'
          }
        ],
        // movies: [],
        indicatorDots: true,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        current: 0
      },
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
          icon: 'ios-heart',
          size: '26',
          color: '#fff',
          label: '想去'
        },
        {
          icon: 'ios-map',
          size: '26',
          color: '#fff',
          label: '留言'
        }
        // {
        //   icon: 'ios-share-alt',
        //   size: '30',
        //   // color: '#007fff',
        //   color: '#888',
        //   label: '分享',
        //   isButton: true,
        //   openType: 'share'
        // },
        // {
        //   icon: 'ios-navigate',
        //   size: '30',
        //   color: '#888',
        //   label: '导航',
        //   isButton: true,
        //   openType: null
        // }
      ],
      radioList: [],
      rightAnswer: '',
      checkAnswer: false,
      uploadSuccess: false,
      selectAnswer: '',
      showPopUp: false,
      showWords: false,
      showComment: false,
      showCameraPopup: false,
      showCamera: false,
      showQuestion: false,
      src: '',
      centerX: 121.475186,
      centerY: 31.228725,
      toAddress: '31.124820,121.493855',
      fromAddress: '31.137677,121.507502',
      pageindex: 1,
      pagesize: 10,
      question:
        '十九大的主题是：不忘初心，________，高举中国特色社会主义伟大旗帜，决胜全面建成小康社会，夺取新时代中国特色社会主义伟大胜利，为实现中华民族伟大复兴的中国梦不懈奋斗。'
    };
  },
  async onShow () {
    const res = await api.getSightDetail({id: this.$mp.query.id, studentid: wx.getStorageSync('userInfo').studentID});
    this.sightObj = res.data ? res.data : {};
    this.swiper.movies = res.data.pics[0]
      ? res.data.pics
      : [{ sourceAddress: '7c6c88b9-9a12-4dfb-b210-875692555fbc.jpg' }];
    this.toAddress = res.data.latitude + ',' + res.data.longitude;
    if (this.sightObj.shstate.checkin) {
      this.signText = '已签到'
    } else {
      this.signText = '签到'
    }
    this.formData = {
      sourcetype: 3,
      insertid: this.$mp.query.id
    },
    // 取当前位置
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        let latitude = res.latitude;
        let longitude = res.longitude;
        this.centerX = longitude;
        this.centerY = latitude;
      }
    });
    this.fromAddress = this.centerY + ',' + this.centerX;
    if (this.sightObj.shstate.wantto) {
      this.iconArr2[0].color = 'red';
    } else {
      this.iconArr2[0].color = '#fff';
    }
    wx.setNavigationBarTitle({ title: this.sightObj.sceneryTitle });
    this.getMessage();
  },
  onLoad: function () {
    // 实例化API核心类
    this.qqmapsdk = new QQMapWX({
      key: 'AFDBZ-QT5HQ-2XV56-GAXW7-43Q2T-OQBE4'
    });
  },
  onReady (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio');
  },

  methods: {
    onChange (e) {
      const { file } = e.detail
      if (file.status === 'uploading') {
        this.setData({
          progress: 0
        })
        wx.showLoading()
      } else if (file.status === 'done') {
        this.setData({
          imageUrl: file.url
        })
      }
    },
    onSuccess (e) {
      this.showTakePhoto = false
      this.uploadSuccess = true
    },
    onFail (e) {
    },
    onComplete (e) {
      wx.hideLoading()
    },
    async getMessage () {
      const res = await api.getSightMessage({
        sceneryid: this.$mp.query.id,
        pageindex: this.pageindex,
        pagesize: this.pagesize
      });
      this.wordsList = res.data.data ? res.data.data : [];
      this.wordsList.forEach(element => {
        element.createdate = dayjs(element.createdate).format('YYYY-MM-DD HH:mm:ss')
      });
    },
    audioPlay () {
      this.audioCtx.play();
    },
    prevImg () {
      let swiper = this.swiper;
      let current = swiper.current;
      swiper.current = current < swiper.movies.length - 1 ? current + 1 : 0;
      this.swiper = swiper;
    },

    nextImg () {
      let swiper = this.swiper;
      let current = swiper.current;
      swiper.current = current > 0 ? current - 1 : swiper.movies.length - 1;
      this.swiper = swiper;
    },
    showVideo () {
      wx.navigateTo({url: '/pages/webview/main?videoUrl=' + this.sightObj.videourl})
    },
    showAudio () {
      wx.navigateTo({url: '/pages/webview/main?videoUrl=' + this.sightObj.soundurl})
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
    async onClick (item, index) {
      if (index === 0) {
        if (this.iconArr2[0].color !== 'red') {
          await api.wantToSight({
            studentid: wx.getStorageSync('userInfo').studentID,
            sceneryid: this.$mp.query.id,
            shstate: 0
          });
          this.iconArr2[0].icon = 'ios-heart';
          this.iconArr2[0].color = 'red';
        }
      }
      if (index === 1) {
        this.showWords = true;
      }
    },
    async hideComment () {
      await api.addMessage({
        studentid: wx.getStorageSync('userInfo').studentID,
        targetid: this.$mp.query.id,
        distype: 0,
        content: this.content
      });
      this.getMessage()
      this.showComment = false;
      // this.showWords = true;
    },
    hideWords () {
      this.showWords = false;
    },
    comment () {
      // this.showWords = false;
      this.showComment = true;
    },
    async uploadPhoto () {
      if (this.uploadSuccess) {
        this.showCameraPopup = false;
        const res = await api.getQuestion({activityid: this.$mp.query.activityid, sceneryid: this.sightObj.sceneryID})
        if (res.data[0]) {
          this.question = res.data[0].questionTitle
          this.rightAnswer = res.data[0].rightAnswer
          this.radioList = []
          this.radioList.push({ name: 'A', value: res.data[0].answerA })
          this.radioList.push({ name: 'B', value: res.data[0].answerB })
          this.radioList.push({ name: 'C', value: res.data[0].answerC })
          this.radioList.push({ name: 'D', value: res.data[0].answerD })
          this.showQuestion = true;
        }
      }
    },
    radioChange (e) {
      this.selectAnswer = e.mp.detail.value
      this.radioList.forEach((item) => {
        if (item.name === this.selectAnswer) {
          item.checked = true
        } else {
          item.checked = false
        }
      })
    },
    async commitQuestion () {
      if (this.selectAnswer === this.rightAnswer) {
        this.checkAnswer = true;
        wx.showToast({
          title: '回答正确',
          icon: 'none',
          duration: 1000,
          mask: true
        })
        this.showQuestion = false;
        await api.wantToSight({
          studentid: wx.getStorageSync('userInfo').studentID,
          sceneryid: this.$mp.query.id,
          shstate: 1
        });
        this.signText = '已签到';
      } else {
        wx.showToast({
          title: '回答错误',
          icon: 'none',
          duration: 1000,
          mask: true
        })
      }
    },
    async onSign () {
      if (this.$mp.query.activitySight === 'true') {
        this.showCameraPopup = true;
        this.showCamera = true;
      } else {
        await api.wantToSight({
          studentid: wx.getStorageSync('userInfo').studentID,
          sceneryid: this.$mp.query.id,
          shstate: 1
        });
        this.signText = '已签到';
      }
    },
    takePhoto () {
      const ctx = wx.createCameraContext();
      ctx.takePhoto({
        quality: 'high',
        success: async (res) => {
          this.src = res.tempImagePath;
          let sourceInfo = {}
          sourceInfo.sourcetype = 3,
          sourceInfo.insertid = this.sightObj.sceneryID,
          sourceInfo.sourceaddress = this.src
          await api.sourceAdd(sourceInfo);
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
    },
    navigationClick (item) {
      let latitude = item.latitude;
      let longitude = item.longitude;
      let title = item.sceneryTitle
      wx.navigateTo({ url: '../mapGps/main?longitude=' + longitude + '&latitude=' + latitude + '&title=' + title })
    },
    formSubmit (e) {
      if (!this.sightObj.shstate.checkin) {
      // this.onSign()

      // let _this = this;
      // 调用距离计算接口
        this.qqmapsdk.calculateDistance({
        // mode: 'driving',//可选值：'driving'（驾车）、'walking'（步行），不填默认：'walking',可不填
        // from参数不填默认当前地址
        // 获取表单提交的经纬度并设置from和to参数（示例为string格式）
        // from: e.detail.value.start || '', // 若起点有数据则采用起点坐标，若为空默认当前地址
          to: this.toAddress, // 终点坐标
          success: res => { // 成功后的回调
            let result = res.result;
            // let dis = [];
            // for (let i = 0; i < result.elements.length; i++) {
            //   dis.push(result.elements[i].distance); // 将返回数据存入dis数组，
            // }
            // 设置并更新distance数据
            this.distance = result.elements[0].distance;
            if (this.distance < 1000) {
              this.onSign()
            } else {
              wx.showToast({
                title: '距离太远，无法签到！',
                icon: 'none',
                duration: 2000
              })
            }
          },
          fail: function (error) {
            wx.showToast({
              title: '无法签到！',
              icon: 'none',
              duration: 2000
            })
            console.error(error);
          },
          complete: function (end) {
            console.log(end);
          }
        });
      }
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
.sight-audio {
  padding-top: 50px;
}
.sight-audio-container {
  background-color: #fff;
  border-top-right-radius: 8px;
  border-top-left-radius: 16rpx;
  overflow: hidden;
}
.sight-page {
  height: 110vh;
  position: relative;
  background-color: transparent;
  width: 94%;
  margin: 0 auto;
}
.sight-introduction-content {
  background-color: #fff;
  border-bottom-right-radius: 16rpx;
  border-bottom-left-radius: 16rpx;
}
.sight-page .swiper {
  width: 100%;
  height: 230px;
}
.sight-page .slide-audio-image{
  width: 100%;
}
.sight-page .slide-image {
  width: 100%;
}
.sight-page .sight-introduction-bar {
  width: 100%;
  height: 60rpx;
  margin-top: -60rpx;
  z-index: 999;
  background: rgba(210, 81, 54, 0.6);
  opacity: 0.99;
  display: flex;
  line-height: 60rpx;
  justify-content: center;
}
.sight-page .sight-introduction-bar-inner {
  width: 95%;
  display: flex;
  justify-content: space-between;
}
.sight-page .sight-introduction-bar-label {
  color: #fff;
  height: 60rpx;
  line-height: 60rpx;
}
.sight-page .sight-introduction-bar-label image {
  /* height:20px; */
  width: 25rpx;
}
.sight-page .sight-introduction-bar-label text {
  font-size: 30rpx;
  position: relative;
  top: -4rpx;
  padding-left: 5px;
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
  /* height: 100px; */
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
}
.sight-page .sight-introduction-video-inner {
  display: flex;
}
.sight-page .sight-introduction-video-image {
  /* background-image: url("https://picsum.photos/750/750/?image=413"); */
  /* background-size: 100%; */
  width: 35px;
  /* height: 35px;
  border-radius: 50%;
  border: #d25136 1px solid; */
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
  line-height: 94rpx;
  margin-left: 20rpx;
  color: #d25136;
  font-size: 32rpx;
}
.sight-page .sight-introduction-icon-group {
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: flex-end;
  width: 40%;
  color: #fff;
}
.sight-page .sight-introduction-icon-group .icon-group-item {
  font-size: 26rpx;
}
.sight-page
  .sight-introduction-icon-group
  .icon-group-item
  .icon-group-item-inner
  ._wux-icon {
  font-size: 20px;
}
.sight-page
  .sight-introduction-icon-group
  .icon-group-item
  .icon-group-item-inner
  ._wux-icon
  .ion {
  font-size: 20px;
  color: #fff;
  padding-top: 5px;
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
  color: #aaa;
  font-size: 30rpx;
  line-height: 50rpx;
  padding-bottom: 30rpx;
}

.sight-page .sight-introduction-icon-group2 {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding-bottom: 30px;
}
.sight-page .sight-introduction-icon-btn {
  width: 100%;
  /* position: fixed; */
  /* bottom: 0; */
  display: flex;
  margin: auto;
  justify-content: center;
}
.sight-page .sight-introduction-icon-btn button {
  width: 100%;
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
  width: 100%;
}
.sight-page .sight-introduction-icon-btn-inner .sign {
  width: calc(100% - 4px);
  background: #d25136;
  border-radius: 0;
  height: 36px;
  margin: 2px;
  line-height: 36px;
}
.sight-page .sight-introduction-icon-btn-inner .signed {
  width: calc(100% - 4px);
  background: #d25136;
  border-radius: 0;
  height: 36px;
  margin: 2px;
  line-height: 36px;
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
  font-size: 16px;
}
.sight-page .sight-words-title .wux-cell:after {
  border-bottom: none;
}
.sight-page .sight-words-content {
  /* min-height: 30px; */
  text-align: left;
  margin-left: 10px;
  font-size: 16px;
  width: 100%;
  display: block;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #eee;
}

.sight-page .inner {
  position: fixed;
  width: 100%;
  background-color: #fff;
  /* height: calc(100% - 44px); */
  /*border-top-left-radius: 20px;*/
  /*border-top-right-radius: 20px;*/
  bottom: 0px;
  z-index: 1001;
  padding-bottom: 40px;
  /* height: 60vh; */
  /* height:228rpx;  高度不设置，自动撑开*/
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
.sight-page .sight-question-btn button:last-child {
  margin-left: 20px;
  background: #d25136;
}
.sight-page .sight-comment-btn button:last-child {
  margin-top: 15px;
  background: #d25136;
}
.sight-page .sight-comment {
  display: flex;
  justify-content: center;
}
.sight-page .sight-comment textarea {
  /* margin-top: 15px;
  height: 60px;
  border: 1px #000 solid; */
  margin: 10px;
  height: 120rpx;
  border: 1px solid #ddd;
  text-align: left;
  width: 100%;
  padding: 20rpx;
  margin-top: 20px;
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
  padding-top: 20rpx
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
  padding-top: 10rpx;
  padding: 10rpx 20rpx;
  font-size: 28rpx;
}
.ceshi_prew text {
  color: #fff;
  font-size: 30rpx;
  float: left;
  margin-top: 15rpx;
}

.ceshi_next text {
  color: #fff;
  font-size: 30rpx;
  display: block;
  float: right;
  margin-top: 15rpx;
}

.ceshi_next {
  width: 40rpx;
  height: 80rpx;
  position: absolute;
  top: 450rpx;
  right: 0rpx;
  /* background-color: rgba(0, 0, 0, 0.5);
  border-top-left-radius: 80rpx;
  border-bottom-left-radius: 80rpx; */
}

.ceshi_prew {
  width: 40rpx;
  height: 80rpx;
  position: absolute;
  top: 450rpx;
  left: 10rpx;
  /* background-color: rgba(0, 0, 0, 0.5);
  border-top-right-radius: 80rpx;
  border-bottom-right-radius: 80rpx; */
}
/* ///// */
.frosted-glass-container {
  width: 100%;
  height: 450rpx;
  background-image: url("https://hsyj.100eduonline.com/static/mini-images/school.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  position: fixed;
}

.frosted-glass {
  width: 120%;
  height: 500rpx;
  background: inherit;
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -ms-filter: blur(10px);
  -o-filter: blur(10px);
  filter: blur(10px);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);
}

.backgroubd-modal {
  position: fixed;
  /* z-index: 100; */
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.sight-page .sight-words-item .scenic-spot-message-text-group {
  position: relative;
  display: flex;
  border: none;
  border-radius: 0;
  padding: 0;
  margin-left: 10rpx;
  flex-grow: 1;
  border-bottom: 1px solid #aaa;
  margin: 0 20rpx;
}
.sight-page
  .sight-words-item
  .scenic-spot-message-text-label
  ._view:first-child {
  font-size: 30rpx;
}
.sight-page .sight-words-item .scenic-spot-message-text-message {
  line-height: 40rpx;
  padding-bottom: 10rpx;
}
</style>
