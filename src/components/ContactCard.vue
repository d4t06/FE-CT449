<script setup>
import { defineProps } from "vue";
import Button from "./Button.vue";

const props = defineProps({
   contact: Object,
});
</script>

<template>
   <div class="title">
      <i class="material-icons">assignment_ind</i>
      <h1>Chi tết liên hệ</h1>
   </div>
   <table class="info-table">
      <tbody>
         <tr>
            <td>Tên:</td>
            <td>{{ contact?.name }}</td>
         </tr>
         <tr>
            <td>Địa chỉ:</td>
            <td>{{ contact?.address }}</td>
         </tr>
         <tr>
            <td>E-mail</td>
            <td>{{ contact?.email }}</td>
         </tr>
         <tr>
            <td>Điện thoại</td>
            <td>{{ contact?.phone }}</td>
         </tr>
         <tr>
            <td>Yêu thích</td>
            <td v-if="contact?.favorite">Yes</td>
            <td v-else>No</td>
         </tr>
      </tbody>
   </table>

   <div class="mt15 tac">
      <Button center :to="`/edit/${contact?._id}`">
         <i class="material-icons">edit</i>
         Hiệu chỉnh
      </Button>
   </div>
</template>

<style scoped lang="scss">
.info-table {
   width: 100%;
   tr:nth-child(odd) {
      background-color: #f2f2f2;
   }
   tbody {
      margin-top: -10px;
   }
   td {
      padding: 10px 7px;
      font-size: 1.5rem;
      font-weight: 500;
      color: #000;
   }
}
</style>
