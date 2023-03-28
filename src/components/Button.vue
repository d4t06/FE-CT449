<script setup>
import { defineProps } from 'vue';
import {RouterLink} from 'vue-router'

const props = defineProps({
    onClick: Function,
    center: Boolean,
    to: String
})

</script>

<template>
    <RouterLink v-if="to" :to="to" :class="{center, button: true} ">
    <slot/>
    </RouterLink>
    <button v-else :class="{center, button: true}"
      @click="() => onClick()">
      <slot/>
    </button>
</template>

<style lang="scss">

  .button {
    display: inline-flex;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    font-size: 1.6rem;
    font-weight: 500;
    border: 2px solid #333;
    background-color: transparent;
    transition: .1s linear;
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