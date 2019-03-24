<template>
  <div class="container">
    <wux-animation-group
      style="width:100%"
      :class-names="type"
      :in="show"
      :duration="duration"
      @exited="exited"
    >
      <view :class="bg">
        <view v-if="currentStep==1">
          <text class="title">关心的保险（1/6）</text>
          <view class="step">
            <wux-row>
              <wux-col span="5">
                <view class="btn check" v-if="step1.health" @click="setp1Click('health')">健康</view>
                <view class="btn uncheck" v-else @click="setp1Click('health')">健康</view>
              </wux-col>
              <wux-col span="7">
                <view class="btn check" v-if="step1.medical" @click="setp1Click('medical')">医疗</view>
                <view class="btn uncheck" v-else @click="setp1Click('medical')">医疗</view>
              </wux-col>
            </wux-row>
            <view style="height:30px"/>
            <wux-row>
              <wux-col span="5">
                <view class="btn check" v-if="step1.property" @click="setp1Click('property')">财产</view>
                <view class="btn uncheck" v-else @click="setp1Click('property')">财产</view>
              </wux-col>
              <wux-col span="7">
                <view class="btn check" v-if="step1.auto" @click="setp1Click('auto')">车险</view>
                <view class="btn uncheck" v-else @click="setp1Click('auto')">车险</view>
              </wux-col>
            </wux-row>
            <view style="height:30px"/>
            <wux-row>
              <wux-col span="5">
                <view class="btn check" v-if="step1.accident" @click="setp1Click('accident')">意外</view>
                <view class="btn uncheck" v-else @click="setp1Click('accident')">意外</view>
              </wux-col>
              <wux-col span="7">
                <view class="btn check" v-if="step1.pension" @click="setp1Click('pension')">养老</view>
                <view class="btn uncheck" v-else @click="setp1Click('pension')">养老</view>
              </wux-col>
            </wux-row>
            <view style="height:30px"/>
            <wux-row>
              <wux-col span="5">
                <view class="btn check" v-if="step1.education" @click="setp1Click('education')">教育</view>
                <view class="btn uncheck" v-else @click="setp1Click('education')">教育</view>
              </wux-col>
              <wux-col span="7">
                <view class="btn check" v-if="step1.juvenile" @click="setp1Click('juvenile')">少儿</view>
                <view class="btn uncheck" v-else @click="setp1Click('juvenile')">少儿</view>
              </wux-col>
            </wux-row>
            <view style="height:40px"/>
            <wux-row>
              <wux-col span="2"></wux-col>
              <wux-col span="4">
                <wux-button block outline type="assertive" size="small" @click="next">确定</wux-button>
              </wux-col>
              <wux-col span="6"></wux-col>
            </wux-row>
          </view>
        </view>
        <view v-if="currentStep==2">
          <text class="title">本人和配偶（2/6）</text>
          <view class="step">
            <wux-row>
              <wux-col span="5">
                <text class="label">本人年龄</text>
              </wux-col>
              <wux-col span="7">
                <wux-input-number default-value="18" min="1" max="100" color="energized"/>
              </wux-col>
            </wux-row>
            <view style="height:25px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">本人性别</text>
              </wux-col>
              <wux-col span="4">
                <wux-segmented-control theme="energized" :values="['男', '女']"/>
              </wux-col>
              <wux-col span="3"></wux-col>
            </wux-row>
            <view style="height:10px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">有无社保</text>
              </wux-col>
              <wux-col span="4">
                <wux-segmented-control theme="energized" :values="['无', '有']"/>
              </wux-col>
              <wux-col span="3"></wux-col>
            </wux-row>
            <view style="height:10px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">有无配偶</text>
              </wux-col>
              <wux-col span="4">
                <wux-segmented-control theme="energized" :values="['无', '有']"/>
              </wux-col>
              <wux-col span="3"></wux-col>
            </wux-row>
            <view style="height:10px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">配偶年龄</text>
              </wux-col>
              <wux-col span="7">
                <wux-input-number default-value="18" min="1" max="100" color="energized"/>
              </wux-col>
            </wux-row>
            <view style="height:20px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">配偶社保</text>
              </wux-col>
              <wux-col span="4">
                <wux-segmented-control theme="energized" :values="['无', '有']"/>
              </wux-col>
              <wux-col span="3"></wux-col>
            </wux-row>
             <view style="height:10px"/>
            <wux-row>
              <wux-col span="2"></wux-col>
              <wux-col span="4">
                <wux-button block outline type="energized" size="small" @click="next">确定</wux-button>
              </wux-col>
              <wux-col span="6"></wux-col>
            </wux-row>
          </view>
        </view>
        <view v-if="currentStep==3">
          <text class="title">其他家庭成员（3/6）</text>
          <view class="step">
            <wux-row>
              <wux-col span="5">
                <text class="label">赡养老人数量</text>
              </wux-col>
              <wux-col span="7">
                <wux-input-number default-value="4" min="1" max="10" color="energized"/>
              </wux-col>
            </wux-row>
            <view style="height:20px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">有社保老人数量</text>
              </wux-col>
              <wux-col span="7">
                <wux-input-number default-value="4" min="1" max="10" color="energized"/>
              </wux-col>
            </wux-row>
            <view style="height:20px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">子女数量</text>
              </wux-col>
              <wux-col span="7">
                <wux-input-number default-value="2" min="1" max="6" color="energized"/>
              </wux-col>
            </wux-row>
            <view style="height:20px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">未成年数量</text>
              </wux-col>
              <wux-col span="7">
                <wux-input-number default-value="2" min="1" max="6" color="energized"/>
              </wux-col>
            </wux-row>
            <view style="height:20px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">猫狗宠物数量</text>
              </wux-col>
              <wux-col span="7">
                <wux-input-number default-value="1" min="1" max="6" color="energized"/>
              </wux-col>
            </wux-row>
             <view style="height:80px"/>
            <wux-row>
              <wux-col span="2"></wux-col>
              <wux-col span="4">
                <wux-button block outline type="energized" size="small" @click="next">确定</wux-button>
              </wux-col>
              <wux-col span="6"></wux-col>
            </wux-row>
          </view>
        </view>
        <view v-if="currentStep==4">
          <text class="title">财产状况（4/6）</text>
          <view class="step">
            <wux-row>
              <wux-col span="4">
                <text class="label">家庭资产(万元)</text>
              </wux-col>
              <wux-col span="8"></wux-col>
            </wux-row>
            <view style="height:20px"/>
            <wux-row>
              <wux-col span="8">
                <wux-slider :defaultValue="[10]" showValue step="10" min="0" max="100"/>
              </wux-col>
            </wux-row>
            <view style="height:20px"/>
            <wux-row>
              <wux-col span="4">
                <text class="label">家庭年收入(万元)</text>
              </wux-col>
              <wux-col span="8"></wux-col>
            </wux-row>
            <view style="height:20px"/>
            <wux-row>
              <wux-col span="8">
                <wux-slider :defaultValue="[10]" showValue step="10" min="0" max="100"/>
              </wux-col>
            </wux-row>
            <view style="height:20px"/>
            <wux-row>
              <wux-col span="4">
                <text class="label">家庭贷款(万元)</text>
              </wux-col>
              <wux-col span="8"></wux-col>
            </wux-row>
            <view style="height:20px"/>
            <wux-row>
              <wux-col span="8">
                <wux-slider :defaultValue="[10]" showValue step="10" min="0" max="100"/>
              </wux-col>
            </wux-row>
             <view style="height:20px"/>
            <wux-row>
              <wux-col span="2"></wux-col>
              <wux-col span="4">
                <wux-button block outline type="balanced" size="small" @click="next">确定</wux-button>
              </wux-col>
              <wux-col span="6"></wux-col>
            </wux-row>
          </view>
        </view>
        <view v-if="currentStep==5">
          <text class="title">健康状况（5/6）</text>
          <view class="step">
            <wux-row>
              <wux-col span="5">
                <text class="label">是否吸烟</text>
              </wux-col>
              <wux-col span="4">
                <wux-segmented-control theme="calm" :values="['否', '是']"/>
              </wux-col>
              <wux-col span="3"></wux-col>
            </wux-row>
            <view style="height:10px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">是否酗酒</text>
              </wux-col>
              <wux-col span="4">
                <wux-segmented-control theme="calm" :values="['否', '是']"/>
              </wux-col>
              <wux-col span="3"></wux-col>
            </wux-row>
            <view style="height:10px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">是否做过手术</text>
              </wux-col>
              <wux-col span="4">
                <wux-segmented-control theme="calm" :values="['否', '是']"/>
              </wux-col>
              <wux-col span="3"></wux-col>
            </wux-row>
            <view style="height:10px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">是否有遗传病</text>
              </wux-col>
              <wux-col span="4">
                <wux-segmented-control theme="calm" :values="['否', '是']"/>
              </wux-col>
              <wux-col span="3"></wux-col>
            </wux-row>
              <view style="height:90px"/>
            <wux-row>
              <wux-col span="2"></wux-col>
              <wux-col span="4">
                <wux-button block outline type="calm" size="small" @click="next">确定</wux-button>
              </wux-col>
              <wux-col span="6"></wux-col>
            </wux-row>
          </view>
        </view>
        <view v-if="currentStep==6">
          <text class="title">其他状况（6/6）</text>
          <view class="step">
            <wux-row>
              <wux-col span="5">
                <text class="label">参加商业医疗保险</text>
              </wux-col>
              <wux-col span="4">
                <wux-segmented-control theme="royal" :values="['否', '是']"/>
              </wux-col>
              <wux-col span="3"></wux-col>
            </wux-row>
            <view style="height:10px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">参加意外保险</text>
              </wux-col>
              <wux-col span="4">
                <wux-segmented-control theme="royal" :values="['否', '是']"/>
              </wux-col>
              <wux-col span="3"></wux-col>
            </wux-row>
            <view style="height:10px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">参加家庭财产保险</text>
              </wux-col>
              <wux-col span="4">
                <wux-segmented-control theme="royal" :values="['否', '是']"/>
              </wux-col>
              <wux-col span="3"></wux-col>
            </wux-row>
            <view style="height:10px"/>
            <wux-row>
              <wux-col span="5">
                <text class="label">参加汽车保险</text>
              </wux-col>
              <wux-col span="4">
                <wux-segmented-control theme="royal" :values="['否', '是']"/>
              </wux-col>
              <wux-col span="3"></wux-col>
            </wux-row>
               <view style="height:90px"/>
            <wux-row>
              <wux-col span="2"></wux-col>
              <wux-col span="4">
                <wux-button block outline type="royal" size="small" @click="end">确定</wux-button>
              </wux-col>
              <wux-col span="6"></wux-col>
            </wux-row>
          </view>
        </view>
      </view>
    </wux-animation-group>
  </div>
</template> 

<script>
export default {
  data () {
    return {
      bg: 'bg bg1',
      index: 1,
      show: true,
      type: 'wux-animate--slideInRight',
      duration: 200,
      enter: false,
      currentStep: 1,
      step1: {
        health: false,
        medical: false,
        property: false,
        auto: false,
        accident: false,
        pension: false,
        education: false,
        juvenile: false
      }
    };
  },
  onShow () {
    this.currentStep = 1;
  },
  methods: {
    setp1Click (option) {
      this.step1[option] = !this.step1[option];
    },
    exited () {
      this.type = 'wux-animate--slideInUp';
      if (this.index === 6) {
        this.index = 0;
      }
      this.index += 1;
      this.bg = 'bg bg' + this.index;
      if (this.currentStep === 6) {
        this.currentStep = 0;
      }
      this.currentStep += 1;
      this.show = true;
    },
    next (e) {
      this.type = 'wux-animate--slideInDown';
      this.show = false;
    },
    end () {
      wx.setStorageSync('__result_url', {url: 'https://rainbow.ebaotech.com/ssr/other/risk_result/template1 '});
      wx.navigateTo({
        url: '/pages/webview/main?result=__result_url'
      })
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ask {
  width: 100%;
}

.bg {
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 510px;
}
.bg .title {
  position: relative;
  top: 60px;
  font-size: 16px;
  left: 7%;
  color: #ffffff;
}

.bg .label {
  font-size: 14px;
}
.bg .step {
  position: relative;
  top: 105px;
  left: 15%;
}
.bg .btn {
  width: 100px;
  background-color: #f4f4f4;
  font-size: 14px;
  text-align: center;
  padding-top: 8px;
  height: 30px;
  border-radius: 0.5em;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
.bg .uncheck {
  color: #888;
}
.bg .check {
  color: #ff5c5c;
}
.bg1 {
  background-image: url("https://rainbow.ebaotech.com/static/rainbow/image/q1.png");
}
.bg2 {
  background-image: url("https://rainbow.ebaotech.com/static/rainbow/image/q2.png");
}
.bg3 {
  background-image: url("https://rainbow.ebaotech.com/static/rainbow/image/q3.png");
}
.bg4 {
  background-image: url("https://rainbow.ebaotech.com/static/rainbow/image/q4.png");
}
.bg5 {
  background-image: url("https://rainbow.ebaotech.com/static/rainbow/image/q5.png");
}
.bg6 {
  background-image: url("https://rainbow.ebaotech.com/static/rainbow/image/q6.png");
}
</style>
