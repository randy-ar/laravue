<style scoped>
.card-login{
  min-width: 500px;
  border-radius: 1.25rem;
}

</style>
<template>
  <div>
    <div class="card-login card">
      <div class="card-body p-4">
        <h4 class="card-title mb-5">Login</h4>
        <div class="mb-3">
          <label for="email" class="mb-2">Email</label>
          <input v-model="request.email" type="email" name="email" id="email" class="form-control" placeholder="example@mail.com">
          <small class="text-danger" v-if="errors.email != null">
            {{ errors.email[0] }}
          </small>
        </div>
        <label for="password" class="mb-2">Password</label>
        <div class="input-group">
          <input v-model="request.password" :type="show_password ? 'text' : 'password'" id="password" name="password" class="form-control" placeholder="password">
          <div class="input-group-append">
            <span class="input-group-text h-100">
              <input type="checkbox" name="show-password" @click="show_password = !show_password" id="show-password">
            </span>
          </div>
        </div>
        <small class="text-danger" v-if="errors.password != null">
          {{ errors.password[0] }}
        </small>
        <div class="mb-3 mt-4">
          <button class="btn btn-dark w-100" @click="login">Login</button>
        </div>
        <div class="mb-3">
          <small>Tidak punya akun? <router-link :to="{name: 'auth.register'}">Register</router-link></small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../../routes/index.js';

export default {
  data(){
    return {
      request: {
        email: '',
        password: ''
      },
      show_password: false
    }
  },
  methods: {
    login(){
      axios.get('/sanctum/csrf-cookie').then(response => {
        // Login...
        axios.post('/api/login', this.request)
        .then(res => res.data)
        .then(res => {
          if(res.errors != null){
            this.errors = res.errors;
          }else{
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.token}`;
            this.$store.commit('set_cookie', [
              {key: 'token', value: res.token},
              {key: 'user_id', value: res.user_id}
            ]);
            router.push({name: 'dashboard.index'});
          }
        }).catch(err => {
          this.alert(err);
        });
      });
    }
  }
}
</script>