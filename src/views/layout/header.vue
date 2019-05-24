<template>
<div class="flex-box">
    <div class="logo flex-box flex-center">
        <span>Hello World</span>
    </div>
    <el-menu class="flex-item" :default-active="activeIndex" mode="horizontal" :unique-opened="true">
        <template v-for="item in list">
            <el-menu-item v-if="!(item['child'] && item['child'].length)" :index="item.index" :key="item.index">
                <a @click.prevent="handleClick(item)">{{ item.name }}</a>
            </el-menu-item>
            <el-submenu v-else :index="item.index" :key="item.index"  popper-class="header-menu-popup" :show-timeout="0">
                <template slot="title">{{ item.name }}</template>
                <el-menu-item v-for="subitem in item.child" :index="subitem.index" :key="subitem.index">
                    <a @click.prevent="handleClick(subitem)">{{ subitem.name }}</a>
                </el-menu-item>
            </el-submenu>
        </template>
    </el-menu>
    <div class="tool flex-box flex-center">
        <el-button @click="handleFullSreen" type="text" icon="el-icon-full-screen"></el-button>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Header',

    data () {
        return {
            activeIndex: '0',
            list: [
                {
                    name: 'list',
                    path: '/demo/list',
                    index: '1',
                    isCustom: false,
                    child: []
                },
                {
                    name: 'item2',
                    index: '2',
                    child: [
                        {
                            name: 'item2-1',
                            path: '/item2-1',
                            index: '2-1',
                            isCustom: true,
                            child: []
                        },
                        {
                            name: 'item2-2',
                            path: '/item2-2',
                            index: '2-2',
                            isCustom: true,
                            child: []
                        }
                    ]
                },
                {
                    name: 'item3',
                    index: '3',
                    child: [
                        {
                            name: 'item3-1',
                            path: '/item3-1',
                            index: '3-1',
                            isCustom: true,
                            child: []
                        },
                        {
                            name: 'item3-2',
                            path: '/item3-2',
                            index: '3-2',
                            isCustom: true,
                            child: []
                        },
                        {
                            name: 'item3-3',
                            path: '/item3-3',
                            index: '3-3',
                            isCustom: true,
                            child: []
                        }
                    ]
                },
                {
                    name: 'item4',
                    index: '4',
                    child: [
                        {
                            name: 'item4-1',
                            path: '/item4-1',
                            index: '4-1',
                            isCustom: true,
                            child: []
                        },
                        {
                            name: 'item4-2',
                            path: '/item4-2',
                            index: '4-2',
                            isCustom: true,
                            child: []
                        },
                        {
                            name: 'item4-3',
                            path: '/item4-3',
                            index: '4-3',
                            isCustom: true,
                            child: []
                        },
                        {
                            name: 'item4-4',
                            path: '/item4-4',
                            index: '4-4',
                            isCustom: true,
                            child: []
                        },
                        {
                            name: 'item4-5',
                            path: '/item4-5',
                            index: '4-5',
                            isCustom: true,
                            child: []
                        }
                    ]
                },
                {
                    name: 'item5',
                    index: '5',
                    child: [
                        {
                            name: 'item5-1',
                            path: '/item5-1',
                            index: '5-1',
                            isCustom: true,
                            child: []
                        },
                        {
                            name: 'item5-2',
                            path: '/item5-2',
                            index: '5-2',
                            isCustom: true,
                            child: []
                        },
                        {
                            name: 'item5-3',
                            path: '/item5-3',
                            index: '5-3',
                            isCustom: true,
                            child: []
                        },
                        {
                            name: 'item5-4',
                            path: '/item5-4',
                            index: '5-4',
                            isCustom: true,
                            child: []
                        },
                        {
                            name: 'item5-5',
                            path: '/item5-5',
                            index: '5-5',
                            isCustom: true,
                            child: []
                        }
                    ]
                }
            ],
            isFullScreen: false
        }
    },

    computed: {
        ...mapState('tab', [
            'tabList'
        ])
    },

    created () {
        this.fullscreenListener()
    },

    methods: {
        ...mapMutations('tab', [
            'sync_currentTab',
            'sync_tabList'
        ]),
        handleClick (item) {
            if (item.isCustom) {
                this.$addRouter.add({
                    path: item.path,
                    key: item.index,
                    compName: 'Custom',
                    props: item
                })
            } else {
                this.$router.push(item.path)
            }
            let storeTab = this.$storage.get('tabList') || []
            let currentTab = this.$storage.get('currentTab')
            let currentItem = storeTab.find(v => v.name === currentTab)
            let currentIndex = storeTab.indexOf(currentItem)
            if (!storeTab.find(v => v.name === item.name)) {
                storeTab.splice(currentIndex + 1, 0, {
                    name: item.name,
                    path: item.path
                })
                this.sync_tabList(storeTab)
                this.$storage.set('tabList', this.tabList)
            }
            this.sync_currentTab(item.name)
            this.$storage.set('currentTab', item.name)
        },
        handleFullSreen () {
            this.fullScreenSwitch()
        },
        // 全屏开关
        fullScreenSwitch (elDiv) {
            if (!this.isFullScreen) {
                this.fullScreenOpen(elDiv)
                // .text('退出')
            } else {
                this.fullScreenExit()
                // $('#btn').text('全屏')
            }
        },
        // 全屏打开
        fullScreenOpen (el) {
            let docEl = el || document.body
            if (docEl.requestFullscreen) {
                docEl.requestFullscreen().catch(this.fullScreenCatchErr)
            } else if (docEl.msRequestFullscreen) {
                docEl.msRequestFullscreen().catch(this.fullScreenCatchErr)
            } else if (docEl.mozRequestFullScreen) {
                docEl.mozRequestFullScreen().catch(this.fullScreenCatchErr)
            } else if (docEl.webkitRequestFullScreen) {
                docEl.webkitRequestFullScreen().catch(this.fullScreenCatchErr)
            }
        },
        // 退出全屏
        fullScreenExit () {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            }
        },
        // 全屏监听器
        fullscreenListener () {
            document.addEventListener('fullscreenchange', () => {
                if (document.fullscreenElement != null) {
                    this.isFullScreen = true
                    // console.log('全屏')
                } else {
                    this.isFullScreen = false
                    // console.log('退出全屏')
                }
            })
        },
        // 捕获全屏异常
        fullScreenCatchErr (err) {
            return new Error(err)
        }
    }
}
</script>

<style lang="scss">

</style>
