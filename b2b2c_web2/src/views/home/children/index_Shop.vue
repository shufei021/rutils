<template>
<div>
  <div class="index_Shop">
    <div class="index_Shop_Advertising">
        <img v-lazy="data.GoodsImg" :alt="1">
    </div>
    <div class="Shop_Goods">
        <div class="Shop_Goods_a" v-for="(item,index) in data.children" :key="item.id">
            <img v-lazy="item.url" :alt="2">
            <div class="Shop_Goods_Details">
                <div class="S_G_name">{{item.name}}</div>
                <span>￥<i>{{item.Price}}</i></span>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        data () {
            return  {

            }
        },
        props:{
            data:''
        }
    }
</script>

<style lang="less" scoped>
    .index_Shop{
        width: 100%;
        overflow: hidden;
        .index_Shop_Advertising{
            width: 100%;
            overflow: hidden;
            cursor: pointer;
            img{
                width: 100%;
                height: 3.75rem;
            }
        }
        .Shop_Goods{
            width: 100%;
            overflow: hidden;
            
            .Shop_Goods_a{
                width: 50%;
                height: 5rem;
                float: left;
                cursor: pointer;
                margin-top: .2rem;
                // margin-left:.1rem;
                background-color: #fff; 
                // border-bottom: 10px solid #F8F8F8;  
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                img{
                    width: 100%;
                    height: 3.75rem;
                    // border-bottom: 1px solid #F8F8F8;  
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                }
                .Shop_Goods_Details{
                    width: 3.25rem;
                    height: 1.25rem;
                    margin: auto;
                    overflow: hidden;
                    .S_G_name{
                        width: 100%;
                        height: 0.7rem;
                        display: block;
                        line-height: 0.7rem;
                        font-size: 0.29rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    span{
                        width: 100%;
                        font-size: 0.29rem;
                        color: #f02b2b;
                        i{
                            font-size: 0.36rem;
                        }
                    }
                } 
            }
            .Shop_Goods_a:nth-child(2n-1){
                // border-left: 5px solid #F8F8F8;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }
            .Shop_Goods_a:nth-child(2n){
                // border-left: 5px solid #F8F8F8;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }
            .Shop_Goods_a:last-child{
                border-bottom: none;
            }
            .Shop_Goods_a:nth-last-child(2){
                 border-bottom: none;
            }
        } 
    }
    .index_Shop:last-child{
        margin-bottom: 0.3rem;
    }
</style>
