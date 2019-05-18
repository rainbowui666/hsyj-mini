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
import api from '@/utils/api';

export default {
  components: {
    navigationCard,
    mymessageCard
  },
  data () {
    return {
      current: 'message_tab1',
      valueData: '累计留言：50条  审核通过：40条  未审核：5条',
      userInfo: {},
      discussList: [],
      pageindex: 1,
      pagesize: 5,
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
          studentName: '大实践家',
          createdate: '2019年4月11日',
          content: '这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦',
          iconType: 'ios-arrow-forward',
          peopleNum: '266人参加'
        },
        {
          src: '../../static/images/fudan.jpg',
          studentName: '大实践家',
          createdate: '2019年4月11日',
          content: '这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦',
          iconType: 'ios-arrow-forward',
          peopleNum: '266人参加'
        },
        {
          src: '../../static/images/fudan.jpg',
          studentName: '大实践家',
          createdate: '2019年4月11日',
          content: '这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦',
          iconType: 'ios-arrow-forward',
          peopleNum: '266人参加'
        },
        {
          src: '../../static/images/fudan.jpg',
          studentName: '大实践家',
          createdate: '2019年4月11日',
          content: '这个地方超好玩，啦啦啦啦啦啦啦啦啦啦啦啦',
          iconType: 'ios-arrow-forward',
          peopleNum: '266人参加'
        }
      ]
    };
  },
  async mounted () {
    this.getMyDiscussList();
  },
  methods: {
    iconClick (item) {
      console.log('item', item)
      wx.navigateTo({ url: 'activityDetail/main?name=' + item.studentName })
    },
    onChange (e) {
      console.log('onChange', e)
      this.current = e.target.key;
    },
    async getMyDiscussList () {
      this.userInfo = wx.getStorageSync('userInfo') || {};
      const res = await api.getMyDiscussList({
        pageindex: this.pageindex,
        pagesize: this.pagesize,
        studentid: this.userInfo.studentID
      });
      this.discussList = res.data.data ? res.data.data : [];
      this.discussList.forEach(element => {
        element.src = this.userInfo.photo
      })
      this.messageList = this.discussList;
      console.log('userInfo', this.userInfo)
      console.log('discussList', this.discussList)
    }
  }
};
</script>

<style>
.message-page{
  background-color: #ccc;
}
.message-page ._scroll-view{
  position:absolute;
  width:110%;
  top: 0
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
  padding:10rpx;
  background-color:#fff;
  border-radius:10rpx;
  display:flex;
  align-items:center;
  margin-right:10rpx;
}

.message-scroll-view-inner-image{
  height:60rpx;
  width:120rpx;
  border-radius:15%;
}
.message-scroll-view-inner-title{
  font-size: 10px;
  /* width: 90px; */
  align-items: center;
  display:flex;
  margin-left: 5px;
  line-height:28rpx;
  white-space:nowrap;
}
.message-scroll-view-inner-btn{
  font-size: 12px;
  color: #d25136;
  border: 1px solid #d25136;
  height:20px;
  margin-left: 5px;
  line-height:20px;
  text-align: center;
  white-space:nowrap;
  padding:2px 8px;
  border-radius:12rpx;
}
.message-page .my-message-card{
  position: relative;
  top:90rpx
}
</style>
