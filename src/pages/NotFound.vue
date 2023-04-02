<script setup>
import Button from '../components/Button.vue';
import { reactive } from 'vue';
import {login} from '../services/authServices'

const data = reactive({
    username: '',
    password: ''
})


const handleSubmit =() => {
    console.log('handle submit', data)
    login(data)
}

</script>

<template>
   <div class="login-page col-half">
        <form class="form df">
            <div class="input-group df">
                <label for="">Tên  đăng nhâp</label>
                <input v-model="data.username" type="text">
            </div>
            <div class="input-group df">
                <label for="">Mật khẩu</label>
                <input v-model="data.password" type="text">
            </div>
        </form>
        <div class="cta">
            <Button center :onClick="() => handleSubmit()">
             Đăng nhập
            </Button>
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
    margin-top: 10px;
    .input-group {
        flex-direction: column;
        gap: 5px;
        font-size: 1.8rem;
    }
}
.cta {
    text-align: center;
    margin-top: 15px;
}
</style>