<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

const bgColor = ref('bg-pink-500')

const changeColor = () => {
  const color = bgColor.value === 'bg-pink-500' ? 'bg-pink-100' : 'bg-pink-500'
  bgColor.value = color
}
</script>

<template>
  <div>
    <HelloWorld msg="f-com example" />
    <div>
      <button class="px-2 py-1 bg-pink-400 rounded-xl" @click="changeColor">transition</button>
      <div class="trans text-white" :class="[bgColor]">transition-timing-function: ease;</div>

    </div>
  </div>
</template>

<style scoped>
.trans {
  /* transition-property: background-color; */
  transition-timing-function: ease;
  transition-duration: 1s;
}
</style>
