<template >
  <view class='container'>
    <swiper class='swiper' :indicator-dots='true' :autoplay='true' interval='3000' duration='800'>
      <block v-for='(item, index) in movies' :key='index'>
        <swiper-item>
          <image :src='item.url' class='slide-image'/>
        </swiper-item>
      </block>
    </swiper>
    <view class='sight-introduction-bar'>
      <view class='sight-introduction-bar-inner'>
        <view class='sight-introduction-bar-label'>
          <text>{{ information.desc }}</text>
        </view>
        <view class='sight-introduction-bar-icon' @click="toDestination">
          <wux-icon wux-class='navigation' type='ios-send' size='34' color='white'/>
        </view>
      </view>
    </view>
    <!-- <view :class='ellipsis?'sight-introduction-group-show':'sight-introduction-group-hide''>
      <view class='sight-introduction-group-item'>
        <wux-row gutter='12' v-for='(row,index) in newArr' :key='index'>
          <wux-col span='6' v-for='(item,oindex) in row' :key='oindex'>
            <icon-group :list='iconArr'/>
            <text
              class='sight-introduction ellipsis'
             >{{ item.desc }}</text>
          </wux-col>
        </wux-row>
      </view>
    </view>-->
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
      information: {
        name: '黄自半身铜像',
        desc: '黄自半身铜像'
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
        {
          icon: 'ios-checkmark-circle-outline',
          size: '24',
          color: 'green',
          number: 11
        },
        {
          icon: 'ios-heart',
          size: '24',
          color: 'red',
          number: 11
        },
        {
          icon: 'ios-chatboxes',
          size: '24',
          color: 'green',
          number: 11
        },
        {
          icon: 'ios-share-alt',
          size: '24',
          color: 'blue',
          number: 11
        }
      ]
    };
  },
  onShow () {
    wx.setNavigationBarTitle({ title: this.information.name });
  },
  methods: {}
};
</script>

<style>
.swiper {
  width: 100%;
  height: 230px;
}
.slide-image {
  width: 100%;
}
.sight-introduction-bar {
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
.sight-introduction-bar-inner{
  width: 95%;
  display: flex;
  justify-content: space-between;
}
.sight-introduction-bar-label {
  color: #fff;
}
.sight-introduction-bar-label text{
  font-size: 22px
}
.sight-introduction-bar-icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: blue;
  margin-top: auto;
  margin-bottom: auto;
}
.sight-introduction-bar-icon .navigation {
  display: flex;
  justify-content: center;
}
</style>
