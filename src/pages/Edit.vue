<script setup>
import Button from "../components/Button.vue";
import { watchEffect, reactive, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getContact } from "../services/contactServices";

const data = reactive({
  name: "",
  address: "",
  phone: "",
  email: "",
  favorite: false,
});

const route = useRoute();


watchEffect(async() => {

const response = await getContact(route.params.id);
  data.name = response[0].name;
  data.phone = response[0].phone;
  data.address = response[0].address;
  data.email = response[0].email;
  data.favorite = response[0].favorite;
});
</script>

<template>
  <div class="edit-page mt-10 col-half">
    <h1>Hiệu chỉnh liên hệ</h1>
    <div class="form df">
      <div class="input-group df">
        <label for="">Tên</label>
        <input v-model="data.name" type="text" />
      </div>
      <div class="input-group df">
        <label for="">E-mail</label>
        <input v-model="data.email" type="text" />
      </div>
      <div class="input-group df">
        <label for="">Địa chỉ</label>
        <input v-model="data.address" type="text" />
      </div>
      <div class="input-group df">
        <label for="">Điện thoại</label>
        <input v-model="data.phone" type="text" />
      </div>
      <div class="input-group, favorite-input">
        <input v-model="data.favorite" type="checkbox" />
        <label for="">Liên hệ yêu thích</label>
      </div>
    </div>
    <div class="cta">
      <Button center> Xác nhận </Button>
      <Button> Xóa </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.edit-page {
  margin: 30px auto 0;
}
.form {
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
  .input-group {
    flex-direction: column;
    gap: 5px;
  }
}
.favorite-input {
    input {
        margin-right: 10px;
    }
}
.cta {
  margin-top: 15px;
}
</style>
