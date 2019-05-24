<template>
    <div>
        demo editor
        <input type="text" name="" id="" v-model="msg">
    </div>
</template>

<script>
export default {
    name: 'List-Editor',

    components: {
    },

    created () {
        console.log()
        this.$options.name = '0001'
    },

    data () {
        return {
            msg: ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
