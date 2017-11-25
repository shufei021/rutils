<template>
  <div class='Reviews'>
       <div v-title data-title='商品评价'>商品评价</div>
        <header-Detailed :title='title'></header-Detailed>
        <div class='ShopSize_top'>
            <router-link to='../ForDetailed' class='ShopSize_top_a'>图文详情</router-link>
            <router-link to='../ShopSize' class='ShopSize_top_a'>规格参数</router-link>
            <router-link to='../Reviews' class='ShopSize_top_a active'>商品评论</router-link>
            <router-link to='../Consult' class='ShopSize_top_a'>商品咨询</router-link>
        </div>
        <div class='Full_evaluation'>
            <div class='loop' v-for='(items,index) in evaluate' :key='items.id' :class='{active:HActive == index}' @click='Class(index)'>
                <span>{{items.text}}</span>
                <i>{{items.all}}</i>
            </div>   
        </div>
        <div class='content'>
           <div class='content_all'>
              <div class='content_name' v-for='item in evaluation' :key='item.id'>
                <div class="content_top">
                  <div class='content_name_fl'>
                    <img class='name_img' :src='item.name_img' alt=''>
                    <i class='name'>{{item.name}}</i>
                  </div>
                  <div class='content_name_fr'>
                      <img src='../../assets/images/xinxin.png' alt='' v-for='(itea,index) in item.Grade_num' :key='itea.id'>
                      <img src='../../assets/images/xu_xinxin.png' alt='' v-for='(ite,index) in item.Grade' :key='ite.id'>
                  </div>
                </div> 
                <div class="content_Review">{{item.content_Review}}</div>
                <div class="content_img" >
                  <img :src='iteaa.img' alt=""v-for='(iteaa,index) in item.content_img' :key='iteaa.id'>
                </div>
                <div class="content_Types">
                    颜色：<span>{{item.color}}</span><span>{{item.time}}</span> 
                </div> 
              </div>
           </div>
        </div>
        <Footer-Shop></Footer-Shop>      
  </div>
</template>
<script>
import headerDetailed from '@/components/header_Detailed';
import FooterShop from '@/components/footer_shop';
export default {
  name: 'Reviews',
  data() {
    return {
      title: '商品评价',
      //evaluate:{all:4233,good:3000,centre:110,poor:10,digraph:8}//评价
      evaluate: [
        { all: 4233, text: '全部评价' },
        { all: 3000, text: '好评' },
        { all: 500, text: '中评' },
        { all: 100, text: '差评' },
        { all: 20, text: '有图' }
      ],
      evaluation: [
        {
            name: '雷***星',
            name_img: require('@/assets/images/Reviews_name.png'),
            Grade: 4,
            Grade_num: 1,
            content_Review:'手镯不错，比较水润，有石纹但不明显，天然的免不了有些许瑕疵',
            content_img:[
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
            ],//评论图片
            color:'红色',
            time:'2016/12/01'

        },
        {
          name: '雷***星',
          name_img: require('@/assets/images/Reviews_name.png'),
          Grade: 5,
          Grade_num: 0,
          content_Review:'颜色喜欢，淡雅的绿，就是有些薄，实物是扁形的，重量偏轻，不过这个价格也凑合了。',
          content_img:[
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
          ],//评论图片
          color:'白色',
          time:'2016/12/01'
        },
        {
          name: '雷***星1',
          name_img: require('@/assets/images/Reviews_name.png'),
          Grade: 4,
          Grade_num: 1,
          content_Review:'颜色喜欢，淡雅的绿，就是有些薄，实物是扁形的，重量偏轻，不过这个价格也凑合了。',
          // content_img:[
          //     {img:require('@/assets/images/Reviews_pji.png')},
          //     {img:require('@/assets/images/Reviews_pji.png')},
          //     {img:require('@/assets/images/Reviews_pji.png')},
          // ],//评论图片
          color:'白色',
          time:'2016/12/01'
        },
        {
          name: '小李1',
          name_img: require('@/assets/images/Reviews_name.png'),
          Grade: 3,
          Grade_num: 2,
          content_Review:'颜色喜欢，淡雅的绿，就是有些薄，实物是扁形的，重量偏轻，不过这个价格也凑合了。',
          content_img:[
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
          ],//评论图片
          color:'黑色',
          time:'2016/12/01'
        },
        {
          name: '小李',
          name_img: require('@/assets/images/Reviews_name.png'),
          Grade: 1,
          Grade_num: 4
        }
      ],
      allevaluation: {
        all: [
          {
            name: '雷***星',
            name_img: require('@/assets/images/Reviews_name.png'),
            Grade: 4,
            Grade_num: 1,
            content_Review:'颜色喜欢，淡雅的绿，就是有些薄，实物是扁形的，重量偏轻，不过这个价格也凑合了。',
            content_img:[
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
            ],//评论图片
            color:'白色',
            time:'2016/12/01'
          },
          {
            name: '雷***星',
            name_img: require('@/assets/images/Reviews_name.png'),
            Grade: 5,
            Grade_num: 0
          },
          {
            name: '雷***星1',
            name_img: require('@/assets/images/Reviews_name.png'),
            Grade: 4,
            Grade_num: 1
          },
          {
            name: '小李1',
            name_img: require('@/assets/images/Reviews_name.png'),
            Grade: 3,
            Grade_num: 2
          },
          {
            name: '小李',
            name_img: require('@/assets/images/Reviews_name.png'),
            Grade: 1,
            Grade_num: 4
          }
        ],
        hao: [
          {
            name: '雷***星',
            name_img: require('@/assets/images/Reviews_name.png'),
            Grade: 4,
            Grade_num: 1,
            content_img:[
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
            ],//评论图片
            color:'白色',
            time:'2016/12/01'
          },
          {
            name: '雷***星',
            name_img: require('@/assets/images/Reviews_name.png'),
            Grade: 5,
            Grade_num: 0,
            content_img:[
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
            ],//评论图片
            color:'粉色',
            time:'2016/12/01'
          },
          {
            name: '雷***星1',
            name_img: require('@/assets/images/Reviews_name.png'),
            Grade: 4,
            Grade_num: 1
          }
        ],
        cha: [
          {
            name: '小李',
            name_img: require('@/assets/images/Reviews_name.png'),
            Grade: 1,
            Grade_num: 4
          }
        ],
        zhong: [
          {
            name: '小李1',
            name_img: require('@/assets/images/Reviews_name.png'),
            Grade: 3,
            Grade_num: 2
          }
        ],
        youtu:[
          {
            name: '雷***星',
            name_img: require('@/assets/images/Reviews_name.png'),
            Grade: 5,
            Grade_num: 0,
            content_Review:'颜色喜欢，淡雅的绿，就是有些薄，实物是扁形的，重量偏轻，不过这个价格也凑合了。',
            content_img:[
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
              {img:require('@/assets/images/Reviews_pji.png')},
            ],//评论图片
            color:'白色',
            time:'2016/12/01'
          },
        ]
      },
      // content: [
      //   {
      //     ab: [
      //       {
      //         hao: [
      //           {
      //             name: '雷***星',
      //             name_img: require('@/assets/images/Reviews_name.png'),
      //             Grade: 4,
      //             Grade_num: 1
      //           },
      //           {
      //             name: '雷***星',
      //             name_img: require('@/assets/images/Reviews_name.png'),
      //             Grade: 5,
      //             Grade_num: 0
      //           },
      //           {
      //             name: '雷***星1',
      //             name_img: require('@/assets/images/Reviews_name.png'),
      //             Grade: 4,
      //             Grade_num: 1
      //           }
      //         ],
      //         cha: [
      //           {
      //             name: '小李',
      //             name_img: require('@/assets/images/Reviews_name.png'),
      //             Grade: 1,
      //             Grade_num: 4
      //           }
      //         ],
      //         zhong: [
      //           {
      //             name: '小李1',
      //             name_img: require('@/assets/images/Reviews_name.png'),
      //             Grade: 3,
      //             Grade_num: 2
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],
      //  {
      //     name:'雷***星',
      //     name_img:require('@/assets/images/Reviews_name.png'),
      //     Grade:4,
      //     Grade_num:1,
      // },
      //   {
      //     name:'雷***星',
      //     name_img:require('@/assets/images/Reviews_name.png'),
      //     Grade:3,
      //     Grade_num:3,
      // },
      //   {
      //     name:'雷***星',
      //     name_img:require('@/assets/images/Reviews_name.png'),
      //     Grade:2,
      //     Grade_num:3,
      // },
      //   {
      //     name:'雷***星',
      //     name_img:require('@/assets/images/Reviews_name.png'),
      //     Grade:1,
      //     Grade_num:4,
      // },

      HActive: false
    };
  },
  components: {
    headerDetailed,
    FooterShop
  },
  // mounted(){
  //     // 初始化获取商品价格赋值给data里面Grade_num
  //     this.Grade_num =(5-this.content.Grade);
  // },
  methods: {
    Class(index) {
      this.HActive = index;
      if (index==1) {
        this.evaluation = this.allevaluation.hao;
      } else if(index==2){
        this.evaluation = this.allevaluation.zhong;
      } else if (index==3) {
        this.evaluation = this.allevaluation.cha;
      } else if(index==4){
        this.evaluation = this.allevaluation.youtu;
      } else {
        this.evaluation = this.allevaluation.all;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.Reviews {
  .ShopSize_top {
    width: 100%;
    height: 0.75rem;
    background-color: #fff;
    overflow: hidden;
    //margin-bottom: 0.1rem;
    .ShopSize_top_a {
      width: 25%;
      height: 0.75rem;
      text-align: center;
      line-height: 0.75rem;
      color: #333;
      display: block;
      float: left;
      font-size: 0.25rem;
      overflow: hidden;
      &.active {
        font-size: 0.3rem;
        border-bottom: 2px solid #d19e29;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
    }
  }
  .Full_evaluation {
    width: 100%;
    height: 1.05rem;
    background-color: #f1f1f1;
    .loop {
      width: 20%;
      height: 100%;
      float: left;
      cursor: pointer;
      text-align: center;
      &.active {
        border-bottom: 3px solid #d19e29;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      span {
        font-size: 0.28rem;
        display: block;
        line-height: 0.55rem;
        color: #757575;
        width: 100%;
      }
      i {
        display: block;
        font-size: 0.32rem;
        color: #333333;
        width: 100%;
      }
    }
  }
  .content {
    width: 100%;
    display: block;
    overflow: hidden;
    background-color: #fff;
    padding-bottom: 1rem;
    .content_all {
      .content_name {
        width: 7.1rem;
        margin: auto;
        .content_top{
          width: 100%;
          overflow: hidden;
        }
        .content_Review{
            width: 100%;
            overflow: hidden;
            font-size: 0.24rem;
            color: #333;
        }
        .content_img{
          width: 100%;
          overflow: hidden;
          padding-bottom: 0.15rem;
          padding-top: 0.15rem;
          img{
            display: block;
            width: 1rem;
            height: 1rem;
            float: left;
            margin-right: 0.2rem;
          }
        }
        .content_Types{
          width: 100%;
          overflow: hidden;
          margin-bottom: 0.4rem;
          color: #999;
          font-size: 0.2rem;
          span{
            margin-right: 0.3rem;
            color: #999;
            font-size: 0.2rem;
          }
        }
        .content_name_fl {
          width: 50%;
          height: 100%;
          float: left;
          line-height: 0.6rem;
          font-size: 0.21rem;
          color: #b0b0b0;
          .name_img {
            width: 0.3rem;
            height: 0.3rem;
            display: block;
            float: left;
            margin-top: 0.15rem;
            border-radius: 50%;
            margin-right: 0.15rem;
          }
          .name {
            width: 1.9rem;
            height: 0.6rem;
            display: block;
            float: left;
            font-size: 0.21rem;
            color: #b0b0b0;
            overflow: hidden;
          }
        }
        .content_name_fr {
          width: 2rem;
          float: right;
          img {
            display: block;
            float: right;
            width: 0.28rem;
            height: 0.26rem;
            margin-top: 0.19rem;
            margin-left: 0.05rem;
          }
        }
      }
    }
  }
}
</style>
