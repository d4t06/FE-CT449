<script setup>
import { defineProps, reactive } from "vue";
import { useRouter } from "vue-router";
import {Form, Field} from 'vee-validate'
import Button from "../components/Button.vue";
import * as contactServices from "../services/contactServices";

const props = defineProps({
   data: Object,
});

const router = useRouter();

const data = reactive({
   name: "",
   address: "",
   phone: "",
   email: "",
   favorite: false,
});

const handleSubmit = async () => {
  contactServices.createContact(data);
  confirm("Tạo mới danh bạ thành công");
  router.go(-1);
};
const validateEmail = (value) => {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }

      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }

      // All is good
      return true;
}

</script>

<template>
   <div class="edit-page mt-10 col-half">
      <h1>Thêm mới liên hệ</h1>
      <Form class="form df">
         <div class="input-group df">
            <label for="">Tên</label>
            <Field name="name" v-model="data.name" type="text" />
         </div>
         <div class="input-group df">
            <label for="">E-mail</label>
            <Field name="email" v-model="data.email" type="text" :rules="validateEmail"/>
         </div>
         <div class="input-group df">
            <label for="">Địa chỉ</label>
            <Field name="address" v-model="data.address" type="text" />
         </div>
         <div class="input-group df">
            <label for="">Điện thoại</label>
            <Field name="phone" v-model="data.phone" type="text" />
         </div>
         <div class="input-group, favorite-input">
            <Field name="favorite" v-model="data.favorite" type="checkbox" />
            <label for="">Liên hệ yêu thích</label>
         </div>
      </Form>
      <div class="cta">
         <Button center :onClick="() => handleSubmit()"> Xác nhận </Button>
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
.cta {
   margin-top: 15px;
}
.favorite-input {
   input {
      margin-right: 10px;
   }
}
</style>
