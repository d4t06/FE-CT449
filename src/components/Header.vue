<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "../store/authStore";
import jwtDecode from "jwt-decode";
import { computed } from "vue";

const authStore = useAuthStore();
const { auth } = storeToRefs(authStore);

const decode = computed(() => {
   return auth.value.token ? jwtDecode(auth.value.token) : "";
});
</script>

<template>
   <div class="wrap">
      <div class="container header df atc jcsb">
         <RouterLink to="/">
            <h1 class="header-title">Ứng dụng quản lí danh bạ</h1>
         </RouterLink>
         <div v-if="!decode" class="nav">
            <RouterLink to="/login">Đăng nhập</RouterLink>
            <RouterLink to="/register">Đăng ký</RouterLink>
         </div>
         <div v-else class="user-cta df atc">
            <h2>{{ decode?.username }}</h2>
            <div class="image-frame">
               <img src="../assets/avatar.jpg" alt="" />
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.wrap {
   background: #333;
   color: #fff;
}
.header {
   height: 50px;
}
.nav {
   a {
      font-size: 1.6rem;
      &:hover {
         text-decoration: underline;
      }
   }
   a + a {
      margin-left: 15px;
   }
}
.user-cta {
   h2 {
      margin-right: 5px;
   }
   .image-frame {
      height: 40px;
      width: 40px;
      img {
         width: 100%;
         border-radius: 50%;
      }
   }
}
</style>
