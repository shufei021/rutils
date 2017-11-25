<template>
    <div class="classif-wrap">
        <div v-title data-title="分类">分类</div>
        <class-header></class-header>
        <div class="content-wrap clearfix">
            <ul class="nav-left fl">
                <li v-for="(item,index) in 15" :key="item" :class="{active:tab_status == index}" @touchstart="tab(index)">大大大大</li>
            </ul>
            <div class="content fr">
                <div class="tab-content-wrap">
                    <div class="item-one" v-for="(item,index) in 5" :key="item">
                        <h2 class="title">二级分类</h2>
                        <ul class="con clearfix">
                            <li class="fl" v-for="(con,index) in 10" :key="con" @click="tolink(con)">
                                <img >
                                <p class="text1-hidden">三级分类</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>
<script>
    import classHeader from '@/components/class_header';
    export default {
        name : 'classification',
        data(){
            return {
                scrollWatch:true,
                tab_status:0,
                data:'',
                condata:'',
                status:'',
                load_wrap:true,
                load:false
            }
        },
        components:{
            classHeader
        },
        methods:{
            tab(index){
                this.tab_status = index;
                this.load = true;
            },
            tolink(item){
                return;
                this.$router.push({
                    name:'comList',
                    params:{
                        status:item.id
                    }
                });
            }
        },
        mounted() {
            document.body.scrollTop = 0;
            
        },
        destroyed(){
            this.scrollWatch = false;
        },
    }
</script>
<style lang="less">
    .classif-wrap{
        background:#fff;
        .mint-tab-item{
            display:inline-block;
            flex:none;
            .mint-tab-item-label{
                font-size:.26rem;
                line-height:.7rem;
            }
        }
    }
</style>
<style lang="less" scoped>
    .footer{
        height:1rem;
        border-top:3px solid #fff;
        position:fixed;
        bottom:0;
        left:0;
        z-index:-1;
    }
    .content-wrap{
        background:#f2f2f2;
        .nav-left{
            height:92vh;
            width:1.8rem;
            overflow-y:auto;
            background:#fff;
            padding-bottom:1rem;
            box-sizing:border-box;
            li{
                width: 100%;
                height:1rem;
                line-height:1rem;
                text-align:center;
                overflow:hidden;
                font-size:.24rem;
                color:#333;
            }
            li.active{
                border-left:3px solid #d19e29;
                box-sizing:border-box;
                background:#f2f2f2;
                color:#d19e29;
            }
        }
        .content{
            overflow-y:auto;
            width:5.7rem;
            height:92vh;
            background:#f2f2f2;
            padding-bottom:1rem;
            box-sizing:border-box;
            .item-one{
                .title{
                    height:.73rem;
                    line-height:.73rem;
                    font-size:.26rem;
                    color:#666;
                    text-indent:.16rem;
                }
                .con{
                    li{
                        width: 1.72rem;
                        height: 2.24rem;
                        text-align:center;
                        margin-left:.16rem;
                        background:#fff;
                        padding-top:.12rem;
                        box-sizing:border-box;
                        margin-bottom:.12rem;
                        img{
                            width:1.52rem;
                            height:1.52rem;
                        }
                        p{
                            font-size:.24rem;
                            color:#797979;
                            height:.64rem;
                            line-height:.64rem;
                            padding:0 .2rem;
                        }
                    }
                }
            }
            .item-tab{
                margin-top:.1rem;
                .mint-navbar{
                    border-bottom:1px solid #f2f2f2;
                }
                .mint-tab-item{
                    padding:0;
                    color:#666;
                    border-color:#f9781e;
                    margin:0;
                    height:.7rem;
                    line-height:.7rem;
                    margin-left:.4rem;
                }
                .mint-tab-item.is-selected{
                    color:#f9781e;
                }
            }
            .ification-wrap{
                .title{
                    height:1rem;
                    line-height:1rem;
                    font-size:.26rem;
                    color:#333;
                    font-weight:bold;
                }
                .tab-content{
                    li{
                        margin-left:.3rem;
                        margin-right:.1rem;
                        text-align:center;
                        img{
                            width:1.24rem;
                            height:1.24rem;
                            border-radius:100%;
                            box-sizing:border-box;
                        }
                        p{
                            font-size:.24rem;
                            color:#797979;
                            line-height:.7rem;
                            width:1.24rem;
                            overflow:hidden;
                        }
                    }
                }
            }
        }
    }
</style>
