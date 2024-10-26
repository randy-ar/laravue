<style scoped>
.content{
  min-height: calc(100vh - 124px);
  margin-top: 80px;
}
</style>
<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="/">Laravue</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link active-class="nav-link active" class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link active-class="nav-link active" class="nav-link" :to="{name: 'blog.index'}">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link active-class="nav-link active" class="nav-link" :to="{name: 'contact.index'}">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div class="content container">
      <slot></slot>
    </div>

    <footer class="container my-3">
      <div class="text-center">
        Laravue
      </div>
    </footer>
  </div>
</template>