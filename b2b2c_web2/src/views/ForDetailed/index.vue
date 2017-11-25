<template>
    <div class="ForDetailed">
        <div v-title data-title="抢购产品详情">抢购产品详情</div>
        <header-Detailed :title="title"></header-Detailed>   
          <!-- 轮播false -->
        <div class="Detailed_swipe">
            <mt-swipe :show-indicators="true">
                <mt-swipe-item v-for="item in shop" :key="item.id">
                        <img :src="item.shop" :alt="item.text">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="Product_Details">
            <div class="Product_Details_at">
                <div class="Product_Details_title">
                    <div class="Product_Details_title_l">
                        玉萌色 和田玉碧玉吊坠金镶玉平安扣吊坠18k金镶碧玉玉坠玉石挂件
                    </div>
                    <div class="Product_Details_title_r">
                        <img src="../../assets/images/Share.png" alt="">
                        <div class="Share">分享</div>
                    </div>
                </div>
                <div class="Time">抢购剩余时间:365天12小时50分钟23秒</div>
                <div class="Amount">￥<span>2980.00</span></div>
            </div>
        </div>
        <div class="Detailed_Promotion">
            <div class="Detailed_Promotion_at">
                <div class="Detailed_Promotion_at_l">促销</div>
                <div class="Detailed_Promotion_at_r">
                    <div class="Detailed_Promotion_g">
                        <span>满赠</span>购买￥200.00，赠精美包装礼盒
                    </div>
                    <div class="Detailed_Promotion_g">
                        <span>满减</span>单笔订单满￥88.00，立减￥20.00
                    </div>
                </div>
            </div>
        </div>
        <div class="Detailed_Promotion">
            <div class="Detailed_Promotion_at">
                <div class="Detailed_Promotion_at_y">已选</div>
                <div class="Detailed_Promotion_x">颜色：白玉，数量1</div>
            </div>
        </div>
        <div class="Detailed_Shop">
            <div class="Detailed_Shop_at">
                <div class="Detailed_Shop_top">
                    <img  v-for="item in logo" :key="item.id" :src="item.logo" :alt="item.text">
                    <div class="Detailed_Shop_title">
                        <div class="name">和田缘分店</div>
                        <div class="About">玉缘人缘，以玉结缘</div>
                    </div>
                </div>
                <div class="Detailed_Shop_Content">
                    <div class="Detailed_Shop_Content_fl">
                        <div class="num">10</div>
                        <div class="Content">全部宝贝</div>
                    </div>
                    <div class="Detailed_Shop_Content_fl">
                        <div class="num">5355</div>
                        <div class="Content">关注人数</div>
                    </div>
                    <div class="Detailed_Shop_Content_fl none">
                        <div class="Related">描述相符<span>4.80</span></div>
                        <div class="Related">服务态度<span>4.80</span></div>
                        <div class="Related">发货速度<span>4.80</span></div>
                    </div>
                </div>
                <div class="Link">
                    <span class="fl">查看分类</span>
                    <span class="fl Stroll">进店逛逛</span>
                </div>
            </div>
        </div>
        <!-- 推荐套餐 -->
        <div class="Detailed_Package">
            <div class="Detailed_Package_at">
                <div class="heading">{{Package}}</div>
                <!-- <div class="Detailed_shop"></div> -->
                <Detailed-Referral :ShopImg="ShopImg"></Detailed-Referral>
            </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class="Detailed_Package">
            <div class="Detailed_Package_at">
                <div class="heading color">
                    {{linke}}
                    <div class="Change">换一批</div>
                </div>
                <!-- <div class="Detailed_shop"></div> -->
                <Detailed-Referral :ShopImg="ShopImg"></Detailed-Referral>
            </div>
        </div>
        <div class="Evaluate">
            <router-link to="ForDetailed" class="Evaluate_a active">图文详情</router-link>
            <router-link to="../ShopSize" class="Evaluate_a">规格参数</router-link>
            <router-link to="../Reviews" class="Evaluate_a">商品评论</router-link>
            <router-link to="../Consult" class="Evaluate_a">商品咨询</router-link>
        </div>
        <Footer-Shop></Footer-Shop>
        <!-- <Detailed-Referral :Package="Package" >
            
        </Detailed-Referral>
          <Detailed-Referral :linke="linke" >
            
        </Detailed-Referral> -->
    </div>   
</template>

<script>

import headerDetailed from '@/components/header_Detailed';
import FooterShop from '@/components/footer_shop';
import DetailedReferral from './Detailed_Referral';
    export default {
        name : 'ForDetailed',
        data(){
            return{
                title:'产品详情' ,
                shop:[
                    {shop:require('@/assets/images/shouzuo.png'),text:'产品图片'},
                    {shop:require('@/assets/images/shouzuo.png'),text:'产品图片'},
                    {shop:require('@/assets/images/shouzuo.png'),text:'产品图片'},
                ],
                logo:[
                    {logo:require('@/assets/images/shouzuo.png'),text:'商家logo'}
                ],
                Package:'搭配套餐推荐',
                    // {text1:'猜你喜欢'},
                linke:'猜你喜欢',
                ShopImg:[
                    {
                        shop:require('@/assets/images/Detailed_shop.png'),
                        text:'产品图片',
                        ShopName:'和玉缘 和田玉白玉路路通转运珠吊坠1...',
                        number:'188.00'
                        },
                    {
                        shop:require('@/assets/images/Detailed_shop.png'),
                        text:'产品图片',
                        ShopName:'和玉缘 和田玉白玉路路通转运珠吊坠2...',
                        number:'198.00'
                        },
                    {
                        shop:require('@/assets/images/Detailed_shop.png'),
                        text:'产品图片',
                        ShopName:'和玉缘 和田玉白玉路路通转运珠吊坠3...',
                        number:'200.00'
                        },
                ],
               

            }
             
        },
        components:{
            headerDetailed,
            FooterShop,
            DetailedReferral,
            
        },
    }
</script>

<style lang="less">
@import '~@/assets/css/color.less';
.ForDetailed{
    .Detailed_swipe{
        height: 7.5rem;
        .mint-swipe{
            width: 100%;
            overflow: hidden;
            .mint-swipe-items-wrap{
                .mint-swipe-item{
                    img{
                        width: 100%;
                        overflow: hidden;
                    }   
                }
            }
            .mint-swipe-indicators{
                position: absolute;
                bottom: 10px;
                left: 50%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
                .mint-swipe-indicator{
                    width: 0.2rem;
                    height: 0.2rem;
                }
                .mint-swipe-indicator.is-active{
                    background-color: #DAB154;
                }
            } 
        }   
        
    }
    .Product_Details{
        width: 100%;
        height: 2.75rem;
        overflow: hidden;
        .Product_Details_at{
            width: 7.1rem;
            height: 2.5rem;
            margin: auto;
            margin-top: 0.25rem;
            //background-color: red;
            .Product_Details_title{
                width: 100%;
                height: 0.9rem;
                .Product_Details_title_l{
                    width: 6.3rem;
                    height: 0.9rem;
                    overflow: hidden;
                    font-size: 0.36rem;
                    color: #333;
                    float: left;
                }
                .Product_Details_title_r{
                    width: 0.8rem;
                    height: 0.9rem;
                    float: left;
                    cursor: pointer;
                    img{
                        display: block;
                        width: 0.39rem;
                        height: 0.42rem;
                        float: right;
                        margin-top: 0.1rem;
                    }
                    .Share{
                        width: 100%;
                        text-align: right;
                        font-size: 0.24rem;
                        float: left;
                        color: #555555;
                    }
                }
            }
            .Time{
                width: 100%;
                height: 0.3rem;
                line-height: 0.3rem;
                margin-top: 0.3rem;
                font-size: 0.25rem;
                color:@pale;
            }
            .Amount{
                width: 100%;
                overflow: hidden;
                margin-top: 0.3rem;
                color:@red;
                font-size: 0.4rem;
                span{
                    font-size: 0.48rem;
                }
            }
        }
    }
    .Detailed_Promotion{
        width: 100%;
        height: 1.25rem;
        background-color: #fff;
        border-bottom: 2px solid #F5F5F5;
        .Detailed_Promotion_at{
            width:7.1rem;
            height: 100%;
            margin: auto;
            .Detailed_Promotion_at_l{
                width: 0.7rem;
                height: 100%;
                font-size: 0.25rem;
                color:#777777;
                line-height: 0.75rem;
                float: left;
            }
            .Detailed_Promotion_at_r{
                width: 6.4rem;
                height: 100%;
                float: left;
                //background-color: red;
                .Detailed_Promotion_g{
                    width: 100%;
                    height: 0.3rem;
                    margin-top: 0.24rem;
                    line-height: 0.3rem;
                    font-size: 0.24rem;
                    color: #666666;
                    span{
                        color: #f23030;
                        font-size: 0.2rem;
                        border: 1px solid #f23030;
                        padding:1px 5px; 
                        border-radius: 0.03rem;
                        margin-right: 0.2rem;
                    }
                }
                
            }
            .Detailed_Promotion_x{
                width: 6.4rem;
                height: 100%;
                //background-color: red;
                float: left;
                font-size: 0.3rem;
                line-height: 1.25rem;
                text-indent: 0.5rem;
                color: #333333;
            }
            .Detailed_Promotion_at_y{
                width: 0.7rem;
                height: 1.25rem;
                line-height: 1.25rem;
                font-size: 0.25rem;
                color: #777777;
                float: left;
            }
        }
    }
    .Detailed_Shop{
        width: 100%;
        height: 3.95rem;
        overflow: hidden;
        margin-top: 0.2rem;
        background-color: #fff;
        .Detailed_Shop_at{
            width: 7.1rem;
            height: 100%;
            margin: auto;
            overflow: hidden;
            .Detailed_Shop_top{
                width: 100%;
                height: 1rem;
                margin-top: 0.25rem;
                img{
                    width: 0.95rem;
                    height: 0.95rem;
                    display: block;
                    border: 1px solid #DFDFDF;
                    float: left;
                }
                .Detailed_Shop_title{
                    width: 5.85rem;
                    height: 100%;
                    float: right;
                    overflow: hidden;
                    //background-color: red;
                    .name{
                        width: 100%;
                        height: 0.55rem;
                        line-height: 0.55rem;
                        font-size: 0.32rem;
                        color: #333;
                    }
                    .About{
                        font-size: 0.24rem;
                        color: #999999;
                    }

                }
            }
            .Detailed_Shop_Content{
                width: 100%;
                height: 1.15rem;
                overflow: hidden;
                margin-top: 0.15rem;
                .Detailed_Shop_Content_fl{
                    width: 33.3%;
                    height: 100%;
                    overflow: hidden;
                    float: left;
                    border-right: 1px solid #E8E8E8;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    .num{
                        width: 100%;
                        height: 0.7rem;
                        line-height: 0.7rem;
                        font-size: 0.32rem;
                        color: #333;
                        text-align: center;
                    }
                    .Content{
                        font-size: 0.24rem;
                        color: #999999;
                        width: 100%;
                        text-align: center;
                    }
                    .Related{
                        width: 100%;
                        height: 0.4rem;
                        line-height: 0.4rem;
                        color: #999999;
                        font-size: 0.24rem;
                        overflow: hidden;
                        text-indent: 0.2rem;
                        span{
                            color: #d2ae34;
                             font-size: 0.24rem;
                             margin-left: 0.25rem;
                        }
                    }
                }
                .none{
                    border-right: none;
                }
            }
            .Link{
                width: 100%;
                margin-top: 0.5rem;
                height: 0.52rem;   
                .fl{
                    width: 1.5rem;
                    height: 0.5rem;
                    border: 1px solid @pale;
                    display: block;
                    margin-left: 1.75rem;
                    float: left;
                    border-radius: 0.25rem;
                    line-height: 0.5rem;
                    text-align: center;
                    color: @pale;
                    font-size: 0.24rem;
                    cursor: pointer;
                }
                .Stroll{
                    margin-left: 0.6rem;
                }
            }
        }
    }
    .Detailed_Package{
        width: 100%;
        height: 4.35rem;
        background-color: #fff;
        margin-top: 0.1rem;
        overflow: hidden;
        .Detailed_Package_at{
            width: 7.1rem;
            height: 100%;
            margin: auto;
            .heading{
                width: 100%;
                font-size: 0.28rem;
                color: #333;
                line-height: 0.85rem;
                height: 0.85rem;
            }
            .color{
                color: @red;
                position: relative;
                .Change{
                    position: absolute;
                    right: 0;
                    top:0;
                    height: 0.85rem;
                    line-height: 0.85rem;
                    font-size: 0.24rem;
                    color: #333;
                    cursor: pointer;
                }
            }
            
        }
    }
    .Evaluate{
        width: 100%;
        height: 0.75rem;
        overflow: hidden;
        margin-top: 0.15rem;
        background-color: #fff;
        margin-bottom: 1.2rem;
        .Evaluate_a{
            width: 25%;
            height: 0.75rem;
            line-height: 0.75rem;
            display: block;
            float: left;
            text-align: center;
            font-size: 0.25rem;
            color: @black;
             &.active{
                font-size: 0.29rem;
                border-bottom: 2px solid @pale;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
             }
        }
        .Evaluate_a:hover{
            font-size: 0.29rem;
            border-bottom: 2px solid @pale;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
    }
    // .aaa{
    //     height: 1rem;
    // }
}  
</style>


 