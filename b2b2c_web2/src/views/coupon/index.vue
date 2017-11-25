
<template>
<div class="coupon">
    <div v-title data-title='商品评价'>优惠券</div>
    <header-Brief :title='title'></header-Brief>
    <div class="coupon_top">
        <div class="coupon_top_a" v-for='(items,index) in Coupon_num' :key='items.id' :class='{active:HActive == index}' @click='Class(index)'>{{items.num}}</div>
    </div>
    <div class="sum">
         <div class="sum_Loop" v-for='item in coupon_Unused' :key='item.id' :class="[item.money < 50 ? 'Yellow':'' || item.money < 150 ? 'Green':'' || item.money >= 150 ? 'Red':'' ,item.usage ==0  ? 'gray':'']">
        <!-- <div class="sum_Loop" v-for='item in coupon_Unused' :key='item.id'  :class="[item.money >= 51 ? 'Red':'Green',item.usage ==0  ? 'gray':'']"> -->
            <div class="fl">
                <div class="title">{{item.meet}}</div>
                <div class="Freight">({{item.Freight}})</div>
                <div class="life_time">{{item.meet}}</div>
                <div class="time">{{item.time}}</div>
            </div>
            <div class="fr">
                <div class="money">￥<span>{{item.money}}</span>.00</div>
                <div class="Purchase" v-if="item.usage==0">已过期</div>
                <div class="Purchase" v-else-if="item.usage==1">已使用</div>
                <div class="Purchase" v-else-if="item.usage==2">未使用</div>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
import headerBrief from '@/components/header_Brief';
export default {
   name: 'coupon',
   data(){
       return{
           title: '优惠券（50）',
           Coupon_num:[
                {num:'未使用(20)'},//未使用优惠券
                {num:'已使用(15)',},//已使用优惠券
                {num:'已过期(15)',},//已过期优惠券
           ],
           coupon_Unused:[
                 {
                        meet:'订单满1000使用',
                        Freight:'不包含运费',
                        time:'2017.11.30  --  2017.12.31',
                        money:'150',
                        usage:'2'
                },
                {
                        meet:'订单满1000使用',
                        Freight:'不包含运费',
                        time:'2017.11.30  --  2017.12.31',
                        money:'50',         
                        usage:'2'

                },
                {
                        meet:'订单满1000使用',
                        Freight:'不包含运费',
                        time:'2017.11.30  --  2017.12.31',
                        money:'30',
                        usage:'2'
                },
           ],
           coupon:{
                Unused:[
                   {
                        meet:'订单满1000使用',
                        Freight:'不包含运费',
                        time:'2017.11.30  --  2017.12.31',
                        money:'200',
                        usage:'2'

                    },
                    {
                        meet:'订单满1000使用',
                        Freight:'不包含运费',
                        time:'2017.11.30  --  2017.12.31',
                        money:'50',
                        usage:'2'

                    },
                     {
                        meet:'订单满1000使用',
                        Freight:'不包含运费',
                        time:'2017.11.30  --  2017.12.31',
                        money:'50',
                        usage:'2'

                    },
                ],
                Used:[
                   {
                        meet:'订单满1000使用',
                        Freight:'不包含运费',
                        time:'2017.11.30  --  2017.12.31',
                        money:'150',
                        usage:'1'

                    },
                    {
                        meet:'订单满1000使用',
                        Freight:'不包含运费',
                        time:'2017.11.30  --  2017.12.31',
                        money:'30',
                        usage:'1'

                    }
                ],
                Expired: [
                     {
                        meet:'订单满1000使用',
                        Freight:'不包含运费',
                        time:'2017.11.30  --  2017.12.31',
                        money:'50',
                        usage:'0'

                    },
                    {
                        meet:'订单满1000使用',
                        Freight:'不包含运费',
                        time:'2017.11.30  --  2017.12.31',
                        money:'100',
                        usage:'0'

                    }
                ]
           },
           HActive: false,     
          HActive1: false, 
          Yellow: false,  
       };
   },
   components:{
    headerBrief,
  },
   methods: {
    Class(index) {
      this.HActive = index;
      if (index==0) {
        this.coupon_Unused = this.coupon.Unused;
        // if(this.coupon_Unused.money<51){
        //     Yellow: true,  
        // };
        //console.log(this.coupon.Unused);
      } else if(index==1){
        this.coupon_Unused = this.coupon.Used;
      } else if (index==2) {
        this.coupon_Unused = this.coupon.Expired;
      } else {
        this.coupon_Unused = this.coupon.Unused;
      }
    },
    
  },
}
</script>
<style lang="less" scoped>
@import '~@/assets/css/color.less';
.coupon{
    .coupon_top{
        width: 100%;
        height: 0.9rem;
        background-color: #fff;
        .coupon_top_a{
            width: 33.333%;
            height: 100%;
            line-height: 0.9rem;
            font-size: 0.26rem;
            color: #333;
            float: left;
            text-align: center;
            cursor: pointer;
            &.active{
                color: @pale;
            }
        }
    }
    .sum{
        width: 7.1rem;
        overflow: hidden;
        margin: auto;
        margin-top: 0.3rem;
        .sum_Loop{
            width: 100%;
            height: 1.95rem;
            overflow: hidden;
            background:url(../../assets/images/coupon_bj.png);
            background-size: 100% 100%;
            margin-bottom: 0.2rem;
            .fl{
                width: 4.3rem;
                height: 100%;
                float: left;
                .title{
                    width: 100%;
                    height: 0.7rem;
                    font-size: 0.36rem;
                    line-height: 0.82rem;
                    text-indent: 0.3rem;
                }
                .Freight{
                    color: #e02828;
                    font-size: 0.24rem;
                    text-indent: 0.3rem;
                }
                .life_time{
                    width: 100%;
                    font-size: 0.22rem;
                    color: #a5a5a5;
                    margin-top: 0.15rem;
                    text-indent: 0.3rem;
                }
                .time{
                    text-indent: 0.3rem;
                    font-size: 0.28rem;
                    color:#757575;
                }
            }
            .fr{
                width: 2.8rem;
                height: 100%;
                float: right;
                background:url(../../assets/images/coupon_sum.png) 0.25rem 0.35rem no-repeat;
                background-size: 0.9rem 1.25rem;
                .money{
                    width: 2.6rem;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    text-align: right;
                    color:#fff;
                    font-size: 0.35rem;
                    span{
                        font-size: 0.80rem;
                    }
                }
                .Purchase{
                    width: 1.3rem;
                    height: 0.5rem;
                    float: right;
                    margin-right: 0.2rem;
                    line-height: 0.5rem;
                    color: #fff;
                    text-align: center;
                    font-size: 0.24rem;
                    cursor: pointer;
                }
            }
        }
        .Yellow{
            .title{
                color: #d19e29;
            }
            .fr{
                background-color: #E6BD09;
                .Purchase{
                    background-color: #E02828;
                    border-radius: 0.1rem;
                    box-shadow: 0.08rem 0.08rem 0.1rem #CDA807;
                }
            }
        }
        .Red{
            .title{
                color: #ea8748;
            }
            .fr{
                background-color: #EA8748;
                .Purchase{
                    background-color: #C54D00;
                    border-radius: 0.1rem;
                    box-shadow: 0.08rem 0.08rem 0.1rem #DB793B;
                }
            }
        }
        .Green{
            .title{
                color: #7fb662;
            }
            .fr{
                background-color: #7FB662;
                .Purchase{
                    background-color: #458524;
                    border-radius: 0.1rem;
                    box-shadow: 0.08rem 0.08rem 0.1rem #69A34B;
                }
            }
        }
        .gray{
            .title{
                color: #666666;
            }
            .Freight{
                color: #cfcfcf!important;
            }
            .fr{
                background-color: #C0C0C0;
                .Purchase{
                    background-color: #AAA9A9;
                    border-radius: 0.1rem;
                    box-shadow: 0.08rem 0.08rem 0.1rem #B8B8B8;
                }
            }
        }
    }
}
</style>