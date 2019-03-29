<template >
  <view class="activity-detail-page">
    <view class="activity-detail-image">
      <image src="https://picsum.photos/750/750/?image=413"/>
    </view>
    <view class="activity-detail-icon-group">
      <view class="activity-detail-icon-group-inner">
        <icon-group :list="iconArr"/>
      </view>
    </view>
    <view class="activity-detail-desc">
      <view class="activity-detail-desc-row">
        <view class="activity-detail-desc-row-inner">
          <wux-row>
            <wux-col span="5.5">
              <text>主办单位：</text>
              <text>上海财经大学</text>
            </wux-col>
            <wux-col span="5.5" offset="1">
              <text>协办单位：</text>
              <text>杨浦区教育局、邯郸路街道</text>
            </wux-col>
          </wux-row>
        </view>
      </view>
      <view class="activity-detail-desc-row">
        <view class="activity-detail-desc-row-inner">
          <wux-row>
            <wux-col span="5.5">
              <text>活动开始时间：</text>
              <text>2019年4月11日10:00</text>
            </wux-col>
            <wux-col span="5.5" offset="1">
              <text>活动结束时间：</text>
              <text>2019年4月11日18:00</text>
            </wux-col>
          </wux-row>
        </view>
      </view>
      <view class="activity-detail-desc-row">
        <view class="activity-detail-desc-row-inner">
          <wux-row>
            <wux-col span="12">
              <text>出发地点：</text>
              <text>五角场大转盘地下广场</text>
            </wux-col>
          </wux-row>
        </view>
      </view>
      <view class="activity-detail-desc-rows">
        <view class="activity-detail-desc-rows-inner">
          <text class="explain">活动说明：</text>
          <text>&nbsp;1.按时参加</text>
          <text>&nbsp;2.一共8个景点，至少完成6个景点的签到与自拍上传。</text>
        </view>
      </view>
    </view>
    <view class="activity-detail-icon-group2">
      <view class="activity-detail-icon-group2-inner">
        <icon-group :list="iconArr2" :iconClick="onClick"/>
      </view>
    </view>
    <view :class="showWords?'pop':'pop-hide'">
      <!-- <view :class="showWords?'modal':'modal-hide'" @click="onClose"> -->
      <view :class="showWords?'modal':'modal-hide'">
        <scroll-view :class="showWords?'inner':'inner-hide'" :scroll-y="true">
          <!-- <wux-popup position="bottom" :visible="showWords" :closable="true" @close="onClose"> -->
          <view class="activity-detail-words">
            <view class="activity-detail-words-item" v-for="(item,index) in wordsList" :key="index">
              <view class="activity-detail-words-title">
                <text>{{ item.name }}</text>
                <text>{{ item.time }}</text>
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
    <wux-popup
      title="我要留言"
      position="bottom"
      :visible="showComment"
      :closable="true"
      @close="onClose"
      :maskClosable="false"
    >
      <view class="activity-detail-comment">
        <textarea bindblur="bindTextAreaBlur" placeholder="发表留言" style="height:60px"/>
      </view>
      <view class="activity-detail-comment-btn">
        <button type="default" size="mini" :plain="false" @click="hideWords">撤销</button>
        <button type="primary" size="mini" :plain="false" @click="comment">确定</button>
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
      iconArr: [
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
      showComment: false,
      showWords: false
    };
  },
  // onShow () { wx.setNavigationBarTitle({ title: this.$mp.query.name }); },
  methods: {
    hideWords () {
      this.showWords = false;
    },
    onClick (item, index) {
      if (index === 0) {
        this.iconArr2[0].icon = 'ios-heart';
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
  width: 100%;
}
.activity-detail-page .activity-detail-desc {
  width: 95%;
  margin: 0 auto;
  border: 1px solid #eee;
  font-size: 14px;
}
.activity-detail-page .activity-detail-desc-row-inner {
  width: 100%;
  margin-left: 15px;
}
.activity-detail-page .activity-detail-desc-row {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
.activity-detail-page .activity-detail-desc-rows {
  padding: 5px 0;
  height: 100px;
}
.activity-detail-page .activity-detail-desc-rows-inner {
  width: 100%;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
}

.activity-detail-page .activity-detail-icon-group {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  width: 93%;
}
.activity-detail-page .activity-detail-icon-group-inner {
  width: 50%;
  display: flex;
  justify-content: flex-end;
}
.activity-detail-page .activity-detail-icon-group-inner .icon-group {
  width: 50%;
}
.activity-detail-page .activity-detail-icon-group2,
.activity-detail-page .activity-detail-icon-btn {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.activity-detail-page .activity-detail-icon-group2-inner {
  display: flex;
  justify-content: center;
  width: 95%;
}

.activity-detail-page .activity-detail-icon-group2-inner .icon-group-item-label {
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
  line-height: 40px;
}
.activity-detail-page .activity-detail-icon-group2-inner button {
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
.activity-detail-page .activity-detail-icon-group2-inner button::after {
  border: none;
}
.activity-detail-page .activity-detail-icon-group2-inner .button-hover {
  color: #000;
}
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
  font-size: 20px;
}
.activity-detail-page .activity-detail-words-content,
.activity-detail-page .activity-detail-words-title > text:last-child {
  min-height: 30px;
  text-align: left;
  margin-left: 10px;
  font-size: 16px;
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
.activity-detail-page .pop .modal .inner .activity-detail-words-btn button:last-child{
  margin-left: 20px;
  background-color: rgb(5, 145, 226);
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
.activity-detail-page .pop .modal .inner .activity-detail-words-btn{
  position: fixed;
  bottom: 0;
  right: 20px;
}
.activity-detail-page .pop .modal .inner .activity-detail-words-btn button:last-child,
.activity-detail-page .activity-detail-comment-btn button:last-child {
  margin-left: 20px;
  background-color: rgb(5, 145, 226);
}
.activity-detail-page .activity-detail-comment-btn{
  margin-top: 15px
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
</style>
