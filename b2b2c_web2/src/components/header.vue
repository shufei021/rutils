<template>
    <div class="header">
        <div class="header_logo"></div>
        <div class="header_seek">
            <img class="header_seek_img" src="../assets/images/seek.png" alt="搜素img">
            <input type="text" placeholder="搜索宝贝、店铺...">
        </div>
        <div class="header_news">
            <div>
                <img class="header_news_RichScan" src="../assets/images/RichScan.png" alt="扫一扫img">
                <div class="header_RichScan">扫一扫</div>
            </div>
            <div>
                <img class="header_news_advices " src="../assets/images/advices.png" alt="消息img">
                <div class="header_RichScan text-single-hidden">消息中心</div>
            </div>
        </div>
    </div>
</template>
<script>
   
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
         .header_news{
             position: absolute;
             right: 0.1rem;
             top:0.15rem;
             height: 0.62rem; 
         }
         .header_news div{
             display: block;
             width: 0.9rem;
             height: 0.62rem;
             float: left; 
             text-decoration: none;
             text-align: center;
             color: #fff;
             font-size: 0.16rem
         }
         .header_news_RichScan{
             width: 0.32rem;
             height: 0.32rem;
             display: block;
             margin: auto;
             margin-top: 0.07rem
         }
        .header_RichScan{
            width: 100%;
        }
        .header_news_advices{
             width: 0.38rem;
             height: 0.37rem;
             display: block;
             margin: auto;
             margin-top: 0.02rem
        }
    }
</style>