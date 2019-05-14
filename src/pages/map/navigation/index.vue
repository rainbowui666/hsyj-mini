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
    const resSearchList = await api.getSearchList({
      pageindex: this.pageindex,
      pagesize: this.pagesize
    });
    // console.log('resSearchList', resSearchList)
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
        longitude: item.longitude
      }
      searchAimList.push(searchItem)
    });
    this.activityList = searchAimList;
    console.log('activityList', this.activityList)
  },
  methods: {
    iconClick (item) {
      console.log('item', item)
      wx.navigateTo({ url: '/pages/activity/activityDetail/main?name=' + '复旦一日游' })
      // wx.navigateTo({ url: 'activityDetail/main?name=' + item.activityName })
    },
    async searchConfirm (e) {
      console.log('searchConfirm', e)
      debugger
      this.searchValue = e.target.value;
      if (this.searchValue) {
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
              longitude: item.longitude
            }
            searchAimList.push(searchItem)
          });
          this.activityList = searchAimList;
        }
      }
    }
  }
};
</script>

<style>
.navigation-page{
  background-color: #f4f4f4;
}
</style>
