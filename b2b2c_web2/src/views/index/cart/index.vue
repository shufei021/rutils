<template>
    <div class="goos">
        <div v-title data-title="我的购物车">我的购物车</div>
        <header class="cart-header">我的购物车(23)</header>
        <dl class="mark-wrap">
            <dt>碧玉尊店
                <span class="clearfix" @click="deit">
                    <i class="fl">{{total.fn}}</i>
                    <em class="fl"></em>
                </span>
            </dt>
            <dd class="clearfix" v-for="(item,index) in 4" :key="item.id" :class="{active:!total.deit}">
                <label class="checkBox" :class="{active:status[index]}" @click="addCom(index,item)"><span></span></label>
                <img class="fl">
                <div class="pull-right fl" v-show="total.deit">
                    <p class="text">碧玉尊 飘绿翡翠手镯女士玉镯子 老坑翡翠玉石手镯女款镯子A货</p>
                    <p class="price-wrap clearfix">
                        <span class="fl price">￥<span>1555.09</span></span>
                        <span class="number fr">x2</span>
                    </p>
                </div>
                <div class="delete fr" v-show="!total.deit" @click="remove(index,item)">
                    <div class="icon"></div>
                    <div class="text">删除</div>
                </div>
                <div class="input-wrap fr" v-show="!total.deit">
                    <button>-</button>
                    <input type="number" v-model="item.goods_num">
                    <button>+</button>
                </div>
            </dd>
        </dl>
        <div class="cart-active text-center" v-if="!$store.state.cart_data">
            <img src="../../../assets/images/cart.png">
            <p class="text">您的购物车没有任何商品，快去逛逛吧！</p>
        </div>
        <div class="footer-wrap">
            <div class="seat"></div>
            <div class="footer clearfix">
                <label class="chicked fl" :class="{active:this.total.seat}" @click="seat">
                    <span></span>{{total.setData}}
                </label>
                <button class="set-btn fr" v-show="total.deit">去结算({{total.seleNumber}})</button>
                <div class="total fr" v-show="total.deit">
                    <div class="total-metre clearfix">
                        <span class="title fl">总计&nbsp;:&nbsp;</span>
                        <span class="con fl">￥<span>{{total.price.toFixed(2)}}</span></span>
                    </div>
                    <div class="total-price">
                        总额：￥{{total.price.toFixed(2)}}&nbsp;&nbsp;优惠：￥{{total.dis}}
                    </div>
                </div>
                <div class="immig fr" v-show="!total.deit">移入收藏</div>
                <div class="share fr" v-show="!total.deit">确定</div>
            </div>
        </div>
    </div>
</template>
<script>
    import { MessageBox,Toast } from 'mint-ui';
    export default {
        name : 'cart',
        data(){
            return {
                load:false,
                load_wrap:true,
                total:{
                    seleNumber:0,
                    newPrice:0,
                    price:0,
                    dis:0,
                    seat:'',
                    deit:true,
                    setData:'全选',
                    fn:'编辑'
                },
                scrollWatch:true,
                data:'',
                status:[],
                computer:'',
                goos_id:[],
                goods:[]
            }
        },
        methods:{
            addCom(index,item){//单选
                if(this.status[index] == true){
                    this.$set(this.status,index,false);
                    this.total.seleNumber--;
                }else{
                    this.$set(this.status,index,true);
                    this.total.seleNumber++;
                }
                if(this.total.seleNumber >= 4){
                    this.total.seat = true;
                }else{
                    this.total.seat = false;
                }
            },
            seat(){//全选
                if(this.total.seat == true){
                    this.total.seat = false;
                    for(let i = 0; i < 4; i++){
                        this.$set(this.status,i,false);
                    }
                    this.goos_id = [];
                    this.goods = [];
                    this.total.seleNumber =  0;
                    this.total.price = 0;
                }else{
                    this.total.seat = true;
                    for(let i = 0; i < 4; i++){
                        this.$set(this.status,i,true);
                    }
                    this.total.seleNumber = 4;
                }
            },
            deit(){//编辑购物车
                if(this.total.deit == true){
                    this.total.fn = '完成';
                    this.total.deit = false;
                }else{
                    this.total.fn = '编辑';
                    this.total.deit = true;
                }
            },
            remove(index,item){//从购物车中删除商品
                MessageBox.confirm('确定删除此商品?').then(action => {
                        Toast('删除成功！');
                }).catch((err) => {
                    console.log(err);
                }); 
            },
        },
        components:{
            
        },
        mounted() {
            document.body.scrollTop = 0;
            
        },
        destroyed(){
            this.scrollWatch = false;
        }
    }
</script>
<style lang="less" scoped>
    .goos{
        background:#f1f1f1;
        padding-bottom:1rem;
        .footer-wrap{
            .seat{
                height:1rem;
            }
            .footer{
                position:fixed;
                left:0;
                bottom:1rem;
                width:7.3rem;
                padding-left:.2rem;
                height:1rem;
                background:#fff;
                .chicked.active{
                    color:#d19e29;
                    span{
                        border:none;
                        background:url(../../../assets/images/ok.png) no-repeat;
                        background-size:100% 100%;
                    }
                }
                .share{
                    width:1.83rem;
                    height:1rem;
                    line-height:1rem;
                    color:#fff;
                    text-align:center;
                    font-size:.36rem;
                    background:#e8c441;
                }
                 .immig{
                    width:2.72rem;
                    height:1rem;
                    line-height:1rem;
                    background:#d19e29;
                    color:#fff;
                    text-align:center;
                    font-size:.36rem;
                 }
                .set-btn{
                    width:2.5rem;
                    color:#fff;
                    height:100%;
                    border:none;
                    text-align:center;
                    line-height:1rem;
                    background:#d19e29;
                    font-size:.36rem;
                }
                .total{
                    padding-right:.1rem;
                    .total-metre{
                        padding-top:.1rem;
                        .title{
                            font-size:.3rem;
                            color:#757575;
                        }
                        .con{
                            font-size:.3rem;
                            color:#e02828;
                            span{
                                font-size:.36rem;
                                font-weight:bold;
                            }
                        }
                    }
                    .total-price{
                        font-size:.18rem;
                        color:#999;
                    }
                }
                .chicked{
                    position:relative;
                    padding-left:.55rem;
                    line-height:1rem;
                    font-size:.28rem;
                    color:#999;
                    span{
                        position:absolute;
                        top:50%;
                        left:0;
                        width:.4rem;
                        height:.4rem;
                        border:1px solid #8d8d8d;
                        border-radius:100%;
                        margin-top:-.2rem;
                        text-align:center;
                        line-height:.4rem;
                        color:#f9781e;
                    }
                }
            }
        }
        .interested{
            .title{
                text-align:center;
                position:relative;
                font-size:.28rem;
                line-height:.8rem;
                height:.8rem;
                color:#666;
                span{
                    position:absolute;
                    top:50%;
                    width:2.3rem;
                    height:1px;
                    background:#cdcdcd;
                }
                span:nth-child(1){
                    left:0;
                }
                span:nth-child(2){
                    right:0;
                }
            }
            .content-main{
                background:#f1f1f1;
                li{
                    width:3.7rem;
                    height:4.96rem;
                    background:#fff;
                    margin-bottom:.1rem;
                    margin-right:.08rem;
                    img{
                        width:3.7rem;
                        height:3.7rem;
                    }
                    .desi{
                        font-size:.3rem;
                        color:#333;
                        padding:.2rem .2rem;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }
                    .price{
                        padding-left:.2rem;
                        color:#e02828;
                        font-size:.3rem;
                        span{
                            font-size:.36rem;
                        }
                    }
                }
                li:nth-child(2n){
                    margin-right:0;
                }
            }
        }
        .cart-active{
            padding-top:1rem;
            img{
                width: 3.07rem;
                width: 2.74rem;
            }
            .text{
                font-size:.32rem;
                color:#666;
                padding-top:.4rem;
            }
        }
    }
    .cart-header{
        width: 100%;
        height: .62rem;
        background: #d19e29;
        padding: .16rem 0;
        overflow: hidden;
        text-align:center;
        position:relative;
        color:#fff;
        font-size:.36rem;
        line-height:.62rem;
        span{
            position:absolute;
            top:50%;
            right:.4rem;
            margin:-.23rem;
            width:.47rem;
            height:.46rem;
            
            background-size:100% 100%;
        }
    }
    .mark-wrap{
        margin-top:.2rem;
        padding:0 .2rem .48rem;
        background:#fff;
        dt{
            width:100%;
            height:.9rem;
            line-height:.9rem;
            text-align:center;
            font-size:.32rem;
            color:#d19e29;
            background:#fff;
            border-bottom:1px solid #dfdfdd;
            position:relative;
            span{
                position:absolute;
                right:.2rem;
                top:50%;
                height:.31rem;
                margin-top:-.155rem;
                color:#999;
                line-height:.31rem;
                i{
                    font-style:normal;
                    font-size:.24rem;
                    padding-right:.2rem;
                }
                em{
                    width:.32rem;
                    height:.31rem;
                    background:url(../../../assets/images/edit.png) no-repeat;
                    background-size:100% 100%;
                }
            }
        }
        dd.active{
            background:#fafafa;
        }
        dd{
            padding:.25rem 0;
            border-bottom:1px solid #dfdfdd;
            padding-left:.7rem;
            height:1.55rem;
            position:relative;
            img{
                width:1.55rem;
                height:1.55rem;
            }
            .delete{
                width:1.2rem;
                height:100%;
                background:#d19e29;
                position:absolute;
                right:0;
                top:0;
                color:#fff;
                text-align:center;
                .icon{
                    width:.51rem;
                    height:.51rem;
                    background:url(../../../assets/images/del.png) no-repeat;
                    background-size:100% 100%;
                    margin:.55rem auto .2rem;
                }
                .text{
                    font-size:.24rem;
                }
            }
            .input-wrap{
                margin-right:1.2rem;
                input[type=number]{
                    border:none;
                    width:1.8rem;
                    text-align:center;
                    font-size:.36rem;
                    color:#333;
                    background:#fafafa;
                    outline:none;
                }
                button{
                    border:none;
                    background:none;
                    color:#999;
                    outline:none;
                    width:.8rem;
                    text-align:center;
                    font-size:.5rem;
                }
            }
            .pull-right{
                padding-left:.2rem;
                .text{
                    width:4.6rem;
                    height:.65rem;
                    font-size:.24rem;
                    color:#333;
                    line-height:.32rem;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
                .price-wrap{
                    padding-top:.4rem;
                    .price{
                        font-size:.26rem;
                        color:#e02828;
                        span{
                            font-size:.38rem;
                        }
                    }
                    .number{
                        font-size:.32rem;
                        color:#333;
                    }
                }
            }
            .checkBox.active{
                color:#ce0a14;
                span{
                    border:none;
                    background:url(../../../assets/images/ok.png) no-repeat;
                    background-size:100% 100%;
                }
            }
            .checkBox{
                position:absolute;
                left:0;
                top:0;
                width:.7rem;
                height:100%;
                span{
                    position:absolute;
                    top:50%;
                    left:0;
                    margin-top:-.2rem;
                    width:.4rem;
                    height:.4rem;
                    border:1px solid #8d8d8d;
                    border-radius:50%;
                    text-align:center;
                    line-height:.4rem;
                    font-size:.3rem;
                    color:#f9781e;
                }
            }
        }
    }
</style>