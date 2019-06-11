<template>
    <div class="layout-tabs">
        <div class="tabs flex-box">
            <span
                v-if="isShowTabBtn"
                class="tab-btn tab-btn-left el-icon-arrow-left"
                @mousedown="scrollTabLeft">
            </span>
            <div class="tabs-wrap flex" ref="tabWrap">
                <ul ref="tabUi" :style="{'left': tabUiLeft + 'px'}">
                    <draggable
                        :value="tabList"
                        @input="handleChange"
                        draggable="li"
                        animation="200">
                        <li
                            :class="item.path === $route.path ? 'active' : ''"
                            v-for="item in tabList"
                            :key="item.name"
                            @click="clickTab(item)"
                            @contextmenu.prevent="handleContextmenu(item, $event)"
                            @dblclick="closeTab(item)"
                            @mouseenter="mouseenterTab(item)">
                            <span>{{ item.name }}</span>
                            <i
                                v-if="item.name !== 'Home'"
                                class="el-icon-close"
                                @click.stop="closeTab(item)">
                            </i>
                        </li>
                    </draggable>
                </ul>
            </div>
            <span
                v-if="isShowTabBtn"
                class="tab-btn tab-btn-right el-icon-arrow-right"
                @mousedown="scrollTabRight">
            </span>
        </div>
        <div
            ref="contextmenu"
            v-show="isShowContextmenu"
            class="contextmenu animated fadeIn faster"
            :style="{'left': contextmenuLeft + 'px', 'top': contextmenuTop + 'px'}"
            @mouseleave="hideContextmenu">
            <ul>
                <li @click="closeCurrent">
                    <i class="el-icon-error"></i>
                    <span>关闭当前</span>
                </li>
                <li @click="closeLeft">
                    <i class="el-icon-error"></i>
                    <span>关闭左侧</span>
                </li>
                <li @click="closeRight">
                    <i class="el-icon-error"></i>
                    <span>关闭右侧</span>
                </li>
                <li @click="closeAll">
                    <i class="el-icon-error"></i>
                    <span>关闭全部</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { setTimeout } from 'timers'

export default {
    name: 'Tabs',

    data () {
        return {
            isShowContextmenu: false,
            isShowTabBtn: false,
            contextmenuLeft: 0,
            contextmenuTop: 0,
            currentItem: null,
            tabUiLeft: 0,
            currentTab: null
        }
    },

    computed: {
        ...mapState('tab', [
            // 'currentTab',
            'defaultList',
            'tabList'
        ])
    },

    created () {
        this.$nextTick(() => {
            this.scrollTabTo()
            this.initStoreTab()
            window.addEventListener('resize', () => {
                if (this.$refs.tabWrap.scrollWidth <= this.$refs.tabUi.scrollWidth) {
                    this.isShowTabBtn = true
                } else {
                    this.isShowTabBtn = false
                }
                this.scrollTabTo()
            })
        })
    },

    watch: {
        currentTab () {
            this.scrollTabTo()
        },
        tabList () {
            this.$nextTick(() => {
                if (this.$refs.tabWrap.scrollWidth <= this.$refs.tabUi.scrollWidth) {
                    this.isShowTabBtn = true
                } else {
                    this.isShowTabBtn = false
                }
            })
            this.scrollTabTo()
        }
    },

    methods: {
        ...mapMutations('tab', [
            'sync_tabList'
        ]),
        initStoreTab () {
            let tabs = this.$storage.get('tabList') || this.defaultList
            this.sync_tabList(tabs)
            this.$storage.set('tabList', tabs)
            let item = tabs.find(v => v.path === this.$route.path)
            if (!item) this.$router.push('/')
        },
        clickTab (item) {
            this.$router.push(item.path)
            this.scrollTabTo()
        },
        closeTab (item) {
            if (item.name === 'Home') return
            let tabs = [].concat(this.tabList)
            let currentIndex = this.tabList.indexOf(item)
            tabs.splice(currentIndex, 1)
            this.sync_tabList(tabs)
            this.$storage.set('tabList', this.tabList)
            if (item.name === this.currentTab) {
                let prveItem = this.tabList[currentIndex - 1]
                this.$router.push(prveItem.path)
            }
        },
        mouseenterTab (item) {
            if (this.currentItem && item.name !== this.currentItem['name']) {
                this.hideContextmenu()
            }
        },
        showContextmenu () {
            this.isShowContextmenu = true
        },
        hideContextmenu () {
            this.isShowContextmenu = false
        },
        handleContextmenu (item, event) {
            this.showContextmenu()
            setTimeout(() => {
                this.contextmenuLeft = Math.abs(event.target.offsetLeft - Math.abs(this.tabUiLeft))
                this.contextmenuTop = event.pageY - 60
                this.currentItem = item
            }, 0)
        },
        closeCurrent () {
            this.closeTab(this.currentItem)
            this.hideContextmenu()
        },
        closeAll () {
            this.sync_tabList(this.defaultList)
            this.$storage.set('tabList', this.defaultList)
            this.$router.push('/')
            this.hideContextmenu()
        },
        closeLeft () {
            let tabs = [].concat(this.tabList)
            let currentIndex = this.tabList.indexOf(this.currentItem)
            tabs.splice(1, currentIndex - 1)
            this.sync_tabList(tabs)
            this.$storage.set('tabList', tabs)
            if (!tabs.find(v => v.name === this.currentTab)) {
                this.clickTab(this.currentItem)
            }
            this.hideContextmenu()
        },
        closeRight () {
            let tabs = [].concat(this.tabList)
            let currentIndex = this.tabList.indexOf(this.currentItem)
            tabs.splice(currentIndex + 1, tabs.length)
            this.sync_tabList(tabs)
            this.$storage.set('tabList', tabs)
            if (!tabs.find(v => v.name === this.currentTab)) {
                this.clickTab(this.currentItem)
            }
            this.hideContextmenu()
        },
        scrollTabLeft () {
            if (this.tabUiLeft + 100 <= 0) {
                this.tabUiLeft += 100
            } else {
                this.tabUiLeft = 0
            }
        },
        scrollTabRight () {
            let maxleft = this.$refs.tabUi.scrollWidth - this.$refs.tabWrap.offsetWidth
            if (Math.abs(this.tabUiLeft - 100) < maxleft) {
                this.tabUiLeft -= 100
            } else {
                this.tabUiLeft = -maxleft
            }
        },
        scrollTabTo () {
            setTimeout(() => {
                this.tabUiLeft = 0
                if (!this.isShowTabBtn) return
                let currentEle = this.$refs.tabUi.querySelector('li.active')
                if (!currentEle) return
                let left = currentEle.offsetLeft
                let scrollWidth = this.$refs.tabUi.scrollWidth
                let boxWidth = this.$refs.tabWrap.offsetWidth
                this.tabUiLeft = boxWidth / 2 - left - currentEle.offsetWidth / 2
                if (this.tabUiLeft > 0) {
                    this.tabUiLeft = 0
                }
                if (Math.abs(this.tabUiLeft) > scrollWidth - boxWidth) {
                    this.tabUiLeft = -(scrollWidth - boxWidth)
                }
            }, 0)
        },
        handleChange (list) {
            this.sync_tabList(list)
            this.$storage.set('tabList', list)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
