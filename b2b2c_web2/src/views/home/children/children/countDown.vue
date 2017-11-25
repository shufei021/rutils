<template>
    <div :endTime="endTime" :callback="callback" :endText="endText" class="timers">
        距离结束 :
        <slot>
           <span>{{hour}}</span><i>小时</i>
           <span>{{Minute}}</span><i>分钟</i>
           <span>{{second}}</span><i>秒</i>
        </slot>
    </div>
</template>
<script>
    export default {
        data(){
           return {
            hour: '',
            Minute:'',
            second:''
           }
        },
        props:{
            endTime:{
                type: Number || String,
                default :''
            },
            endText:{
               type : String,
               default:'已结束'
            },
            callback : {
                type : Function,
                default :''
            }
        },
        mounted () {
          this.countdowm(this.endTime);
        },
        methods: {
            countdowm(timestamp){
                let self = this;
                let timer = setInterval(function(){
                    let nowTime = new Date();
                    let endTime = new Date(timestamp * 1000);
                    let t = endTime.getTime() - nowTime.getTime();
                    if(t>0){
                        let day = Math.floor(t/86400000);
                        let hour=Math.floor((t/3600000)%24);
                        let min=Math.floor((t/60000)%60);
                        let sec=Math.floor((t/1000)%60);
                        hour = hour < 10 ? '0' + hour : hour;
                        min = min < 10 ? '0' + min : min;
                        sec = sec < 10 ? '0' + sec : sec;
                        self.hour =  `${hour}`;
                        self.Minute = `${min}`;
                        self.second = `${sec}`;
                    }else{
                        clearInterval(timer);
                        self.hour =  `00`;
                        self.Minute = `00`;
                        self.second = `00`;
                        self._callback();
                    }
                },1000);
            },
            _callback(){
                if(this.callback && this.callback instanceof Function){
                    this.callback(...this);
                }
            }
        }
    }
</script>
<style lang="less" scoped>
     .timers{
        // display: block;
        float: left;
        width: 5.75rem;
        height: 0.45rem;
        background-color: #000000;
        opacity:0.8;
        color: #fff;
        font-size: 0.26rem;
        line-height: 0.45rem;
        text-indent: 0.2rem;
        i{
            font-style:normal;
            font-size:.28rem;
            // display:inline-block;
            height:100%;
        }
        span{
            font-style:normal;
            font-size:.28rem;
        }
    }
</style>