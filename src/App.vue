<template>
    <div id="app">
        <div class="layout-content flex-box">
            <template v-if="$route.fullPath !== '/login'">
                <SideMenu class="layout-side-menu"></SideMenu>
                <div class="layout-main flex-box flex-column flex-item">
                    <Header class="layout-header"></Header>
                    <tab></tab>
                    <div class="layout-view flex-box flex-item flex-row" style="position: relative;">
                        <transition enter-active-class="fadeInRight faster" leave-active-class="fadeOut faster">
                            <keep-alive>
                                <router-view class="animated layout-view-main" />
                            </keep-alive>
                        </transition>
                    </div>
                </div>
            </template>
            <template v-else>
                <router-view class="animated fadeIn layout-view flex-item" />
            </template>
        </div>
    </div>
</template>

<script>
import Header from './views/layout/header.vue'
import SideMenu from './views/layout/sideMenu.vue'
import Tab from './views/layout/tab.vue'
export default {
    name: 'App',

    components: {
        Header,
        SideMenu,
        Tab
    },

    data () {
        return {
            token: true
        }
    }
}
</script>

<style>
</style>
