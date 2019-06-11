<template>
    <div id="scrollArea" class="table" ref="table">
        <div class="table-content">
            <table class="table-fixed-head table-head" ref="fixedHead">
                <colgroup>
                    <col width="500">
                    <col width="500">
                    <col width="500">
                    <col width="500">
                    <col width="500">
                </colgroup>
                <thead ref="head">
                    <tr>
                        <th
                            align="center"
                            v-for="(item, index) in listConfig"
                            :key="index">
                            {{ item.name }}
                        </th>
                    </tr>
                </thead>
            </table>
            <!-- <table class="table-fixed-left" ref="fixedLeft">
                <colgroup>
                    <col width="500">
                </colgroup>
                <tbody>
                    <tr
                        v-for="(item, index) in listData"
                        :key="index">
                        <template>
                            <td v-for="(v, k) in item"
                                :key="k"
                                align="center">
                                <template v-if="listConfig.find(filed => filed.name === k)['isFixed']">
                                    {{ v }}
                                </template>
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table> -->
            <table class="table-main" ref="tableMain">
                <colgroup>
                    <col width="500">
                    <col width="500">
                    <col width="500">
                    <col width="500">
                    <col width="500">
                </colgroup>
                <tbody id="contentArea">
                    <tr
                        v-for="(item, index) in listData"
                        :key="index">
                        <td
                            v-for="(v, k) in item"
                            :key="k"
                            align="center">
                            <template v-if="!listConfig.find(filed => filed.name === k)['isFixed']">
                                {{ v }}
                            </template>
                            <!-- {{ v }} -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Table',

    props: {
        listData: {
            type: Array
        },
        listConfig: {
            type: Array
        }
    },

    data () {
        return {

        }
    },

    created () {

    },

    mounted () {
        this.$nextTick(() => {
            this.init()
        })
    },

    methods: {
        init () {
            // let clusterize = new this.$clusterize({
            //     scrollId: 'scrollArea',
            //     contentId: 'contentArea'
            // })

            // console.log(clusterize)

            console.dir(this.$refs)

            let table = this.$refs.table
            let fixedHead = this.$refs.fixedHead
            let fixedLeft = this.$refs.fixedLeft
            let tableMain = this.$refs.tableMain

            fixedHead.style.width = tableMain.offsetWidth + 'px'
            tableMain.style.top = fixedHead.offsetHeight + 'px'
            fixedLeft.style.top = fixedHead.offsetHeight + 'px'

            // this.$refs.fixedHead.style.width = this.$refs.table.offsetWidth + 'px'
            // this.$refs.tableMain.style.width = this.$refs.table.offsetWidth + 'px'

            table.addEventListener('scroll', () => {
                fixedHead.style.top = table.scrollTop + 'px'
                console.dir(fixedHead.style.top)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table {
    width: 100%;
    overflow: auto;
    .table-content {
        position: relative;
        table {
            display: block;
            border-spacing: 0;
            th, td {
                word-break: keep-all;
            }
        }
        .table-head {
            th {
                background: #ccc;
            }
        }
        .table-fixed-head {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 9;
            // width: 100%;
        }
        .table-fixed-left {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 8;
            background: #fff;
        }
        .table-main {
            // width: 100%;
            position: relative;
            // top: 30px;
        }
        &:focus {
            outline: none;
        }
    }
}
</style>
