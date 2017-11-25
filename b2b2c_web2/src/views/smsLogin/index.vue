<template>
    <div class="logoin-main" ref="con">
        <div v-title data-title="短信登录">{{title}}</div>
        <header class="logoIn-header">
           <span @click="remove" class="btn-back">取消</span>{{title}}
        </header>
        <div class="from">
            <div class="input-main phone-number">
                <span class="icon"></span>
                <input type="text" placeholder="请输入验证手机号码" @blur="hid" @focus="hidden" v-model="mobile">
            </div>
            <div class="input-main message">
                <span class="icon"></span>
                <input type="text" placeholder="请输入短信验证码"  @blur="hid" @focus="hidden" v-model="message">
                <button class="btn-ver" :class="{active:isActive}" @click="obtain">{{btnText}}</button>
            </div>
            <button class="btn-in" @click="logoIn">登&nbsp;&nbsp;录</button>
        </div>
        <ul class="fail-link clearfix">
            <li class="fl" @click="toAcclogoIn">账号登录</li>
            <li class="fl" @click="goNow">现在注册 ></li>
        </ul>
        <dl class="tplogin" v-show="show">
            <dt>
                社交账号一键登录
                <span></span><span></span>
            </dt>
            <dd></dd>
            <dd></dd>
            <dd></dd>
        </dl>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default {
        name : 'logoIn',
        data(){
            return {
                title:'贡品短信登录',
                show:true,
                userName:'',
                passWord:'',
                isActive:false,
                message:'',
                btnText:'获取验证码',
                scrollWatch:true,
                mobile:''
            }
        },
        components:{
            
        },
        mounted() {
            let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.$refs.con.style.height = h + 'px';
            document.body.scrollTop = 0;
        },
        destroyed(){
            this.scrollWatch = false;
        },
        methods:{
            hidden:function(){
                this.show = false;
            },
            hid:function(){
                this.show = true;
            },
            obtain : function(){
                if(!(/^1[34578]\d{9}$/.test(this.mobile))){
                    Toast('请填写正确的手机号');
                    return;
                }
                if(this.isActive == true)return;
                this.isActive = true;
                var N = 60,
                    _this = this,
                    clear = null;
                Toast('验证码发送成功！请注意查收。');
                this.btnText = '请'+ N +'秒后重试';
                this.isActive = true;
                clear = setInterval(function(){
                    _this.btnText = '请'+ N-- +'秒后重试';
                    if(N < 0){
                        clearInterval(clear);
                         _this.btnText = '再次获取验证码';
                         _this.isActive = false;
                    }
                },1000);
            },
            remove:function(){//路由回退一步
                this.$router.go(-1)
            },
            logoIn:function(){//帐户名密码是否正确如果正确跳转主页
                if(this.mobile == ''){
                    Toast({
                        message: '账号不能为空',
                        position: 'bottom',
                        duration: 1000
                    });
                    return;
                };
                if(this.message == ''){
                    Toast({
                        message: '请填写验证码',
                        position: 'bottom',
                        duration: 1000
                    });
                    return;
                };
                Toast('登录成功');
                this.$router.push('/home');
                this.show = false;
                this.show = false;
            },
            goNow:function(){//跳转注册页
                this.$router.push({
                    path : '/Register'
                });
            },
            toAcclogoIn:function(){
                this.$router.push({
                    path : '/LogoIn'
                });
                this.show = false;
            }
        }
    }
</script>
<style lang="less" scoped>
    .logoin-main{
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
            .phone-number{
                .icon{
                    background:url(../../assets/images/mobild.png) no-repeat center;
                    background-size:.36rem .5rem;
                }
            }
            .message{
                .icon{
                    background:url(../../assets/images/code.png) no-repeat center;
                    background-size:.41rem .33rem;
                }
                .btn-ver{
                    width:1.88rem;
                    height:1.04rem;
                    position:absolute;
                    right:.04rem;
                    top:50%;
                    margin-top:-.52rem;
                    border:none;
                    background:#fff;
                    font-size:.26rem;
                    color:#333;
                    border-radius:5px;
                    outline:none;
                }
                .btn-ver:active{
                    background:#f9781e;
                    color:#fff;
                }
                .btn-ver.active{
                    background:#f9781e;
                    color:#fff;
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
            position:absolute;
            left:0;
            bottom:0;
            padding:0 .6rem;
            text-align:center;
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
                background-size:100% 100%;
                margin:.3rem 0;
            }
            dd:nth-child(3){
                margin-left:1.2rem;
                margin-right:1.2rem;
                background-size:100% 100%;
            }
            dd:nth-child(4){
                background-size:100% 100%;
            }
        }
    }
</style>