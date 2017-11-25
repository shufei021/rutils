<template>
    <div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <footer-nav></footer-nav>
    </div>
</template>
<script>
    import footerNav from '@/components/footer_nav'
    export default {
        name : 'index',
        components:{
            footerNav
        }
    }
</script>