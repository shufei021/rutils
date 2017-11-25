<template>
  <div class="Consult">
       <div v-title data-title="商品咨询">商品咨询</div>
        <header-Detailed :title="title"></header-Detailed>
        <div class="ShopSize_top">
            <router-link to="../ForDetailed" class="ShopSize_top_a">图文详情</router-link>
            <router-link to="../ShopSize" class="ShopSize_top_a">规格参数</router-link>
            <router-link to="../Reviews" class="ShopSize_top_a">商品评论</router-link>
            <router-link to="../Consult" class="ShopSize_top_a active">商品咨询</router-link>
        </div>
        <div class="Consult_text">
            <div class="Consult_text_loop" v-for="item in consult" :key="item.id">
                <div class="Consult_at">
                    <div class="Consult_ask">
                        <span class="ask">问</span>
                        <div class="tite">{{item.matter}}</div>
                    </div>
                    <div class="Consult_ask">
                        <span class="ask active">答</span>
                        <div class="tite active">{{item.answer}}</div>
                    </div>
                    <div class="Time">{{item.Time}}</div>
                </div>
                
            </div>
            
        </div> 
        <div class="footer_quiz">
            <input type="text" placeholder="请输入您想咨询的问题...">
            <span>提交</span>      
        </div>
  </div>
</template>
<script>
import headerDetailed from '@/components/header_Detailed';
    export default {
        name:'Consult',
        data(){
            return{
                title:'商品咨询' ,
                consult:[
                    {matter:'质量怎么样？ 值得买吗？',answer:'商城质量绝对有保障',Time:'2017/12/9'},
                    {matter:'质量怎么样？ 值得买吗？',answer:'商城质量绝对有保障',Time:'2017/12/9'},
                    {matter:'质量怎么样？ 值得买吗？',answer:'商城质量绝对有保障',Time:'2017/12/9'},

                ]
            }
        },
        components:{
            headerDetailed,
            
        },
    }
</script>
<style lang="less" scoped>
@import '~@/assets/css/color.less';
    .Consult{
        .ShopSize_top{
            width:100%;
            height: 0.75rem;
            background-color: #fff;
            overflow: hidden;
            margin-bottom: 0.1rem;
            .ShopSize_top_a{
                width: 25%;
                height: 0.75rem;
                text-align: center;
                line-height: 0.75rem;
                color: #333;
                display: block;
                float: left;
                font-size: 0.25rem;
                overflow: hidden;
                &.active{
                    font-size: 0.3rem;
                    border-bottom: 2px solid #d19e29;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                }
               
            }
        }
        .Consult_text{
            width: 100%;
            overflow: hidden;
            background-color: #fff;
            margin-bottom: 1rem;
            .Consult_text_loop{
                width: 100%;
                overflow: hidden;
                border-bottom: 2px solid #E7E7E7;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                .Consult_at{
                    width: 7.1rem;
                    margin: auto;
                    overflow: hidden;
                    .Consult_ask{
                        width: 100%;
                        margin-top: 0.2rem;
                        // height: 0.4rem;
                        overflow: hidden;
                        .ask{
                            font-size: 0.24rem;
                            width: 0.38rem;
                            height: 0.38rem;
                            line-height: 0.38rem;
                            text-align: center;
                            background-color: @pale;
                            display: block;
                            color: #fff;
                            float: left;
                            margin-top: 0.06rem;
                            &.active{
                                background-color: #91D296;
                            }
                        }
                        .tite{
                            width: 6.5rem;
                            float: right;
                            font-size: 0.32rem;
                            color:@black;
                            overflow: hidden;
                            //height: 0.4rem;
                            &.active{
                                font-size: 0.28rem;
                            }
                        }
                    }
                    .Time{
                        width: 100%;
                        height: 0.6rem;
                        line-height: 0.6rem;
                        color:#999999;
                        font-size: 0.24rem;
                        text-align: right;
                    }
                }
            }
        }
        .footer_quiz{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1rem;
            border-top: 2px solid #d19e29;
            background-color: #fff;
            -webkit-box-sizing: box-border;
            box-sizing: box-border;
            z-index: 9;
            input{
                width: 6.2rem;
                height: 0.7rem;
                display: block;
                float: left;
                margin-top: 0.15rem;
                margin-left: 0.2rem;
                outline: none;
                background-color: #F1F1F1;
                border: none;
                border-radius: 0.1rem;
                text-indent: 0.3rem;
                font-size: 0.28rem;
            }
            span{
                width: 0.9rem;
                height: 0.7rem;
                display: block;
                float: left;
                margin-top: 0.15rem;
                line-height: 0.7rem;
                text-align: center;
                font-size: 0.32rem;
                color: #f15b17;
                cursor: pointer;
            }
        }
    }
</style>
