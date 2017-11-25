<template>
<div class="footer_shop" v-bind:class="{ active: isActive}">
    <ul class="footer_shop_ul" v-bind:class="{ active: isActive}">
        <li class="fl active">收藏</li>
        <li class="fl" v-on:click="on">加入购物车</li>
        <li class="fl" v-on:click="on">立即购买</li>
    </ul>
    <div class="footer_shop_O">
        <div class="Options">
            <i class="close" v-on:click="close">
                <img src="../assets/images/shop_close.png" alt="">
            </i>
            <div class="Options_at">
                <div class="Options_name">
                    <img class="Options_img" :src="Options_name.img" :alt="Options_name.text">
                    <div class="Options_caption">
                        <div class="Options_caption_tite">{{Options_name.name}}</div>
                        <div class="Options_caption_number">￥<span>{{Options_name.number}}</span></div>
                    </div>
                </div>
                <div class="Options_select">
                    选择
                </div>
                <div class="Options_choice">
                    <span v-for="(item,index) in option" :key="item.id" :class="{active:bActive == index}" @click="addClass(index)">{{item.Sizr}}</span>
                </div>
                <div class="Options_count">
                    <div class="Options_count_l">数量</div>
                    <div class="Options_count_r">
                        <span class="Modified" @click="plus">+</span><span class="num">{{ result }}</span><span class="Modified" @click="minus">-</span>
                        <div class="Stock">库存：<i>{{sum_total}}</i>件</div>
                    </div>
                </div>
                <div class="Options_money">
                    共<span class="Piecework">{{ result }}</span>件<span class="total">共计<i class="unit">￥</i><i class="money_num">{{Amount}}</i></span>
                </div>
            </div>
            <div class="Options_buy">
                <span v-on:click="close">加入购物车</span><span v-on:click="close">马上购买</span>
            </div>
        </div>
    </div> 
    <div class="background" v-on:click="close">
        
    </div>
</div>
 
</template>
<script>
    export default {
      name : 'footer_shop',
        data(){ 
            return {
                // name: '123' ,
                 isActive: false, 
                 Options_name: {
                        // 图片
                        img:require('@/assets/images/Options_shop.png'),
                        // 图片说明
                        text:'产品图片',
                        // 产品name
                        name:'和玉缘 和田玉转运珠吊坠路路通挂件 白玉挂件',
                        // 价格
                        number:'2980.00',        
                },
                option:[
                    {Sizr:'白玉'},
                    {Sizr:'碧玉'},
                    {Sizr:'白玉'},
                    {Sizr:'碧玉'},
                    {Sizr:'蓝玉'},
                ],
                 // 库存
                sum_total:7,
                result: 1,
                Amount:0,
                bActive: false,
            
            } 
        },
        mounted(){
            // 初始化获取商品价格赋值给data里面Amount
            this.Amount = this.Options_name.number;
        },
        methods:{
            on: function (event) {  
                if(this.isActive==false){
                    this.isActive=true;
                };
            },
            close: function (event){
                if(this.isActive==true){
                    this.isActive=false;
                };  
            },
            // 购物车数量减
            minus() {
                this.result--; 
                // (this.Options_name.number)  
                //this.$emit('input', {res: this.result, other: '--'})
                if(this.result<=1){
                    this.result=1
                    this.Amount=this.result*(this.Options_name.number)
                    return;  
                }
                this.Amount=this.result*(this.Options_name.number)
                    return; 
            },
            // 购物车数量加
            plus() {
                this.result++;
                //this.$emit('input', {res: this.result, other: '++'})
                if(this.result>=this.sum_total){
                    this.result=this.sum_total
                    this.Amount=this.result*(this.Options_name.number)
                    return;
                }
                this.Amount=this.result*(this.Options_name.number)
                    return;
            },
            addClass(index){
                this.bActive = index;
            }
        }
    }
</script>
<style lang="less" scoped>
@import '~@/assets/css/color.less';
    .footer_shop{
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        height:1rem;
        // background:#fff;
        // opacity:0.3;
        border-top:2px solid #d19e29;
        box-sizing:box-border;
        z-index: 9;
         &.active{
             height: 100%;
             .footer_shop_O{
                 width: 100%;
                 //height: 7.6rem;
                 position: absolute;
                 bottom: 0;
                 left: 0;
                 background:#fff;
                 z-index: 11;
                 .Options{
                    width: 100%;
                    height: 100%;
                    position: relative; 
                    &.active{
                        display: none;
                    }
                    .close{
                        display: block;
                        width: 0.6rem;
                        height: 0.6rem;
                        position: absolute;
                        top: 0.1rem;
                        right: 0.2rem;
                        z-index: 12;
                        //background-color: red;
                        img{
                            width: 0.34rem;
                            height: 0.34rem;
                            display: block;
                            margin: auto;
                            margin-top: 0.1rem;
                        }
                    }
                    .Options_at{
                        width: 7.1rem;
                        height: 100%;
                        margin: auto;
                        .Options_name{
                            width: 100%;
                            height: 1.9rem;
                            position: relative;
                            .Options_img{
                                width: 1.8rem;
                                height: 1.8rem;
                                border-radius: 0.1rem;
                                position: absolute;
                                top:-0.2rem;
                                left: 0;
                                border: 2px solid #DFE3E4;
                            }
                            .Options_caption{
                                width: 4.6rem;
                                height: 1.3rem;
                                float: right;
                                margin-right: 0.6rem;
                                margin-top: 0.22rem;
                                overflow: hidden;
                                .Options_caption_tite{
                                    width: 100%;
                                    height: 0.95rem;
                                    line-height: 0.475rem;
                                    font-size: 0.26rem;
                                    overflow: hidden;
                                    color: @black;
                                }
                                .Options_caption_number{
                                    font-size: 0.26rem;
                                    color: @red;
                                    span{
                                        font-size: 0.32rem;
                                    }
                                }
                            }
                        }
                        .Options_select{
                            width: 100%;
                            height: 0.8rem;
                            font-size: 0.32rem;
                            line-height: 0.8rem;
                            color:#757575;
                            text-indent: 0.25rem;
                        }
                        .Options_choice{
                            width: 6.55rem;
                            margin: auto;
                            overflow: hidden;
                            //padding-bottom: 0.25rem;
                            // background-color: red;
                            border-bottom: 1px solid #E9ECED;
                            span{
                                width: 1.2rem;
                                height: 0.75rem;
                                display: block;
                                border: 1px solid #D8D8D8;
                                float: left;
                                margin-right: 0.25rem;
                                margin-bottom: 0.25rem;
                                line-height: 0.75rem;
                                text-align: center;
                                font-size: 0.3rem;
                                color:@black;
                                overflow: hidden;
                                border-radius: 5px;
                                 &.active{
                                     border: 1px solid @red;
                                     color:@red;
                                 }
                            }
                        }
                        .Options_count{
                            width: 6.55rem;
                            height: 1.35rem;
                            overflow: hidden;
                            border-bottom: 1px solid #E9ECED;
                            margin: auto;
                            .Options_count_l{
                                width: 1.4rem;
                                height: 1.35rem;
                                float: left;
                                line-height: 1.35rem;
                                font-size: 0.32rem;
                                color:#757575;
                            }
                            .Options_count_r{
                                float: right;
                                height: 1.35rem;
                                span{
                                    display: block;
                                    float: right;
                                    margin-top: 0.3rem;
                                    width: 0.7rem;
                                    height: 0.75rem;
                                    border: 1px solid #E9ECED;
                                    text-align: center;
                                    line-height: 0.75rem;
                                    font-size: 0.43rem;
                                    color: #757575;
                                }
                                .Modified{
                                    cursor: pointer;
                                }
                                .num{
                                    width: 1rem;
                                    overflow: hidden;
                                }
                                .Stock{
                                    height: 1.35rem;
                                    float: right;
                                    margin-right: 0.2rem;
                                    color: #757575;
                                    line-height: 1.35rem;
                                    font-size: 0.24rem;
                                    i{
                                        font-size: 0.24rem;
                                        margin-right: 0.1rem; 
                                    }
                                }             
                            }
                        }
                        .Options_money{
                            width: 6.55rem;
                            height: 1.2rem;
                            line-height: 1.2rem;
                            margin: auto;
                            font-size: 0.32rem;
                            text-align: right;
                            color: #666666;
                            .Piecework{
                                color: @red;
                                font-size: 0.32rem;
                                margin-left: 15px;
                                margin-right: 15px;
                            }
                            .total{
                                font-size: 0.32rem; 
                                color: #666666;
                                margin-left: 0.3rem;
                                .unit{
                                    font-size: 0.32rem;
                                    color: @red;
                                    font-weight: 600; 
                                }
                                .money_num{
                                    color: @red;
                                    font-size: 0.36rem;
                                    font-weight: 600; 
                                }
                            }
                        }
                    }
                    .Options_buy{
                        width: 100%;
                        height: 1rem;
                        span{
                            display: block;
                            width: 50%;
                            height: 1rem;
                            line-height: 1rem;
                            font-size: 0.32rem;
                            color:#fff;
                            text-align: center;
                            float: left;
                            cursor: pointer;
                        }
                        span:nth-child(1){
                            background-color: #E8C441;
                        }
                        span:nth-child(2){
                            background-color: #D19E29;
                        }
                    }
                }    
             }
             .background{
                width: 100%;
                height: 100%;
                position: absolute;
                top:0;
                left: 0;
                background-color: @black;
                opacity:0.6;
                z-index: 10;     
             }
         }
        .footer_shop_ul{
            width: 100%;
            height: 1rem;
            background-color: #fff;
            &.active{
                display: none;
            }
            li{
                width:33.33%;
                height:100%;
                box-sizing:box-border;
                line-height: 1rem;
                text-align: center;
                cursor: pointer;
                display: block;
            }
            li:nth-child(1){
                font-size:.2rem;
                line-height: 1.4rem;
                background:url(../assets/images/footer_star.png) no-repeat center .15rem;
                background-size:.39rem .37rem;
                &.active{
                    color: @pale;
                    background:url(../assets/images/footer_star.png) no-repeat center .15rem;
                    background-size:.39rem .37rem;
                }
                }
            li:nth-child(2){
                background-color: #E8C441;
                color:#fff;
                font-size: 0.32rem;
                
            }
            li:nth-child(3){
                background-color: #D19E29;
                color:#fff;
                font-size: 0.32rem;
            }
        }
     
      
    }
</style>

