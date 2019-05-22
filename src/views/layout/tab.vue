<template>
    <div class="layout-tabs">
        <el-tabs
            ref="tabs"
            :value="currentTab"
            @tab-click="clickTab"
            @tab-remove="closeTab"
            @contextmenu.native.prevent="handleContextmenu"
            @mouseover.native="mouseoverTab">
            <el-tab-pane
                v-for="item in tabList"
                :closable="item.name !== 'Home' || false"
                :key="item.name"
                :label="item.title"
                :name="item.name"
                :path="item.path">
            </el-tab-pane>
        </el-tabs>
        <div
            v-if="isShowContextmenu"
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

export default {
    name: 'Tab',

    data () {
        return {
            isShowContextmenu: false,
            contextmenuLeft: 0,
            contextmenuRight: 0,
            currentItem: null
        }
    },

    computed: {
        ...mapState('tab', [
            'currentTab',
            'defaultList',
            'tabList'
        ])
    },

    created () {
        this.initStoreTab()
    },

    methods: {
        ...mapMutations('tab', [
            'sync_currentTab',
            'sync_tabList'
        ]),
        initStoreTab () {
            let tabs = this.$storage.get('tabList') || this.defaultList
            let currentTab = this.$storage.get('currentTab') || this.currentTab
            this.sync_currentTab(currentTab)
            this.$storage.set('currentTab', this.currentTab)
            this.sync_tabList(tabs)
            this.$storage.set('tabList', tabs)
        },
        clickTab (item) {
            this.$router.push(item['path'] || item.$attrs['path'])
            this.sync_currentTab(item.name)
            this.$storage.set('currentTab', item.name)
        },
        closeTab (name) {
            if (name === 'Home') return
            let tabs = [].concat(this.tabList)
            let currentItem = tabs.find(v => v.name === name)
            let currentIndex = this.tabList.indexOf(currentItem)
            tabs.splice(currentIndex, 1)
            this.sync_tabList(tabs)
            this.$storage.set('tabList', this.tabList)
            if (currentItem.name === this.currentTab) {
                let prveItem = this.tabList[currentIndex - 1]
                this.sync_currentTab(prveItem.name)
                this.$storage.set('currentTab', prveItem.name)
                this.$router.push(prveItem.path)
            }
        },
        mouseoutTab () {
            this.hideContextmenu()
        },
        mouseoverTab () {
            let name = event.target.id.replace('tab-', '')
            if (this.currentItem && name !== this.currentItem['name']) {
                this.hideContextmenu()
            }
            this.hideContextmenu()
        },
        showContextmenu () {
            this.isShowContextmenu = true
        },
        hideContextmenu () {
            this.isShowContextmenu = false
        },
        handleContextmenu (event) {
            let name = event.target['id'] && event.target['id'].replace('tab-', '')
            if (!name) return
            this.currentItem = this.tabList.find(v => v.name === name)
            this.showContextmenu()
            this.contextmenuLeft = event.pageX - 50
            this.contextmenuTop = event.pageY - 50
        },
        closeCurrent () {
            this.closeTab(this.currentItem.name)
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
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
