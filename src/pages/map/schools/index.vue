<template >
  <view class="school-page">
    <swiper class="swiper" :indicator-dots="true" :autoplay="true" interval="3000" duration="800">
      <block v-for="(item, index) in movies" :key="index">
        <swiper-item>
          <image :src="item.url" class="slide-image"/>
        </swiper-item>
      </block>
    </swiper>
    <!-- <view class='school-introduction-image'>
      <image
        width='360px'
        src='../../../static/images/fudan1.jpeg'
      />
    </view>-->
    <view class="school-introduction-group">
      <text
        :class="ellipsis?'school-introduction ellipsis':'school-introduction unellipsis'"
      >&nbsp;&nbsp;{{ information.desc }}</text>
      <view class="school-introduction icon" @tap="expand">
        <wux-icon :type="ellipsis?'ios-arrow-down':'ios-arrow-up'" color="#888"/>
      </view>
    </view>
    <view class="school-introduction-group-list">
      <!-- <view :class="ellipsis?'sight-introduction-group-show':'sight-introduction-group-hide'"> -->
      <!-- <view class="sight-introduction-group-item">
          <wux-row gutter="12" v-for="(row,index) in newArr" :key="index">
            <wux-col span="6" v-for="(item,oindex) in row" :key="oindex">
              <navigator url="/pages/map/sight/main">
                <image width="170px" height="130px" :src="item.src"/>
                <icon-group :list="iconArr"/>
              </navigator>
              <text class="sight-introduction ellipsis">{{ item.desc }}</text>
            </wux-col>
          </wux-row>
      </view>-->
      <!-- </view> -->
      <!-- <view
        v-for="(item, index) in sight"
        :key="index"
        class="sight-introduction-group-item"
      > -->
        <school-card :data="sight"/>
      <!-- </view> -->
    </view>
  </view>
</template>

<script>
import iconGroup from '../../../components/icon-group';
import schoolCard from '../../../components/school-card';
import api from '@/utils/api';
export default {
  components: {
    iconGroup,
    schoolCard
  },
  data () {
    return {
      movies: [
        {
          url: '../../../static/images/fudan1.jpeg'
        },
        {
          url: '../../../static/images/fudan2.jpeg'
        },
        {
          url: '../../../static/images/fudan1.jpeg'
        },
        {
          url: '../../../static/images/fudan2.jpeg'
        }
      ],
      information: {
        name: '复旦大学',
        desc:
          '复旦大学（Shanghai University of Finance and Economics），简称“复旦”，是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一；由教育部、财政部和上海市人民政府三方共建。'
      },
      sight: [
        {
          schoolName: '复旦大学--文青楼',
          src: '../../../static/images/fudan1.jpeg',
          desc:
            '复旦大学,简称“复旦”,是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一',
          iconArr: [
            {
              icon: 'ios-thumbs-up',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          schoolName: '复旦大学--文青楼',
          src: '../../../static/images/fudan1.jpeg',
          desc:
            '复旦大学,简称“复旦”,是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一',
          iconArr: [
            {
              icon: 'ios-thumbs-up',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          schoolName: '复旦大学--文青楼',
          src: '../../../static/images/fudan1.jpeg',
          desc:
            '复旦大学,简称“复旦”,是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一',
          iconArr: [
            {
              icon: 'ios-thumbs-up',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          schoolName: '复旦大学--文青楼',
          src: '../../../static/images/fudan1.jpeg',
          desc:
            '复旦大学,简称“复旦”,是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一',
          iconArr: [
            {
              icon: 'ios-thumbs-up',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          schoolName: '复旦大学--文青楼',
          src: '../../../static/images/fudan1.jpeg',
          desc:
            '复旦大学,简称“复旦”,是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一',
          iconArr: [
            {
              icon: 'ios-thumbs-up',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        },
        {
          schoolName: '复旦大学--文青楼',
          src: '../../../static/images/fudan1.jpeg',
          desc:
            '复旦大学,简称“复旦”,是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一',
          iconArr: [
            {
              icon: 'ios-thumbs-up',
              size: '16',
              color: '#888',
              label: 11
            },
            {
              icon: 'ios-chatboxes',
              size: '16',
              color: '#888',
              label: 11
            }
          ]
        }
      ],
      iconArr: [
        // {
        //   icon: 'ios-checkmark-circle-outline',
        //   size: '24',
        //   color: 'green',
        //   label: 11
        // },
        {
          icon: 'ios-thumbs-up',
          size: '16',
          color: 'white',
          label: 11
        },
        {
          icon: 'ios-chatboxes',
          size: '16',
          color: 'white',
          label: 11
        }
        // {
        //   icon: 'ios-share-alt',
        //   size: '24',
        //   color: '#007fff',
        //   label: 11
        // }
      ],
      ellipsis: true
      // newArr: []
    };
  },
  // onShow () {
  //   wx.setNavigationBarTitle({ title: this.information.name });
  //   let length = this.sight.length;
  //   this.newArr = [];
  //   for (let i = 0; i < length; i += 2) {
  //     this.newArr.push(this.sight.slice(i, i + 2));
  //   }
  //   console.log(this.newArr);
  // },
  mounted () {
    this.getSchoolDetail();
  },
  methods: {
    async getSchoolDetail () {
      const res1 = await api.getSchoolDetail({id: this.$mp.query.schoolId});
      console.log('学校详情', res1);
    },
    expand () {
      var value = !this.ellipsis;
      this.ellipsis = value;
    }
  }
};
</script>

<style>
.school-page .school-introduction {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  font-size: 13px;
  /* color: #888; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  /* 通过以上四行实现收缩功能 */
}
.school-page .swiper {
  width: 100%;
  height: 230px;
}
.school-page .slide-image {
  width: 100%;
}
.school-page .school-introduction-image {
  display: flex;
  justify-content: center;
}
.school-page .sight-introduction {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  font-size: 13px;
  /* color: #888; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  /* 通过以上四行实现收缩功能 */
}
.school-page .school-introduction-group-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.school-page .sight-introduction-group-show {
  display: block;
  width: 95%;
  margin-left: 11.06px;
}
.school-page .sight-introduction-group-hide {
  display: none;
}
.school-page .school-introduction.ellipsis {
  -webkit-line-clamp: 3;
  /* 最多显示3行 */
  opacity: 0.75;
  /* 透明度75% */
}
.school-page .unellipsis {
  -webkit-line-clamp: 0;
  /* 全部显示 */
  opacity: 1;
  /* 不透明 */
}
.school-page .school-introduction.icon {
  display: flex;
  justify-content: center;
}
.school-page .sight-introduction-group-item image {
  width: 170px;
  height: 130px;
}
.school-page .icon-group-item {
  margin-right: 10px;
  margin-top: -3px;
}
</style>
