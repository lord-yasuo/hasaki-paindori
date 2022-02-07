<script setup lang="ts">
import { ref } from 'vue'

let count = ref(0)

function alo(): void {
  count.value++
  console.log('count', count.value)
}
</script>

<template>
  <div class="text-center">
    <h1 class="text-success">Hasaki Paindori</h1>
    <div>
      <button class="btn btn-danger m-2" @click="alo()">
        Count: {{ count }}
      </button>
    </div>
    <div>
      <router-link
        :to="{
          name: 'Anime',
          params: { id: 1, title: 'BanG Dream! Garupa☆Pico' },
        }"
        class="btn btn-primary m-2"
        >BanG Dream! Garupa☆Pico</router-link
      >
    </div>

    <h1>null à chier vuejs : abandon du framework</h1>
  </div>
</template>

<style lang="scss">
@import '../scss/home';
</style>
