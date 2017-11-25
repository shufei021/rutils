<template>
    <div class="logoin-main">
        <div v-title data-title="找回密码">{{title}}</div>
        <header class="logoIn-header">
           <span @click="remove" class="btn-back">取消</span>{{title}}
        </header>
        <div class="from">
            <div class="input-main phone-number">
                <span class="icon"></span>
                <input type="text" placeholder="请输入验证手机号码" v-model="mobile">
            </div>
            <div class="input-main message">
                <span class="icon"></span>
                <input type="text" placeholder="请输入短信验证码" v-model="message">
                <button class="btn-ver" :class="{active:isActive}" @click="obtain">{{btnText}}</button>
            </div>
            <div class="input-main verify-ma">
                <span class="icon"></span>
                <input type="text" placeholder="图片验证码">
                <div class="img-main" @click="replace">
                    <em class="img text-center">{{msgimg}}</em>
                    <span>换一张</span>
                </div>
            </div>
            <button class="btn-in" @click="logoIn">找回密码</button>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    export default {
        name : 'logoIn',
        data(){
            return {
                title:'找回密码',
                userName:'',
                passWord:'',
                isActive:false,
                message:'',
                btnText:'获取验证码',
                scrollWatch:true,
                msgimg:'',
                mobile:''
            }
        },
        components:{
            
        },
        methods:{
            obtain(){
                if(!(/^1[34578]\d{9}$/.test(this.mobile))){ 
                    Toast('手机号码有误,请重新输入');
                    return false; 
                };
                if(this.isActive == true)return;
                this.isActive = true;
                var N = 60,
                    _this = this,
                    clear = null;
                this.axios.post('http://api.shopsn.net/Home/Register/short_message_send',qs.stringify({
                    mobile:this.mobile
                })).then((res) => {
                    if(res.data.status == 1){
                            _this.isActive = true;
                            _this.btnText = '请'+ N +'秒后重试';
                            _this.isActive = true;
                            clear = setInterval(function(){
                                _this.btnText = '请'+ N-- +'秒后重试';
                                if(N < 0){
                                    clearInterval(clear);
                                    _this.btnText = '再次获取验证码';
                                    _this.isActive = false;
                                }
                            },1000);
                    };
                    Toast(res.data.msg);
                }).catch((err) => {
                    console.info('FailtrueErr', err);
                });
            },
            remove(){//路由回退一步
                this.$router.go(-1)
            },
            logoIn(){
                this.axios.post('http://api.shopsn.net/Home/Register/find_pwd',qs.stringify({
                    mobile:this.mobile,
                    verify:this.msgimg,
                    code:this.message,
                    type:'Android'
                })).then((res) => {
                    if(res.data.status == 1){
                        Toast('验证成功请重置密码');
                        this.$router.push({
                            name:'reset',
                            params:{
                                user_id:res.data.data
                            }
                        })
                    }
                }).catch((err) => {
                    console.log(err);
                });
            },
            goNow(){//跳转注册页
                this.$router.push({
                    path : '/Register'
                });
            },
            toAcclogoIn(){
                this.$router.push({
                    path : '/LogoIn'
                });
                this.show = false;
            },
            replace(){//换一换
                this.axios.post('http://api.shopsn.net/Home/Register/verify',qs.stringify({
                    type:'Android'
                })).then((res) => {
                    this.msgimg = res.data.data;
                }).catch((err) => {
                    console.log(err);
                });
            }
        },
        mounted() {
            document.body.scrollTop = 0;
        },
        destroyed(){
            this.scrollWatch = false;
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
            .input-main{
                height:1.1rem;
                margin-top:.3rem;
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
                    background:#ccc;
                    color:#333;
                }
                .btn-ver.active{
                    background:#ccc;
                    color:#333;
                }
            }
            .verify-ma{
                width:3.3rem;
                .icon{
                    background:url(../../assets/images/ver.png) no-repeat center;
                    background-size:.43rem .47rem;
                }
                .img-main{
                    width:3rem;
                    position:absolute;
                    right:-3rem;
                    top:0;
                    padding:.25rem 0;
                    .img{
                        display:inline-block;
                        background-size:100% 100%;
                        width:1.62rem;
                        height:.64rem;
                        margin:0 .2rem;
                        line-height: .64rem;
                        font-size:.3rem;
                        letter-spacing:.5em;
                        color:#387d82;
                    }
                    span{
                        font-size:.28rem;
                        color:#ababab;
                        line-height:.64rem;
                    }
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
                color:#f9781e;
            }
        }
        .tplogin{
            width:6.3rem;
            position:fixed;
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