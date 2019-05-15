<template>
    <div class="login">
        <vue-particles
            color="#666"
            :particleOpacity="0.6"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#666"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.6"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
        <div class="login-box animated bounceInDown flex-box flex-column">
            <div class="login-head">
                User 管理系统
            </div>
            <el-form :model="form" :rules="formRules" ref="form" size="medium" @submit.prevent @keyup.enter.native="submit" class="flex-box flex-center flex-column">
                <el-form-item label="" prop="name">
                    <el-input v-model="form.name" suffix-icon="el-icon-user" placeholder="输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input v-model="form.password" type="password" suffix-icon="el-icon-unlock" placeholder="输入密码"></el-input>
                </el-form-item>
                <div class="login-tool">
                    <el-checkbox label="记住密码" v-model="form.remember"></el-checkbox>
                    <el-button type="text">忘记密码？</el-button>
                </div>
            </el-form>
            <div class="login-foot">
                <el-button type="primary" size="medium" @click="submit">登陆</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',

    data () {
        return {
            form: {
                name: '',
                password: '',
                remember: false
            },
            formRules: {
                name: [
                    {
                        validator: (rule, value, callback) => {
                            if (!value.trim()) {
                                callback(new Error('输入用户名'))
                            } else if (value.trim() !== 'admin') {
                                callback(new Error('用户不存在'))
                            } else {
                                callback()
                            }
                        },
                        // required: true,
                        // message: '输入用户名',
                        trigger: 'blur'}
                ],
                password: [
                    {
                        validator: (rule, value, callback) => {
                            if (!value.trim()) {
                                callback(new Error('输入密码'))
                            } else if (value.trim() !== '123456') {
                                callback(new Error('密码错误'))
                            } else {
                                callback()
                            }
                        },
                        // required: true,
                        // message: '输入密码',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },

    computed: {
    },

    methods: {
        submit () {
            this.$refs['form'].validate(valid => {
                if (valid) {
                    this.$message({
                        message: '登陆成功！',
                        type: 'success'
                    })
                    localStorage.setItem('TOKEN', '123456789')
                    this.$router.push('/')
                } else {
                    return false
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
#particles-js {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #444;
    background: url('../../assets/login-bg.jpg') no-repeat center/cover;
    filter: blur(3px) brightness(80%);
}
.login {
    // 免费图片网站：https://picjumbo.com/
    // background: url('../../assets/login-bg.jpg') no-repeat center/cover;
    .login-box {
        width: 460px;
        height: 340px;
        background: #fff;
        // margin: 80px auto;
        border-radius: 10px;
        overflow: hidden;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        .login-head {
            font-size: 26px;
            color: #fff;
            text-align: center;
            height: 60px;
            line-height: 60px;
            background: #2196f3;
            border-bottom: 2px solid #f2f1f1;
        }
        .el-form {
            padding: 25px 0;
            .el-form-item {
                margin: 12px auto;
                .el-input__icon {
                    font-size: 16px;
                }
            }
            .login-tool {

            }
        }
        .login-foot {
            text-align: center;
            padding: 15px;
            border-top: 2px solid #f2f1f1;
        }
    }
}
</style>
