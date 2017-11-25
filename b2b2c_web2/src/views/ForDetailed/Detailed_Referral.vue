<template>
    <!-- <div>
        <div class="Detailed_Referral" v-for="item in heading" :key="item.id">
            <div class="Detailed_Referral_at">
                <div class="heading">{{item.text1}}</div>
            </div>
        </div>
    </div> -->
    <!-- <div class="Detailed_Referral">
      <div class="Detailed_Referral_at">
            <div class="heading">{{Package}}{{linke}}</div>
        </div>}
    </div> -->
    <div class="Detailed_shop">
        <div class="Detailed_shop_a"  v-for="item in ShopImg" :key="item.id">
            <img :src="item.shop" :alt="item.text">
            <div class="Detailed_shop_name">{{item.ShopName}}</div>
            <i>￥<span>{{item.number}}</span></i>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            Package:'',
            linke:'',
            ShopImg:'',
        }
    }
</script>
<style lang="less" scoped>
@import '~@/assets/css/color.less';
    .Detailed_Referral{
        width: 100%;
        height: 4.35rem;
        background-color: #fff;
        margin-top: 0.1rem;
        overflow: hidden;
        .Detailed_Referral_at{
            width: 7.1rem;
            height: 100%;
            margin: auto;
            .heading{
                width: 100%;
                font-size: 0.28rem;
                color: #333;
                line-height: 0.8rem;
                height: 0.8rem;
            }
        }
        
    }
    .Detailed_shop{
        width: 100%;
        height: 3.4rem;
        .Detailed_shop_a{
            width: 33.33%;
            height: 100%;
            float: left;
            cursor: pointer;
            img{
                width: 2.3rem;
                height: 2.25rem;
                display: block;
                margin: auto;
            }
            .Detailed_shop_name{
                width: 100%;
                height: 0.58rem;
                font-size: 0.22rem;
                color:#727374;
                margin-top: 0.15rem;
                overflow: hidden;
            }
            i{
                width: 100%;
                overflow: hidden;
                display: block;
                margin-top: 0.1rem;
                font-size: 0.2rem;
                color: @red;
                span{
                    font-size: 0.26rem;
                }
            }
        }
    }
</style>

