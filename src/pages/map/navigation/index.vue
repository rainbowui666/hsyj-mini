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
      ],
      mylatitude: null,
      mylongitude: null
    };
  },
  onLoad: function () {
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        this.mylatitude = res.latitude;
        this.mylongitude = res.longitude;
      }
    });
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
      let resDistance = this.getDistance(this.mylatitude, this.mylongitude, item.latitude, item.longitude)
      searchItem.iconText = resDistance.toFixed(2) + 'km';
      searchAimList.push(searchItem)
    });
    this.activityList = searchAimList;
  },
  methods: {
    iconClick (item) {
      if (item.msgtype === 'school') {
        wx.navigateTo({ url: '/pages/map/schools/main?schoolId=' + item.id });
      } else if (item.msgtype === 'scenery') {
        wx.navigateTo({url: '/pages/map/sight/main?id=' + item.id + '&name=' + item.activityName})
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
          let resDistance = this.getDistance(this.mylatitude, this.mylongitude, item.latitude, item.longitude)
          searchItem.iconText = resDistance.toFixed(2) + 'km';
          searchAimList.push(searchItem)
        });
        this.activityList = searchAimList;
      }
      // }
    },
    getDistance: function (lat1, lng1, lat2, lng2) {
      let La1 = lat1 * Math.PI / 180.0;

      let La2 = lat2 * Math.PI / 180.0;

      let La3 = La1 - La2;

      let Lb3 = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;

      let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));

      let d = s * 6378.137;// 地球半径
      return Math.round(d * 10000) / 10000;
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
        'https://gzhgl.sufe.edu.cn/api/search/searchList?pageindex=' + this.pageindex + '&pagesize=' + this.pagesize,
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
          let resDistance = this.getDistance(this.mylatitude, this.mylongitude, item.latitude, item.longitude)
          searchItem.iconText = resDistance.toFixed(2) + 'km';
          searchAimList.push(searchItem)
        });
        for (let i = 0; i < searchAimList.length; i++) {
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
