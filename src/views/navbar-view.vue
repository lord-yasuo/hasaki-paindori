<template>
  <nav
    class="
      navbar navbar-expand-sm navbar-dark
      bg-header
      fixed-top
      d-flex
      align-items-baseline
      container-fluid
    "
  >
    <router-link to="/" class="navbar-brand">Hasaki Paindori</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            to="/catalog"
            class="nav-link"
            >Catalogue</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/agenda"
            class="nav-link"
            >Mon agenda</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/about"
            class="nav-link"
            >A propos</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
  <!--  <router-link
    :to="{ name: 'Anime', params: { id: 1, title: 'Bandori' } }"
    class="btn btn-primary m-2"
    >Anime</router-link
  > -->
</template>

 <style lang="scss">
@import '../scss/navbar';
</style>