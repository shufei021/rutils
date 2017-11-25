<template>
<div class="footer">
    <ul class="footer_wrap clearfix text-center">
        <li class="fl" v-for="(item,index) in nav" :key="item.id" :class="{active:index == $store.state.nav_status}" @touchstart="tab(index)">{{item}}</li>
    </ul>
</div>
</template>
<script>
    export default {
        name : 'footer_nav',
        data(){
            return {
                nav:['首页','分类','购物车','我的']
            }
        },
        methods:{
            tab(index){
                switch(index){
                    case 0:
                        this.$router.push('/home')
                        break;
                    case 1:
                        this.$router.push('/class')
                        break;
                    case 2:
                        this.$router.push('/cart')
                        break;
                    case 3:
                        this.$router.push('/PersonalCenter')
                        break;
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .footer {
        width: 100%;
        height: 1rem;
        .footer_wrap{
        position:fixed;
        left:0;
        bottom:0;
        width:100vw;
        height:1rem;
        background:#fff;
        border-top:2px solid #d19e29;
        box-sizing:box-border;
        z-index: 9;
        li{
            width:25%;
            height:100%;
            box-sizing:box-border;
            padding-top:.6rem;
            font-size:.2rem;
            color:#333;
        }
        li:nth-child(1){
            background:url(../assets/images/home_icon.png) no-repeat center .15rem;
            background-size:.39rem .37rem;
            &.active{
                color:#d9af4f;
                background:url(../assets/images/home_icon_active.png) no-repeat center .15rem;
                background-size:.39rem .37rem;
            }
        }
        li:nth-child(2){
            background:url(../assets/images/class_icon.png) no-repeat center .15rem;
            background-size:.42rem .32rem;
            &.active{
                color:#d9af4f;
                background:url(../assets/images/class_icon_active.png) no-repeat center .15rem;
                background-size:.42rem .32rem;
            }
        }
        li:nth-child(3){
            background:url(../assets/images/cart_icon.png) no-repeat center .15rem;
            background-size:.54rem .41rem;
            &.active{
                color:#d9af4f;
                background:url(../assets/images/cart_icon_active.png) no-repeat center .15rem;
                background-size:.54rem .41rem;
            }
        }
        li:nth-child(4){
            background:url(../assets/images/per_icon.png) no-repeat center .15rem;
            background-size:.35rem .4rem;
            &.active{
                background:url(../assets/images/per_icon_active.png) no-repeat center .15rem;
                background-size:.35rem .4rem;
                color:#d9af4f;
            }
        }
    }
    }
</style>