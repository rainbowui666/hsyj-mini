<template >
  <view class='container'>
    <wux-image
      wux-class='image'
      shape='rounded'
      width='360px'
      src='https://picsum.photos/750/750/?image=413'
    />
    <view class='school-introduction-group'>
      <text
        :class="ellipsis?'school-introduction ellipsis':'school-introduction unellipsis'"
      >&nbsp;&nbsp;{{ information.desc }}</text>
      <view class='school-introduction icon' @tap='expand'>
        <wux-icon :type="ellipsis?'ios-arrow-down':'ios-arrow-up'"/>
      </view>
    </view>
    <view :class="ellipsis?'sight-introduction-group-show':'sight-introduction-group-hide'">
      <view class='sight-introduction-group-item'>
        <wux-row gutter="12" v-for='(row,index) in newArr' :key='index'>
          <wux-col span='6' v-for='(item,oindex) in row' :key='oindex'>
            <view class='icon-group'>
              <view class='example'>
                <wux-icon type='ios-checkmark-circle-outline' size='24' color='green'/>
                <view>11</view>
              </view>
              <view class='example'>
                <wux-icon type='ios-heart' size='24' color='red'/>
                <view>11</view>
              </view>
              <view class='example'>
                <wux-icon type='ios-chatboxes' size='24' color='green'/>
                <view>11</view>
              </view>
              <view class='example'>
                <wux-icon type='ios-share-alt' size='24' color='blue'/>
                <view>11</view>
              </view>
            </view>
            <wux-image
              wux-class='image'
              shape='normal'
              width='170px'
              height='130px'
              :src='item.src'
            />
            <text
              class="sight-introduction ellipsis"
             >{{ item.desc }}</text>
          </wux-col>
        </wux-row>
      </view>
    </view>
  </view>
</template>

<script>
// import wx from 'wx';
export default {
  data () {
    return {
      information: {
        name: '上海财经大学',
        desc:
          '上海财经大学（Shanghai University of Finance and Economics），简称“上海财大”，是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一；由教育部、财政部和上海市人民政府三方共建。'
      },
      sight: [
        {
          src: 'https://picsum.photos/750/750/?image=413',
          desc:
            '上海财经大学,简称“上海财大”,是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          desc:
            '上海财经大学,简称“上海财大”,是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一'

        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          desc:
            '上海财经大学,简称“上海财大”,是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          desc:
            '上海财经大学,简称“上海财大”,是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一'
        },
        {
          src: 'https://picsum.photos/750/750/?image=413',
          desc:
            '上海财经大学,简称“上海财大”,是中华人民共和国教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学；是国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家“双一流”世界一流学科建设高校；入选“国家经济学基础人才培养基地”、“国家海外高层人才创新创业基地”、“教育部人文社会科学重点研究基地”、“卓越法律人才教育培养计划”、“国家建设高水平大学公派研究生项目”、“中国政府奖学金来华留学生接收院校”、“海外高层次人才引进计划”、“111计划”；是全国首批博士、硕士、学士学位授予单位之一'
        }
      ],
      ellipsis: true,
      newArr: []
    };
  },
  onShow () {
    wx.setNavigationBarTitle({ title: this.information.name });
    let length = this.sight.length;
    this.newArr = [];
    for (let i = 0; i < length; i += 2) {
      this.newArr.push(this.sight.slice(i, i + 2));
    }
    console.log(this.newArr);
  },
  methods: {
    expand () {
      var value = !this.ellipsis;
      this.ellipsis = value;
    }
  }
};
</script>

<style>
.school-introduction,.sight-introduction {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  font-size: 13px;
  color: #888;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  /* 通过以上四行实现收缩功能 */
}
.sight-introduction-group-show{
  display: block;
  width:95%;
  margin-left: 7.06px;
}
.sight-introduction-group-hide{
  display: none;
}
.school-introduction.ellipsis {
  -webkit-line-clamp: 3;
  /* 最多显示3行 */
  opacity: 0.75;
  /* 透明度75% */
}

.sight-introduction.ellipsis{
   -webkit-line-clamp: 1;
  /* 最多显示3行 */
  opacity: 0.75;
}
.unellipsis {
  -webkit-line-clamp: 0;
  /* 全部显示 */
  opacity: 1;
  /* 不透明 */
}
.school-introduction.icon {
  display: flex;
  justify-content: center;
}
.icon-group {
  display: flex;
  justify-content: space-between;
  width:93%;
  margin:auto;
}
.example {
  font-size: 16px;
  display: flex;
  line-height: 24px;
}
</style>
