<template>
    <div id="app">
        <div class="layout-content flex-box">
            <template v-if="$route.fullPath !== '/login'">
                <SideMenu class="layout-side-menu"></SideMenu>
                <div class="layout-main flex-box flex-column flex-item">
                    <Header class="layout-header"></Header>
                    <tabs></tabs>
                    <keep-alive :include=tabList>
                        <div class="layout-view flex-box flex-item">
                            <router-view />
                        </div>
                    </keep-alive>
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
import Tabs from './views/layout/tabs.vue'
import { mapState } from 'vuex'

export default {
    name: 'App',

    components: {
        Header,
        SideMenu,
        Tabs
    },

    data () {
        return {
            token: true
        }
    },

    computed: {
        ...mapState('tab', [
            'tabList'
        ]),
        aliveComps () {
            return this.tabList.map(v => v.name)
        }

    }
}
</script>

<style>
</style>
