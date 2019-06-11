<template>
    <div>
        <Table
            :listData="listData"
            :listConfig="listConfig"></Table>
    </div>
</template>

<script>
import Table from '../common/table'
export default {
    name: 'Test',

    components: {
        Table
    },

    data () {
        return {
            listData: [],
            listConfig: [
                {
                    name: 'id',
                    label: 'ID',
                    isFixed: true
                },
                {
                    name: 'name',
                    label: '姓名',
                    isFixed: false
                },
                {
                    name: 'tel',
                    label: '联系方式',
                    isFixed: false
                },
                {
                    name: 'email',
                    label: '邮箱',
                    isFixed: false
                },
                {
                    name: 'address',
                    label: '地址',
                    isFixed: false
                }
            ]
        }
    },

    mounted () {
        let res = this.$mock.mock({
            'list|100': [
                {
                    'id|+1': 1,
                    'name': function () {
                        return 'item' + this.id
                    },
                    'tel': function () {
                        return '1300000000' + this.id
                    },
                    'email': function () {
                        return 'email' + this.id + '@xyz.com'
                    },
                    'address': function () {
                        return '银河系地球村00' + this.id
                    }
                }
            ]
        })

        this.listData = res.list
    },

    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
