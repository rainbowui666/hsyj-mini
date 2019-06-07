<template >
  <view class="search-page">
    <wux-search-bar @confirm="searchConfirm"/>
    <search-card :data="activityList" :iconClick="iconClick"/>
  </view>
</template>

<script>
import searchCard from '../../../components/search-card';
import api from '@/utils/api';
export default {
  components: {
    searchCard
  },
  data () {
    return {
      pageindex: 1,
      pagesize: 7,
      searchValue: '',
      activityList: [
        {
          gpsImg: '../../../static/images/gpsImg.png',
          navigationImg: '../../../static/images/navigationImg.png',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '3.9km',
          isIcon: true,
          address: '上海市-黄浦区-中山东路666号-88栋'
        },
        {
          gpsImg: '../../../static/images/gpsImg.png',
          navigationImg: '../../../static/images/navigationImg.png',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '3.9km',
          isIcon: true,
          address: '上海市-黄浦区-中山东路'
        },
        {
          gpsImg: '../../../static/images/gpsImg.png',
          navigationImg: '../../../static/images/navigationImg.png',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '3.9km',
          isIcon: true,
          address: '上海市-黄浦区-中山东路'
        },
        {
          gpsImg: '../../../static/images/gpsImg.png',
          navigationImg: '../../../static/images/navigationImg.png',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '3.9km',
          isIcon: true,
          address: '上海市-黄浦区-中山东路'
        },
        {
          gpsImg: '../../../static/images/gpsImg.png',
          navigationImg: '../../../static/images/navigationImg.png',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '3.9km',
          isIcon: true,
          address: '上海市-黄浦区-中山东路'
        },
        {
          gpsImg: '../../../static/images/gpsImg.png',
          navigationImg: '../../../static/images/navigationImg.png',
          activityName: '复旦一日游',
          iconType: 'ios-navigate',
          iconColor: '#007fff',
          iconText: '3.9km',
          isIcon: true,
          address: '上海市-黄浦区-中山东路'
        }
      ]
    };
  },
  async mounted () {
    this.pageindex = 1;
    const resSearchList = await api.getSearchList({
      pageindex: this.pageindex,
      pagesize: this.pagesize
    });
    let searchAimList = [];
    let searchList = resSearchList.data.data;
    searchList.forEach(item => {
      let searchItem = {
        gpsImg: '../../../static/images/gpsImg.png',
        navigationImg: '../../../static/images/navigationImg.png',
        activityName: item.title,
        iconType: 'ios-navigate',
        iconColor: '#007fff',
        iconText: '3.9km',
        isIcon: true,
        address: item.address,
        latitude: item.latitude,
        longitude: item.longitude,
        msgtype: item.msgtype,
        id: item.id
      }
      searchAimList.push(searchItem)
    });
    this.activityList = searchAimList;
  },
  methods: {
    iconClick (item) {
      if (item.msgtype === 'school') {
        wx.navigateTo({ url: '/pages/map/schools/main?schoolId=' + item.id });
      } else if (item.msgtype === 'scenery') {
        wx.navigateTo({url: '/pages/map/sight/main?activitySight=true&id=' + item.id})
      }
      // {wx.navigateTo({ url: '/pages/activity/activityDetail/main?name=' + '复旦一日游' })}
      // wx.navigateTo({ url: 'activityDetail/main?name=' + item.activityName })
    },
    async searchConfirm (e) {
      this.searchValue = e.target.value;
      // if (this.searchValue) {
      const resSearchList = await api.getSearchListBykeyWord({
        pageindex: this.pageindex,
        pagesize: this.pagesize,
        keyword: this.searchValue
      });
      if (resSearchList && resSearchList.data && resSearchList.data.data) {
        let searchAimList = [];
        let searchList = resSearchList.data.data;
        searchList.forEach(item => {
          let searchItem = {
            gpsImg: '../../../static/images/gpsImg.png',
            navigationImg: '../../../static/images/navigationImg.png',
            activityName: item.title,
            iconType: 'ios-navigate',
            iconColor: '#007fff',
            iconText: '3.9km',
            isIcon: true,
            address: item.address,
            latitude: item.latitude,
            longitude: item.longitude,
            msgtype: item.msgtype,
            id: item.id
          }
          searchAimList.push(searchItem)
        });
        this.activityList = searchAimList;
      }
      // }
    }
  },
  onReachBottom: function () {
    // 显示顶部刷新图标
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中'
    });

    // 页数+1

    this.pageindex = this.pageindex + 1;
    wx.request({
      url:
        'https://hsyj.100eduonline.com/api/api/search/searchList?pageindex=' + this.pageindex + '&pagesize=' + this.pagesize,
      method: 'GET',
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      success: res => {
        // 回调函数
        let searchList = res.data.data.data ? res.data.data.data : [];
        let searchAimList = [];
        searchList.forEach(item => {
          let searchItem = {
            gpsImg: '../../../static/images/gpsImg.png',
            navigationImg: '../../../static/images/navigationImg.png',
            activityName: item.title,
            iconType: 'ios-navigate',
            iconColor: '#007fff',
            iconText: '3.9km',
            isIcon: true,
            address: item.address,
            latitude: item.latitude,
            longitude: item.longitude,
            msgtype: item.msgtype,
            id: item.id
          }
          searchAimList.push(searchItem)
        });
        for (var i = 0; i < searchAimList.length; i++) {
          this.activityList.push(searchAimList[i]);
        }
        // 设置数据
        // 隐藏加载框
        wx.hideLoading();
      }
    });
  }
};
</script>

<style>
page{
  background-color: #eee;
}
.navigation-page{
  background-color: #f4f4f4;
}
.search-page .wux-search-bar {
  background-color: #fff;
}
</style>
