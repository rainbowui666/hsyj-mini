<template >
  <view class="message-page">
      <wux-tabs theme="assertive" controlled :current="current" @change="onChange">
        <wux-tab key="message_tab1">
            <wux-badge count="3">累计留言</wux-badge>
        </wux-tab>
        <wux-tab key="message_tab2">
            <wux-badge count="1024">审核通过</wux-badge>
        </wux-tab>
        <wux-tab key="message_tab3">
            <wux-badge count="4">未审核</wux-badge>
        </wux-tab>
      </wux-tabs>
    <!-- <head-message :valueData="valueData"> </head-message> -->
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
      current: 'message_tab1',
      valueData: '累计留言：50条  审核通过：40条  未审核：5条',
      activityList: [
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          tagText: '待审核'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          tagText: '通过'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          tagText: '通过'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          tagText: '通过'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          tagText: '通过'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          tagText: '未通过'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          tagText: '通过'
        },
        {
          src: '../../../static/images/fudan.jpg',
          activityName: '复旦一日游',
          tagText: '通过'
        }

      ]
    };
  },
  methods: {
    iconClick (item) {
      console.log('item', item)
      wx.navigateTo({ url: 'activityDetail/main?name=' + item.activityName })
    },
    onChange (e) {
      console.log('onChange', e)
      this.current = e.target.key;
    }
  }
};
</script>

<style>
.message-page{
  background-color: #f4f4f4;
}
/* .message-page .navigation-card-content-title {
  padding-top: 25px;
  padding-left: 5px;
} */
/* .message-page .navigation-card-icon-text {
  width: 60px;
  background-color:rgba(180, 178, 178, 0.6);
  height:50px;
  line-height:50px;
} */
</style>
