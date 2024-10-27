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
        <h4 class="card-title mb-5">Register</h4>
        <div class="mb-3">
          <label for="name" class="mb-2">Username</label>
          <input v-model="request.name" type="text" name="name" id="name" class="form-control" placeholder="username">
          <small class="text-danger" v-if="errors.name != null">
            {{ errors.name[0] }}
          </small>
        </div>
        <div class="mb-3">
          <label for="email" class="mb-2">Email</label>
          <input v-model="request.email" type="email" name="email" id="email" class="form-control" placeholder="example@mail.com">
          <small class="text-danger" v-if="errors.email != null">
            {{ errors.email[0] }}
          </small>
        </div>
        <div class="mb-3">
          <label for="password" class="mb-2">Password</label>
          <input v-model="request.password" :type="show_password ? 'text' : 'password'" id="password" name="password" class="form-control" placeholder="password">
        </div>
        <div class="mb-3">
          <label for="password" class="mb-2">Password Confirmation</label>
          <input v-model="request.password_confirmation" :type="show_password ? 'text' : 'password'" id="password_confirmation" name="password_confirmation" class="form-control" placeholder="confirm password">
        </div>
        <div class="mb-3">
          <input type="checkbox" class="me-2" v-model="show_password" name="show-password" @click="show_password = !show_password" id="show-password">
          <label for="show-password">Show Password</label>
        </div>
        <small class="text-danger" v-if="errors.password != null">
          {{ errors.password[0] }}
        </small>
        <div class="mb-3 mt-4">
          <button class="btn btn-dark w-100" @click="register">Register</button>
        </div>
        <div class="mb-3">
          <small>Sudah punya akun? <router-link :to="{name: 'auth.login'}">Login</router-link></small>
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
    register(){
      axios.get('/sanctum/csrf-cookie').then(response => {
        // Login...
        axios.post('/api/register', this.request)
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