<script type="text/javascript" setup>
import { ref, watch } from "vue";
import debounce from "lodash.debounce";

const contactName = ref("");
const isLoading = ref(false)

const saveSearchChange = debounce(() => {
  console.log("call api");
}, 800);

watch(contactName, saveSearchChange);

</script>

<template>
  <div class="search">
    <input
      class="input"
      type="text"
      placeholder="Hôm nay bạn muốn tìm gì..."
      v-model="contactName"
    />
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
  height: 100%;
  right: 60px;
  background-color: transparent;
  top: 0;
  color: #ccc;
  font-size: 1.8rem;
}
.loading-btn {
  animation: spinner 1s linear infinite;
}

@keyframes spinner {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
