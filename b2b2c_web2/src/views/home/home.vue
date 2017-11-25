<template>
    <div>
        <div v-title data-title="主页">{{title}}</div>
        <!-- 头部 -->
        <home-header></home-header>
        <!-- 轮播false -->
        <div class="header_swipe">
            <mt-swipe :show-indicators="true">
                <mt-swipe-item v-for="(item,index) in banner" :key="item.id">
                        <img v-lazy="item" alt="轮播图">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 快讯- - -导航 -->
        <news-flash :title="title_name" :arr="arr"></news-flash>
        <!-- 今日拍卖 -->
        <auction-today></auction-today>
        <!-- 广告图片 -->
        <div class="index_Advertising">
            <img src="../../assets/images/x-banner1.png" alt="">
        </div>
        <!-- 店铺 -->
        <shop-street :logo="logo"></shop-street>
         <!-- 广告图片 -->
        <div class="index_Advertising">
            <img src="../../assets/images/x-banner2.png" alt="">
        </div>
        <!-- index_Shop -->
        <limited-hd v-for="(item,index) in shop_list" :key="item.id" :data="item"></limited-hd>
        <!-- <home-Shop :Advertising="Advertising" :GoodsImg="GoodsImg" :introduce="introduce" v-for="item in 3" :key="item.id"></home-Shop> -->
    </div>
</template>
<script>
    import homeHeader from '@/components/header';
    import NewsFlash from './children/newsFlash';
    import AuctionToday from './children/AuctionToday';
    import limitedHd from '@/components/conHeader';
    import ShopStreet from './children/shopStreet'
    import homeShop from './children/index_Shop';
    import { Swipe, SwipeItem } from 'mint-ui';
    export default {
        name : 'home',
        data(){
            return {
                title:'主页',
                title_name:'贡品网',
                banner:[require('@/assets/images/index_Carousel.png'),require('@/assets/images/index_Carousel.png'),require('@/assets/images/index_Carousel.png'),require('@/assets/images/index_Carousel.png')],
                arr:[
                    {title:'1毛鹏皓解盘 — 如何将简单的简如何将简单的简'},
                    {title:'2毛鹏皓解盘 — 如何将简单的简如何将简单的简'},
                    {title:'3毛鹏皓解盘 — 如何将简单的简如何将简单的简'},
                    {title:'4毛鹏皓解盘 — 如何将简单的简如何将简单的简'},
                    {title:'5毛鹏皓解盘 — 如何将简单的简如何将简单的简'}
                ],
                logo:[
                    {logo:require('@/assets/images/Shop-logo1.png')},
                    {logo:require('@/assets/images/Shop-logo2.png')},
                    {logo:require('@/assets/images/Shop-logo1.png')},
                    {logo:require('@/assets/images/Shop-logo2.png')},
                    {logo:require('@/assets/images/Shop-logo1.png')},
                    {logo:require('@/assets/images/Shop-logo2.png')},
                    {logo:require('@/assets/images/Shop-logo1.png')},
                    {logo:require('@/assets/images/Shop-logo2.png')},
                    {logo:require('@/assets/images/Shop-logo1.png')},

                    
                ],
                shop_list:[
                    {title:'烧造工艺',GoodsImg:require('@/assets/images/product-banner1.png'),children:[{url:require('@/assets/images/product1.png'),name:'景德镇非遗传承人秦卖...',Price:4390.00},{url:require('@/assets/images/product2.png'),name:'景德镇非遗传承人秦卖...',Price:329.80},{url:require('@/assets/images/product1.png'),name:'景德镇非遗传承人秦卖...',Price:4390.00},{url:require('@/assets/images/product2.png'),name:'景德镇非遗传承人秦卖...',Price:329.80}]},
                    {title:'皇家御饮',GoodsImg:require('@/assets/images/product-banner2.png'),children:[{url:require('@/assets/images/product1.png'),name:'景德镇非遗传承人秦卖...',Price:4390.00},{url:require('@/assets/images/product2.png'),name:'景德镇非遗传承人秦卖...',Price:329.80},{url:require('@/assets/images/product1.png'),name:'景德镇非遗传承人秦卖...',Price:4390.00},{url:require('@/assets/images/product2.png'),name:'景德镇非遗传承人秦卖...',Price:329.80}]},
                    {title:'滋补养身',GoodsImg:require('@/assets/images/product-banner3.png'),children:[{url:require('@/assets/images/product1.png'),name:'景德镇非遗传承人秦卖...',Price:4390.00},{url:require('@/assets/images/product2.png'),name:'景德镇非遗传承人秦卖...',Price:329.80},{url:require('@/assets/images/product1.png'),name:'景德镇非遗传承人秦卖...',Price:4390.00},{url:require('@/assets/images/product2.png'),name:'景德镇非遗传承人秦卖...',Price:329.80}]},
                    {title:'御贡膳品',GoodsImg:require('@/assets/images/product-banner4.png'),children:[{url:require('@/assets/images/product1.png'),name:'景德镇非遗传承人秦卖...',Price:4390.00},{url:require('@/assets/images/product2.png'),name:'景德镇非遗传承人秦卖...',Price:329.80},{url:require('@/assets/images/product1.png'),name:'景德镇非遗传承人秦卖...',Price:4390.00},{url:require('@/assets/images/product2.png'),name:'景德镇非遗传承人秦卖...',Price:329.80}]},
                    {title:'珠宝玉器',GoodsImg:require('@/assets/images/product-banner5.png'),children:[{url:require('@/assets/images/product1.png'),name:'景德镇非遗传承人秦卖...',Price:4390.00},{url:require('@/assets/images/product2.png'),name:'景德镇非遗传承人秦卖...',Price:329.80},{url:require('@/assets/images/product1.png'),name:'景德镇非遗传承人秦卖...',Price:4390.00},{url:require('@/assets/images/product2.png'),name:'景德镇非遗传承人秦卖...',Price:329.80}]},
                    {title:'红木家具',GoodsImg:require('@/assets/images/product-banner6.png'),children:[{url:require('@/assets/images/product1.png'),name:'景德镇非遗传承人秦卖...',Price:4390.00},{url:require('@/assets/images/product2.png'),name:'景德镇非遗传承人秦卖...',Price:329.80},{url:require('@/assets/images/product1.png'),name:'景德镇非遗传承人秦卖...',Price:4390.00},{url:require('@/assets/images/product2.png'),name:'景德镇非遗传承人秦卖...',Price:329.80}]}

                ],
                // Shop广告图
                //   Advertising:'后台给路径' ,
                  GoodsImg:'商品图片，后台传参',
                //   introduce:'商品名称'           
            }
        },
        components:{
            homeHeader,
            homeShop,
            NewsFlash,
            AuctionToday,
            ShopStreet,
            limitedHd
        },
        // 快讯上下滚动
        methods:{
            scroll_box(){
                var count = 0,
                    clear = null;
                clear = setInterval(() => {
                    count ++;
                    if(count >= this.arr.length){
                        count = 0;
                    }
                    if(this.$refs.scroll_box){
                        this.$refs.scroll_box.style.top = -count * 0.55 +'rem';
                    }
                    
                },2000);
            },
            
        },
        mounted(){
            this.scroll_box();
        }
    }
    
</script>
<style lang="less">
    .header_swipe{
         width: 100%;
        height: 3.28rem;
        overflow: hidden;
        .mint-swipe-indicator{
            width: 0.15rem;
            height: 0.15rem;
        }
        .mint-swipe-indicator.is-active{
            background-color: #D19E29;
        }
    }
    .mint-swipe{
        width: 100%;
        // height: 3.28rem;
        overflow: hidden;
         .mint-swipe-item{
        width: 100%;
        // height: 3.28rem;
        overflow: hidden;
        }
        .mint-swipe-item img{
            width: 100%;
            display: block;
            overflow: hidden;
            // height: 2.4rem;
        }
    }
    .index_Ctrl{
           width: 100%;
           overflow: hidden;
           background-color: #fff;
           border-top:1px dashed #DEDEDE;
           padding-bottom: 0.35rem;
         .index_Ctrl_auto{
            width: 7.1rem;
            overflow: hidden;
            margin: auto;
         }
         .index_Ctrl_auto a{
            display: block;
            width:1.15rem;
            height: 1.6rem;
            float: left;
            margin-right: 0.33rem;
            margin-top: 0.3rem;
            overflow: hidden;
        }
        .index_Ctrl_auto a:nth-child(5n){
            margin-right: 0;
        }
        .index_Ctrl_auto a img{
            width: 1.15rem;
            height: 1.15rem;
            display: block;
           
        }
        .index_Ctrl_auto a span{
            width: 100%;
            height: 0.45rem;
            display: block;
            color: #333;
            font-size: 0.26rem;
            text-align: center;
            line-height: 0.55rem;
            font-weight: 500;
        }  
    }
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
                    background-image: url("../../assets/images/index_Countdown.png");
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
            height: 0.7rem;
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
    .index_Advertising{
        width: 7.1rem;
        overflow: hidden;
        margin: auto;
        // margin-top: 0.3rem;
        border-radius: 0.2rem;
        cursor: pointer;
        img{
            width: 100%;
            overflow: hidden;
            border-radius: 0.2rem;
        }
    }
    .store_list{
        width: 100%;
        overflow: hidden;
        margin-bottom: 0.3rem;
        .store_list_top{
            width: 7.1rem;
            height: 0.9rem;
            margin: auto;
            .store_list_name{
                width: 50%;
                float: left;
                height: 0.9rem;
                font-size: 0.32rem;
                color: #333;
                span{
                    display: block;
                    width: 0.05rem;
                    height: 0.33rem;
                    background-color: #D19E29;
                    margin-top: 0.3rem;
                    float: left;
                }
                i{
                    display: block;
                    float: left;
                    font-size: 0.32rem;
                    color: #333;
                    line-height: 0.9rem;
                    margin-left: 0.15rem;
                }
            }
            .store_list_More{
                height: 0.9rem;
                float: right;
                cursor: pointer;
                span{
                    display: block;
                    float: right;
                    font-size: 0.28rem;
                    line-height: 0.9rem;
                    color: #666666;
                }
                img{
                    display: block;
                    float: right;
                    width: 0.1rem;
                    height: 0.16rem;
                    margin-top: 0.385rem;
                    margin-left: 0.1rem;
                }
             }
        }
        .store_list_Logo{
            width: 100%;
            overflow: hidden;
            background-color: #fff;
            .store_list_Logo_a{
                width: 25%;
                height: 0.9rem;
                float: left;
                // background-color: red;
                border-right: 1px solid #F8F8F8;
                border-bottom: 1px solid #F8F8F8;
                box-sizing:border-box;
                cursor: pointer;
            }
            .store_list_Logo_a:nth-child(4n){
                border-right:0;
            }
            img{
                width: 100%;
                height: 0.9rem;
            }
        }
             
    }
    
        
   
</style>
