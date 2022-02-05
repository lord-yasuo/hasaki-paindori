<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function alo(): void {
  console.log('count', count.value)
}
</script>

<template>
  <div class="text-center">
    <img src="../assets/lisa-weird-face.jpg" class="lisa-img" />
    <h1 class="text-success">Hasak-Paindori</h1>
    <router-link to="/catalog" class="btn btn-primary m-2">Catalog</router-link>
    <router-link :to="{ name: 'Anime', params: { id: 1, title: 'Bandori'}}" class="btn btn-primary m-2">Anime</router-link>
    <router-link to="/diary" class="btn btn-primary m-2">My diary</router-link>
    <router-link to="/about" class="btn btn-primary m-2">About</router-link>
   <div>
      <button class="btn btn-danger ms-3" @click="count++; alo()">Count: {{ count }}</button>
   </div>
  </div>
</template>

<style lang="scss">
  @import '../scss/home';
</style>
