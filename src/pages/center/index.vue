<template >
    <view class="container">
      <view class="profile-info"/>
       <view class="avatar-info">
          <view v-if="userInfo.avatarUrl">
            <wux-avatar size="large" :src="userInfo.avatarUrl"/>
          </view>
           <view v-else>
            <navigator url="/pages/center/login/main" >
              <wux-avatar size="large" :src="avatarUrl" bodyStyle='background-color: #ffffff;' />
            </navigator>
          </view>
          <view class="character-text">
            <view class="name">
              <text class="name">&nbsp;&nbsp;{{userInfo.nickName}}</text>
            </view>
          </view>
        </view>
      <view class='row' v-if="userInfo.avatarUrl">
         <wux-cell-group >
            <wux-cell thumb="/static/images/my_policy.png" title="我的保单" is-link></wux-cell>
            <wux-cell thumb="/static/images/my_claims.png" title="我的理赔" is-link></wux-cell>
            <wux-cell thumb="/static/images/Home.png" title="家庭管理" is-link></wux-cell>
            <wux-cell thumb="/static/images/Property.png" title="资产管理" is-link></wux-cell>
            <wux-cell thumb="/static/images/Travel.png" title="出行管理" is-link></wux-cell>
            <wux-cell thumb="/static/images/Health.png" title="健康管理" is-link></wux-cell>
            <wux-cell thumb="/static/images/Quit.png" title="系统退出" is-link @click="logout"></wux-cell>
        </wux-cell-group>
      </view>
       <view class='row' v-else>
        <view class="weui-prompt">
            <wux-prompt :visible="true" title="空空如也" text="点击头像登录" />
        </view>
      </view>
    </view>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      avatarUrl: '/static/images/avatar.png',
      timeCounter: null,
      showtime: null,
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    };
  },
  onLoad () {
    this.userInfo = wx.getStorageSync('userInfo');
  },
  onShow () {
    this.userInfo = wx.getStorageSync('userInfo');
  },
  methods: {
    buttonClicked () {
      console.log('1')
    },
    logout () {
      wx.removeStorageSync('userInfo');
      wx.reLaunch({
        url: '/pages/center/login/main'
      });
    }
  }
};
</script>

<style scoped>
page {
  height: 100%;
  width: 100%;
}
.avatar{
  background-color: #ffffff;
}
.container {
  background: #ffffff;
  height: auto;
  overflow: hidden;
  width: 100%;
  position: relative;
}
.profile-info {
  width: 100%;
  height: 334rpx;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30.25rpx;
  background: url('https://rainbow.ebaotech.com/static/rainbow/image/bg2.png');
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;

  /* background: #fff; */
}

.avatar-info{
  position: absolute;
  top: 75px;
  left: 10%;
  display:flex;

}
/* .user-floatmenu{
  width: 90%;
  margin-top: -20px;
} */

.character-text{
  display: flex;
  margin:auto;

}
.character-text image{
  width: 32px;
  height: 32px;

}

.user-menu .avatar {
  height: 148rpx;
  width: 148rpx;
  border-radius: 10%;
  margin-top: 20rpx;
  margin-left: 20rpx;
}

.user-menu .info {
  flex: 1;
  height: 50rpx;
  margin-top: 100rpx;
  margin-left: 70rpx;
}

.user-menu .character-info .name {
  /* display: block; */
  /* height: 45rpx; */
  /* line-height: 45rpx; */
  /* font-size: 37.5rpx; */
  margin-top: 10rpx;
}

.profile-info .level {
  display: block;
  height: 30rpx;
  line-height: 30rpx;
  margin-bottom: 10rpx;
  color: #7f7f7f;
  font-size: 30rpx;
}

.user-menu {
  margin-top: -30px;
  width: 100%;
  height: auto;
  overflow: hidden;
  /* background: #fff; */
}

.user-menu .name{
  height: 20px;
  overflow: hidden;
}

.user-menu .item {
  /* float: left; */
  /* width: 33%; */
  display: flex;
  height: 78rpx;
  /* border-right: 1px solid rgba(0, 0, 0, 0.15); */
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  text-align: center;
}

.user-menu .item .item-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.user-menu .item .item-container .item-container-icon {
  display: flex;
}

.user-menu .item .item-container .item-container-end {
  margin-left: 200px;
}

.user-menu .item .a {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.user-menu .item.no-border {
  border-right: 0;
}

.user-menu .icon {
  margin: 0 auto;
  display: block;
  height: 52.803rpx;
  width: 52.803rpx;
  margin-bottom: 16rpx;
}


.user-menu .txt {
  display: block;
  height: 24rpx;
  width: 100%;
  font-size: 24rpx;
  color: #333;
}

.logout {
  margin-top: 50rpx;
  height: 101rpx;
  width: 100%;
  line-height: 101rpx;
  text-align: center;
  background: #fff;
  color: #ea3732;
  font-size: 30rpx;
}
.login-list {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #fff;
  border-top: 1px solid #e1e1e1;
}

.userinfo-tel,
.userinfo-code {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  border: solid 1px #d6d6d6;
  border-radius: 4px;
}
.userinfo-tel > input,
.userinfo-code > input {
  line-height: 48px;
  height: 48px;
  font-size: 14px;
  justify-content: space-between;
  width: 70%;
  padding-left: 36px;
}
.userinfo-tel button,
.userinfo-code button {
  border: none;
  color: #278cec;
  height: 24px;
  margin: 12px 0 0 0;
  align-items: center;
  padding: 4px 0;
  border-left: solid 1px #d6d6d6;
  line-height: 24px;
  padding: 0;
  width: 30%;
  font-size: 14px;
  text-align: right;
  padding: 0 12px;
  border-radius: 0;
  flex-shrink: 0;
}
.captcha-button {
  font-size: 14px;
  line-height: 48px;
  padding-right: 10px;
  width: 50%;
  text-align: right;
}
.userinfo-tel button {
  border: none;
}

.login-list > image {
  width: 100%;
}

.userinfo-confirm {
  width: 100%;
}

.userinfo-confirm button {
  border: none;
  margin: 40px 20px 20px 20px;
  color: white;
  height: 48px;
  line-height: 48px;
  background: #26ab28;
}
.character-info {
  background: #fff;
  display: flex;
  width:100%;
  margin:auto;
}

.character-menu {
  background: #fff;
}


.character-itemlist {
  margin-top: 30rpx;
  justify-content: flex-end;
  display: flex;
  text-align:center;
}

.character-info .info {
  text-align: center;
  display: inherit;
  /* margin-left:320rpx; */
  margin-bottom: 20rpx;
}

.character-info .info navigator {
  margin: 0px 5px;
}

.character-item {
  font-size: 14px;
}
.character-item2 {
  margin: 0px 40px;
}

.character-item .txt {
  text-align: center;
  margin-bottom: 5px;
  font-size: 16px;
  color: rgb(216, 22, 22);
}

.weui-prompt{
  height:80vh
}
</style>
