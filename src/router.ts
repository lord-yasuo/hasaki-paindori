import { createRouter, createWebHistory } from 'vue-router';

//Routes
import Home from './views/home-view.vue';
import About from './views/about-view.vue';
import Catalog from './views/catalog-view.vue';
import Anime from './views/anime-view.vue';
import Diary from './views/diary-view.vue';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home,
  },
  {
    path: '/catalog',
    name: 'Catalogue',
    component: Catalog,
  },
  {
    path: '/anime/:id',
    name: 'Anime',
    component: Anime
  },
  {
    path: '/anime/:id/:name',
    component: Anime
  },
  {
    path: '/diary',
    name: 'Mon agenda',
    component: Diary,
  },
  {
    path: '/about',
    name: 'About' ,
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

Router.beforeEach((to, from, next) => {
  let pageTitle = to.name?.toString() + ' - Hasaki Pandori';
  if (to.params.title) {
    pageTitle = to.params.title + ' - Hasaki Pandori';
  }

  document.title = pageTitle;
  next();
});
