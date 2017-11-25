<template>
  <div class="header_word">
      <div class="D_header_Title">{{title}}</div>
      <div @click="remove" class="D_header_l">
           <img src="../assets/images/B_left.png" alt="">
       </div>
       <div class="D_header_r" @click="more">
            <img src="../assets/images/header_word_r.png" alt="">
       </div>
       <div class="header_more" v-bind:class="{ active: isActive}">
           <div class="Triangle"></div>
           <div class="more_a">
                <router-link to="home" class="link">
                    <img src="../assets/images/header_word_h.png" alt="" class="home">
                    首页
                </router-link>
                 <router-link to="#" class="link">
                    <img src="../assets/images/header_word_x.png" alt="" class="home">
                    消息
                </router-link>
            </div>  
       </div>
  </div>
</template>
<script>
export default {
  name: 'header_word',
    data(){
        return{
            isActive: false,
            Count:0, 
        }
    },
    props:{
            title:'', 
        },
     methods:{
        remove:function(){//路由回退一步
            this.$router.go(-1)
        },
        more:function(){ 
            this.Count++;
            if(this.Count%2==0){
                this.isActive=false;
            }else{
                this.isActive=true;
            };  
        }
    },
}
</script>
<style lang="less" scoped>
    .header_word{
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
            width: 0.5rem;
            height: 0.4rem;
            position: absolute;
            right: 0.2rem;
            top:0.25rem;
            display: block;
            img{
                display: block;
                width: 0.5rem;
                height: 0.15rem;
                margin-top: 0.125rem;
            }
        }
        .header_more{
            width: 1.3rem;
            overflow: hidden;
            // background-color: #535353;
            position: absolute;
            top: 0.7rem;
            right: 0.2rem;
            display: none;
            &.active{
                display: block;
            }
            .Triangle{
                width: 0;
                height: 0;
                border-left: 0.2rem solid transparent;
                border-right: 0.2rem solid transparent;
                border-bottom: 0.1rem solid #535353;
                float: right;
                margin-right: 0.08rem;
                
            }
            .more_a{
                width: 100%;
                overflow: hidden;
                background-color: #535353;
                border-radius: 0.1rem;
                .link{
                    display: block;
                    width: 1rem;
                    height: 0.6rem;
                    margin: auto;
                    border-bottom: 3px solid #666666;
                    font-size: 0.24rem;
                    color: #fff;
                    line-height: 0.6rem;
                    .home{
                        width: 0.24rem;
                        height: 0.24rem;
                        margin-top: 0.17rem;
                        margin-left: 0.1rem;
                        margin-right: 0.05rem;
                    }
                }
            }
        }
    }
</style>