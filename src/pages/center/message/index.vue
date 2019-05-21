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
            <span class="message-scroll-view-inner-btn" @click="gotoMessage(item)">写留言</span>
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
import dayjs from 'dayjs';

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
    gotoMessage (item) {
      console.log('item', item)
      wx.navigateTo({ url: '/pages/map/sight/main' })
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
        element.createdate = dayjs(element.createdate).format('YYYY-MM-DD')
      })
      this.messageList = this.discussList;
      console.log('userInfo', this.userInfo)
      console.log('discussList', this.discussList)
    }
  },
  onReachBottom: function () {
    // 显示顶部刷新图标
    console.log('11111');
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中'
    });

    // 页数+1
    let that = this;
    console.log('==============', that.pageindex);

    this.pageindex = this.pageindex + 1;
    wx.request({
      url:
        'https://hsyj.100eduonline.com/api/api/discuss/list?pageindex=' + this.pageindex + '&pagesize=' + this.pagesize + '&studentid=' + this.userInfo.studentID,
      method: 'GET',
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      success: res => {
        console.log('搜索结果', res.data.data.data);

        // 回调函数
        console.log('==============', this.messageList);

        let resList = res.data.data.data ? res.data.data.data : [];
        resList.forEach(element => {
          element.src = this.userInfo.photo
          element.createdate = dayjs(element.createdate).format('YYYY-MM-DD')
        })
        for (var i = 0; i < resList.length; i++) {
          this.messageList.push(resList[i]);
        }
        console.log('==============', this.messageList);
        // 设置数据
        // that.setData({
        //   moment: that.data.moment
        // })
        // 隐藏加载框
        wx.hideLoading();
      }
    });
  }
};
</script>

<style>
.message-page{
  background-color: #ccc;
  /* margin:10px;
  height:100%; */
}
.message-page ._scroll-view{
  position:absolute;
  width:110%;
  top: 0
}
.message-scroll{
  margin:0 5%;
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
