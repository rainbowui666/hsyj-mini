<template >
  <view class="insureview">
     <view class="insureview-bg">
       <image src="/static/images/earth.png"/>
      </view>
      <view class="insureview-field">
        <view class="insureview-field-people">
        您将和
        <picker @change="bindPickerChange($event)" :value="index" :range="peopleArray">
          <view class="picker">
         {{peopleArray[index]}}
          </view>
        </picker>
         位同伴，
        </view>
        <view class="insureview-field-date">
          于
        <picker
           mode="date"
           :value="startDate"
           @change="bindStartDateChange($event)">
          <view class="picker">
         {{startDate}}
          </view>
        </picker>
        <view class="picker">
        -
        </view>
        <picker
           mode="date"
           :value="endDate"
           @change="bindEndDateChange($event)">
          <view class="picker">
         {{endDate}}
          </view>
        </picker>
        ，
        </view>
        <view class="insureview-field-area">
          前往
        <picker @change="bindAreaChange($event)" :value="areaIndex" :range="array">
          <view class="picker">
         {{array[areaIndex]}}
          </view>
        </picker>
        。
        </view>
      </view>
      <view class="insureview-btn">
         立即投保
      </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      peopleArray: ['1', '2', '3', '4', '5'],
      array: ['美国', '中国', '巴西', '日本'],
      index: 0,
      areaIndex: 0,
      startDate: '2018-10-01',
      endDate: '2018-10-07'
    };
  },
  methods: {
    bindPickerChange (e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.index = e.mp.detail.value;
    },
    bindStartDateChange (e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.startDate = e.mp.detail.value;
    },
    bindEndDateChange (e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.endDate = e.mp.detail.value;
    },
    bindAreaChange (e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.areaIndex = e.mp.detail.value;
    }
  }
};
</script>

<style>
page {
  background: #E7F8FF;
  min-height: 100%;
}
.insureview-bg>image{
  width:100%;
  min-height:60vh;
}
.insureview-bg{
   margin-top:30px;
   background: url("https://rainbow.ebaotech.com/static/rainbow/image/building.jpg");
   background-size:100% 100%;
   min-height:60vh;
   -webkit-transform: rotate(360deg);
   animation: rotation 60s linear infinite;
   -moz-animation: rotation 60s linear infinite;
   -webkit-animation: rotation 60s linear infinite;
   -o-animation: rotation 60s linear infinite;
}
@-webkit-keyframes rotation 
{from {-webkit-transform: rotate(0deg);}to {-webkit-transform: rotate(360deg);}}
.insureview-btn{
  position:fixed;
width:84%;
background:url("https://rainbow.ebaotech.com/static/rainbow/image/btn_bg.png");
background-size:100% 100%;
line-height:100rpx;
text-align:center;
color:#fff;
height:120rpx;
bottom:24rpx;
left:5%;

}
.insureview-field{
  margin-top:35px;
  padding-bottom:60px;
}
.insureview-field-people,.insureview-field-area,.insureview-field-date{
  display:flex;
  margin-left:30px;
  font-size:18px;
  padding-top:15px;
}
.picker{
  color:#ff9a14;
  border-bottom:1px solid #ff9a14;
  padding-left:10px;
  padding-right:10px;
}
</style>
