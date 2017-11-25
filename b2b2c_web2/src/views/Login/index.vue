<template>
    <div class="logoin-main">
        <div v-title data-title="贡品网登录">{{title}}</div>
        <div>
            <header class="logoIn-header">
                <span @click="remove" class="btn-back">取消</span>{{title}}
            </header>
            <div class="from">
                <div class="input-main userName">
                    <span class="icon"></span>
                    <input type="text" placeholder="邮箱/用户名/已验证手机" v-model="userName" @focus="focu" @blur="blu">
                </div>
                <div class="input-main passWord">
                    <span class="icon"></span>
                    <input type="password" placeholder="请输入密码...." v-model="passWord" @focus="focu" @blur="blu">
                </div>
                <button class="btn-in">登&nbsp;&nbsp;录</button>
            </div>
            <ul class="fail-link clearfix">
                <li class="fl" @click="other">无法登录?</li>
                <li class="fl" @click="goNow">现在注册 ></li>
            </ul>
        </div>
        <dl class="tplogin" v-show="show">
            <dt>
                社交账号一键登录
                <span></span><span></span>
            </dt>
            <dd></dd>
            <dd></dd>
            <dd></dd>
        </dl>
        <mt-popup
            v-model="isActive"
            position="bottom">
            <div class="actionsheet">
                <div class="acti-box active">
                    <ul>
                        <li @click="toback">找回密码</li>
                        <li @click="toSms">短信验证登录</li>
                    </ul>
                    <div class="btn" @click="increment">{{cancelText}}</div>
                </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
    import { Popup } from 'mint-ui';
    export default {
        name : 'logoIn',
        data(){
            return {
                title:'贡品网登录',
                show:true,
                userName:'',
                passWord:'',
                cancelText:'取消',
                isActive:false,
                scrollWatch:true,
                load:false
            }
        },
        components:{
            [Popup.name]:Popup
        },
        mounted() {
            let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        },
        destroyed(){
            this.scrollWatch = false;
        },
        methods:{
            remove(){//路由回退一步
                this.$router.push('/home')
            },
            goNow(){//跳转注册页
                this.$router.push({
                    path : '/Register'
                });
                this.show = false;
            },
            other(){//无法登录
                this.isActive = true;
            },
            increment(){
                this.isActive = false;
            },
            toSms(){
                this.$router.push({
                    path:'/sms'
                });
                this.show = false;
            },
            toback(){
                this.$router.push({
                    path : '/bachWord'
                });
                this.show = false;
            },
            blu(){
                this.show = true;
            },
            focu(){
                this.show = false;
            }
        }
    }
</script>
<style lang="less" scoped>
    .logoin-main{
        width:100vw;
        height:100vh;
        box-sizing:border-box;
        padding:0 .6rem;
        background:#fff;
        .logoIn-header{
            width:100%;
            height:.9rem;
            line-height:.9rem;
            text-align:center;
            font-size:.36rem;
            color:#333;
            position:relative;
            .btn-back{
                width:1.3rem;
                height:100%;
                font-size:.28rem;
                color:#999;
                position:absolute;
                left:-.6rem;
                top:0;
            }
        }
        .logo{
            width:100%;
            height:2.26rem;
            position:relative;
            img{
                width:3.4rem;
                height:.95rem;
                position:absolute;
                left:0;
                bottom:0;
                right:0;
                top:0;
                margin:auto;
            }
        }
        .from{
            padding-top:.8rem;
            .input-main{
                height:1.1rem;
                margin-bottom:.3rem;
                position:relative;
                .icon{
                    width:1.1rem;
                    height:100%;
                    position:absolute;
                    left:0;
                    top:0;
                }
                input{
                    width:100%;
                    height:100%;
                    border:none;
                    background:#f5f5f5;
                    text-indent:1.1rem;
                    border-radius:5px;
                    font-size:.28rem;
                }
            }
            .userName{
                .icon{
                    background:url(../../assets/images/user_hd.png) no-repeat center;
                    background-size:.44rem .55rem;
                }
            }
            .passWord{
                .icon{
                    background:url(../../assets/images/password.png) no-repeat center;
                    background-size:.44rem .51rem;
                }
            }
        }
        .btn-in{
            width:100%;
            height:1.1rem;
            border:none;
            border-radius:45px;
            outline:none;
            margin-top:.3rem;
            background: #c79a01;
            font-size:.36rem;
            color:#fff;
        }
        .fail-link{
            padding-top:.3rem;
            li{
                width:50%;
                text-align:center;
                font-size:.28rem;
            }
            li:nth-child(1){
                border-right:1px solid #dedede;
                box-sizing:border-box;
                -moz-box-sizing:border-box;
                -webkit-box-sizing:border-box;
                color:#797979;
            }
            li:nth-child(2){
                color:#c79a01;
            }
        }
        .tplogin{
            width:6.3rem;
            text-align:center;
            position:absolute;
            left:.6rem;
            bottom:0;
            dt{
                width:100%;
                font-size:.24rem;
                color:#9f9f9f;
                text-align:center;
                height:.5rem;
                line-height:.5rem;
                position:relative;
                span{
                    position:absolute;
                    top:50%;
                    width:2rem;
                    height:1px;
                    background:#ccc;
                }
                span:nth-child(1){
                    left:0;
                }
                span:nth-child(2){
                    right:0;
                }
            }
            dd{
                display:inline-block;
                width:1.21rem;
                height:1.21rem;
                background:url(../../assets/images/qq.jpg) no-repeat;
                background-size:100% 100%;
                margin:.3rem 0;
            }
            dd:nth-child(3){
                margin-left:1.2rem;
                margin-right:1.2rem;
                background:url(../../assets/images/wx.png) no-repeat;
                background-size:100% 100%;
            }
            dd:nth-child(4){
                background:url(../../assets/images/wb.jpg) no-repeat;
                background-size:100% 100%;
            }
        }
        .actionsheet{
            .box{
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background:rgba(0,0,0,.5);
            }
            .acti-box{
                width:7.1rem;
                transition:all .5s ease;
                ul{
                    border-radius:5px;
                    overflow:hidden;
                    text-align:center;
                    li{
                        width:100%;
                        height:.9rem;
                        background:#fff;
                        line-height:.9rem;
                        font-size:.36rem;
                        color:#007aff;
                    }
                    li:nth-child(1){
                        border-bottom:1px solid #d6d6de;
                    }
                }
                .btn{
                    width:100%;
                    background:#fff;
                    line-height:.9rem;
                    font-size:.36rem;
                    color:#007aff;
                    text-align:center;
                    margin:.15rem 0;
                    border-radius:5px;
                }
            }
        }
    }
</style>
<style lang="less">
    .logoin-main{
        .mint-popup{
            background:none;
        }
    }
</style>