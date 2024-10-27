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
            <li class="nav-item" v-if="!is_login">
              <router-link active-class="nav-link active" class="nav-link" :to="{name: 'auth.login'}">Login</router-link>
            </li>
            <li class="nav-item" v-if="is_login">
              <router-link active-class="nav-link active" class="nav-link" :to="{name: 'dashboard.index'}">Dashboard</router-link>
            </li>
            <li class="nav-item" v-if="is_login">
              <a href="#" @click="logout" class="nav-link">Logout</a>
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

<script>

import Swal from 'sweetalert2'
import router from '@/routes/index.js';

export default {
  data() {
    return {
      is_login: false
    }
  },
  created() {
    console.log({
      "is_login": this.is_login,
      "get_token": this.get_token
    });
    this.cek_login();
  },
  methods: {
    cek_login() {
      this.is_login = this.$store.getters.get_cookie("token") != undefined;
    },
    logout() {
      Swal.fire({
        icon: "question",
        title: "Apakah anda yakin ingin keluar?",
        text: "Anda akan keluar dari aplikasi",
        showConfirmButton: true,
        showCancelButton: true,
      })
      .then(result => {
        if(result.value){
          axios.post('/api/logout')
          .then(res => res.data)
          .then(res => {
            axios.post('/api/delete-cookie')
            .then(res => res.data)
            .then(res => {
              this.set_session(res);
              document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              router.push({name: 'home.index'});
              this.cek_login();
            }).catch(err => this.alert(err));
          }).catch(err => this.alert(err));
        }
      }).catch(err => this.alert(err));
    }
  }
}

</script>