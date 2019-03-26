<template>
  <view class='container'>
    <map
      id='myMap'
      :longitude='centerX'
      :latitude='centerY'
      :scale='scale'
      @controltap='controltap'
      :markers='markers'
      @markertap='markertap'
      @regionchange='regionchange'
      show-location
      :style='winStyle'
    ></map>
    <!-- <cover-image class='kefu' src='/static/images/kefu.png' @click='gotoService'></cover-image>
    <div v-show='showDetail' class='all-bg'>
      <cover-view class='dw-bg' @click='hidentap'></cover-view>
      <cover-image class='bg' src='/static/images/dw_bg.png'></cover-image>
      <cover-image src='/static/images/dw_call.png' @click='callSomeone' class='dw_call'></cover-image>
      <cover-image :src='service.iconPath' class='dw_head'></cover-image>
      <cover-view class='dw-text-body'>{{service.description}}</cover-view>
      <cover-view class='dw-text-name'>{{service.name}}</cover-view>
      <cover-view class='dw-text-type'>{{service.type}}</cover-view>
      <cover-view class='dw-text-location'>{{service.location}}</cover-view>
      <cover-view class='dw-text-title'>{{service.title}}</cover-view>
    </div> -->
  </view>
</template>

<script>
export default {
  computed: {},
  data () {
    return {
      service: {},
      centerX: 121.475186,
      centerY: 31.228725,
      scale: 11,
      markers: [],
      winStyle: 'width: 100%; height: 400px;',
      testList:
      [
        {
          'id': 1,
          'user_id': 5582,
          'longitude': 121.506043,
          'latitude': 31.155732,
          'province': 'sh',
          'location': '上海市浦东新区上南路3521号'
        },
        {
          'id': 2,
          'user_id': 7318,
          'longitude': 121.25058,
          'latitude': 31.27184,
          'province': 'sh',
          'location': '上海市嘉定区联西路11号'
        }
      ]
    };
  },
  mounted () {
    const markers = [];
    const schoolList = this.testList;
    for (let item of schoolList) {
      let marker = this.createMarker(item);
      markers.push(marker);
    }
    this.markers = markers;
  },

  methods: {
    createMarker (point) {
      let latitude = point.latitude;
      let longitude = point.longitude;
      this.includePoints = {
        latitude: latitude,
        longitude: longitude
      };
      let marker = {
        id: point.id || 0,
        latitude: latitude,
        longitude: longitude,
        width: 36,
        height: 36,
        userId: point.user_id,
        location: point.location,
        iconPath:
          'https://api2.huanjiaohu.com/user/getAvatar?userId=' + point.user_id
      };
      return marker;
    },
    controltap (e) {
      this.moveToLocation();
    },
    markertap (e) {
      this.showDetail = true;
      let maker = null;
      for (let item of this.markers) {
        if (item.id === e.mp.markerId) {
          maker = item;
        }
      }
      this.service = maker;
    },
    regionchange (e) {
      if (e.type === 'end') {
        this.scale = e.scale;
      }
    }
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap');
  },
  onLoad: function () {
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        let latitude = res.latitude;
        let longitude = res.longitude;
        this.centerX = longitude;
        this.centerY = latitude;
        this.scale = 12;
      }
    });
    wx.getSystemInfo({
      success: res => {
        let mapWidth = res.windowWidth;
        let mapHeight = res.windowHeight;
        this.winStyle = 'width:' + mapWidth + 'px;height:' + mapHeight + 'px;';
      }
    });
  }
};
</script>

<style scoped>
page {
  overflow-x: hidden;
}
.character-item {
  margin-top: 50px;
}
</style>
