import { createRouter, createWebHistory } from 'vue-router';

//Routes
import Home from './views/home.vue';
import About from './views/about.vue';
import Catalog from './views/catalog.vue';
import Anime from './views/anime.vue';
import Diary from './views/diary.vue';

const routes = [
  {
    path: '/',
    meta: { title: 'Home' },
    component: Home,
  },
  {
    path: '/catalog',
    meta: { title: 'Catalog' },
    component: Catalog,
  },
  {
    path: '/anime/:id',
    meta: { title: 'Anime' },
    component: Anime,
  },
  {
    path: '/diary',
    meta: { title: 'My diary' },
    component: Diary,
  },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About
  },
  {
    path: '/:page',
    redirect: '/'
  },
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});
