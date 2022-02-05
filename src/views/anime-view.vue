<script setup lang="ts">
import { Router } from '../router'
import { listAnimes } from '../data/listAnimes'

const animeID = Router.currentRoute.value.params.id as string
const anime = listAnimes[animeID]

// If wrong id set in URL, redirect to catalog page
if (!anime) {
  Router.push({ path: '/catalog' })
}

// Add anime name in URL
if (anime) {
  history.replaceState(
    history.state,
    '/anime/' + animeID,
    '/anime/' + animeID + '/' + anime.title
  );
}
</script>

<template>
  <div v-if="anime" class="text-center">
    <img :src="anime.imgCover" />
    <router-link to="/" class="btn btn-secondary">Back Home</router-link>
  </div>
</template>
