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
    <cover-image class='liuyan' src='/static/images/liuyan.png' @click='messageDialog'></cover-image>
    <div v-show='showDetail' class='all-bg'>
      <cover-view class='dw-bg' @click='hidentap'></cover-view>
      <cover-image class='bg' src='/static/images/liuyan_bg.png'></cover-image>
      <cover-view class='dw-text-body'>
        <textarea placeholder="请留下你的想法" name="textarea" />
      </cover-view>
      <cover-view class='dw-text-cancle'>
        <button class="button_cancle" @click='cancleDialog'>撤销</button>
      </cover-view>
      <cover-view class='dw-text-confirm'>
        <button class="button_confirm" @click='confirmDialog'>发布</button>
      </cover-view>
    </div>
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
      showDetail: false,
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
    messageDialog () {
      this.showDetail = true;
    },
    cancleDialog () {
      this.showDetail = false;
    },
    confirmDialog () {
      this.showDetail = false;
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
.all-bg {
  width: 90%;
  left: 5%;
}
.dw_msg {
  width: 30px;
  height: 30px;
  bottom: 5%;
  position: absolute;
  left: 8%;
}
.dw_call {
  width: 70px;
  height: 30px;
  bottom: 3%;
  position: absolute;
  right: 8%;
}
.bg {
  width: 90%;
  height: 40%;
  position: absolute;
  left: auto;
  right: auto;
  bottom: 30%;
}
.dw-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.dw-text-body {
  width: 84%;
  height: 20%;
  top: 35%;
  position: absolute;
  font-size: 12px;
  white-space: normal;
  left: 8%;
  color: #777;
  line-height: 1.5;
  border: 1px solid #333;
}
.dw-text-cancle{
  width: 25%;
  height:15%;
  top: 60%;
  position: absolute;
  font-size: 12px;
  white-space: normal;
  left: 15%;
  color: #777;
  line-height: 1.5;
}
.button_cancle{
  height:40px;
  line-height:40px;
}
.dw-text-confirm{
  width: 25%;
  height:15%;
  top: 60%;
  position: absolute;
  font-size: 12px;
  white-space: normal;
  left: 60%;
  color: #777;
  line-height: 1.5;
}
.button_confirm{
  height:40px;
  line-height:40px;
  background-color: rgb(5, 145, 226);
  color: #fff;
}
.liuyan {
  width: 55px;
  height: 40px;
  position: absolute;
  bottom: 3%;
  right: 5%;
  animation: twinkling 2s 3 ease-in-out;
}
</style>
