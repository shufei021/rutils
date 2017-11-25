<template>
  <div class="footprint">
    <div v-title data-title='商品评价'>足迹</div>
    <header-Word :title='title'></header-Word>
    <div class="print"  v-for='item in print' :key='item.id'>
        <div class="time">{{item.time}}</div>
        <div class="shop"  v-for='items in item.shop' :key='items.id'>
          <div class="shop_at">
            <img :src="items.img" alt="" class="shop_img">
            <div class="shop_r">
              <div class="title">{{items.name}}</div>
              <div class="money">￥<span>{{items.money}}</span></div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import headerWord from '@/components/header_word';
export default {
  name: 'footprint',
  data(){
      return{
           title: '我的足迹',
           print:[
             {
                time:'11月30日',
                shop:[
                  { 
                    img: require('@/assets/images/print_img.png'), 
                    money: '299.00',
                    name:'七彩云南 缅甸翡翠A货 冰种吉祥如意 送证书吊坠挂件 男女' 
                  },
                  { 
                    img: require('@/assets/images/print_img.png'), 
                    money: '399.00',
                    name:'七彩云南 缅甸翡翠A货 冰种吉祥如意 送证书吊坠挂件 男女' 
                  },

                ]    
             },
              {
                time:'11月29日',
                shop:[
                  { 
                    img: require('@/assets/images/print_img.png'), 
                    money: '299.00',
                    name:'七彩云南 缅甸翡翠A货 冰种吉祥如意 送证书吊坠挂件 男女' 
                  },
                  { 
                    img: require('@/assets/images/print_img.png'), 
                    money: '399.00',
                    name:'七彩云南 缅甸翡翠A货 冰种吉祥如意 送证书吊坠挂件 男女' 
                  },

                ]    
             },

          ]
      }
  },
  components:{
    headerWord,
  },
}
</script>
<style lang="less" scoped>
  .footprint{
    .print{
      width: 100%;
      overflow: hidden;
      .time{
        width: 100%;
        height: 0.7rem;;
        overflow: hidden;
        line-height: 0.7rem;
        color:#666666;
        font-size: 0.26rem;
        text-indent: 0.2rem;
      }
      .shop{
        width: 100%;
        height: 2.5rem;
        background-color: #fff;
        .shop_at{
          width: 7.1rem;
          height: 2.5rem;
          margin: auto;
          .shop_img{
            width: 2.2rem;
            height: 2.2rem;
            display: block;
            float: left;
          }
          .shop_r{
            width: 4.7rem;
            height: 2.5rem;
            float: right;
            border-bottom: 1px solid #D5D5D5;
            box-sizing: border-box;
            .title{
              width: 100%;
              margin-top: 0.27rem;
              font-size: 0.26rem;
            }
            .money{
              font-size: 0.27rem;
              color:#f23030;
              margin-top: 0.35rem;
              span{
                font-size: 0.32rem;
              }
            }
          }
        }
      }
    }
  }
</style>

