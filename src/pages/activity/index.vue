<template >
  <view class="container">
    <view class="row topbar">
      <wux-search-bar clear maxlength="8"/>
    </view>
    <swiper
      class="banner"
      indicator-dots="true"
      autoplay="true"
      interval="3000"
      duration="1000"
      indicator-active-color="#ff9a14"
    >
      <swiper-item v-for="item of banner" :key="item.id">
        <navigator url="/pages/map/schools/main">
          <img :src="item.image_url" background-size="cover">
        </navigator>
      </swiper-item>
    </swiper>
    <view class="row">
      <wux-filterbar :items="items" @change="onChange" @open="onOpen" @close="onClose"/>
    </view>
    <view class="row">
      <wux-media
        thumb="https://rainbow.ebaotech.com/static/rainbow/image/5.jpg"
        title="车险"
        label="优选保险公司，保费3折起，"
      ></wux-media>
      <wux-media
        thumb="https://rainbow.ebaotech.com/static/rainbow/image/7.jpg"
        title="驾乘意外险"
        label="有车一族必备。驾驶，乘坐都可以保，保额最高20万。"
      ></wux-media>
      <wux-media
        thumb="https://rainbow.ebaotech.com/static/rainbow/image/9.jpg"
        title="百万医疗险"
        label="保额600万，花多少报多少，运动还能减少保费。"
      ></wux-media>
      <wux-media
        thumb="https://rainbow.ebaotech.com/static/rainbow/image/1.jpg"
        title="重疾险"
        label="确诊就陪，最高50万，覆盖高发的100种重疾。"
      ></wux-media>
      <wux-media
        thumb="https://rainbow.ebaotech.com/static/rainbow/image/8.jpg"
        title="住院医疗险"
        label="50万保额，癌症保障不限社保。报销医疗费用，性价比超高。"
      ></wux-media>
      <wux-media
        thumb="https://rainbow.ebaotech.com/static/rainbow/image/3.jpg"
        title="少儿长期重疾险"
        label="保100种重疾35种轻症，最高115万，宝宝成长必备，保费不涨价。"
      ></wux-media>
      <wux-media
        thumb="https://rainbow.ebaotech.com/static/rainbow/image/4.jpg"
        title="赡养父母定期寿险"
        label="200万保额，报销社保外医疗费用。45-80岁都能买，居然三高也能买。"
      ></wux-media>
    </view>
  </view>
</template>

<script>
// import wx from 'wx';
export default {
  data () {
    return {
      banner: [
        {
          id: 1,
          ad_position_id: 1,
          media_type: 1,
          link: '/pages/category/category?id=1005002',
          image_url:
            'https://rainbow.ebaotech.com/static/rainbow/image/S2.jpg',
          end_time: 0,
          enabled: 1
        },
        {
          id: 2,
          ad_position_id: 1,
          media_type: 1,
          link: '/pages/category/category?id=1005001',
          image_url:
            'https://rainbow.ebaotech.com/static/rainbow/image/S1.jpg',
          end_time: 0,
          enabled: 1
        },
        {
          id: 3,
          ad_position_id: 1,
          media_type: 1,
          link: '/pages/category/category?id=1005000',
          image_url:
            'https://rainbow.ebaotech.com/static/rainbow/image/S3.jpg',
          end_time: 0,
          enabled: 1
        }
      ],
      items: [
        {
          type: 'text',
          label: '默认',
          value: 'default',
          groups: ['002']
        },
        {
          type: 'radio',
          label: '销量',
          value: 'updated',
          children: [
            {
              label: '由高到低',
              value: 'desc'
            },
            {
              label: '由低到高',
              value: 'asc'
            }
          ],
          groups: ['001']
        },
        {
          type: 'sort',
          label: '价格',
          value: 'stars',
          groups: ['003']
        },
        {
          type: 'filter',
          label: '筛选',
          value: 'filter',
          children: [
            {
              type: 'radio',
              label: '保障期限',
              value: 'language',
              children: [
                {
                  label: '终身',
                  value: 'javascript'
                },
                {
                  label: '一年',
                  value: 'html'
                },
                {
                  label: '十年',
                  value: 'css'
                },
                {
                  label: '至70岁',
                  value: 'typescript'
                }
              ]
            },
            {
              type: 'checkbox',
              label: '保额',
              value: 'away',
              children: [
                {
                  label: '10万一下',
                  value: '1'
                },
                {
                  label: '10-20万',
                  value: '2'
                },
                {
                  label: '20-30万',
                  value: '3'
                },
                {
                  label: '30-40万',
                  value: '4'
                },
                {
                  label: '40-50万',
                  value: '5'
                },
                {
                  label: '50-60万',
                  value: '6'
                },
                {
                  label: '60万以上',
                  value: '7'
                }
              ]
            },
            {
              type: 'checkbox',
              label: '疾病种类',
              value: 'query',
              children: [
                {
                  label: '30种以下',
                  value: 'vue'
                },
                {
                  label: '30-40种',
                  value: 'react'
                },
                {
                  label: '40种以上',
                  value: 'avalon'
                }
              ]
            },
            {
              type: 'radio',
              label: '性别',
              value: 'gander',
              children: [
                {
                  label: '男',
                  value: '0'
                },
                {
                  label: '女',
                  value: '1'
                }
              ]
            },
            {
              type: 'checkbox',
              label: '特色保障',
              value: 'closed_mode',
              children: [
                {
                  label: '自费药报销',
                  value: '0'
                },
                {
                  label: '意外门诊',
                  value: '1'
                },
                {
                  label: '赔付比例高',
                  value: '2'
                }
              ]
            },
            {
              type: 'checkbox',
              label: '年龄',
              value: 'wheel_type',
              children: [
                {
                  label: '18岁以下',
                  value: '0'
                },
                {
                  label: '18到30岁',
                  value: '1'
                },
                {
                  label: '30到60岁',
                  value: '2'
                },
                {
                  label: '60岁以上',
                  value: '3'
                }
              ]
            }
          ],
          groups: ['001', '002', '003']
        }
      ]
    };
  },
  methods: {
    onChange (e) {
      // const { checkedItems, items } = e.detail;
      // const params = {};

      // console.log(checkedItems, items);

      // checkedItems.forEach(n => {
      //   if (n.checked) {
      //     if (n.value === 'updated') {
      //       const selected = n.children
      //         .filter(n => n.checked)
      //         .map(n => n.value)
      //         .join(' ');
      //       params.sort = n.value;
      //       params.order = selected;
      //     } else if (n.value === 'stars') {
      //       params.sort = n.value;
      //       params.order = n.sort === 1 ? 'asc' : 'desc';
      //     } else if (n.value === 'forks') {
      //       params.sort = n.value;
      //     } else if (n.value === 'filter') {
      //       n.children.filter(n => n.selected).forEach(n => {
      //         if (n.value === 'language') {
      //           const selected = n.children
      //             .filter(n => n.checked)
      //             .map(n => n.value)
      //             .join(' ');
      //           params.language = selected;
      //         } else if (n.value === 'query') {
      //           const selected = n.children
      //             .filter(n => n.checked)
      //             .map(n => n.value)
      //             .join(' ');
      //           params.query = selected;
      //         }
      //       });
      //     }
      //   }
      // });

      // this.getRepos(params);
    },
    onOpen (e) {
      this.pageStyle = 'height: 100%; overflow: hidden';
    },
    onClose (e) {
      this.pageStyle = '';
    },
    getRepos (params = {}) {
      // const language = params.language || 'javascript';
      // const query = params.query || 'react';
      // const q = `${query}+language:${language}`;
      // const data = Object.assign(
      //   {
      //     q
      //   },
      //   params
      // );

      // wx.showLoading();
      // wx.request({
      //   url: `https://api.github.com/search/repositories`,
      //   data,
      //   success: res => {
      //     console.log(res);

      //     wx.hideLoading();

      //     this.items = res.data.items.map(n =>
      //       Object.assign({}, n, {
      //         date: n.created_at.substr(0, 7)
      //       })
      //     );
      //   }
      // });
    }
  }
};
</script>

<style>
.banner {
  width: 750rpx;
  height: 128px;
}

.banner image {
  width: 100%;
  height: 128px;
}


</style>
