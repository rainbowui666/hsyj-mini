<template >
  <view class="activity-detail-page">
    <view class="activity-detail-image">
      <!-- 模糊背景开始 -->
      <view
        class="frosted-glass-container"
        :style="activityList.pics[0].sourceAddress===undefined?'background-image:url(https://hsyj.100eduonline.com/static/images/7c6c88b9-9a12-4dfb-b210-875692555fbc.jpg)':'background-image:url(https://hsyj.100eduonline.com/static/images/'+activityList.pics[0].sourceAddress+')'"
      >
        <view class="frosted-glass"></view>
      </view>
      <view class="float-container">
        <view class="float-container-image">
          <image
            :src="activityList.pics[0].sourceAddress===undefined?'https://hsyj.100eduonline.com/static/images/7c6c88b9-9a12-4dfb-b210-875692555fbc.jpg':'https://hsyj.100eduonline.com/static/images/'+activityList.pics[0].sourceAddress"
            mode="widthFix"
          />
        </view>
        <view class="float-container-detail">
          <view class="title">{{activityList.activityName}}</view>
          <view class="people">
            <view class="num">
              <span>568</span>人报名
            </view>
            <view class="status">报名中</view>
          </view>
          <view class="float-container-detail-icon-group">
            <icon-group :list="iconArr2" :iconClick="onClick"/>
          </view>
        </view>
      </view>
    </view>
    <view class="activity-detail-desc">
      <wux-cell
        thumb="../../../static/images/people.png"
        title="主办单位："
        :extra="activityList.sponsor"
      ></wux-cell>
      <wux-cell
        thumb="../../../static/images/more_people.png"
        title="协办单位："
        :extra="activityList.secondSponsor"
      ></wux-cell>
      <wux-cell
        thumb="../../../static/images/clock.png"
        title="活动开始时间："
        :extra="activityList.startDate"
      ></wux-cell>
      <wux-cell
        thumb="../../../static/images/clock.png"
        title="活动结束时间："
        :extra="activityList.endDate"
      ></wux-cell>
      <wux-cell
        thumb="../../../static/images/dida.png"
        title="出发地点："
        :extra="activityList.startAddress"
      ></wux-cell>
    </view>
<view class="bottom-btn">
      <button v-if="disApply&&!isComplete" class="single_btn" @click="signUp">报名</button>
      <button v-if="isApply&&!isDoing&&!isComplete" class="single_btn_isApply">
        <view class="single_btn_isApply_group">
          <wux-icon type="ios-checkmark" size="36" color="#fff"/>
          <view>已报名</view>
        </view>
      </button>
      <button v-if="isDoing&&!isGroup&&!isComplete" class="single_btn_isDoing" @click="gotoActivity">进入活动</button>
      <button v-if="isComplete" class="single_btn" >已完成</button>
    </view>
    <view v-if="isGroup&&isApply&&isDoing" class="group_btn">
      <view v-if="!isInvite" class="group_btn_disApply">
        <button @click="changeCreatBtn">创建团队</button>
      </view>
      <view v-if="isInvite" class="group_btn_disApply">
        <button @click="onInviteBtn">邀请加入</button>
      </view>
      <view class="group_btn_apply">
        <button @click="scan">扫码加入</button>
      </view>
    </view>
    <view>
      <view class="activity-detail-desc-rows">
        <view class="activity-detail-desc-rows-inner">
          <text class="explain">活动说明：</text>
          <text>&nbsp;{{activityList.shdesc}}</text>
        </view>
      </view>
    </view>
    <wux-popup
      position="center"
      :visible="isTwoCode"
      :closable="true"
      @close="onTwoCodeClose"
      :maskClosable="false"
    >
      <view class="activity-detail-comment">
        <image :src="svgSrc"/>
      </view>
    </wux-popup>
    <wux-popup
      title="创建团队"
      position="center"
      :visible="isCreat"
      :closable="true"
      @close="onCreatClose"
      :maskClosable="false"
    >
      <view class="activity-detail-comment">
        <input v-model="teamName" placeholder="请输入团队名称">
      </view>
      <view class="activity-detail-comment-btn">
        <button type="default" size="mini" :plain="false" @click="onCreatClose">取消</button>
        <button type="primary" size="mini" :plain="false" @click="onCreatConfirm">确定</button>
      </view>
    </wux-popup>
    <view :class="showWords?'pop':'pop-hide'">
      <!-- <view :class="showWords?'modal':'modal-hide'" @click="onClose"> -->
      <view :class="showWords?'modal':'modal-hide'">
        <scroll-view :class="showWords?'inner':'inner-hide'" :scroll-y="true">
          <!-- <wux-popup position="bottom" :visible="showWords" :closable="true" @close="onClose"> -->
          <view class="activity-detail-words">
            <view class="activity-detail-words-item" v-for="(item,index) in wordsList" :key="index">
              <!-- <view class="activity-detail-words-title">
                <wux-cell
                  thumb="https://wux.cdn.cloverstd.com/logo.png"
                  :title="item.name"
                  :extra="item.time"
                ></wux-cell>
              </view>
              <view class="activity-detail-words-content">
                <text>&nbsp;{{ item.content }}</text>
              </view>-->
              <message-card :data="item" :showTime='false'/>
            </view>
          </view>
          <view class="activity-detail-words-btn">
            <button type="default" size="mini" :plain="false" @click="hideWords">隐藏留言</button>
            <button type="primary" size="mini" :plain="false" @click="comment">我要留言</button>
          </view>
          <!-- </wux-popup> -->
        </scroll-view>
      </view>
    </view>
    <wux-popup position="bottom" :visible="showComment" @close="onClose" :maskClosable="false">
      <view class="activity-detail-comment">
        <textarea v-model="content" placeholder="发表留言" style="height:60px"/>
      </view>
      <view class="activity-detail-comment-btn">
        <!-- <button type="default" size="mini" :plain="false" @click="hideWords">撤销</button> -->
        <button type="primary" size="mini" :plain="false" @click="hideComment">确定</button>
      </view>
    </wux-popup>
  </view>
</template>

<script>
import iconGroup from '../../../components/icon-group';
import messageCard from '../../../components/message-card';
import api from '@/utils/api';
import dayjs from 'dayjs';

export default {
  components: {
    iconGroup,
    messageCard
  },
  data () {
    return {
      currentTime: null,
      isGroup: true,
      isApply: false,
      disApply: false,
      isComplete: false,
      isDoing: false,
      isStatusTrue: true,
      isCreat: false,
      isInvite: false,
      isTwoCode: false,
      content: '',
      teamName: '',
      defaultImg: 'https://hsyj.100eduonline.com/static/images/54a22670-6ef8-44c3-a165-fa4771275079.jpg',
      svgSrc: 'https://hsyj.100eduonline.com/static/mini-images/thumbsUp.png',
      iconArr: [
        {
          icon: 'ios-heart',
          size: '24',
          color: '#fff',
          label: 11
        },
        {
          icon: 'ios-chatboxes',
          size: '24',
          color: '#fff',
          label: 11
        }
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
        },
        {
          icon: 'ios-share-alt',
          size: '26',
          color: '#fff',
          label: '分享',
          isButton: true,
          openType: 'share'
        }
      ],
      wordsList: [],
      showComment: false,
      showWords: false,
      activityList: {},
      pageindex: 1,
      pagesize: 10
    };
  },
  methods: {
    async signUp () {
      console.log('signUp');
      if (wx.getStorageSync('userInfo').stuNo) {
        await api.wantToActivity({
          studentid: wx.getStorageSync('userInfo').studentID,
          activityid: this.$mp.query.id,
          shstate: 1
        });
        this.disApply = false;
        this.isApply = true;
      } else {
        wx.navigateTo({ url: '/pages/center/login/main' });
      }
    },
    changeCreatBtn () {
      if (wx.getStorageSync('userInfo').stuNo) {
        this.isCreat = true;
      } else {
        wx.navigateTo({ url: '/pages/center/login/main' });
      }
    },
    async onInviteBtn () {
      let url1 = 'https://hsyj.100eduonline.com/api/api/group/showQr?url='
      let url =
        'https://hsyj.100eduonline.com/api/api/group/joinGroup?groupid=' +
        this.activityList.group[0].groupid +
        '&studentid=' +
        wx.getStorageSync('userInfo').studentID +
        '&activityid=' +
        this.$mp.query.id;
      // const res = await api.getQRCode({url: url});
      this.svgSrc = url1 + url
      console.log('svgSrc', this.svgSrc)
      this.isTwoCode = true;
    },
    onTwoCodeClose () {
      this.isTwoCode = false;
    },
    onCreatClose () {
      this.isCreat = false;
    },
    async onCreatConfirm () {
      await api.addTeam({
        id: this.$mp.query.id,
        groupname: this.teamName
      });
      this.getDetailInfo();

      this.isCreat = false;
    },
    hideWords () {
      this.showWords = false;
    },
    async hideComment () {
      await api.addMessage({
        studentid: wx.getStorageSync('userInfo').studentID,
        targetid: this.$mp.query.id,
        distype: 1,
        content: this.content
      });
      this.getMessage()
      this.showComment = false;
      // this.showWords = true;
    },
    async onClick (item, index) {
      if (index === 0) {
        if (this.iconArr2[0].color !== 'red') {
          await api.wantToActivity({
            studentid: wx.getStorageSync('userInfo').studentID,
            activityid: this.$mp.query.id,
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
    comment () {
      // this.showWords = false;
      this.showComment = true;
    },
    onClose () {
      this.showPopUp = false;
      this.showWords = false;
      this.showComment = false;
      this.showCameraPopup = false;
    },
    async getMessage () {
      const res = await api.getActivityMessage({
        activityid: this.$mp.query.id,
        pageindex: this.pageindex,
        pagesize: this.pagesize
      });
      this.wordsList = res.data.data ? res.data.data : [];
      this.wordsList.forEach(element => {
        element.createdate = dayjs(element.createdate).format('YYYY-MM-DD HH:mm:ss')
      });
    },
    scan () {
      wx.scanCode({
        success: res => {
          wx.showToast({
            title: '加入成功',
            icon: 'success',
            duration: 2000// 持续的时间
          })
        },
        fail: res => {
          console.log(res);
        }
      });
    },
    async getDetailInfo () {
      if (this.$mp.query.isGroup === '1') {
        const res = await api.getGroupActivityDetail({
          id: this.$mp.query.id,
          studentid: wx.getStorageSync('userInfo').studentID
        });
        this.activityList = res.data ? res.data : [];
        this.activityList.startDate = dayjs(this.activityList.startDate).format('YYYY-MM-DD HH:mm:ss')
        if (dayjs(dayjs().format('YYYY-MM-DD')).diff(dayjs(this.activityList.startDate), 'day') >= 0 && this.isApply) {
          this.isDoing = true
        }
        this.activityList.endDate = dayjs(this.activityList.endDate).format('YYYY-MM-DD HH:mm:ss')
        wx.setNavigationBarTitle({
          title: this.activityList.activityName
        });
        if (this.activityList.group[0]) {
          this.isInvite = true;
        }
      } else {
        const res = await api.getActivityDetail({id: this.$mp.query.id, studentid: wx.getStorageSync('userInfo').studentID});
        this.activityList = res.data ? res.data : [];
        this.activityList.startDate = dayjs(this.activityList.startDate).format('YYYY-MM-DD HH:mm:ss')
        this.activityList.endDate = dayjs(this.activityList.endDate).format('YYYY-MM-DD HH:mm:ss')
        if (dayjs(dayjs().format('YYYY-MM-DD')).diff(dayjs(this.activityList.startDate), 'day') >= 0 && this.isApply) {
          this.isDoing = true
        }
        wx.setNavigationBarTitle({
          title: this.activityList.activityName
        });
      }
    },
    gotoActivity () {
      wx.navigateTo({ url: '/pages/activity/activitySight/main?id=' + this.$mp.query.id });
    }
  },
  async onShow () {
    debugger
    this.isGroup = this.$mp.query.isGroup === '1' ? this.isStatusTrue : false;
    this.isDoing = this.$mp.query.applyStatus === '进行中' ? this.isStatusTrue : false;
    this.isApply =
      this.$mp.query.applyStatus === '已报名' ? this.isStatusTrue : false;
    this.isComplete =
      this.$mp.query.applyStatus === '已完成' ? this.isStatusTrue : false;
    this.disApply = !this.isApply && !this.isDoing ? this.isStatusTrue : false;
    this.getDetailInfo();
    const isWantTo = await api.isWantTo({
      studentid: wx.getStorageSync('userInfo').studentID,
      activityid: this.$mp.query.id,
      shstate: 0
    });
    if (isWantTo.data) {
      this.iconArr2[0].color = 'red';
    } else {
      this.iconArr2[0].color = '#fff';
    }
    this.getMessage();
  },
  onShareAppMessage: function (ops) {
    return {
      title: this.$mp.query.name
    };
  }
};
</script>

<style>
.activity-detail-page {
  height: 110vh;
}
.activity-detail-page .activity-detail-image image {
  /* width: 100%; */
}
.activity-detail-page .activity-detail-desc {
  margin: 50rpx auto;
  font-size: 14px;
  margin-bottom: 20rpx;
}
.activity-detail-page .activity-detail-desc-rows {
  font-size: 14px;
  padding: 5px 0;
  height: 65px;
}
.activity-detail-page .activity-detail-desc-rows-inner {
  width: 100%;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
}

.activity-detail-page .activity-detail-desc-rows-inner text {
  margin-bottom: 8px;
  line-height: 30rpx;
  color: #aaa;
}
.activity-detail-page .activity-detail-desc-rows-inner .explain {
  color: #d25136;
  font-size: 36rpx;
  padding-top: 16rpx;
}
.activity-detail-page .activity-detail-icon-group {
  /* margin-top: 10px; */
  /* display: flex; */
  justify-content: flex-end;
  width: 93%;
  width: 100%;
  height: 30px;
  margin-top: -33px;
  z-index: 999;
  background: #000;
  opacity: 0.6;
  display: flex;
  line-height: 30px;
  color: #fff;
  /* justify-content: center; */
}
/* .activity-detail-page .activity-detail-icon-group-inner {
  width: 50%;
  display: flex;
  justify-content: flex-end;
} */
.activity-detail-page .activity-detail-icon-group .icon-group {
  width: 55%;
  margin-right: 10px;
}
/* .activity-detail-page .activity-detail-icon-group2-inner {
  width: 80%;
  margin-top: 30px;
} */
.activity-detail-desc-rows-icon {
  display: flex;
}
.activity-detail-page .activity-detail-icon-btn {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
/* .activity-detail-page .activity-detail-icon-group2 {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding-bottom: 60px;
} */
/* .activity-detail-page .activity-detail-icon-group2-inner {
  display: flex;
  justify-content: center;
  width: 95%;
} */
.view-sight {
  border: 1px red solid;
  background: -webkit-linear-gradient(
    left,
    rgb(241, 92, 92),
    rgb(255, 38, 0)
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    rgb(241, 92, 92),
    rgb(255, 38, 0)
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    rgb(241, 92, 92),
    rgb(255, 38, 0)
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to right,
    rgb(241, 92, 92),
    rgb(255, 38, 0)
  ); /* 标准的语法 */
  font-size: 16px;
  color: #fff;
}
/* .activity-detail-page
  .activity-detail-icon-group2-inner
  .icon-group-item-label {
  font-size: 16px;
  font-weight: 600;
  margin-left: 5px;
  line-height: 40px;
} */
.activity-detail-page .activity-detail-icon-group button {
  font-size: 16px;
  font-weight: 600;
  margin-left: 5px;
  line-height: 40px;
  padding: 0;
  border-radius: 0px;
  box-sizing: inherit;
  background-color: #fff;
  display: flex;
}
.activity-detail-page .activity-detail-icon-group button::after {
  border: none;
}
.activity-detail-page .activity-detail-icon-group .button-hover {
  color: #000;
}
/* .activity-detail-page .activity-detail-icon-group2-inner button {
  font-size: 16px;
  font-weight: 600;
  margin-left: 5px;
  line-height: 40px;
  padding: 0;
  border-radius: 0px;
  box-sizing: inherit;
  background-color: #fff;
  display: flex;
}
.activity-detail-page .activity-detail-icon-group2-inner button::after {
  border: none;
}
.activity-detail-page .activity-detail-icon-group2-inner .button-hover {
  color: #000;
} */
.activity-detail-page .activity-detail-icon-btn-inner {
  width: 60%;
}
.activity-detail-page .activity-detail-words-item {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  line-height: 30px;
  width: 100%;
}
.activity-detail-page .activity-detail-words-item .scenic-spot-message-text-group {
  position: relative;
  display: flex;
  border:none;
  border-radius:0;
  padding:0;
  margin-left:10rpx;
  flex-grow:1;
  border-bottom:1px solid #aaa;
  margin:0 20rpx;
}
.activity-detail-page .activity-detail-words-item .scenic-spot-message-text-label ._view:first-child{
  font-size: 30rpx
}
.activity-detail-page .activity-detail-words-item .scenic-spot-message-text-message{
  line-height: 40rpx;
  padding-bottom:10rpx;
}
.activity-detail-page .activity-detail-words-title {
  min-height: 30px;
  text-align: left;
  margin-left: 10px;
  font-size: 16px;
}
.activity-detail-page .activity-detail-words-title .wux-cell:after {
  border-bottom: none;
}
.activity-detail-page .activity-detail-words-content {
  text-align: left;
  margin-left: 10px;
  font-size: 16px;
  width: 100%;
  display: block;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #eee;
}
.activity-detail-page .activity-detail-comment-btn button:last-child {
  margin-top: 15px;
  background: #d25136;
  margin-left: 20px;
}
.activity-detail-page .inner {
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
.activity-detail-page .pop .modal .inner .activity-detail-words-btn {
  position: fixed;
  bottom: 0;
  right: 20px;
}
.activity-detail-page
  .pop
  .modal
  .inner
  .activity-detail-words-btn
  button:last-child {
  margin-left: 20px;
  background: #d25136
}
.activity-detail-page .pop-hide,
.activity-detail-page .modal-hide,
.activity-detail-page .inner-hide {
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
.activity-detail-page .modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}
.activity-detail-page .pop .modal .inner .activity-detail-words-btn {
  position: fixed;
  bottom: 0;
  right: 20px;
}
.activity-detail-page
  .pop
  .modal
  .inner
  .activity-detail-words-btn
  button:last-child {
  margin-left: 20px;
  background: #d25136
}
.activity-detail-page .activity-detail-comment-btn {
  /* margin-top: 15px; */
}
.activity-detail-page .activity-detail-comment {
  display: flex;
  justify-content: center;
}
.activity-detail-page .activity-detail-comment textarea {
  margin:10px;
  height:120rpx;
  border:1px solid #ddd;
  text-align:left;
  width:100%;
  padding:20rpx;
  margin-top:20px;
}
.activity-detail-page .activity-detail-comment input {
  margin-top: 15px;
  border: 1px #000 solid;
}
.single_btn {
  width: 90%;
  background-color: #d25136;
  height: 80rpx;
  line-height: 80rpx;
  color: #fff;
}
.single_btn_isApply {
  display: flex;
  width: 90%;
  background-color: #d25136;
  height: 80rpx;
  line-height: 80rpx;
  color: #fff;
}
.single_btn_isApply_group {
  display: flex;
  margin: auto;
  height: 80rpx;
  line-height: 80rpx;
}
.single_btn_isApply_group ._wux-icon {
  padding-right: 20rpx;
}
.single_btn_isDoing {
  width: 90%;
  background-color: #ffcc00;
  height: 80rpx;
  line-height: 80rpx;
  color: #fff;
}
.group_btn {
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: auto;
  /* position: fixed; */
  /* bottom: 0; */
}
.group_btn_disApply {
  /* border-radius: 0%; */
  width: 47%;
}
.group_btn_disApply button {
  background-color: #d25136;
  height: 80rpx;
  line-height: 80rpx;
  color: #fff;
  border-radius: 16rpx;
}
.group_btn_apply button {
  background-color: gray;
  height: 80rpx;
  line-height: 80rpx;
  color: #fff;
  border-radius: 16rpx;
}
.group_btn_apply {
  width: 47%;
}

/* //////////////////////////////// */
.frosted-glass-container {
  width: 100%;
  height: 340rpx;
  /* background-image: url('https://hsyj.100eduonline.com/static/mini-images/school.png');    */
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
}
.frosted-glass {
  width: 120%;
  height: 380rpx;
  background: inherit;
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -ms-filter: blur(10px);
  -o-filter: blur(10px);
  filter: blur(10px);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);
}
.float-container {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 100rpx;
  width: 100%
}
.float-container-image {
  width: 240rpx;
  height: 280rpx;
  border-radius: 20rpx;
  overflow: hidden;
  margin: 0 20rpx;
}
.float-container-detail{
  flex-grow:1;
}
.float-container-detail > .title {
  font-size: 18px;
  padding-right: 24rpx;
}
.float-container-detail > .people {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 30rpx;
}
.float-container-detail > .people > .num {
  font-size: 16px;
  padding: 8rpx 0;
}
.float-container-detail > .people > .num ._span {
  color: #d25136;
  padding-right: 10rpx;
}
.float-container-detail > .people > .status {
  font-size: 14px;
  border: 1px solid #000;
  line-height: 22px;
  padding: 0 8px;
  margin: 4px 0;
  border-radius: 10rpx;
}
.float-container-detail-icon-group .icon-group {
  margin: 0;
  margin-top: 16rpx;
}
</style>
