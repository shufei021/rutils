<template>
    <div class="header">
        <div class="header_logo"></div>
        <div class="header_seek">
            <img class="header_seek_img" src="../assets/images/seek.png" alt="搜素img">
            <input type="text" placeholder="搜索宝贝、店铺...">
        </div>
        <div class="news fr"></div>
        <div class="sign fr">登录</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
<style lang="less" scoped>
    .header{
        height: 0.9rem;
        background-color: #D19E29;
        position: relative;
        overflow: hidden;
        .header_logo{
            position: absolute;    
            left: 0;
            top: 0;
            width: 1.85rem;
            height: 0.9rem;
            background-color: rebeccapurple;
            display: block;
            background-image: url("../assets/images/LOGO.jpg");
            background-size: 100% 100%;
        }
        .header_seek{
            width: 3.5rem;
            height: 0.6rem;
            margin: auto;
            background-color: #E9C440;
            margin-top: 0.15rem;
            border-radius: 0.25rem;
            position: relative;    
        }
         .header_seek input{
                width: 100%;
                height: 0.6rem;
                border-radius: 0.25rem ;
                border: none;
                outline: none;
                font-size: 0.26rem;
                text-indent: 0.75rem;
                background-color: #E9C440;
                color:#fff;
            }
         .header_seek_img{
             position: absolute;
             top:0.18rem;
             left: 0.25rem;
             display: block;
             width: 0.26rem;
             height: 0.27rem;
         }   
         .header_seek input::-webkit-input-placeholder{
                color: #fff;
         }
        .news{
            position: relative;
            top: -80%;
            left: -16%;
            width:.5rem;
            height:100%;
            background:url(../assets/images/news.png) no-repeat center;
            background-size:.47rem .46rem;
        }
        .sign{
            position: relative;
            top: -53%;
            left: 9px;
            color: #fff;
            font-size: .3rem;
        }
    }
</style>