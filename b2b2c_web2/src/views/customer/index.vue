<template>
  <div class="customer">
    <div v-title data-title='我的发票'>我的发票</div>
    <header-Brief :title='title'></header-Brief>
    <div class="customer_top">
        <div class="customer_nome" v-for='(items,index) in customer_nome' :key='items.id' :class='{active:HActive == index}' @click='Class(index)'>
            <span>{{items.name}}</span>
        </div>
    </div>
    <div class="customer_content" v-for='item in invoice' :key='item.id'>
        <div class="content_at">
            <div class="all">
                发票号码：<span>{{item.id}}</span>
            </div>
            <div class="all">
                发票抬头：<span>{{item.usname}}</span>
            </div>
             <div class="all">
               <div class="all_l">发票类型：<span>{{item.type}}</span></div>
               <div class="all_l you">开票日期：<span>{{item.time}}</span></div>  
            </div>
             <div class="all">
                发票金额：<i>￥{{item.money}}</i>
            </div>
            <div class="customer_click" @click = "fetchData(item.id,item.usname,item.type,item.time)"><img src="../../assets/images/customer_r.png" alt=""></div>
        </div> 
    </div>
    <div class="footer">
        <div class="footer_at"  @click="newAdd">
            <img src="../../assets/images/customer_add.png" alt="" class="footer_add">
            {{this.add}}
        </div>
    </div> 
  </div>
</template>
<script>
import headerBrief from '@/components/header_Brief';
export default {
    name: 'customer',
    data(){
        return{
            title: '我的发票',
            id:'',
            username:'',
            type:'',
            time:'',
            add:'新增普通发票',
            customer_nome:[
                {name:'普通发票'},
                {name:'增值税发票'},
            ],
            invoice:[
                {
                    id:'8300984250',
                    usname:'上海哎哟实业有限公司',
                    type:'普通发票',
                    time:'2017-08-02',
                    money:'127.20'
                },
                {
                    id:'8300984251',
                    usname:'成都哎哟实业有限公司',
                    type:'普通发票',
                    time:'2017-08-02',
                    money:'127.20'
                },
            ], 
            customer:{
                ordinary:[
                     {
                        id:'8300984250',
                        usname:'上海哎哟实业有限公司',
                        type:'普通发票',
                        time:'2017-08-02',
                        money:'127.20'
                    },
                    {
                        id:'8300984251',
                        usname:'成都哎哟实业有限公司',
                        type:'普通发票',
                        time:'2017-08-02',
                        money:'127.20'
                    }
                ],
               increment:[
                    {
                        id:'8300984253',
                        usname:'上海哎哟实业有限公司',
                        type:'增值税发票',
                        time:'2017-08-02',
                        money:'128.20'
                    },
                    {
                        id:'8300984254',
                        usname:'上海哎哟实业有限公司',
                        type:'增值税发票',
                        time:'2017-08-02',
                        money:'129.20'
                    }
               ]
            },
            HActive: false,        
        }
    },
    components:{
        headerBrief,
    },
    methods:{
         Class(index) {
             this.HActive = index;
             if (index==0) {
                this.invoice = this.customer.ordinary;
                this.add = '新增普通发票';
            } else {
                this.invoice = this.customer.increment;
                 this.add = '新增增值税发票';
            }
        },
       fetchData(id,username,type,time){
            this.id =id;
            this.username=username;
            this.type=type;
            this.time=time;
            if(this.id !=''||this.username!=''||this.type!=''||this.time!=''){
                this.$router.push({
                    name:'customerAdd',
                    query:{
                        id:this.id, 
                        username:this.username,
                        type:this.type,
                        time:this.time,
                    }
                });
            }                 
        },
        newAdd(){
            if (this.add== '新增普通发票') {
                this.$router.push('/customer_newAdd');
            } else {
                this.$router.push({
                        name:'customerAdd',
                        query:{
                            username:this.username,
                        }
                });
            }
            
        }
    }
}
</script>
<style lang="less" scoped>
    .customer{
        padding-bottom: 1rem;
        .customer_top{
            width: 100%;
            height: 0.9rem;
            background-color: #fff;
            .customer_nome{
                width: 50%;
                height: 0.9rem;
                float: left;
                &.active{
                    span{
                        display: block;
                        width: 2.5rem;
                        height: 0.9rem;
                        margin: auto;
                        line-height: 0.9rem;
                        font-size: 0.28rem;
                        color: #d19e29;
                        text-align: center;
                        border-bottom: 2px solid #d19e29;
                        box-sizing: border-box;  
                    }
                }
                span{
                    display: block;
                    width: 2.5rem;
                    height: 0.9rem;
                    margin: auto;
                    line-height: 0.9rem;
                    font-size: 0.28rem;
                    color: #666666;
                    text-align: center;
                }
            }
        }
        .customer_content{
            width: 100%;
            height: 2.5rem;
            margin-top: 0.1rem;
            background-color: #fff;
            .content_at{
                width: 7.1rem;
                height: 2.5rem;
                margin:auto;
                position: relative;
                .all{
                    width: 100%;
                    height: 0.6rem;
                    line-height: 0.6rem;
                    font-size: 0.26rem;
                    color:#797979;
                    span{
                        color: #333;
                        height: 0.6rem;
                        line-height: 0.6rem;
                        font-size: 0.26rem;
                    }
                    .all_l{
                        height: 0.6rem;
                        line-height: 0.6rem;
                        font-size: 0.26rem;
                        color:#797979; 
                        float: left;
                        margin-right: 0.5rem;
                        &.you{
                            margin-right: 0rem;
                        }
                    }
                    i{
                        font-size: 0.32rem;
                        color: #d0111b;
                    }

                }
                .customer_click{
                    width: 0.3rem;
                    height: 0.5rem;
                    position: absolute;
                    right: 0;
                    top: 1rem;
                    cursor: pointer;
                    img{
                        width: 0.3rem;
                        height: 0.5rem;
                    }
                }
            }
        }
        .footer{
            width: 100%;
            height: 1rem;
            position: fixed;
            left:0;
            bottom:0;
            background-color: #fff;
            border-top: 2px solid #C79A01;
            box-sizing: border-box;
            .footer_at{
                width: 7.1rem;
                height: 0.9rem;
                margin:0.05rem auto;
                background-color: #C79A01;
                cursor: pointer;
                border-radius: 0.1rem;
                overflow: hidden;
                font-size: 0.32rem;
                color: #fff;
                line-height: 0.9rem;
                text-align: center;
                .footer_add{
                    // display: block;
                    //margin-left: 2.3rem;
                    margin-top: 0.282rem;
                    width: 0.35rem;
                    height: 0.35rem;
                }
            }
        }
    }
</style>
