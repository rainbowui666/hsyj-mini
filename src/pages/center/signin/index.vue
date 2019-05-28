<template >
  <view class="my-signin-page">
    <view class="my-signin-list">
      <signin-card :data="signinList" :iconClick="iconClick"/>
    </view>
  </view>
</template>

<script>
import signinCard from '../../../components/signin-card';
import api from '@/utils/api';

export default {
  components: {
    signinCard
  },
  data () {
    return {
      signinList: [
        // {
        //   src: '../../static/images/school.png',
        //   sceneryTitle: '中共一大会址纪念馆',
        //   iconType: 'ios-checkmark-circle-outline',
        //   sightStatus: '已完成',
        //   iconColor: 'red',
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   navigationImg: '../../static/images/bingo.png',
        //   thumbsupNum: 111,
        //   messageNum: 111,
        //   pics: [
        //     {
        //       sourceAddress: '24bb88da-4ab1-4b6c-95ee-ed871b7f341d.jpg'
        //     }
        //   ],
        //   iconArr: [
        //     {
        //       icon: 'ios-heart',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // },
        // {
        //   src: '../../static/images/school.png',
        //   sceneryTitle: '中共一大会址纪念馆',
        //   iconType: 'ios-checkmark-circle-outline',
        //   sightStatus: '已完成',
        //   iconColor: 'red',
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   navigationImg: '../../static/images/bingo.png',
        //   thumbsupNum: 111,
        //   messageNum: 111,
        //   pics: [
        //     {
        //       sourceAddress: '24bb88da-4ab1-4b6c-95ee-ed871b7f341d.jpg'
        //     }
        //   ],
        //   iconArr: [
        //     {
        //       icon: 'ios-heart',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // },
        // {
        //   src: '../../static/images/school.png',
        //   sceneryTitle: '中共一大会址纪念馆',
        //   iconType: 'ios-checkmark-circle-outline',
        //   sightStatus: '已完成',
        //   iconColor: 'red',
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   navigationImg: '../../static/images/bingo.png',
        //   thumbsupNum: 111,
        //   messageNum: 111,
        //   pics: [
        //     {
        //       sourceAddress: '24bb88da-4ab1-4b6c-95ee-ed871b7f341d.jpg'
        //     }
        //   ],
        //   iconArr: [
        //     {
        //       icon: 'ios-heart',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // },
        // {
        //   src: '../../static/images/school.png',
        //   sceneryTitle: '中共一大会址纪念馆',
        //   iconType: 'ios-checkmark-circle-outline',
        //   sightStatus: '已完成',
        //   iconColor: 'red',
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   navigationImg: '../../static/images/bingo.png',
        //   thumbsupNum: 111,
        //   messageNum: 111,
        //   pics: [
        //     {
        //       sourceAddress: '24bb88da-4ab1-4b6c-95ee-ed871b7f341d.jpg'
        //     }
        //   ],
        //   iconArr: [
        //     {
        //       icon: 'ios-heart',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // },
        // {
        //   src: '../../static/images/school.png',
        //   sceneryTitle: '中共一大会址纪念馆',
        //   iconType: 'ios-checkmark-circle-outline',
        //   sightStatus: '已完成',
        //   iconColor: 'red',
        //   thumbsupImg: '../../static/images/thumbsupImg.png',
        //   messageImg: '../../static/images/messageImg.png',
        //   navigationImg: '../../static/images/bingo.png',
        //   thumbsupNum: 111,
        //   messageNum: 111,
        //   pics: [
        //     {
        //       sourceAddress: '24bb88da-4ab1-4b6c-95ee-ed871b7f341d.jpg'
        //     }
        //   ],
        //   iconArr: [
        //     {
        //       icon: 'ios-heart',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     },
        //     {
        //       icon: 'ios-chatboxes',
        //       size: '16',
        //       color: '#888',
        //       label: 11
        //     }
        //   ]
        // }
      ],
      pageindex: 1,
      pagesize: 5
    };
  },
  async mounted () {
    debugger
    const res = await api.getMySigninList({
      pageindex: this.pageindex,
      pagesize: this.pagesize,
      studentid: wx.getStorageSync('userInfo').studentID
    });
    console.log('res', res)
    this.signinList = res.data.data ? res.data.data : []
    this.signinList.forEach(element => {
      element.thumbsupImg = 'https://hsyj.100eduonline.com/static/mini-images/thumbsUp.png'
      element.messageImg = 'https://hsyj.100eduonline.com/static/mini-images/messageImg.png'
      element.navigationImg = '../../static/images/bingo.png'
      element.sightStatus = '已完成'
    });
    console.log('111', this.signinList)
  },
  methods: {
    iconClick (item) {
      console.log('item', item);
      // wx.navigateTo({ url: 'sightDetail/main?name=' + item.sceneryTitle })
    }
  },
  onShareAppMessage: function (ops) {
    return {
      title: '红色印记'
    };
  }
};
</script>

<style>
.my-signin-page {
  background-color: #ccc;
  padding: 0 5%;
}

.signin-page .page-signin{
  padding: 0;
}

.background-image image {
  width: 100%;
}
.activity-signin-title-group{
  display: flex;
  justify-content: space-between;
}
.activity-signin-title-share button {
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
  line-height: 40px;
  padding: 0;
  border-radius: 0px;
  box-sizing: inherit;
  background-color: #fff;
  display: flex;
}
.activity-signin-title-share button::after {
  border: none;
}
.activity-signin-title-share .button-hover {
  color: #000;
}
.activity-signin-title-label{
  line-height: 40px;
}
</style>
