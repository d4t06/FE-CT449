<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import {Form, Field, ErrorMessage} from 'vee-validate'
import Button from "../components/Button.vue";
import * as contactServices from "../services/contactServices";

const props = defineProps({
   data: Object,
});
const data = reactive({
   name: "",
   address: "",
   phone: "",
   email: "",
   favorite: false,
});
const router = useRouter();

const handleSubmit = async () => {
   await contactServices.createContact(data);
   alert("Tạo mới danh bạ thành công");
   router.push('/');
};

const isRequired = (value) => {
   if (value && value.trim()) {
      return true;
   }
   return 'This field is required';
}
</script>

<template>
   <div class="edit-page mt-10 col-half">
      <h1>Thêm mới liên hệ</h1>
      <Form @submit="handleSubmit" class="form df mt15">
         <div class="input-group df">
            <label for="">Tên</label>
            <Field name="name" v-model="data.name" type="text" :rules="isRequired"/>
            <ErrorMessage name="name"/>
         </div>
         <div class="input-group df">
            <label for="">E-mail</label>
            <input name="email" v-model="data.email" type="text"/>
         </div>
         <div class="input-group df">
            <label for="">Địa chỉ</label>
            <input name="address" v-model="data.address" type="text" />
         </div>
         <div class="input-group df">
            <label for="">Điện thoại</label>
            <Field name="phone" v-model="data.phone" type="text" :rules="isRequired"/>
            <ErrorMessage name="phone"/>
         </div>
         <div class="input-group, favorite-input">
            <input id="favorite" v-model="data.favorite" type="checkbox" />
            <label for="favorite">Liên hệ yêu thích</label>
         </div>
         <div class="cta">
            <Button> Xác nhận </Button>
         </div>
      </Form>
   </div>
</template>

<style scoped lang="scss">
.edit-page {
   margin: 30px auto 0;
}
@import './css/form.scss'
</style>
