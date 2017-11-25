<template>
	<div class="customer_newAdd">
		<div v-title data-title="新增普通发票">{{title}}</div>
		<header-Brief :title='title'></header-Brief>
        <div class="customer_newAdd_content">
            <div class="companyMsg" v-for="item in newAdd">
                <div class="companyName">{{item.text}}</div>
                <div class="companyDetail"><input type="text" :placeholder="item.pla"></div>
            </div>
            <div class="save">保存</div>
        </div>
	</div>
</template>
<script>
	import headerBrief from '@/components/header_Brief';
    export default {
        name:'customer_newAdd',
        data(){
            return{
                title:'新增普通发票',
				newAdd:[
					{text:'公司名称：',pla:'请输入公司名称'}
				],
            }
        },
        components:{
            headerBrief, 
        },
    }
</script>
<style lang="less" scoped>
    @import '~@/assets/css/color.less';
    .customer_newAdd{
        .customer_newAdd_content{
            .companyMsg{
                padding: 0 .2rem;
                display: flex;
                height: 1rem; 
                .companyName{
                    height: 1rem;
                    line-height: 1rem;
                    font-size:.3rem;
                }
                .companyDetail{
                    height: 1rem;
                    line-height: 1rem;
                    input{
                        padding: 0;
                        height: 1rem;
                        line-height: 1rem;
                        font-size:.32rem;
                        outline: none;
                        border:none;
                        background-color:#f1f1f1;
                    }
                }
            }
            .save{
                width: 100%;
                position: fixed;
                bottom:.15rem;
                text-align:center;
                line-height: 1rem;
                height: 1rem;
                background-color:orange;
                color:#fff;
                font-size:.3rem;
            }
        }
    }
</style>    