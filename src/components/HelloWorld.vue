<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <h1 class="text-danger">{{ msg }}</h1>
</template>
