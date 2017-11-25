<template>
  <div class="index_Auction">
            <div class="i_A_heading">
                <span class="i_A_heading_name">
                    <img class="i_A_heading_name_img" src="../../../assets/images/index_Time.png" alt="index_Time图片">
                    <i class="i_A_heading_Title">今日拍卖</i>
                </span>
            </div>
            <mt-swipe :show-indicators="true">
                <mt-swipe-item v-for="(item,index) in data" :key="item.id">
                    <a href="javascript:;"> 
                        <img class="Limited" :src="item.img" alt="轮播图">
                         <div class="Countdown">
                            <span class="Countdown_lf">正在进行</span>
                             <count-down :endTime="item.end_time" :callback="callback" endText="已经结束了" class="fl" v-if="item.end_time"></count-down>
                            <!-- <span class="Countdown_rg">距离结束：5小时20分钟48秒</span> -->
                        </div>
                    </a>                   
                    <div class="i_A_heading_Content">
                        <div class="i_A_h_C_title">{{item.title}}</div>
                        <div class="i_A_h_C_Crowd">
                            <i>{{item.applicants_number}}</i>人报名<span class="Spacing">|</span><i>{{item.watch_number}}</i>人围观
                        </div>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
            <div class="index_Auction_More">
                <div class="index_Auction_More_t">
                    查看更多
                    <img class="i_A_M_i" src="../../../assets/images/index_right.png" alt="">
                </div>
                <div class="index_Auction_More_S"></div>
            </div>
        </div>
</template>
<script>
import countDown from './children/countDown.vue';
export default {
  name:'AuctionToday',
  data () {
    return {
      data:[
        {img:require('@/assets/images/index_Limited.png'),end_time:12000000,title:'尚善琥珀蜜蜡-臻品拍卖',applicants_number:13,watch_number:26542},
        {img:require('@/assets/images/index_Limited.png'),end_time:12000000,title:'尚善琥珀蜜蜡-臻品拍卖',applicants_number:10,watch_number:36542},
        {img:require('@/assets/images/index_Limited.png'),end_time:12000000,title:'尚善琥珀蜜蜡-臻品拍卖',applicants_number:8,watch_number:46542}
      ]
    }
  },
  methods:{
            callback:function(){
                console.log('已经结束了！')
            }
            
        },
  components:{
      countDown
          
        },
}
</script>
<style lang="less" scoped>

.index_Auction{
        width: 7.1rem;
        // height: 4.6rem;
        margin: auto;
        margin-top: 0.35rem;
        overflow: hidden;
        .i_A_heading{
            width: 100%;
            height: 0.5rem; 
            .i_A_heading_name{
                width: 2rem;
                height: 0.5rem;
                display: block;
                .i_A_heading_name_img{
                    width: 0.27rem;
                    height: 0.28rem;
                    display: block;
                    float: left;
                    margin-top: 0.03rem;
                }
                .i_A_heading_Title{
                    display: block;
                    width: 1.6rem;
                    height: 0.5rem;
                    overflow: hidden;
                    font-size: 0.32rem;
                    float: left;
                    line-height: 0.3rem;
                    text-align: center;
                    color: #333;
                }
            }
        }
        .mint-swipe{
            height: 3.7rem;
            position: relative;
            overflow: visible;
            .Countdown{
                position: absolute;
                left: 0;
                bottom: 0rem;
                width: 100%;
                height: 0.45rem;
                // background-color: #000000;
                // opacity:0.4;
                // overflow: hidden;           
                .Countdown_lf{
                    display: block;
                    float: left;
                    width: 1.35rem;
                    height: 0.45rem;
                    background-image: url("../../../assets/images/index_Countdown.png");
                    background-size: 100% 100%;
                    color: #fff;
                    font-size: 0.26rem;
                    line-height: 0.45rem;
                    text-align: center;
                }
                .Countdown_rg{
                    display: block;
                    float: left;
                    width: 5.75rem;
                    height: 0.45rem;
                    background-color: #000000;
                    opacity:0.8;
                    color: #fff;
                    font-size: 0.26rem;
                    line-height: 0.45rem;
                    text-indent: 0.2rem;
                }
            } 
        }
        .mint-swipe-items-wrap{
            width: 100%;
            overflow: visible;
        }
        .mint-swipe-items-wrap a{
            width: 100%;
            height: 2.4rem;
            overflow: hidden;
            display: block;
            position: relative;
        }
        .mint-swipe-item{
            width: 100%;
            // height: 2.4rem;
            overflow: hidden;
        }
        .mint-swipe-indicators{
            position: absolute;
            left: 6rem!important;
            bottom: 3.9rem;
            width: 2.2rem;
            .mint-swipe-indicator{
                width: 0.2rem;
                height: 0.2rem;
                background-color:#9ADDE2;
            }
            .mint-swipe-indicator.is-active{
                background-color: #E8C441;
            }
            .mint-swipe-indicator{
                float:right;
            }
        }
        .i_A_heading_Content{
            width: 100%;
            height: 1.3rem;
            background-color: #fff;
            .i_A_h_C_title{
                width: 100%;
                height: 0.75rem;
                // background-color: red;
                font-size: 0.28rem;
                font-weight: 500;
                text-indent: 0.25rem;
                line-height: 0.75rem;
            }
            .i_A_h_C_Crowd{
                font-size: 0.24rem;
                text-indent: 0.25rem;
                .Spacing{
                    margin-left: 0.2rem;
                    margin-right: 0.2rem;
                    font-size: 0.24rem;
                }
                i{
                    font-size: 0.24rem;
                    margin-right: 0.1rem;
                    color: #F03C3C;
                }
            }
        }
        .Limited{
            height: 2.4rem;
        }
        .index_Auction_More{
            width: 100%;
            height: 0.8rem;
            position: relative;
            .index_Auction_More_t{
                width: 1.5rem;
                line-height: 0.7rem;
                margin: auto;
                color: #666666;
                font-size: 0.24rem;
                text-indent: 0.15rem;
                cursor: pointer;
                position: relative;
                z-index: 5;
                background-color: #F2F2F2;
                .i_A_M_i{
                    display: block;
                    float: right;
                    margin-top: 0.285rem;
                    margin-right: 0.18rem;
                    width: 0.08rem;
                    height: 0.14rem;
                }
            }
            .index_Auction_More_S{
                width: 100%;
                position: absolute;
                left: 0;
                top:0.35rem;
                border-bottom: 1px solid#E6E6E6;
                z-index: 1;
            }
        }   
    }
</style>

