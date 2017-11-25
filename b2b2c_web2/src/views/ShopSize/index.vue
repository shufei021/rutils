<template>
  <div class="ShopSize">
    <div v-title data-title="产品详情-规格参数">产品详情-规格参数</div>
    <header-Detailed :title="title"></header-Detailed>
    <div class="ShopSize_top">
        <router-link to="../ForDetailed" class="ShopSize_top_a">图文详情</router-link>
        <router-link to="../ShopSize" class="ShopSize_top_a active">规格参数</router-link>
        <router-link to="../Reviews" class="ShopSize_top_a">商品评论</router-link>
        <router-link to="../Consult" class="ShopSize_top_a">商品咨询</router-link>
    </div>
    <div class="ShopSize_Param">
        <div class="ShopSize_name">
            <div class="ShopSize_name_fl">商品名称</div>
            <div class="ShopSize_name_fr">{{Options_name.name}}</div>
        </div>
        <div class="ShopSize_name">
            <div class="ShopSize_name_fl">商品编号</div>
            <div class="ShopSize_name_fr">{{Options_name.No}}</div>
        </div>
        <div class="ShopSize_name">
            <div class="ShopSize_name_fl">商品毛重</div>
            <div class="ShopSize_name_fr">{{Options_name.kg}}</div>
        </div>
         <div class="ShopSize_name">
            <div class="ShopSize_name_fl">货号</div>
            <div class="ShopSize_name_fr">{{Options_name.shop_num}}</div>
        </div>
        <div class="ShopSize_name">
            <div class="ShopSize_name_fl">材质</div>
            <div class="ShopSize_name_fr">{{Options_name.Material}}</div>
        </div>
        <div class="ShopSize_name">
            <div class="ShopSize_name_fl">证书</div>
            <div class="ShopSize_name_fr">{{Options_name.Ccie}}</div>
        </div>
        <div class="ShopSize_name">
            <div class="ShopSize_name_fl">包装数量</div>
            <div class="ShopSize_name_fr">{{Options_name.pack_num}}</div>
        </div>
        <div class="ShopSize_name">
            <div class="ShopSize_name_fl">图案</div>
            <div class="ShopSize_name_fr">{{Options_name.design}}</div>
        </div>
    </div>
    <Footer-Shop></Footer-Shop>     
  </div>
</template>
<script>
    import headerDetailed from '@/components/header_Detailed';
    import FooterShop from '@/components/footer_shop';
    export default {
       name : 'ShopSize',
       data(){
           return{
                title:'规格参数' ,
                Options_name:{
                    name:'和玉缘 和田玉转运珠吊坠路路通挂件白玉吊坠路路通挂件' ,//商品名称
                    No:1368512 , //商品编号
                    kg:'1.00G' ,//商品重量
                    shop_num:'F-Z-YZX-C3', //商品货号
                    Material:'和田玉' ,//商品材质
                    Ccie:'国手',//商品证书
                    pack_num:1 ,//包装数量
                    design:'其他', //图案
                },
                 
           }
       },
       components:{
            headerDetailed,
            FooterShop,   
        },
    }
</script>
<style lang="less" scoped>
@import '~@/assets/css/color.less';
    .ShopSize{
        .ShopSize_top{
            width:100%;
            height: 0.75rem;
            background-color: #fff;
            overflow: hidden;
            margin-bottom: 0.1rem;
            .ShopSize_top_a{
                width: 25%;
                height: 0.75rem;
                text-align: center;
                line-height: 0.75rem;
                color: #333;
                display: block;
                float: left;
                font-size: 0.25rem;
                overflow: hidden;
                &.active{
                    font-size: 0.3rem;
                    border-bottom: 2px solid #d19e29;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                }
               
            }
        }
        .ShopSize_Param{
            width: 100%;
            overflow: hidden;
            background-color: #fff;
            margin-bottom: 1rem;
            .ShopSize_name{
                width: 100%;
                height: 0.9rem;
                border-bottom: 2px solid #E7E7E7;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                &.active{
                    height: 1.15rem;
                    .ShopSize_name_fr{
                        width: 4.8rem;
                        height: 0.95rem;
                        margin-top: 0.2rem;
                        float: left;
                        font-size: 0.26rem;
                        color:@black;
                        overflow: hidden;
                        line-height:0.4rem;
                    }
                    .ShopSize_name_fl{
                        width: 2.5rem;
                        height:100%;
                        float: left;
                        //background-color: red;
                        color: #696969;
                        font-size: 0.26rem;
                        text-indent: 0.2rem;
                        line-height: 0.8rem;
                    }
                }
                .ShopSize_name_fl{
                    width: 2.5rem;
                    height:100%;
                    float: left;
                    //background-color: red;
                    color: #696969;
                    font-size: 0.26rem;
                    text-indent: 0.2rem;
                    line-height: 0.9rem;
                }
                .ShopSize_name_fr{
                    width: 4.8rem;
                    height: 0.9rem;
                    float: left;
                    font-size: 0.26rem;
                    color:@black;
                    overflow: hidden;
                    line-height: 0.9rem;
                }
                
            }
        }
    }
  
</style>


