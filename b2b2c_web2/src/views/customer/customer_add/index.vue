<template>
	<div class="customerAdd">
 	 	<div v-title data-title="新增发票">{{title}}</div>
 	 	<header-Brief :title='title'></header-Brief>
 	 	<div class="customerAdd_content">			
			<div class="companyName" v-for='item in CuAdd' :key='item.id'>
				<div class="companyName_title">{{item.text}}</div>
				<div class="companyName_details"><input type="text" :placeholder="item.pla"></div>
				<div class="RightImg" v-if ='item.img'><img :src="item.img" alt="" class="Right_Img"/></div>
			</div>			
 	 	</div>
		<div class="save">
			<div class="save-content">保存</div>
		</div>
  	</div>
</template>
<script>
	import headerBrief from '@/components/header_Brief';
    export default {
        name:'customerAdd',
        data(){
            return{
                title:'新增专票资质',
				CuAdd:[
					{text:'公司名称：',pla:'请输入公司名称'},
					{text:'税号：',pla:'请输入税号'},
					{text:'开户银行：',pla:'请输入开户银行'},
					{text:'开户银行账号：',pla:'请输入银行账号'},
					{text:'注册地区：',pla:'请输入注册地区' ,img:require('@/assets/images/right-icon.png')},
					{text:'详细地址：',pla:'请输入详细地址'},
					{text:'注册电话：',pla:'请输入有效电话'},
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
	.customerAdd{
		.customerAdd_content{
			overflow: hidden;
			background-color: #fff;
			position:relative;
			margin-bottom: 1rem;
			.companyName{
				display:flex;
				padding:0 .2rem;
				border-bottom:1px solid rgba(0,0,0,0.1);
				position: relative;
				overflow: hidden;
				height: 1rem;
				.companyName_title{
					font-size:0.28rem;
					line-height: 1rem;
					color:#9c9a9c;	
				}
				.companyName_details{					
					padding-left:.15rem;
					color:#313031;
					input{
						width:4.5rem;
						height: 1rem;
						line-height: 1rem;
						font-size:.36rem;
						border:none;
						outline:none;
					}
				}
				.Right_Img{
					position: absolute;
					right:0.2rem;
					top:0.35rem;
					width: 0.18rem;
					height: 0.3rem;
				}
			}
			
		}
		.save{
			box-sizing:border-box;
			position:fixed;
			bottom:0.15rem;
			left: 0;
			width: 100%;
			height: 1rem;
			overflow: hidden;
			.save-content{
				background-color:#C79A01;
				height: 1rem;
				line-height: 1rem;
				cursor: pointer;
				font-size:0.32rem;
				text-align:center;
				color:#fff;
			}
		}
	}

</style>


