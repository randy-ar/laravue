<style scoped>
  .card-user{
    border-radius: 1.25rem;
  }
</style>
<template>
  <div>
    <h1 class="text-center my-5">Dashboard</h1>
    <div class="card card-user">
      <div class="card-body p-4">
        <h5 class="card-title mb-4">Detail User</h5>
        <table class="table" v-if="user.id !== ''">
          <tr>
            <th>ID</th>
            <td>{{ user.id }}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{{ user.name }}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{{ user.email }}</td>
          </tr>
          <tr>
            <th>Created at</th>
            <td>{{ user.created_at }}</td>
          </tr>
          <tr>
            <th>Updated at</th>
            <td>{{ user.updated_at }}</td>
          </tr>
        </table>
        <div class="text-muted" v-if="user.id == ''">Data user tidak ditemukan</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user: {id: ''},
    }
  },
  created(){
    this.fetchUser();
  },
  methods: {
    fetchUser(){
      axios.get('/api/user')
      .then(res => res.data)
      .then(res => {
        console.log(res);
        this.user = res;
      }).catch(err => {
        this.alert(err);
      });
    }
  }
}
</script>