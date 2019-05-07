<template >
  <view class="message-page">
      <scroll-view scroll-x="true" class="message-scroll">
        <view class="message-scroll-view">
          <view
            v-for="(item, index) in imgList"
            :key="index"
            class="message-scroll-view-inner">
            <image
              :src="item.url"
              class="message-scroll-view-inner-image"/>
            <span class="message-scroll-view-inner-title">{{item.site}}</span>
            <span class="message-scroll-view-inner-btn">写留言</span>
          </view>
        </view>
      </scroll-view>
      <mymessage-card :data="messageList"/>
  </view>
</template>

<script>
import navigationCard from '../../../components/navigation-card';
import mymessageCard from '../../../components/mymessage-card';
export default {
  components: {
    navigationCard,
    mymessageCard
  },
  data () {
    return {
      current: 'message_tab1',
      valueData: '累计留言：50条  审核通过：40条  未审核：5条',
      imgList: [
        {
          url: '../../static/images/fudan1.jpeg',
          site: '交通大学：石狮子景区'
        },
        {
          url: '../../static/images/fudan2.jpeg',
          site: '交通大学：石狮子'
        },
        {
          url: '../../static/images/fudan1.jpeg',
          site: '交通大学：石狮子'
        },
        {
          url: '../../static/images/fudan2.jpeg',
          site: '交通大学：石狮子'
        }
      ],
      messageList: [
        {
          src: '../../static/images/fudan.jpg',
          userName: '大实践家',
          messageTime: '2019年4月11日',
          messageInfo: '这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦',
          iconType: 'ios-arrow-forward',
          peopleNum: '266人参加'
        },
        {
          src: '../../static/images/fudan.jpg',
          userName: '大实践家',
          messageTime: '2019年4月11日',
          messageInfo: '这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦',
          iconType: 'ios-arrow-forward',
          peopleNum: '266人参加'
        },
        {
          src: '../../static/images/fudan.jpg',
          userName: '大实践家',
          messageTime: '2019年4月11日',
          messageInfo: '这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦',
          iconType: 'ios-arrow-forward',
          peopleNum: '266人参加'
        },
        {
          src: '../../static/images/fudan.jpg',
          userName: '大实践家',
          messageTime: '2019年4月11日',
          messageInfo: '这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦',
          iconType: 'ios-arrow-forward',
          peopleNum: '266人参加'
        }
      ]
    };
  },
  methods: {
    iconClick (item) {
      console.log('item', item)
      wx.navigateTo({ url: 'activityDetail/main?name=' + item.userName })
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
  background-color: #ccc;
}
.message-scroll{
  /* display: flex;
  flex-direction: row;
  height: 100%; */
}
.message-scroll-view{
  border-radius: 10px;
  height: 76%;
  display: flex;
  flex-direction: row;
}

.message-scroll-view-inner{
  /* width: 200px; */
  padding: 5px;
  margin-left: 5px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.message-scroll-view-inner-image{
  height: 30px;
  width: 45px;
  border-radius: 15%;
}
.message-scroll-view-inner-title{
  font-size: 10px;
  width: 90px;
  align-items: center;
  display:flex;
  margin-left: 5px;
}
.message-scroll-view-inner-btn{
  font-size: 12px;
  color: #ce3737;
  border: 1px solid #ce3737;
  height:20px;
  margin-left: 5px;
}
</style>
