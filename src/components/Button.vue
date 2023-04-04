<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
   onClick: Function,
   center: Boolean,
   disable: Boolean,
   to: String
});
</script>

<template>
   <RouterLink v-if="to" :to="to"
   :class="['button', { center, disable}]">
      <slot />
   </RouterLink>
   <button
      v-else
      :class="['button', { center, disable}]"
      @click="onClick ? onClick() : ''"
   >
      <slot />
   </button>
</template>

<style scoped lang="scss">
.button {
   display: inline-flex;
   align-items: center;
   padding: 10px;
   border-radius: 4px;
   font-size: 1.6rem;
   font-weight: 500;
   border: 2px solid #333;
   background-color: transparent;
   transition: 0.1s linear;
   &:hover {
      background-color: #666;
      color: #fff;
      border-color: transparent;
   }
}
.button + .button {
   margin-left: 15px;
}
</style>
