<template>
    <div id="app">
        <div class="layout-content flex-box">
            <template v-if="$route.fullPath !== '/login'">
                <SideMenu class="layout-side-menu"></SideMenu>
                <div class="layout-main flex-box flex-column flex-item">
                    <Header class="layout-header"></Header>
                    <transition enter-active-class="fadeInRight faster delay" leave-active-class="fadeOutLeft faster">
                        <router-view class="animated layout-view flex-item" />
                    </transition>
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
export default {
    name: 'App',

    components: {
        Header,
        SideMenu
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
