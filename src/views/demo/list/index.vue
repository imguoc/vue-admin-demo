<template>
    <div class="layout-box flex-item">
        <list
            :listData="listData"></list>
    </div>
</template>

<script>
import List from '../../common/list'

export default {
    name: 'List-Demo',

    components: {
        List
    },

    data () {
        return {
            listData: []
        }
    },

    created () {
        this.getListData()
    },

    methods: {
        getListData () {
            let res = this.$mock.mock({
                'list|20': [
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
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout-box {
    /* margin: 0 10px !important; */
}
</style>
