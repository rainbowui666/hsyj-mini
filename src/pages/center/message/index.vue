<template >
  <view class="message-page">
    <head-message :valueData="valueData"> </head-message>
    <navigation-card :data="activityList" :iconClick="iconClick"/>
  </view>
</template>

<script>
import navigationCard from '../../../components/navigation-card';
import headMessage from '../../../components/head-message';
export default {
  components: {
    navigationCard,
    headMessage
  },
  data () {
    return {
      valueData: '累计留言：50条  审核通过：40条  未审核：5条',
      activityList: [
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconText: '待审核'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconText: '通过'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconText: '通过'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconText: '通过'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconText: '通过'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconText: '未通过'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconText: '通过'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          iconText: '通过'
        }

      ]
    };
  },
  methods: {
    iconClick (item) {
      console.log('item', item)
      wx.navigateTo({ url: 'activityDetail/main?name=' + item.activityName })
    }
  }
};
</script>

<style>
.message-page .navigation-card-content-title {
  padding-top: 25px;
  padding-left: 5px;
}
.message-page .navigation-card-icon-text {
  width: 60px;
  background-color:rgba(180, 178, 178, 0.6);
  height:50px;
  line-height:50px;
}
</style>
