<script setup>
import { ref, watch } from "vue";
import debounce from "lodash.debounce";
import { useContactStore } from "../store/store";
import * as searchService from "../services/searchService";

const store = useContactStore();
const key = ref("");
const isLoading = ref(false);

const fetchAndStoring = async () => {
   const response = await searchService.search({ q: key.value });
   store.useContactStoring({ contacts: response.data, status: "successful" });
};

const saveSearchChange = debounce(async () => {
   isLoading.value = true;
   setTimeout(() => {
      fetchAndStoring();
      isLoading.value = false;
   }, 1000);
}, 800);

watch(key, () => {
   console.log("key = ", key.value);
   if (key.value) {
      saveSearchChange();
   } else {
      fetchAndStoring();
   }
});

const handleClear = () => {
   key.value = "";
};
</script>

<template>
   <div class="search">
      <input
         class="input"
         type="text"
         placeholder="Hôm nay bạn muốn tìm gì..."
         v-model="key"
      />
      <button
         v-if="key && !isLoading"
         class="clear-btn"
         @click="() => handleClear()"
      >
         <i class="material-icons">cancel</i>
      </button>
      <button v-if="isLoading" class="loading-btn">
         <i class="material-icons">sync</i>
      </button>

      <button class="search-btn">
         <i class="material-icons">search</i>
      </button>
   </div>
</template>

<style scoped lang="scss">
.search {
   height: 35px;
   margin: 15px auto 0;
   position: relative;
   border-radius: 20px;
   border: 1px solid #e1e1e1;
   overflow: hidden;
}
.input {
   height: 100%;
   width: 100%;
   outline: none;
   padding-left: 20px;
   padding-right: 70px;
   font-size: 1.7rem;
   border: none;
}
.search-btn {
   position: absolute;
   right: 0;
   width: 45px;
   height: 100%;
   color: #999;
   font-size: 2rem;
   padding-top: 5px;
   background-color: transparent;
   &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 1px;
      background-color: #aaa;
      top: 5px;
      bottom: 5px;
   }
   &:hover {
      background-color: #e1e1e1;
      color: #333;
   }
}
.input:not(:placeholder-shown) ~ .search-btn {
   color: #333;
}

.clear-btn,
.loading-btn {
   position: absolute;
   right: 60px;
   height: 100%;
   padding-top: 4px;
   background-color: transparent;
   color: #ccc;
   font-size: 1.8rem;
}
.loading-btn {
   animation: spinner 1.5s linear infinite;
}

@keyframes spinner {
   from {
      transform: rotate(0);
   }
   to {
      transform: rotate(-360deg);
   }
}
</style>
