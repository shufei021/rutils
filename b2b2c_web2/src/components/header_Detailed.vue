<template>
  <div class="D_header">
      <div class="D_header_Title">{{title}}</div>
      <div @click="remove" class="D_header_l">
           <img src="../assets/images/B_left.png" alt="">
      </div>
      <div class="D_header_r">
           <router-link to="cart" class="cart">
               <img src="../assets/images/Cart_header.png"  alt="">
               <span class="cart_num">{{cart_num}}</span>
           </router-link>
           <router-link to="" class="MORE">
               <img src="../assets/images/headr_diandian.png" alt="">
           </router-link> 
      </div>
  </div>
</template>

<script>
     export default {
        name : 'header_Detailed',
        data(){
            return{
                cart_num:'12'
            }
             
        },
         props:{
            title:'', 
        },
        methods:{
            remove:function(){//路由回退一步
                this.$router.go(-1)
            },
        }
     }
</script>

<style lang="less" scoped>
    .D_header{
        width: 100%;
        height: 0.9rem;
        background-color: #C79A01;
        position: relative;
        .D_header_Title{
            width: 100%;
            height: 0.9rem;
            color: #fff;
            font-size: 0.32rem;
            line-height: 0.9rem;
            text-align: center;
        }
        .D_header_l{
            width: 0.46rem;
            height: 0.46rem;
            position: absolute;
            top: 0.22rem;
            left: 0.2rem;
            display: block;
            img{
                width: 0.46rem;
                height: 0.46rem;
            }
        }
        .D_header_r{
            width: 1.6rem;
            height: 0.9rem;
            // background-color: red;
            position: absolute;
            right: 0.2rem;
            top:0;
            .cart{
                display: block;
                width: 0.65rem;
                height: 0.51rem;
                float: left;
                margin-top: 0.2rem;
                position: relative;
                img{
                    width: 0.65rem;
                    height: 0.51rem;
                }
                .cart_num{
                    position: absolute;
                    top:0.02rem;
                    right: 0.02rem;
                    width: 0.3rem;
                    height: 0.3rem;
                    border-radius: 50%;
                    overflow: hidden;
                    text-align: center;
                    line-height: 0.3rem;
                    font-size: 0.21rem;
                    color:#fff;
                }
            }
            .MORE{
                width: 0.51rem;
                height: 0.9rem;
                float: right;
                display: block;
                img{
                    display: block;
                    width: 0.51rem;
                    height: 0.14rem;
                    margin-top: 0.38rem;
                }
            }
        }
    }
</style>
 