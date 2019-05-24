<template>
    <div class="layout-table flex-box flex-item flex-column">
        <div class="table-top-button">
            <el-button>按钮</el-button>
            <el-button>按钮</el-button>
            <el-button>按钮</el-button>
            <el-button>按钮</el-button>
        </div>
        <div class="table-main flex-item">
            <el-table
                ref="table"
                :stripe="true"
                :border="true"
                size="medium"
                :data="tableList"
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
                        <!-- <router-link :to="$route.path + '/' + scope.row.id">{{ scope.row.id }}</router-link> -->
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

    computed: {
        ...mapState('tab', [
            'tabList'
        ])
    },

    data () {
        return {
            multipleSelection: [],
            tableList: [
                {
                    id: '001',
                    name: 'item1',
                    tel: '13000000001',
                    address: '银河系地球村001街'
                },
                {
                    id: '002',
                    name: 'item2',
                    tel: '13000000002',
                    address: '银河系地球村001街'
                },
                {
                    id: '003',
                    name: 'item3',
                    tel: '13000000003',
                    address: '银河系地球村003街'
                },
                {
                    id: '004',
                    name: 'item4',
                    tel: '13000000004',
                    address: '银河系地球村004街'
                },
                {
                    id: '005',
                    name: 'item5',
                    tel: '13000000005',
                    address: '银河系地球村005街'
                }
            ]
        }
    },

    methods: {
        ...mapMutations('tab', [
            'sync_currentTab',
            'sync_tabList'
        ]),
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        handleRowClick (row, column, event) {
            this.$refs.table.toggleRowSelection(row)
            console.log(arguments)
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
            this.sync_currentTab('list-' + item.id)
            this.$storage.set('currentTab', 'list-' + item.id)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
