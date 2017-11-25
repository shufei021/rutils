<template>
    <div class="per-center">
        <div v-title data-title="个人中心">个人中心</div>
        <div class="header-wrap">
            <div class="header-hd">个人中心<router-link to=""><span></span></router-link></div>
            <div class="header-dd-center">
                <!--<div class="setUp"></div>-->
                <div class="icon-wrap" @click="toLink('/seetin')">
                    <img src="">
                </div>
                <div class="admin" @click="toLink('/seetin')"><span></span>账户管理</div>
            </div>
            <div class="status">
                <span class="name">大大</span>
                <span class="member">黄金会员</span>
            </div>
        </div>
        <div class="myOrder clearfix">
            <div class="title fl"><span class="icon"></span>我的订单</div>
            <div class="see fr" @click="toOrder(0)"><span class="icon-right"></span>查看订单</div>
        </div>
        <ul class="nav-link clearfix">
            <li class="fl" v-for="(item,index) in navCon" :key="item.id" @click="toOrder(index+1)">
                <div class="icon-wrap">
                    <img :src="item.imgData" alt="">
                </div>
                <p>{{item.text}}</p>
            </li>
        </ul>
        <!--<div class="myOrder clearfix">
            <div class="title fl"><span class="icon-wallet"></span>我的钱包</div>
            <div class="see fr" @click="toLink('/myWallet')"><span class="icon-right"></span>查看详情</div>
        </div>
        <ul class="account clearfix">
            <li class="fl" @click="toLink('/myWallet')">
                <p class="number"><span class="money">￥</span>19990.<span class="min">00</span></p>
                <p class="balance">账户余额</p>
            </li>
            <li class="fl" @click="toLink('/shares')">
                <p class="number">1000</p>
                <p class="balance">股币</p>
            </li>
            <li class="fl" @click="toLink('/Integral')">
                <p class="number">1000</p>
                <p class="balance">积分</p>
            </li>
        </ul>-->
        <ul class="more clearfix">
            <li class="fl" v-for="(item,index) in more" :key="item.id" @click="toLink(index)">
                <div class="icon-main">
                    <img :src="item.img">
                </div>
                <p>{{item.text}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import qs from 'qs';
    export default {
        name : 'MyAiguxuan',
        data(){
            return {
                more:[
                    {img:require('@/assets/images/coupon.png'),text:'优惠券'},
                    {img:require('@/assets/images/intmall.png'),text:'积分商城'},
                    {img:require('@/assets/images/collection.png'),text:'我的收藏'},
                    {img:require('@/assets/images/footprint.png'),text:'足迹'},
                    {img:require('@/assets/images/auction.png'),text:'我的拍卖'},
                    {img:require('@/assets/images/wallet.png'),text:'我的钱包'},
                    {img:require('@/assets/images/invoice.png'),text:'我的发票'},
                    {img:require('@/assets/images/shop.png'),text:'我要开店'},
                    {img:require('@/assets/images/asses.png'),text:'我的评价'},
                    {img:require('@/assets/images/myAdvice.png'),text:'我的咨询'},
                    {img:require('@/assets/images/service.png'),text:'客服中心'},
                    {img:require('@/assets/images/opinion.png'),text:'意见反馈'},
                ],
                scrollWatch:false,
                navCon:[
                    {text:'待付款',imgData:require('@/assets/images/pendingPay.png')},
                    {text:'待发货',imgData:require('@/assets/images/sptPending.png')},
                    {text:'待收货',imgData:require('@/assets/images/GoodsReceived.png')},
                    {text:'已完成',imgData:require('@/assets/images/penComment.png')},
                    {text:'返修/退货',imgData:require('@/assets/images/returnRepair.png')}
                ],
                data:'',
                user_header:true
            }
        },
        mounted() {
            document.body.scrollTop = 0;
        },
        destroyed(){
            this.scrollWatch = false;
        },
        methods:{
            toOrder(sta){
                if(sta == 5){
                    this.$router.push('/repair')
                    return;
                }
                this.$store.state.status = sta;
                this.$router.push({
                    name:'orderWrap',
                    params:{
                        status:sta
                    }
                });
            },
            toLink(link){
                function isString(str){ 
                    return (typeof str == 'string') && str.constructor == String; 
                };
                if(isString(link)){
                    this.$router.push({
                        path:link
                    });
                }else{
                    switch(link){
                        case 0:
                            this.$router.push('/coupon');
                            break;
                        case 1:
                            this.$router.push('/Integral')
                            break;
                        case 2:
                            this.$router.push('/Collection');
                            break;
                        case 3:
                            this.$router.push('/footprint')
                            break;
                        case 4:
                            this.$router.push('/myComment')
                            break;
                        case 5:
                            this.$router.push('/address');
                            break;
                        case 6:
                            this.$router.push('/customer');
                            break;
                        case 7:
                            this.$router.push('/Feedback');
                            break;
                    }
                }
            }
        },
        mounted(){
            
        },
        wacth:{
            
        }
    }
</script>
<style lang="less" scoped>
    .per-center{
        background:#f1f1f1;
    }
    .header-wrap{
        width:100%;
        background: #d4a12b;
        .header-hd{
            height:.6rem;
            line-height:.6rem;
            font-size:.32rem;
            padding:.2rem 0;
            color:#fff;
            text-align:center;
            position:relative;
            span{
                width:.47rem;
                height:.46rem;
                position:absolute;
                right:.23rem;
                top:50%;
                margin-top:-.23rem;
                background:url(../../../assets/images/news.png) no-repeat;
                background-size:100% 100%;
            }
        }
        .header-dd-center{
            width:100%;
            height:1.5rem;
            position:relative;
            .setUp{
                width:.62rem;
                height:.61rem;
                position:absolute;
                left:1.04rem;
                top:50%;
                margin-top:-.305rem;
                
                background-size:100% 100%;
            }
            .icon-wrap{
                width:1.26rem;
                height:1.26rem;
                border:.09rem solid #e7be5e;
                border-radius:100%;
                overflow:hidden;
                position:absolute;
                left:0;
                top:0;
                right:0;
                bottom:0;
                margin:auto;
                img{
                    width:1.26rem;
                    height:1.26rem;
                    border-radius:100%;
                    box-sizing:border-box;
                }
            }
            .admin{
                height:.61rem;
                width:1.68rem;
                line-height:.61rem;
                background:#fff;
                position:absolute;
                right:0;
                top:50%;
                margin-top:-.305rem;
                border-radius:20px 0 0 20px;
                box-sizing:border-box;
                text-indent:.53rem;
                font-size:.24rem;
                color:#797979;
                span{
                    position:absolute;
                    top:50%;
                    left:.15rem;
                    margin-top:-.135rem;
                    width:.27rem;
                    height:.27rem;
                    background:url(../../../assets/images/setUp.png) no-repeat;
                    background-size:100% 100%;
                }
            }
        }
        .status{
            padding:.2rem 0;
            text-align:center;
            line-height:.31rem;
            span{
                display:inline-block;
                height:.31rem;
            }
            .name{
                font-size:.28rem;
                color:#fff;
            }
            .member{
                padding-left:.37rem;
                padding-right:.1rem;
                width:1.08rem;
                font-size:.24rem;
                color:#fff600;
                background:url(../../../assets/images/Member.png) no-repeat;
                background-size:100% 100%;
                margin-left:.1rem;
            }
        }
    }
    .myOrder{
        width:7.1rem;
        height:.94rem;
        padding:0 .2rem;
        line-height:.94rem;
        background:#fff;
        .title{
            font-size:.28rem;
            color:#333;
            text-indent:.6rem;
            position:relative
        }
        .icon{
            position:absolute;
            left:0;
            top:50%;
            width:.39rem;
            height:.39rem;
            margin-top:-.195rem;
            background:url(../../../assets/images/order_icon.png) no-repeat;
            background-size:100% 100%;
        }
        .icon-wallet{
            position:absolute;
            left:0;
            top:50%;
            width:.39rem;
            height:.39rem;
            margin-top:-.195rem;
            
            background-size:100% 100%;
        }
        .see{
            font-size:.24rem;
            color:#999;
            position:relative;
            padding-right:.4rem;
            .icon-right{
                position:absolute;
                right:0;
                top:50%;
                width:.18rem;
                height:.3rem;
                margin-top:-.15rem;
                background:url(../../../assets/images/right-icon.png) no-repeat;
                background-size:100% 100%;
            }
        }
    }
    .nav-link{
        margin-bottom:.14rem;
        background:#fff;
        li{
            width:20%;
            height:1.26rem;
            text-align:center;
            padding-top:.1rem;
            .icon-wrap{
                width:100%;
                height:.8rem;
                position:relative;
                img{
                    position:absolute;
                    left:0;
                    top:0;
                    bottom:0;
                    right:0;
                    margin:auto;
                }
            }
            p{
                font-size:.24rem;
                color:#797979;
            }
        }
        li:nth-child(1){
            .icon-wrap{
                img{
                    width:.39rem;
                    height:.38rem;
                }
            }
        }
        li:nth-child(2){
            .icon-wrap{
                img{
                    width:.41rem;
                    height:.4rem;
                }
            }
        }
        li:nth-child(3){
            .icon-wrap{
                img{
                    width:.39rem;
                    height:.37rem;
                }
            }
        }
        li:nth-child(4){
            .icon-wrap{
                img{
                    width:.4rem;
                    height:.34rem;
                }
            }
        }
        li:nth-child(5){
            .icon-wrap{
                img{
                    width:.43rem;
                    height:.37rem;
                }
            }
        }
    }
    .account{
        padding:.2rem 0;
        height:.95rem;
        width:100%;
        background:#fff;
        margin-bottom:.14rem;
        li{
            width:2.5rem;
            height:100%;
            border-right:1px solid #e7e7e7;
            box-sizing:border-box;
            text-align:center;
            .number{
                font-size:.42rem;
                color:#333;
                .money{
                    font-size:.32rem;
                    color:#999;
                }
                .min{
                    font-size:.32rem;
                }
            }
            .balance{
                font-size:.24rem;
                color:#999;
                padding-top:.15rem;
            }
        }
        li:last-child{
            border:none;
        }
    }
    .more{
        border-top:1px solid #dfdfdf;
        background:#fff;
        li{
            width:25%;
            height:2rem;
            border-right:1px solid #ebebeb;
            border-bottom:1px solid #ebebeb;
            box-sizing: border-box;
            text-align:center;
            p{
                font-size:.24rem;
                color:#333;
            }
            .icon-main{
                width:100%;
                height: .86rem;
                position:relative;
                padding-top:.57rem;
            }
            &:nth-child(1){
                img{
                    width:.7rem;
                    height:.51rem;
                }
            }
            &:nth-child(2){
                img{
                    width:.49rem;
                    height:.51rem;
                }
            }
            &:nth-child(3){
                img{
                    width:.46rem;
                    height:.5rem;
                }
            }
            &:nth-child(4){
                img{
                    width:.45rem;
                    height:.55rem;
                }
            }
            &:nth-child(5){
                img{
                    width:.67rem;
                    height:.61rem;
                }
            }
            &:nth-child(6){
                img{
                    width:.52rem;
                    height:.5rem;
                }
            }
            &:nth-child(7){
                img{
                    width:.54rem;
                    height:.43rem;
                }
            }
            &:nth-child(8){
                img{
                    width:.5rem;
                    height:.49rem;
                }
            }
            &:nth-child(9){
                img{
                    width:.53rem;
                    height:.53rem;
                }
            }
            &:nth-child(10){
                img{
                    width:.58rem;
                    height:.52rem;
                }
            }
            &:nth-child(11){
                img{
                    width:.61rem;
                    height:.57rem;
                }
            }
            &:nth-child(12){
                img{
                    width:.48rem;
                    height:.48rem;
                }
            }
            &:nth-child(4n){
                border-right:none;
            }
        }
    }
    .more.clearfix{
        padding-bottom: 1rem;
        margin-bottom: 0.3rem;
    }
</style>