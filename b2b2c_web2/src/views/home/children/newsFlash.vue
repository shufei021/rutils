<template>
  <div class="flash-wrap">
      <div class="index_flash">
            <div class="index_flash_logo">
                <span class="i_f_l_text" id="title_name">{{title}}</span>
                <span class="i_f_l_img">快讯</span>    
            </div>
            <div class="box-wrap">
                <ul class="scroll_box" ref="scroll_box">
                    <li v-for="(item,index) in arr" :key="item.id">{{item.title}}</li>
                </ul>
            </div>
            <router-link to="Bulletin" class="More">更多</router-link>
        </div>
        <div class="index_Ctrl_auto">
            <ul class="flash-dd">
                <li class="fl" v-for="(n,index) in nav" :key="n.id" @click="link(index)">
                    <img v-lazy="n.nav_img">
                    <p>{{n.title}}</p>
                </li>
            </ul>
        </div>
  </div>
</template>
<script>
    export default {
        name: 'newsflash',
        data() {
            return {
                nav:[
                    {title:'抢购',nav_img:require('@/assets/images/index_Panic.png')},
                    {title:'品牌',nav_img:require('@/assets/images/index_Brand.png')},
                    {title:'店铺',nav_img:require('@/assets/images/index_Shop.png')},
                    {title:'积分商城',nav_img:require('@/assets/images/index_Integral.png')},
                    {title:'皇家御饮',nav_img:require('@/assets/images/index_Drink.png')},
                    {title:'御贡膳品',nav_img:require('@/assets/images/index_Food.png')},
                    {title:'滋补养生',nav_img:require('@/assets/images/index_Health.png')},
                    {title:'珠宝玉器',nav_img:require('@/assets/images/index_Jade.png')},
                    {title:'喜庆物品',nav_img:require('@/assets/images/index_Festiva.png')},
                    {title:'帮助中心',nav_img:require('@/assets/images/index_Help.png')}
                    
                ],
                newdata:{
                    // imgSrc:[require('@/assets/logo1.jpg'),require('@/assets/logo2.png'),require('@/assets/logo5.png'),require('@/assets/logo4.jpg'),require('@/assets/logo3.jpg'),require('@/assets/logo6.png'),require('@/assets/bgyj.jpg'),require('@/assets/gd.jpg')],
                    // text:['最新促销','尾货清仓','品牌馆','积分商城','家用电器','手机数码','电脑办公','更多']
                }
            }
        },
        props:{
            title:'',
            arr:''
            // data:null,
            // list:null
        },
        methods: {
            //上下滚动
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
            link(index){
                switch(index){
                    case 0:
                        this.$router.push({
                            path:'/home'
                        });
                        break;
                    case 1:
                    if(!sessionStorage.getItem('user_ID')){
                        this.$router.push({
                            path:'/LogoIn'
                        });
                    }else{
                        this.$router.push({
                            path:'/Account'
                        });
                    }
                        break;
                    case 2:
                        this.$router.push({
                            path:'/latestProm'
                        });
                        break;
                    case 3:
                        this.$router.push({
                            path:'/poopClearance'
                        });
                        break;
                    case 4:
                        this.$router.push({
                            path:'/brandList'
                        });
                        break;
                    case 5:
                        this.$router.push({
                           path:'/IntegralMall'
                        });
                        break;
                }
            }
        },
        mounted(){
            this.scroll_box();
        }
    }
</script>
<style lang="less" scoped>
    .flash-wrap{
        background:#f2f2f2;
        .index_flash{
        width: 100%;
        height: 0.8rem;
        background-color: #fff;
        overflow: hidden;
        .index_flash_logo{
            width: 2rem;
            height: 0.55rem;
            border-right:1px dashed #DEDEDE;
            margin-top: 0.12rem;
            float: left;
            margin-left: 0.2rem
        }
        .i_f_l_text{
            width: 0.9rem;
            height: 0.55rem;
            display: block;
            float: left;
            font-size: 0.3rem;
            font-weight: bold;
            line-height: 0.55rem;
            font-style:italic;
        }
        .i_f_l_img{
            width: 0.87rem;
            height: 0.45rem;
            display: block;
            float: left;
            margin-top: 0.05rem;
            background-image: url("../../../assets/images/index_flash.png");
            background-size: 100% 100%;
            text-indent: 0.24rem;
            font-size: 0.27rem;
            color: #fff;
            line-height: 0.43rem;
        }
        .box-wrap{
            position: relative;
            width: 4.05rem;
            height: 0.55rem;
            margin-top: 0.12rem;
            float: left;
            margin-left: 0.2rem;
            overflow: hidden;
            .scroll_box{
                position: absolute;
                left:0;
                top:0;
                transition: 1s all ease;
            }
        }
        .scroll_box li{
            width: 4.05rem;
            height: 0.55rem;
            line-height: 0.55rem;
            font-size: 0.28rem;
            color: #333;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            display: block;
            cursor: pointer;
        }
        .More{
            width: 0.75rem;
            height: 0.55rem;
            display: block;
            float: right;
            margin-top: 0.12rem;
            border-left:1px dashed #DEDEDE;
            text-align: right;
            line-height: 0.55rem;
            color:#797979;
            font-size: 0.28rem;
            margin-right: 0.2rem
        }
    }
        .index_Ctrl_auto{
            width: 100%;
            overflow: hidden;
            background-color: #fff;
            border-top: 1px dashed #DEDEDE;
            padding-bottom: 0.35rem;
            .flash-dd{
                width: 7.1rem;
                overflow: hidden;
                margin: auto;
            li:nth-child(5n){
                margin-right: 0;
            }  
            li{
                width: 1.15rem;
                height: 1.6rem;
                float: left;
                margin-right: 0.33rem;
                margin-top: 0.3rem;
                overflow: hidden;

                img{
                    width: 1.15rem;
                    height: 1.15rem;
                    display: block;
                }
                p{
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
                 
            }
        } 
    }
</style>