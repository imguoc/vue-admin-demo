<template>
<div class="flex-box">
    <div class="logo flex-box flex-center">
        <span>Hello World</span>
    </div>
    <el-menu class="flex-item" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <template v-for="item in list">
            <el-menu-item v-if="!(item['child'] && item['child'].length)" :index="item.index" :key="item.index">
                {{ item.name }}
            </el-menu-item>
            <el-submenu v-else :index="item.index" :key="item.index"  popper-class="header-menu-popup">
                <template slot="title">{{ item.name }}</template>
                <el-menu-item v-for="subitem in item.child" :index="subitem.index" :key="subitem.index">{{ subitem.name }}</el-menu-item>
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
export default {
    name: 'Header',

    data () {
        return {
            activeIndex: '0',
            list: [
                {
                    name: 'item1',
                    index: '1',
                    child: [
                        {
                            name: 'item1-1',
                            index: '1-1'
                        },
                        {
                            name: 'item1-2',
                            index: '1-2'
                        },
                        {
                            name: 'item1-3',
                            index: '1-3'
                        },
                        {
                            name: 'item1-4',
                            index: '1-4'
                        },
                        {
                            name: 'item1-5',
                            index: '1-5'
                        }
                    ]
                },
                {
                    name: 'item2',
                    index: '2',
                    child: [
                        {
                            name: 'item2-1',
                            index: '2-1'
                        },
                        {
                            name: 'item2-2',
                            index: '2-2'
                        }
                    ]
                },
                {
                    name: 'item3',
                    index: '3',
                    child: [
                        {
                            name: 'item3-1',
                            index: '3-1'
                        },
                        {
                            name: 'item3-2',
                            index: '3-2'
                        },
                        {
                            name: 'item3-3',
                            index: '3-3'
                        }
                    ]
                },
                {
                    name: 'item4',
                    index: '4',
                    child: [
                        {
                            name: 'item4-1',
                            index: '4-1'
                        },
                        {
                            name: 'item4-2',
                            index: '4-2'
                        },
                        {
                            name: 'item4-3',
                            index: '4-3'
                        },
                        {
                            name: 'item4-4',
                            index: '4-4'
                        },
                        {
                            name: 'item4-5',
                            index: '4-5'
                        }
                    ]
                },
                {
                    name: 'item5',
                    index: '5',
                    child: [
                        {
                            name: 'item5-1',
                            index: '5-1'
                        },
                        {
                            name: 'item5-2',
                            index: '5-2'
                        },
                        {
                            name: 'item5-3',
                            index: '5-3'
                        },
                        {
                            name: 'item5-4',
                            index: '5-4'
                        },
                        {
                            name: 'item5-5',
                            index: '5-5'
                        }
                    ]
                }
            ]
        }
    },

    methods: {
        handleSelect () {

        }
    }
}
</script>

<style lang="scss">

</style>
