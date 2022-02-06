<script setup lang="ts">
import navbar from './views/navbar-view.vue';
</script>

<template>
  <main>
    <navbar></navbar>
    <div class="body">
      <router-view />
    </div>
  </main>
</template>

<style lang="scss">
@import 'scss/app';
</style>