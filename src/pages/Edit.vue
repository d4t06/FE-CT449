<script setup>
import Button from "../components/Button.vue";
import { watchEffect, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import * as contactServices from "../services/contactServices";

const data = reactive({
   name: "",
   address: "",
   phone: "",
   email: "",
   favorite: false,
});

const route = useRoute();
const router = useRouter();

watchEffect(async () => {
   try {
      const response = await contactServices.getContact(route.params.id);
      data.name = response[0].name;
      data.phone = response[0].phone;
      data.address = response[0].address;
      data.email = response[0].email;
      data.favorite = response[0].favorite;
   } catch (error) {
      console.log("edit page error", { message: error });
   }
});

const handleEdit = async () => {
   await contactServices.updateContact(route.params.id, data);
   router.go(-1);
};

const handleDelete = async () => {
   await contactServices.deleteContact(route.params.id);
   router.go(-1);
};
</script>

<template>
   <div v-if="data.name" class="edit-page mt-10 col-half">
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
      <div class="mt15">
         <Button center :onClick="() => handleEdit()"> Xác nhận </Button>
         <Button :onClick="() => handleDelete()"> Xóa </Button>
      </div>
   </div>
   <div v-else class="mt15">
      <h1>Đã có lỗi xảy ra...</h1>
      <Button :onClick="() => router.go(-1)">Quay về</Button>
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
</style>
