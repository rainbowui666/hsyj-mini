<template >
  <view class="login">
    <view class="login-list">
      <!-- <h2 class="login_title">上海高校文化印记在线社区</h2> -->
      <img class="img" :src="header">
      <view class="userinfo">
        <view class="userinfo-name">
          <input maxlength="11" type="text" placeholder="请输入姓名" @input="bindInput">
        </view>
        <!-- <view class="userinfo-name">
          <input maxlength="11" type="number" placeholder="请输入学籍号码" @input="bindInput">
        </view> -->
        <view class="userinfo-school">
          <picker @change="bindPickerChange" :value="index" :range="array">
            <view class="picker">
              <view class="fb-type">
                <view class="type-label">{{array[index]}}</view>
              </view>
            </view>
          </picker>
        </view>
        <view class="userinfo-confirm">
          <button
            @click="goInHsyj"
          >进入小程序</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import headerImg from '../../../../static/images/login_bg.png'
export default {
  data () {
    return {
      timeCounter: null,
      showtime: null,
      spinning: true,
      showSpin: false,
      userInfo2: {
        disabled: true
      },
      header: headerImg,
      // header: 'https://rainbow.ebaotech.com/static/rainbow/image/login_header.jpg',
      userInfo: {},
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      array: ['上海复旦大学', '上海大学', '同济大学'],
      index: 0
    };
  },
  methods: {
    goInHsyj () {
      wx.switchTab({
        url: '/pages/map/main'
      });
    }
  }
};
</script>

<style>
page {
  background: #f4f4f4;
  min-height: 100%;
}
.login_title{
  padding:20%;
}
.container {
  background: #f4f4f4;
  min-height: 100%;
}

.login-list {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #fff;
  border-top: 1px solid #e1e1e1;
}

.userinfo-name,
.userinfo-school {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  border: solid 1px #d6d6d6;
  border-radius: 4px;
}
.userinfo-name > input,
.userinfo-school > input{
  line-height:48px;
  height:48px;
  font-size:14px;
  justify-content:space-between;
  width:70%;
  padding-left:36px;
}
.picker{
  line-height:48px;
  height:48px;
  font-size:14px;
  justify-content:space-between;
  width:70%;
  padding-left:36px;
  background: url('../../../../static/images/login_school.png');
  background-repeat: no-repeat;
  background-size: 18%;
  background-position: 10px;
}
.fb-type .type-label{
  height: 36rpx;
  flex: 1;
  color: #888;
  font-size: 28rpx;
}
.userinfo-name > input
{
      background: url('../../../../static/images/login_name.png');
      background-repeat: no-repeat;
      background-size: 8%;
      background-position: 10px;
}
.userinfo-school > input
{
      background: url('../../../../static/images/login_school.png');
      background-repeat: no-repeat;
      background-size: 8%;
      background-position: 10px;
}
.userinfo-name button,
.userinfo-school button{
  border:none;
  color:#278cec;
  height:24px;
  margin:12px 0 0 0;
  align-items:center;
  padding:4px 0;
  border-left:solid 1px #d6d6d6;
  line-height:24px;
  padding:0;
  width:30%;
  font-size:14px;
  text-align:right;
  padding:0 12px;
  border-radius:0;
  flex-shrink:0;
}
.captcha-button{font-size:14px;line-height:48px;padding-right:10px;width:50%;text-align: right}
.spin{
  margin-top:15px;
  padding-right:10px
}
.userinfo-name button{border:none;}
.login-list > image{
width:100%;
}

.userinfo-confirm{
  width:100%;
}

.userinfo-confirm button{
  border:none;
  margin:20px;
  color:white;
  height:48px;
  line-height:48px;
  /* background: #26ab28; */
  background: -webkit-linear-gradient(left, rgb(241, 92, 92) , rgb(255, 38, 0)); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, rgb(241, 92, 92) , rgb(255, 38, 0)); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right,  rgb(241, 92, 92) , rgb(255, 38, 0)); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, rgb(241, 92, 92) , rgb(255, 38, 0)); /* 标准的语法 */
}
.userinfo-school button{
  color: #ff9a14;
}

</style>
