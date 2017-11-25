<template>
    <div>
        <div v-title data-title="抢购">抢购</div>
        <class-header></class-header>
        <div class="header_swipe">
            <mt-swipe :show-indicators="true">
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../../../assets/images/index_Carousel.png" alt="轮播图">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../../../assets/images/index_Carousel.png" alt="轮播图">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../../../assets/images/index_Carousel.png" alt="轮播图">
                    </a>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="Shop">
            <div class="Shop_at">
                <div class="Shop_at_goods">
                    <img src="../../../assets/images/PanicBuying_Shop.png" alt="">
                    <div class="Shop_at_Content">
                        <div class="Shop_at_Content_tite">金一翡翠和田玉手镯手串 女款油润菠菜绿碧玉石玉镯子</div>
                        <div class="Details">
                            <div class="Details_l">
                                <div class="Details_t">抢购中</div>
                                <div class="Details_p">￥99</div>
                                <div class="Details_o">￥199</div>
                            </div>
                            <div class="Details_r">
                                <router-link to="../ForDetailed"  class="Details_r_P">马上抢购</router-link>
                                <div class="Details_r_n"><span>21</span>人已购买</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="Shop_at active">
                <div class="Shop_at_goods">
                    <img src="../../../assets/images/PanicBuying_Shop.png" alt="">
                    <div class="Shop_at_Content">
                        <div class="Shop_at_Content_tite">金一翡翠和田玉手镯手串 女款油润菠菜绿碧玉石玉镯子</div>
                        <div class="Details">
                            <div class="Details_l">
                                <div class="Details_t">10:00即将开始</div>
                                <div class="Details_p">￥99</div>
                                <div class="Details_o">￥199</div>
                            </div>
                            <div class="Details_r">
                                <div class="Details_r_P">提醒我</div>
                                <div class="Details_r_n"><span>21</span>人已购买</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="Shop_at">
                <div class="Shop_at_goods">
                    <img src="../../../assets/images/PanicBuying_Shop.png" alt="">
                    <div class="Shop_at_Content">
                        <div class="Shop_at_Content_tite">金一翡翠和田玉手镯手串 女款油润菠菜绿碧玉石玉镯子</div>
                        <div class="Details">
                            <div class="Details_l">
                                <div class="Details_t">抢购中</div>
                                <div class="Details_p">￥99</div>
                                <div class="Details_o">￥199</div>
                            </div>
                            <div class="Details_r">
                                <div class="Details_r_P">马上抢购</div>
                                <div class="Details_r_n"><span>21</span>人已购买</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="Shop_at">
                <div class="Shop_at_goods">
                    <img src="../../../assets/images/PanicBuying_Shop.png" alt="">
                    <div class="Shop_at_Content">
                        <div class="Shop_at_Content_tite">金一翡翠和田玉手镯手串 女款油润菠菜绿碧玉石玉镯子</div>
                        <div class="Details">
                            <div class="Details_l">
                                <div class="Details_t">抢购中</div>
                                <div class="Details_p">￥99</div>
                                <div class="Details_o">￥199</div>
                            </div>
                            <div class="Details_r">
                                <div class="Details_r_P">马上抢购</div>
                                <div class="Details_r_n"><span>21</span>人已购买</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import classHeader from '@/components/class_header';
    export default {      
         components:{
            classHeader
        },
    }
</script>
<style lang="less" scoped>
    .Shop{
        width: 100%;
        overflow: hidden;
        background-color: #fff;
        margin-bottom: 1rem;
        .Shop_at{
            width: 7.1rem;
            overflow: hidden;
            margin: auto;
            border-bottom: 2px solid #C8C7C8;
            .Shop_at_goods{
                width: 100%;
                height: 2.55rem;
                img{
                    display: block;
                    float: left;
                    width: 2.25rem;
                    height: 2.55rem;
                }
                .Shop_at_Content{
                    width: 4.7rem;
                    height: 2.55rem;
                    float: right;
                    .Shop_at_Content_tite{
                        width: 100%;
                        height: 1rem;
                        font-size: 0.28rem;
                        color: #333;
                        overflow: hidden;
                        margin-top: 0.05rem;
                    }
                    .Details{
                        width: 100%;
                        height: 1.2rem;
                        // background-color: red;
                        .Details_l{
                            width: 3.15rem;
                            height: 1.3rem;
                            // background-color: darkblue;
                            float: left;
                            .Details_t{
                                width: 100%;
                                height: 0.4rem;
                                overflow: hidden;
                                font-size: 0.24rem;
                                color: #c79a01;
                            }
                            .Details_p{
                                width: 100%;
                                height: 0.5rem;
                                overflow: hidden;
                                font-size: 0.42rem;
                                color: #f02b2b;
                            }
                            .Details_o{
                                width: 100%;
                                height: 0.4rem;
                                overflow: hidden;
                                color: #999999;
                                font-size: 0.24rem;
                                text-indent: 0.1rem;
                                text-decoration:line-through;
                            }
                        }
                        .Details_r{
                            width: 1.55rem;
                            height: 1.1rem;
                            // background-color: #C79A01;
                            float: right;
                            margin-top: 0.1rem;
                            .Details_r_P{
                                 background-color: #C79A01;
                                 width: 100%;
                                 height: 0.65rem;
                                 border-radius: 0.1rem;
                                 color: #fff;
                                 font-size: 0.24rem;
                                 line-height: 0.65rem;
                                 text-align: center;
                                 cursor: pointer;
                                 display: block;;
                            }
                            .Details_r_n{
                                width: 100%;
                                height: 0.45rem;
                                line-height: 0.45rem;
                                font-size: 0.2rem;
                                text-align: right;
                                span{
                                    color: #F02B2B;
                                    font-size: 0.2rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .Shop .active{
        .Shop_at_goods{
            .Shop_at_Content{
                .Details{
                    .Details_l{
                        .Details_t{
                            color:  #f02b2b;
                        }
                    }
                    .Details_r{
                        .Details_r_P{
                            background-color: #72BE53;
                        }
                    }
                }
            }
           
        }
    }
</style>
