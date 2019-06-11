<template>
    <div class="layout-table flex-box flex-item flex-column">
        <div class="table-top-button">
            <el-button>按钮</el-button>
            <el-button>按钮</el-button>
            <el-button>按钮</el-button>
            <el-button>按钮</el-button>
        </div>
        <div class="table-main">
            <el-table
                style="width: 100%;"
                ref="table"
                :stripe="true"
                :border="true"
                :data="listData"
                height="100%"
                size="medium"
                @selection-change="handleSelectionChange"
                @row-click="handleRowClick">
                <el-table-column
                    type="index"
                    width="50"
                    align="center"
                    fixed="left">
                </el-table-column>
                <el-table-column
                    type="selection"
                    width="50"
                    align="center"
                    fixed="left">
                </el-table-column>
                <el-table-column
                    prop="id"
                    label="ID"
                    width="120">
                    <template slot-scope="scope">
                        <a href="" @click.prevent.stop="handleClick(scope.row)">{{ scope.row.id }}</a>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名">
                </el-table-column>
                <el-table-column
                    prop="tel"
                    label="电话">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
        </div>
        <div class="table-pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'List',

    props: {
        listData: {
            type: Array
        }
    },

    computed: {
        ...mapState('tab', [
            'tabList'
        ])
    },

    data () {
        return {
            multipleSelection: []
        }
    },

    methods: {
        ...mapMutations('tab', [
            'sync_tabList'
        ]),
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        handleRowClick (row, column, event) {
            this.$refs.table.toggleRowSelection(row)
        },
        handleClick (item) {
            this.$addRouter.add({
                path: '/demo/list/' + item.id,
                key: item.id,
                compName: 'ListEditor',
                props: item
            })
            let storeTab = this.$storage.get('tabList') || []
            let currentTab = this.$storage.get('currentTab')
            let currentItem = storeTab.find(v => v.name === currentTab)
            let currentIndex = storeTab.indexOf(currentItem)
            if (!storeTab.find(v => v.name === ('list-' + item.id))) {
                storeTab.splice(currentIndex + 1, 0, {
                    name: 'list-' + item.id,
                    path: '/demo/list/' + item.id
                })
                this.sync_tabList(storeTab)
                this.$storage.set('tabList', this.tabList)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
