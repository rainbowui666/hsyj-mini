<template >
  <view class="activity-detail-page">
    <view class="activity-detail-image">
      <!-- 模糊背景开始 -->
      <div class='frosted-glass-container'>  
          <div class='frosted-glass'></div>
      </div> 
      <div class="float-container">
        <div class="float-container-image">
          <image src="../../../static/images/school.png" mode="widthFix"/>
        </div>
        <div class="float-container-detail">
          <div class="title">2019复旦大学【一日】游春游活动进行中</div>
          <div class="people">
            <div class="num"><span>568</span>人报名</div>
            <div class="status">报名中</div>
          </div>
          <view class="float-container-detail-icon-group">
            <icon-group :list="iconArr2" :iconClick="onClick"/>
          </view>
        </div>
        
      </div> 
    </view>
    <view class="activity-detail-desc">
      <wux-cell thumb="../../../static/images/people.png" title="主办单位：" extra="复旦大学"></wux-cell>
      <wux-cell thumb="../../../static/images/more_people.png" title="协办单位：" extra="杨浦区教育局、邯郸路街道"></wux-cell>
      <wux-cell thumb="../../../static/images/clock.png" title="活动开始时间：" extra="2019年4月11日10:00"></wux-cell>
      <wux-cell thumb="../../../static/images/clock.png" title="活动结束时间：" extra="2019年4月11日18:00"></wux-cell>
      <wux-cell thumb="../../../static/images/dida.png" title="出发地点：" extra="五角场大转盘地下广场"></wux-cell>
    </view>
    <!-- <view class="activity-detail-icon-group2">
      <view class="activity-detail-icon-group2-inner">
        <icon-group :list="iconArr2" :iconClick="onClick"/>
      </view>
    </view> -->
    <view v-if="isSingle" class="bottom-btn">
      <button v-if="disApply" class="single_btn">报名</button>
      <button v-if="isApply" class="single_btn_isApply">
        <view class='single_btn_isApply_group'>
          <wux-icon type='ios-checkmark' size='36' color='#fff'/>
          <view>已报名</view>
        </view>
      </button>
      <button v-if="isDoing" class="single_btn_isDoing">进入活动</button>
    </view>
    <view v-if="!isSingle" class="group_btn">
      <view v-if="!isInvite" class="group_btn_disApply">
        <button @click="changeCreatBtn">创建团队</button>
      </view>
      <view v-if="isInvite" class="group_btn_disApply">
        <button @click="onInviteBtn">邀请加入团队</button>
      </view>
      <!-- <view v-if="isCreat" class="group_btn_creat">
        <input maxlength="11" type="text" placeholder="请输入姓名" @input="bindInput">
        <button>确定</button>
      </view>-->
      <view class="group_btn_apply">
        <button @click="onInviteBtn">扫码加入团队</button>
      </view>
    </view>
    <view>
      <view class="activity-detail-desc-rows">
        <view class="activity-detail-desc-rows-inner">
          <text class="explain">活动说明：</text>
          <text>&nbsp;1.按时参加</text>
          <!-- <navigator url="/pages/activity/activitySight/main"> -->
            <view class="activity-detail-desc-rows-icon">
              <text>&nbsp;2.一共8个景点，至少完成6个景点的签到与自拍上传。</text>
              <!-- <wux-icon type="ios-arrow-forward" color="#888" size="16"/> -->
              <!-- <text class="view-sight">&nbsp;查看参与景点</text> -->
            </view>
          <!-- </navigator> -->
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
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554023021200&di=5b6f6be7d8681bbae3b2113193a5aa52&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F28%2F20170128085020_jfRhX.jpeg"
        >
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
        <input placeholder="请输入团队名称">
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
              <view class="activity-detail-words-title">
                <wux-cell
                  thumb="https://wux.cdn.cloverstd.com/logo.png"
                  :title="item.name"
                  :extra="item.time"
                ></wux-cell>
              </view>
              <view class="activity-detail-words-content">
                <text>&nbsp;{{ item.content }}</text>
              </view>
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
        <textarea bindblur="bindTextAreaBlur" placeholder="发表留言" style="height:60px"/>
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
export default {
  components: {
    iconGroup
  },
  data () {
    return {
      isSingle: true,
      isApply: false,
      disApply: false,
      isDoing: false,
      isStatusTrue: true,
      isCreat: false,
      isInvite: false,
      isTwoCode: false,
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
      wordsList: [
        {
          name: '用户名',
          time: '2019年3月27日',
          content: '用户的留言'
        },
        {
          name: '用户名',
          time: '2019年3月27日',
          content: '用户的留言2019年3月27日'
        },
        {
          name: '用户名',
          time: '2019年3月27日',
          content: '用户的留言2019年3月27日'
        },
        {
          name: '用户名',
          time: '2019年3月27日',
          content: '用户的留言2019年3月27日'
        },
        {
          name: '用户名',
          time: '2019年3月27日',
          content: '用户的留言'
        },
        {
          name: '用户名',
          time: '2019年3月27日',
          content: '用户的留言2019年3月27日'
        },
        {
          name: '用户名',
          time: '2019年3月27日',
          content: '用户的留言2019年3月27日'
        },
        {
          name: '用户名',
          time: '2019年3月27日',
          content: '用户的留言2019年3月27日'
        }
      ],
      showComment: false,
      showWords: false
    };
  },
  // onShow () { wx.setNavigationBarTitle({ title: this.$mp.query.name }); },
  methods: {
    changeCreatBtn () {
      this.isCreat = true;
    },
    onInviteBtn () {
      this.isTwoCode = true;
    },
    onTwoCodeClose () {
      this.isTwoCode = false;
    },
    onCreatClose () {
      this.isCreat = false;
    },
    onCreatConfirm () {
      this.isCreat = false;
      this.isInvite = true;
    },
    hideWords () {
      this.showWords = false;
    },
    hideComment () {
      this.showComment = false;
    },
    onClick (item, index) {
      if (index === 0) {
        this.iconArr2[0].icon = 'ios-heart';
        this.iconArr2[0].color = 'red';
      }
      if (index === 1) {
        this.showWords = true;
      }
    },
    comment () {
      this.showWords = false;
      this.showComment = true;
    },
    onClose () {
      this.showPopUp = false;
      this.showWords = false;
      this.showComment = false;
      this.showCameraPopup = false;
    }
  },
  onLoad (options) {
    this.isSingle = options.isSingle === 'false' ? !this.isStatusTrue : true;
    this.isDoing = options.applyStatus === '进行中' ? this.isStatusTrue : false;
    this.isApply = options.applyStatus === '已报名' ? this.isStatusTrue : false;
    this.disApply = !this.isApply && !this.isDoing ? this.isStatusTrue : false;
  },
  onShareAppMessage: function (ops) {
    return {
      title: '红色印记'
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
  margin-bottom:20rpx;
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
  line-height:30rpx;
  color: #aaa;
}
.activity-detail-page .activity-detail-desc-rows-inner .explain{
  color:#d25136;
  font-size:36rpx;
  padding-top:16rpx;
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
  width: 95%;
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
}
.activity-detail-page .activity-detail-comment-btn {
  margin-top: 15px;
}
.activity-detail-page .activity-detail-comment {
  display: flex;
  justify-content: center;
}
.activity-detail-page .activity-detail-comment textarea {
  margin-top: 15px;
  height: 60px;
  border: 1px #000 solid;
}
.activity-detail-page .activity-detail-comment input {
  margin-top: 15px;
  border: 1px #000 solid;
}
.single_btn {
  width: 90%;
  background-color: #d25136;
  height:80rpx;
  line-height:80rpx;
  color: #fff;
}
.single_btn_isApply {
  display: flex;
  width: 90%;
  background-color: #d25136;
  height:80rpx;
  line-height:80rpx;
  color: #fff;
}
.single_btn_isApply_group{
  display: flex;
  margin: auto;
}
.single_btn_isDoing {
  width: 90%;
  background-color: yellow;
  height:80rpx;
  line-height:80rpx;
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
  height:80rpx;
  line-height:80rpx;
  color: #fff;
  border-radius: 0%;
}
.group_btn_apply button {
  background-color: gray;
  height:80rpx;
  line-height:80rpx;
  color: #fff;
  border-radius: 0%;
}
.group_btn_apply {
  width: 47%;
}

/* //////////////////////////////// */
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
.float-container{
  display:flex;
  flex-direction:row;
  position:absolute;
  top:100rpx;
}
.float-container-image{
  width:240rpx;
  height:280rpx;
  border-radius:20rpx;
  overflow:hidden;
  margin:0 20rpx;
}
.float-container-detail > .title{
  font-size:18px;
  padding-right:24rpx;
}
.float-container-detail > .people{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding-right:30rpx;
}
.float-container-detail > .people > .num{
  font-size:16px;
  padding:8rpx 0;
}
.float-container-detail > .people > .num ._span{
  color:#d25136;
  padding-right:10rpx;
}
.float-container-detail > .people > .status{
  font-size:14px;
  border:1px solid #000;
  line-height:22px;
  padding:0 8px;
  margin:4px 0;
  border-radius:10rpx;
}
.float-container-detail-icon-group .icon-group{
  margin:0;
  margin-top:16rpx;
}
</style>
