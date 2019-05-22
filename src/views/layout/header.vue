<template>
<div class="flex-box">
    <div class="logo flex-box flex-center">
        <span>Hello World</span>
    </div>
    <el-menu class="flex-item" :default-active="activeIndex" mode="horizontal">
        <template v-for="item in list">
            <el-menu-item v-if="!(item['child'] && item['child'].length)" :index="item.index" :key="item.index">
                <!-- <router-link :to="item.name">{{ item.name }}</router-link> -->
                <a href="" @click.prevent="handleClick(item)">{{ item.name }}</a>
            </el-menu-item>
            <el-submenu v-else :index="item.index" :key="item.index"  popper-class="header-menu-popup">
                <template slot="title">{{ item.name }}</template>
                <el-menu-item v-for="subitem in item.child" :index="subitem.index" :key="subitem.index">
                    <!-- <router-link :to="item.name">{{ subitem.name }}</router-link> -->
                    <a href="" @click.prevent="handleClick(subitem)">{{ subitem.name }}</a>
                </el-menu-item>
            </el-submenu>
        </template>
    </el-menu>
    <div class="setting flex-box flex-center">
        <el-dropdown size="medium">
            <span class="el-dropdown-link">
                <i class="el-icon-setting"></i> 设置
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>设置1</el-dropdown-item>
                <el-dropdown-item>设置2</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
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
                    name: 'item1',
                    path: '/item1',
                    index: '1',
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
                            child: []
                        },
                        {
                            name: 'item2-2',
                            path: '/item2-2',
                            index: '2-2',
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
                            child: []
                        },
                        {
                            name: 'item3-2',
                            path: '/item3-2',
                            index: '3-2',
                            child: []
                        },
                        {
                            name: 'item3-3',
                            path: '/item3-3',
                            index: '3-3',
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
                            child: []
                        },
                        {
                            name: 'item4-2',
                            path: '/item4-2',
                            index: '4-2',
                            child: []
                        },
                        {
                            name: 'item4-3',
                            path: '/item4-3',
                            index: '4-3',
                            child: []
                        },
                        {
                            name: 'item4-4',
                            path: '/item4-4',
                            index: '4-4',
                            child: []
                        },
                        {
                            name: 'item4-5',
                            path: '/item4-5',
                            index: '4-5',
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
                            child: []
                        },
                        {
                            name: 'item5-2',
                            path: '/item5-2',
                            index: '5-2',
                            child: []
                        },
                        {
                            name: 'item5-3',
                            path: '/item5-3',
                            index: '5-3',
                            child: []
                        },
                        {
                            name: 'item5-4',
                            path: '/item5-4',
                            index: '5-4',
                            child: []
                        },
                        {
                            name: 'item5-5',
                            path: '/item5-5',
                            index: '5-5',
                            child: []
                        }
                    ]
                }
            ]
        }
    },

    computed: {
        ...mapState('tab', [
            'tabList'
        ])
    },

    methods: {
        ...mapMutations('tab', [
            'sync_currentTab',
            'sync_tabList'
        ]),
        handleClick (item) {
            this.$addRouter.add({
                path: item.path,
                key: item.index,
                compName: 'custom',
                props: item
            })
            let storeTab = this.$storage.get('tabList') || []
            if (!storeTab.find(v => v.name === item.name)) {
                storeTab.push({
                    title: item.name,
                    name: item.name,
                    path: item.path
                })
                this.sync_tabList(storeTab)
                this.$storage.set('tabList', this.tabList)
            }
            this.sync_currentTab(item.name)
            this.$storage.set('currentTab', item.name)
        }
    }
}
</script>

<style lang="scss">

</style>
