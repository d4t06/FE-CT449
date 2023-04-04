<script setup>
import { reactive } from 'vue';
import Button from '../components/Button.vue';
import * as authServices from '../services/authServices'

const data = reactive({
    username: '',
    password: '',
    confirmPassword: ''
})


const handleSubmit = async() => {
    console.log('submit')
    // if (!data.name || !data.password) return;
    const response = await authServices.register({username: data.username, password: data.password})
}

</script>

<template>
   <div class="login-page col-half">
    <h1 class="title">Đăng ký</h1>
        <form class="form df mt15">
            <div class="input-group df">
                <label for="">Tên đăng nhâp</label>
                <input v-model="data.username" type="text">
            </div>
            <div class="input-group df">
                <label for="">Mật khẩu</label>
                <input v-model="data.password" type="password">
            </div>
            <div class="input-group df">
                <label for="">Nhập lại mật khẩu</label>
                <input v-model="data.confirmPassword" type="password">
            </div>
        </form>

        <div class="mt15 form-cta">
            <Button center :onClick="handleSubmit">
             Đăng ký
            </Button>
            <p class="switch">
                Đã có tài khoản ?,
                <RouterLink to="/login">Đăng nhập ngay</RouterLink>
            </p>
        </div>
   </div>
</template>

<style scoped lang="scss">
.login-page {
    margin: 30px auto 0;
}
.form {
    flex-direction: column;
    gap: 15px;
    .input-group {
        flex-direction: column;
        gap: 5px;
        font-size: 1.8rem;
    }
}
.switch {
    margin-top: 10px;
    font-size: 1.4rem;
    a {
        color: #cd1818;
        &:hover {
            text-decoration: underline;
        }
    }
}

.cta {
    text-align: center;
    margin-top: 15px;
}
</style>