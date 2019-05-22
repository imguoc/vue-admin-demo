<template>
    <div class="flex-box flex-column" :style="{'width': (isOpenSide ? 200 : 50) + 'px'}">
        <div class="favicon flex-box flex-column flex-center">
            <div class="img" :style="{'width': (isOpenSide ? 60 : 34) + 'px', 'height': (isOpenSide ? 60 : 34) + 'px'}">
                <img src="@/assets/favicon.png" alt="">
            </div>
            <div v-if="isOpenSide" class="name animated fadeIn">
                ADMIN
            </div>
        </div>
        <ul class="flex-item">
            <li v-for="(item, index) in list" :key="index">
                <el-tooltip :content="item.name" placement="right" :disabled="isOpenSide">
                    <router-link :to="item.path" @click.native="handleClick(item)" class="flex-box flex-item flex-center">
                        <i :class="item.icon" class="icon animated" :style="{'font-size': (isOpenSide ? 18 : 24) + 'px'}"></i>
                        <template v-if="isOpenSide" class="animated fadeIn">
                            <span class="flex-item animated fadeIn">{{ item.name }}</span>
                            <i class="el-icon-arrow-right arrow animated fadeInLeft"></i>
                        </template>
                    </router-link>
                </el-tooltip>
            </li>
        </ul>
        <div class="bottom-btn">
            <el-tooltip content="展开" placement="right" :disabled="isOpenSide">
                <a class="toggle flex-box flex-item flex-center" @click="handleToggle">
                    <i :class="isOpenSide ? 'el-icon-open' : 'el-icon-turn-off'" :style="{'font-size': (isOpenSide ? 18 : 20) + 'px'}"></i>
                    <span v-if="isOpenSide" class="animated fadeIn">收起</span>
                </a>
            </el-tooltip>
            <el-tooltip content="退出" placement="right" :disabled="isOpenSide">
                <a class="exit flex-box flex-item flex-center" @click="handleExit">
                    <i class="el-icon-switch-button" :style="{'font-size': (isOpenSide ? 18 : 20) + 'px'}"></i>
                    <span v-if="isOpenSide" class="animated fadeIn">退出</span>
                </a>
            </el-tooltip>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'SideMenu',

    data () {
        return {
            list: [
                {
                    path: '/',
                    name: 'Home',
                    icon: 'el-icon-s-home'
                },
                {
                    path: '/test',
                    name: 'Test',
                    icon: 'el-icon-s-platform'
                }
            ]
        }
    },

    computed: {
        ...mapState('layout', [
            'isOpenSide'
        ])
    },

    watch: {

    },

    methods: {
        ...mapMutations('layout', [
            'sync_isOpenSide'
        ]),
        ...mapMutations('tab', [
            'sync_currentTab'
        ]),
        handleClick (item) {
            this.sync_currentTab(item.name)
            this.$storage.set('currentTab', item.name)
        },
        handleToggle () {
            localStorage.setItem('isOpenSide', !this.isOpenSide)
            this.sync_isOpenSide(!this.isOpenSide)
        },
        handleExit () {
            this.$confirm('退出登陆？', '提示', {
                type: 'warning',
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '已退出登陆！'
                })
                this.$storage.clear()
                this.$router.push('/login')
            }).catch(() => {})
        }
    }
}
</script>

<style>

</style>
