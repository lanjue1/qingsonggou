<template>
    <Tabbar>
        <TabbarItem path="/home" activeColor="deeppink">
            <img slot="item-icon" src="~assets/img/tabbar/home.png"/>
            <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png"/>

            <div slot="item-text">首页</div>

        </TabbarItem>
        <TabbarItem path="/category" activeColor="deeppink">
            <img slot="item-icon" src="~assets/img/tabbar/category.png"/>
            <img slot="item-icon-active" src="~assets/img/tabbar/category_active.png"/>

            <div slot="item-text">分类</div>
        </TabbarItem>
        <TabbarItem path="/cart" activeColor="deeppink">
            <img slot="item-icon" src="~assets/img/tabbar/cart.png"/>
            <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.png"/>

            <div slot="item-text">购物车</div>
        </TabbarItem>
        <TabbarItem path="/profile" activeColor="deeppink">
            <img slot="item-icon" src="~assets/img/tabbar/profile.png"/>
            <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png"/>
            <div slot="item-text">我的</div>
        </TabbarItem>

    </Tabbar>
</template>

<script>
    import Tabbar from 'components/common/Tabbar/Tabbar.vue';
    import TabbarItem from 'components/common/Tabbar/TabbarItem.vue';

    export default {
        name: "MainTabbar",
        components:{
            TabbarItem,
            Tabbar,
        }
    }
</script>

<style scoped>

</style>
