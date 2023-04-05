<script setup>
import { watchEffect, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as contactServices from "../services/contactServices";
import Button from "../components/Button.vue";

const data = reactive({
   name: "",
   address: "",
   phone: "",
   email: "",
   favorite: false,
});
const route = useRoute();
const router = useRouter();
const isLoading = ref(false);
const isHasData = ref(false);

watchEffect(async () => {
   try {
      isLoading.value = true;
      const response = await contactServices.getContact(route.params.id);

      if (response.data) {
         data.name = response.data[0].name;
         data.phone = response.data[0].phone;
         data.address = response.data[0].address;
         data.email = response.data[0].email;
         data.favorite = response.data[0].favorite;
         isHasData.value = true;
      }
   } catch (error) {
      console.log("edit page error", { message: error });
   } finally {
      isLoading.value = false;
   }
});

const handleEdit = async () => {
   if (!data.name.trim() || !data.phone.trim()) return;
   await contactServices.updateContact(route.params.id, data);
   alert("Đã cập nhận liện hệ");
   router.push('/');
};

const handleDelete = async (e) => {
   if (confirm("Bạn muốn xóa liên hệ nay ?")) {
      await contactServices.deleteContact(route.params.id);
      router.go(-1);
   }
};
const isRequired = (value) => {
   if (value && value.trim()) {
      return true;
   }
   return "This field is required";
};
</script>

<template>
   <div class="edit-page mt-10 col-half">
      <h1>Hiệu chỉnh liên hệ</h1>
      <Form class="form df mt15">
         <div class="input-group df">
            <label for="">Tên</label>
            <Field
               name="name"
               v-model="data.name"
               type="text"
               :rules="isRequired"
            />
            <ErrorMessage name="name"></ErrorMessage>
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
            <Field
               name="phone"
               v-model="data.phone"
               type="text"
               :rules="isRequired"
            />
            <ErrorMessage name="phone"></ErrorMessage>
         </div>
         <div class="input-group, favorite-input">
            <input id="favorite" v-model="data.favorite" type="checkbox" />
            <label for="favorite">Liên hệ yêu thích</label>
         </div>
         <div class="mt15">
            <Button center :onClick="handleEdit"> Xác nhận </Button>
            <Button :onClick="handleDelete"> Xóa </Button>
         </div>
      </Form>
   </div>
   <div v-if="!isHasData && !isLoading" class="mt15">
      <h1>Đã có lỗi xảy ra...</h1>
      <br />
      <Button :onClick="() => router.go(-1)">Quay về</Button>
   </div>
</template>

<style scoped lang="scss">
.edit-page {
   margin: 30px auto 0;
}

@import './css/form.scss'
</style>
