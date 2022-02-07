<script setup lang="ts">
import navbar from './views/navbar-view.vue'
</script>

<template>
  <main>
    <navbar></navbar>
    <div class="body">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </div>
  </main>
</template>

<style lang="scss">
@import 'scss/app';
</style>