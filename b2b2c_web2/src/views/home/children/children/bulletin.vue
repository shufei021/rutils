<template>
    <div>
        <div v-title data-title="公告">公告</div>
        <div class="B_header">
            <div class="B_header_at">
                ShopsN公告
                <router-link to="home" class="B_header_at_home">
                    <img src="../../../../assets/images/B_left.png" alt="">
                </router-link>      
            </div> 
        </div> 
        <div class="B_content">
            <div class="B_content_at">
                <div class="B_content_inform"  v-for="items in text" :key="items.id">
                    <img src="../../../../assets/images/B_inform.png" alt="">
                    <span class="B_content_inform_text">{{items.title}}</span>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>
export default {
    name : 'Bulletin',
        data(){
             return {
                 text:[
                    {title:'1毛鹏皓解盘 — 如何将简单的简如何将简单的简'},
                    {title:'2客服人员周末值班安排'},
                    {title:'3毛鹏皓解盘 — 如何将简单的简如何将简单的简'},
                    {title:'4客服人员周末值班安排'},
                    {title:'5毛鹏皓解盘 — 如何将简单的简如何将简单的简'},
                    {title:'6毛鹏皓解盘 — 如何将简单的简如何将简单的简'},
                    {title:'7客服人员周末值班安排'},
                    {title:'8毛鹏皓解盘 — 如何将简单的简如何将简单的简'}
                 ]
             }
        }
}
</script>

<style lang="less" scoped>
    .B_header{
        width: 100%;
        height: 0.9rem;
        background-color: #D19E29; 
        .B_header_at{
            width: 7.1rem;
            height: 0.9rem;
            margin: auto;
            position: relative;
            line-height: 0.9rem;
            text-align: center;
            font-size: 0.32rem;
            color: #fff;
            .B_header_at_home{
                width: 0.46rem;
                height: 0.46rem;
                position: absolute;
                top: 0.22rem;
                left: 0;
                img{
                width: 0.46rem;
                height: 0.46rem;
                }
            }
            
        }
    }
    .B_content{
        width: 100%;
        overflow: hidden;
        margin-top: 0.3rem;
        background-color: #fff;
        margin-bottom: 1rem;
        .B_content_at{
            width: 7.1rem;
            overflow: hidden;
            margin: auto;
            .B_content_inform{
                width: 100%;
                height: 1.15rem;
                border-bottom: 1px solid #E5E5E3;
                cursor: pointer;
                img{
                    display: block;
                    float: left;
                    margin-top: 0.3rem;
                    width: 0.53rem;
                    height: 0.53rem;
                }
                .B_content_inform_text{
                    display: block;
                    float: left;
                    width: 6.38rem;
                    height: 1.15rem;
                    margin-left: 0.15rem;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    line-height: 1.15rem;
                    font-size: 0.32rem;
                    color: #333;
                }
            }
        }
    }
</style>
