<template>
    <div id="app">
        <div class="layout-content flex-box">
            <SideMenu class="layout-side-menu"></SideMenu>
            <div class="layout-main flex-box flex-column flex-item">
                <Header class="layout-header"></Header>
                <transition enter-active-class="fadeInRight faster delay" leave-active-class="fadeOutLeft faster">
                    <router-view class="animated layout-view flex-item" />
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
</style>
