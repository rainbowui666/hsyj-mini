<template >
  <view class="login">
    <view class="login-list">
      <view class="login-bg">
      <h2 class="login_title">仅对在校大学生开放</h2>
        <view class="userinfo-name">
          <picker @change="bindPickerChange" :value="pickIndex" range-key="schoolName" :range="schoolList">
            <view class="picker">
              <view class="fb-type">
                <view class="type-label">{{schoolList[pickIndex].schoolName}}</view>
              </view>
            </view>
          </picker>
        </view>
        <view class="userinfo-name">
          <input maxlength="11" type="number" placeholder="学号" :value="stuNo" @input="setStudentId">
        </view>
        <view class="userinfo-name">
          <input maxlength="11" type="text" placeholder="姓名" :value="studentName"  @input="setStudentName">
        </view>
        <view class="userinfo-name">
          <input maxlength="11" type="number" placeholder="手机" :value="uesrTel" @input="setUserTel">
        </view>
        <view>
        <view class="login-btn">
          <button
            @click="goInHsyj"
          >提交</button>
        </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import api from '@/utils/api';

export default {
  data () {
    return {
      userInfo2: {
        disabled: true
      },
      // header: 'https://rainbow.ebaotech.com/static/rainbow/image/login_header.jpg',
      userInfo: {},
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      // schoolList: [],
      schoolList: [
        {
          id: 1,
          schoolName: '复旦大学'
        },
        {
          id: 2,
          schoolName: '上海大学'
        },
        {
          id: 3,
          schoolName: '同济大学'
        }
      ],
      pickIndex: 0,
      schoolName: null,
      schoolID: null,
      studentName: null,
      stuNo: null,
      uesrTel: null
    };
  },
  async mounted () {
    const schoolInfo = await api.getSchoolList();
    this.schoolList = schoolInfo.data.data;
    if (this.schoolList) {
      this.schoolName = this.schoolList[this.pickIndex].schoolName;
      this.schoolID = this.schoolList[this.pickIndex].schoolID;
    }
    console.log('schoolInfo', this.schoolList)
  },
  methods: {
    async goInHsyj () {
      let userInfo = wx.getStorageSync('userInfo') || false;
      if (userInfo) {
        // userInfo.schoolName = this.schoolName;
        userInfo.schoolid = this.schoolID;
        userInfo.studentName = this.studentName;
        userInfo.stuno = this.stuNo;
        userInfo.tel = this.uesrTel;
        const addStudentInfo = await api.studentLogin(userInfo)
        let resUser = addStudentInfo.data.data;
        wx.setStorageSync('userInfo', resUser)
        console.log('addStudentInfo', addStudentInfo)
      }
      wx.switchTab({
        url: '/pages/center/main'
      });
    },
    bindPickerChange (e) {
      console.log('value', e)
      this.pickIndex = e.target.value
      this.schoolName = this.schoolList[this.pickIndex].schoolName;
      this.schoolID = this.schoolList[this.pickIndex].schoolID;
    },
    setStudentId (e) {
      this.stuNo = e.target.value
    },
    setStudentName (e) {
      this.studentName = e.target.value
    },
    setUserTel (e) {
      this.uesrTel = e.target.value
    }
  }
};
</script>

<style>
page {
  background: #a19f9f;
  min-height: 100%;
}
.login-bg{
  padding:5%;
  background-color: #fff;
  margin: 5px 15px;
  height: calc(100vh - 76px);
  border-radius: 4px;
}
.login_title{
  padding: 3%;
  font-size: 16px;
  color: #8d8989;
}
.container {
  background: #f4f4f4;
  min-height: 100%;
}

.login-list {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #e7e2e2;
  border-top: 1px solid #e1e1e1;
}

.userinfo-name{
  display: flex;
  justify-content: space-between;
  margin: 20px;
  border: solid 1px #d6d6d6;
  border-radius: 4px;
}
.userinfo-name > input{
  line-height:48px;
  height:48px;
  font-size:14px;
  justify-content:space-between;
  width:70%;
  padding-left:26px;
}

/* .userinfo-name > input
{
      background: url('../../../../static/images/login_name.png');
      background-repeat: no-repeat;
      background-size: 8%;
      background-position: 10px;
} */

.userinfo-name button{
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

.picker{
  line-height:48px;
  height:48px;
  font-size:14px;
  justify-content:space-between;
  /* width:70%; */
  padding-left: 26px;
  /* background: url('../../../../static/images/login_school.png');
  background-repeat: no-repeat;
  background-size: 18%;
  background-position: 10px; */
}

.fb-type .type-label{
  height: 36rpx;
  flex: 1;
  color: #888;
  font-size: 28rpx;
}
.login-btn{
  margin-top: 20%;
}
.login-btn button{
  color: #fff;
  background-color: rgb(228, 88, 88);
  border-radius: 6px;
  width:90%;
  height:40px;
  font-size:16px;
}
</style>
