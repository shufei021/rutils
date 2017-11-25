<template>
  <div class="store_list">
            <div class="store_list_top">
                <div class="store_list_name">
                    <span></span> <i>店铺街</i> 
                </div>
                <div class="store_list_More">
                    <img src="../../../assets/images/index_right.png" alt=""><span>更多</span>
                </div>
            </div>
            <div class="store_list_Logo">
                <div class="store_list_Logo_a" v-for="item in logo" :key="item.id"><img :src="item.logo" :alt="item.logo"></div>
            </div>
        </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props:{
    logo:''
  }
}
</script>
<style lang="less" scoped>
  .store_list{
        width: 100%;
        overflow: hidden;
        margin-bottom: 0.3rem;
        .store_list_top{
            width: 7.1rem;
            height: 0.9rem;
            margin: auto;
            .store_list_name{
                width: 50%;
                float: left;
                height: 0.9rem;
                font-size: 0.32rem;
                color: #333;
                span{
                    display: block;
                    width: 0.05rem;
                    height: 0.33rem;
                    background-color: #D19E29;
                    margin-top: 0.3rem;
                    float: left;
                }
                i{
                    display: block;
                    float: left;
                    font-size: 0.32rem;
                    color: #333;
                    line-height: 0.9rem;
                    margin-left: 0.15rem;
                }
            }
            .store_list_More{
                height: 0.9rem;
                float: right;
                cursor: pointer;
                span{
                    display: block;
                    float: right;
                    font-size: 0.28rem;
                    line-height: 0.9rem;
                    color: #666666;
                }
                img{
                    display: block;
                    float: right;
                    width: 0.1rem;
                    height: 0.16rem;
                    margin-top: 0.385rem;
                    margin-left: 0.1rem;
                }
             }
        }
        .store_list_Logo{
            width: 100%;
            overflow: hidden;
            background-color: #fff;
            .store_list_Logo_a{
                width: 25%;
                height: 0.9rem;
                margin-left: .5rem;
                margin-top: .2rem;
                float: left;
                // background-color: red;
                border-right: 1px solid #F8F8F8;
                border-bottom: 1px solid #F8F8F8;
                box-sizing:border-box;
                cursor: pointer;
            }
            .store_list_Logo_a:nth-child(4n){
                border-right:0;
            }
            img{
                width: 100%;
                height: 0.9rem;
            }
        }
             
    }
</style>
