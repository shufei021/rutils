<template>
  <div>
    <div class="index_Shop_top">
        <div class="index_Shop_top_name">
            <span></span> <i>{{data.title}}</i> 
        </div>
         <div class="index_Shop_More">
             <img src="../assets/images/index_right.png" alt=""><span>更多</span>
         </div>
    </div>
    <index-shop :data="data"></index-shop>
  </div>
</template>
<script>
import indexShop from '@/views/home/children/index_Shop';
export default {
  name:'conHeader',
  data () {
    return {

    }
  },
  props:{
    data:''
  },
  components: {
    indexShop
  }
}
</script>

<style lang="less" scoped>
    .index_Shop_top{
            width: 7.1rem;
            height: 0.9rem;
            margin: auto;
            .index_Shop_top_name{
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
            .index_Shop_More{
                height: 0.9rem;
                float: right;
                cursor: pointer;
                img{
                    display: block;
                    float: right;
                    width: 0.1rem;
                    height: 0.16rem;
                    margin-top: 0.385rem;
                    margin-left: 0.1rem;
                }
                span{
                    display: block;
                    float: right;
                    font-size: 0.28rem;
                    line-height: 0.9rem;
                    color: #666666;
                }
            }
           
        }
</style>
