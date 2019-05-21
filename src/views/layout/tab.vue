<template>
    <div>
        <el-tabs
            :value="currentTab"
            @tab-click="clickTab"
            @tab-remove="removeTab"
            >
            <el-tab-pane
                v-for="item in tabList"
                :closable="item.name !== 'Home' || false"
                :key="item.name"
                :label="item.title"
                :name="item.name"
                :path="item.path"
                @contextmenu.native="contextmenu">
                <div>asdsad</div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Tab',

    data () {
        return {
            // currentTab: 'Home'
        }
    },

    computed: {
        ...mapState('tab', [
            'currentTab',
            'tabList'
        ])
    },

    methods: {
        ...mapMutations('tab', [
            'sync_currentTab',
            'sync_tabList'
        ]),
        clickTab (item) {
            this.$router.push(item.$attrs.path)
            this.sync_currentTab(item.name)
        },
        removeTab (name) {
            if (name === 'Home') return
            let tabs = [].concat(this.tabList)
            let currentItem = tabs.find(item => item.name === name)
            let currentIndex = this.tabList.indexOf(currentItem)
            if (currentItem) tabs.splice(currentIndex, 1)
            this.sync_tabList(tabs)
            this.$storage.set('tabList', this.tabList)
            if (name === this.currentTab) {
                let currentName = this.tabList[currentIndex - 1].name
                this.sync_currentTab(currentName)
            }
        },
        contextmenu () {
            console.log(arguments)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
