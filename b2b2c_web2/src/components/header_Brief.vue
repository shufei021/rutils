<template>
  <div class="header_Brief">
       <div class="D_header_Title">{{title}}</div>
        <div @click="remove" class="D_header_l">
           <img src="../assets/images/B_left.png" alt="">
       </div>
  </div>
</template>
<script>
    export default {
        name : 'header_Brief',
        data(){
            return{
                
            }
                
        },
        props:{
            title:'',
        },
        methods:{
            remove:function(){//路由回退一步
                this.$router.go(-1)
            }
        },
    }
</script>
<style lang="less" scoped>
 .header_Brief{
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
 }
</style>
